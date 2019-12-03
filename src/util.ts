export function isNative (Ctor: any): boolean {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

export function debounce (fn: () => any, wait = 50, immediate = false): Function {
  let timer = null

  return function (...args: any[]) {
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

export function addEvent (
  el: Element | HTMLDocument, 
  name: string, 
  handler: EventListener
) {
  el.addEventListener(name, handler, false)
}

export function removeEvent (
  el: Element | HTMLDocument, 
  name: string, 
  handler: EventListener
) {
  el.removeEventListener(name, handler)
}

export function query (
  el: string | NodeListOf<HTMLImageElement | HTMLVideoElement>
): NodeListOf<HTMLImageElement | HTMLVideoElement> {
  if (typeof el === 'string') {
    return document.querySelectorAll(el)
  } else {
    return el
  }
}
