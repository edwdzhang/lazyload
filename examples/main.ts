import ll from '../dist/index.common'
import './app.scss'

const query = (selector: string) => {
  return document.querySelectorAll(selector)
}
const btnInit = query('.btn-init')[0]
const btnClean = query('.btn-clean')[0]
const btnShow = query('.btn-show')[0]

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
    const els = Array.from(query('.lazy-hide'))
    els.forEach(el => {
      el.classList.remove('lazy-hide')
    })
  },
  false
)
