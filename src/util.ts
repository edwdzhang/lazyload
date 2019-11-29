export function debounce (fn: () => any, wait = 50, immediate = false) {
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

export function addEvent (el, name, handler) {
  el.addEventListener(name, handler, false)
}

export function removeEvent (el, name, handler) {
  el.removeEventListener(name, handler)
}

export function query (el) {
  if (typeof el === 'string') {
    return document.querySelectorAll(el)
  } else {
    return el
  }
}
