import Events from './events'
import Observer from './observer'
import { addEvent, query } from './util'

export default class LazyLoad {
  $options: Object
  $els: Element[]
  __ob__: Observer | Events

  static options = {
    selector: ''
  }

  constructor (options = {}) {
    this.$options = Object.assign({}, LazyLoad.options, options)
    this.$els = null

    this._domReady()
  }

  _domReady () {
    const opts = this.$options

    addEvent(document, 'DOMContentLoaded', () => {
      const els = this.$els = query(opts.selector)
      if (!els.length) return
      if (IntersectionObserver) {
        this.__ob__ = new Observer(els)
      } else {
        this.__ob__ = new Events(els)
      }
    })
  }

  clean () {
    this.__ob__.clean()
  }
}
