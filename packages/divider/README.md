# @bulma-ext/divider

A Divider Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Horizontal and vertical separator lines with optional centered or aligned text, icon, or image overlays. Supports all Bulma colors.

## Installation

```bash
pnpm add @bulma-ext/divider
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/divider/css/divider.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/divider/sass/divider";
```

## HTML Structure

### Horizontal Divider

```html
<!-- Simple line -->
<div class="is-divider"></div>

<!-- With text -->
<div class="is-divider">
  <span class="divider-content">OR</span>
</div>

<!-- With icon -->
<div class="is-divider">
  <span class="divider-content">
    <i class="fas fa-star"></i>
  </span>
</div>
```

### Vertical Divider

Place inside a `.columns` layout:

```html
<div class="columns">
  <div class="column">Left</div>
  <div class="is-divider is-vertical">
    <span class="divider-content">AND</span>
  </div>
  <div class="column">Right</div>
</div>
```

### Alignment

Use `is-start` or `is-end` to shift the content label to the start or end of the line:

```html
<!-- Horizontal: content aligned left -->
<div class="is-divider is-start">
    <span class="divider-content">Left</span>
</div>

<!-- Vertical: content aligned bottom -->
<div class="is-divider is-vertical is-end">
    <span class="divider-content">Bottom</span>
</div>
```

## CSS Classes Reference

| Class | Description |
|---|---|
| `.is-divider` | Horizontal divider line |
| `.is-divider.is-vertical` | Vertical divider line |
| `.divider-content` | Optional text/icon/image overlay on the line |
| `.is-start` | Align content to start (left / top) |
| `.is-end` | Align content to end (right / bottom) |

### Color Modifiers

Applied to `.is-divider`: `is-white`, `is-black`, `is-light`, `is-dark`, `is-text`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0