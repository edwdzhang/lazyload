import { addEvent, removeEvent, debounce } from './util'

export default class Events {
  els: Array<HTMLImageElement | HTMLVideoElement>
  handleLoad: EventListener

  constructor (
    els: NodeListOf<HTMLImageElement | HTMLVideoElement>
  ) {
    this.els = Array.from(els)
    this.handleLoad = debounce(this.load).bind(this)

    this.addEvents()
    this.load()
  }

  load () {
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
  
    this.els = els.filter(el => el.getAttribute('src') !== el.dataset.src)
  }

  addEvents () {
    addEvent(document, 'scroll', this.handleLoad)
    addEvent(document, 'resize', this.handleLoad)
    addEvent(document, 'orientationchange', this.handleLoad)
  }

  clean () {
    removeEvent(document, 'scroll', this.handleLoad)
    removeEvent(document, 'resize', this.handleLoad)
    removeEvent(document, 'orientationchange', this.handleLoad)
  }
}
