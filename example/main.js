const ll = window.Lazyload

const $ = (selector) => {
  return document.querySelectorAll(selector)
}
const $init = $('.btn-init')[0]
const $clean = $('.btn-clean')[0]
const $show = $('.btn-show')[0]

let unlisten

// initialize listen
$init.addEventListener(
  'click',
  () => {
    if (!unlisten) {
      unlisten = ll.listen('img.lazy')
    }
  },
  false
)

// clean listen
$clean.addEventListener('click', () => unlisten && unlisten(), false)

// show hidden images
$show.addEventListener(
  'click',
  () => {
    Array.from($('.lazy-hide')).forEach((el) =>
      el.classList.remove('lazy-hide')
    )
  },
  false
)
