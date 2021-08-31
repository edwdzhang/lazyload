# lazyload

Lazy load resource like image or video

# Installation

```
npm install --save @cany/lazyload
# or
yarn add @cany/lazyload
```

### CDN

```html
<script src="https://unpkg.com/@cany/lazyload"></script>
```

## Usage

```html
<img src="loading.gif" data-url="real-image-url" class="lazy" />
<video data-url="real-video-url" class="lazy"></video>
```

```js
import Lazyload from '@cany/lazyload'

document.addEventListener('DOMContentLoaded', () => {
  Lazyload.listen('.lazy')
})
```

## API

- `Lazyload.listen(selector | NodeList)`

  Listen to elements. which returns a function that can unlisten to elements.

## License

MIT
