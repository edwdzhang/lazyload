export const supportIntersectionOb =
  'IntersectionObserver' in window && isNative(IntersectionObserver)

export function isNative(Ctor: any): boolean {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

export function query(el: string | Element[]): Element[] {
  let els: Element[] = []

  els =
    typeof el === 'string'
      ? Array.from(document.querySelectorAll(el))
      : Array.from(el)

  // filter out img and video element
  return els.filter((el) => /(img|video)/gi.test(el.tagName))
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
  el.removeEventListener(name, handler, false)
}

export function debounce(fn: Function, wait = 50, immediate = false): Function {
  let timer: any

  return function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      })
      if (callNow) fn.apply(this, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }
}
