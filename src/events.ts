import { add, remove, debounce } from './util'

const eventNames = ['scroll', 'resize', 'orientationchange']

export default class Events {
  els: Array<HTMLImageElement | HTMLVideoElement>
  handleLoad: EventListener

  constructor(els: Array<HTMLImageElement | HTMLVideoElement>) {
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
      const clientWidth =
        window.innerWidth || document.documentElement.clientWidth
      const clientHeight =
        window.innerHeight || document.documentElement.clientHeight
      const isInViewport =
        rect.top <= clientHeight && rect.left <= clientWidth ? true : false
      const isVisible = getComputedStyle(el)['display'] !== 'none'

      if (isInViewport && isVisible) {
        el.src = el.dataset.url
      }
    })

    // only hold elements which are not loaded
    this.els = els.filter(el => el.getAttribute('src') !== el.dataset.url)
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
