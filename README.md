# tailwind-responsive-embed

responsive embed component for tailwindcss, based on [bootstrap's responsive embed](https://getbootstrap.com/docs/4.1/utilities/embed/) which is itself credited to Nicolas Gallagher and [SUIT CSS](https://suitcss.github.io/). This will add the `.embed-responsive` and `.embed-responsive-item` components to your css.

This plugin relies on [webdna/tailwindcss-aspect-ratio](https://github.com/webdna/tailwindcss-aspect-ratio) to create the aspect ratio utility classes.

## Install

```bash
# Install via npm
npm install --save-dev tailwindcss-responsive-embed
```

## Usage

Responsive embed classes won't do much by themselves, so require `tailwindcss-aspect-ratio` also. It shouldn't matter what order they are included.

```js
module.exports = {
    theme: {
        aspectRatio: {
            none: 0,
            square: [1, 1],
            "16/9": [16, 9],
            "4/3": [4, 3],
            "21/9": [21, 9]
        }
    },
    variants: {
        aspectRatio: ['responsive']
    },
    plugins: [
        require("tailwindcss-responsive-embed"),
        require("tailwindcss-aspect-ratio"),
    ]
}
```

This configuration would create the following classes:

```scss
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;

  .embed-responsive-item,
  iframe,
  embed,
  object,
  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border: 0;
  }
}

.aspect-ratio-square {
  padding-top: 100%;
}
.aspect-ratio-16/9 {
  padding-top: 56.25%;
}
.aspect-ratio-4/3 {
  padding-top: 75%;
}
.aspect-ratio-21/9 {
  padding-top: 42.86%;
}
```

## Example HTML

```html
<div class="embed-responsive aspect-ratio-4/3">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/J---aiyznGQ"></iframe>
</div>
```
