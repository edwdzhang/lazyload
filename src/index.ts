import Events from './events'
import Observer from './observer'
import { query, supportIntersectionOb } from './util'

function listen(el: string | Element[]) {
  const els = query(el) as Array<HTMLImageElement | HTMLVideoElement>
  let watch: Observer | Events

  if (!els.length) {
    return
  }

  // priority using IntersectionObserver interface,
  // otherwise fallback to use event
  if (supportIntersectionOb) {
    watch = new Observer(els)
  } else {
    watch = new Events(els)
  }

  return function remove() {
    watch.clean()
  }
}

export default {
  listen,
}
