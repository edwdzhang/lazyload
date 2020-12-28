import { add, remove, debounce } from './util'

const eventNames = ['scroll', 'resize', 'orientationchange']

class Events {
  els: Array<HTMLImageElement | HTMLVideoElement>
  handleLoad: EventListener

  constructor(els: Array<HTMLImageElement | HTMLVideoElement>) {
    this.els = Array.from(els)
    this.handleLoad = debounce(this.load).bind(this)

    this.initEvent()
    // immediately excute once
    this.load()
  }

  load() {
    const els = this.els
    if (!els.length) {
      return this.clean()
    }

    els.forEach((el) => {
      const clientWidth = window.innerWidth
      const clientHeight = window.innerHeight
      const rect = el.getBoundingClientRect()
      const isInViewport = rect.top <= clientHeight && rect.left <= clientWidth
      const isVisible = getComputedStyle(el)['display'] !== 'none'
      const url = el.dataset.url

      if (isInViewport && isVisible && url) {
        el.src = url
      }
    })

    // only hold elements which are not loaded
    this.els = els.filter((el) => el.getAttribute('src') !== el.dataset.url)
  }

  initEvent() {
    eventNames.forEach((name) => add(document, name, this.handleLoad))
  }

  clean() {
    eventNames.forEach((name) => remove(document, name, this.handleLoad))
  }
}

export default Events
