// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

class Observer {
  els: Array<HTMLImageElement | HTMLVideoElement>
  observer: IntersectionObserver | any

  constructor(els: Array<HTMLImageElement | HTMLVideoElement>) {
    this.els = Array.from(els)
    this.init()
  }

  init() {
    const ob = (this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isInViewport = entry.isIntersecting

        if (isInViewport) {
          // cast type
          const target = <HTMLImageElement | HTMLVideoElement>entry.target
          const url = target.dataset.url

          if (url) {
            target.src = url
            ob.unobserve(target)
          }
        }
      })
    }))

    this.els.forEach((el) => {
      ob.observe(el)
    })
  }

  clean() {
    this.observer.disconnect()
  }
}

export default Observer
