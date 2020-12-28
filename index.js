'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/lazyload.cjs.prod.js')
} else {
  module.exports = require('./dist/lazyload.cjs.js')
}
