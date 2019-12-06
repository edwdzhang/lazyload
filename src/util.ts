export const supportIntersectionOb =
  'IntersectionObserver' in window && isNative(IntersectionObserver)

export function isNative(Ctor: any): boolean {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

export function query(el: string | NodeListOf<Element>) {
  let els = []

  if (typeof el === 'string') {
    els = Array.from(document.querySelectorAll(el))
  } else {
    els = Array.from(el)
  }

  // filter out img and video elements
  return els.filter(el => {
    const tag = el.tagName.toLowerCase()
    return tag === 'img' || tag === 'video'
  })
}

export function add(
  el: Element | HTMLDocument,
  name: string,
  handler: EventListener
) {
  el.addEventListener(name, handler, false)
}

export function remove(
  el: Element | HTMLDocument,
  name: string,
  handler: EventListener
) {
  el.removeEventListener(name, handler)
}

export function debounce(
  fn: () => any,
  wait = 50,
  immediate = false
): Function {
  let timer = null

  return function(...args: any[]) {
    const context = this

    if (timer) clearTimeout(timer)

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      })
      if (callNow) fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, wait)
    }
  }
}
