import ll from '../src/index'
import './app.scss'

const $ = (selector: string) => {
  return document.querySelectorAll(selector)
}
const btnInit = $('.btn-init')[0]
const btnClean = $('.btn-clean')[0]
const btnShow = $('.btn-show')[0]

let unwatch = null

// initialize watch
btnInit.addEventListener(
  'click',
  () => {
    unwatch = ll.listen('img.lazy')
  },
  false
)

// clean watch
btnClean.addEventListener(
  'click',
  () => {
    unwatch()
  },
  false
)

// show hidden image
btnShow.addEventListener(
  'click',
  () => {
    const els = Array.from($('.lazy-hide'))
    els.forEach(el => {
      el.classList.remove('lazy-hide')
    })
  },
  false
)
