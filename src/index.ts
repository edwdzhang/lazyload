import Events from './events'
import Observer from './observer'
import { query, supportIntersectionOb } from './util'

const options = {}

export default {
  listen(el: string | NodeListOf<HTMLImageElement | HTMLVideoElement>) {
    const els = query(el)
    let watch: Observer | Events

    if (!els.length) return

    // priority using IntersectionObserver interface,
    // otherwise fallback to use event
    if (supportIntersectionOb) {
      watch = new Observer(els)
    } else {
      watch = new Events(els)
    }

    return function unwatch() {
      watch.clean()
    }
  },

  config(opts: Object) {
    if (!opts) return options

    Object.keys(opts).forEach(key => {
      options[key] = opts[key]
    })

    return this
  }
}
