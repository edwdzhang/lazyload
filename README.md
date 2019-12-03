# Lazyload

Lazy load resource like image or video

# Installation

```sh
npm install --save @cany/lazyload
```

# Usage

```html
<img src="loading.gif" data-src="real-image-url" />
<video data-src="real-video-url"></video>
```

```js
import ll from '@cany/lazyload'

document.addEventListener('DOMContentLoaded', () => {
  const unwatchImages = ll.listen('img.lazy')
  const unwatchVideos = ll.listen('video.lazy')
})
```

# API Reference

- lazyload.listen(selector | NodeList)

  Watch elements. which returns a function that can unwatch elements.

# License

MIT @[kattzhang](https://github.com/kattzhang).
