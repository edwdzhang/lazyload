import { add, remove, debounce } from './util'

const eventNames = ['scroll', 'resize', 'orientationchange']

export default class Events {
  els: Array<HTMLImageElement | HTMLVideoElement>
  handleLoad: EventListener

  constructor(els: NodeListOf<HTMLImageElement | HTMLVideoElement>) {
    this.els = Array.from(els)
    this.handleLoad = debounce(this.load).bind(this)

    this.addEvents()
    // immediately excute once
    this.load()
  }

  load() {
    const els = this.els
    if (!els.length) {
      this.clean()
    }

    els.forEach(el => {
      const rect = el.getBoundingClientRect()
      const height = window.innerHeight || document.documentElement.clientHeight
      const isInViewport = rect.top <= height && rect.bottom >= 0 ? true : false
      const isVisible = getComputedStyle(el)['display'] !== 'none'

      if (isInViewport && isVisible) {
        el.src = el.dataset.src
      }
    })

    // only hold elements which are not loaded
    this.els = els.filter(el => el.getAttribute('src') !== el.dataset.src)
  }

  addEvents() {
    eventNames.forEach(name => {
      add(document, name, this.handleLoad)
    })
  }

  clean() {
    eventNames.forEach(name => {
      remove(document, name, this.handleLoad)
    })
  }
}
