import Events from './events'
import Observer from './observer'
import { query, isNative } from './util'

export default {
  listen (
    el: string | NodeListOf<HTMLImageElement | HTMLVideoElement>
  ) {
    const els = query(el)
    let watch: Observer | Events
  
    if (!els.length) return

    // priority using IntersectionObserver interface, 
    // otherwise fallback to use event
    if ('IntersectionObserver' in window && isNative(IntersectionObserver)) {
      watch = new Observer(els)
    } else {
      watch = new Events(els)
    }

    return function unwatch () {
      watch.clean()
    }
  }
}
