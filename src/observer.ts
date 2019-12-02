// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

export default class Observer {
  els: Array<HTMLImageElement | HTMLVideoElement>
  observer: IntersectionObserver

  constructor (
    els: NodeListOf<HTMLImageElement | HTMLVideoElement>
  ) {
    this.els = Array.from(els)

    this.init()
  }

  init () {
    const ob = this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isInViewport = entry.isIntersecting
        
        if (isInViewport) {
          const target = <HTMLImageElement | HTMLVideoElement>entry.target
          target.src = target.dataset.src
          ob.unobserve(target)
        }
      })
    })

    this.els.forEach(el => {
      ob.observe(el)
    })
  }

  clean () {
    this.observer.disconnect()
  }
}
