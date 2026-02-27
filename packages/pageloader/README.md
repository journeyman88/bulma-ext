# @bulma-ext/pageloader

A PageLoader / PageBlocker Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Full-page overlay with an animated loading spinner and optional message. Slides in from four directions; displayed by toggling a single CSS class. Supports all Bulma colors.

## Installation

```bash
pnpm add @bulma-ext/pageloader
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/pageloader/css/pageloader.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/pageloader/sass/pageloader";
```

## HTML Structure

Place the `.pageloader` element at the very beginning of `<body>`. Show it by adding `is-active`, hide it by removing it.

```html
<div class="pageloader is-active">
    <span class="title">Loading...</span>
</div>
```

### Show / Hide with JavaScript

```js
function triggerLoader(id) {
    const loader = document.getElementById(id);
    loader.classList.add('is-active');
    setTimeout(() => {
        loader.classList.remove('is-active');
    }, 2500);
}
```

## CSS Classes Reference

| Class | Description |
|---|---|
| `.pageloader` | Full-page overlay element |
| `.pageloader .title` | Optional loading message |
| `.is-active` | Makes the overlay visible |

### Animation Direction Modifiers

Default animation slides **top to bottom**.

| Class | Direction |
|---|---|
| *(none)* | Top → Bottom (default) |
| `.is-bottom-to-top` | Bottom → Top |
| `.is-left-to-right` | Left → Right |
| `.is-right-to-left` | Right → Left |

### Color Modifiers

Applied to `.pageloader`: `is-white`, `is-black`, `is-light`, `is-dark`, `is-text`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-pageloader](https://www.npmjs.com/package/bulma-pageloader/v/0.3.0) (version 0.3.0).

## License

Apache-2.0
