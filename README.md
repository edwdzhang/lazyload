# lazyload

Lazy load resource like image or video

# Installation

## NPM

```sh
npm install --save @cany/lazyload
```

## CDN

```html
<script src="https://unpkg.com/@cany/lazyload/dist/index.min.js"></script>
```

# Usage

```html
<img src="loading.gif" data-url="real-image-url" class="lazy" />
<video data-url="real-video-url" class="lazy"></video>
```

```js
import lazyload from '@cany/lazyload'

document.addEventListener('DOMContentLoaded', () => {
  const unwatchImages = lazyload.listen('img.lazy')
  const unwatchVideos = lazyload.listen('video.lazy')
})
```

# API

- lazyload.listen(selector | NodeList)

  Watch elements. which returns a function that can unwatch elements.

# License

MIT [@kattzhang](https://github.com/kattzhang).
