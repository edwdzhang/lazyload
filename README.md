# LazyLoad

Lazy load resource like image or video

# Installation

```sh
npm install --save @cany/lazyload
```

# Usage

```js
import ll from '@cany/lazyload'

document.addEventListener('DOMContentLoaded', () => {
  const unwatch = ll.listen('img.lazy')
})
```

# API Reference

- lazyload.listen(selector | NodeList)

  Watch elements. which returns a function that can unwatch elements.

# License

MIT @[kattzhang](https://github.com/kattzhang).
