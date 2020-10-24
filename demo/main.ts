import ll from '../src/index'
import './app.scss'

const $ = (selector: string) => {
  return document.querySelectorAll(selector)
}
const $init = $('.btn-init')[0]
const $clean = $('.btn-clean')[0]
const $show = $('.btn-show')[0]

let unlisten: any

// initialize listen
$init.addEventListener(
  'click',
  () => {
    unlisten = ll.listen('img.lazy')
  },
  false
)

// clean watch
$clean.addEventListener(
  'click',
  () => {
    unlisten()
  },
  false
)

// show hidden image
$show.addEventListener(
  'click',
  () => {
    const els = Array.from($('.lazy-hide'))
    els.forEach(el => {
      el.classList.remove('lazy-hide')
    })
  },
  false
)
