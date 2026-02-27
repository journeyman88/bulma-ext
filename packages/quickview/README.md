# @bulma-ext/quickview

A QuickView Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

An elegant off-canvas sliding panel for displaying content or menus. Includes a structured layout with a header, body, and footer, and can be configured to slide in from either the left or the right side.

## Installation

```bash
pnpm add @bulma-ext/quickview
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/quickview/css/quickview.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/quickview";
```

## HTML Structure

The `.quickview` structure consists of a `.quickview-header`, a scrolling `.quickview-body`, and a `.quickview-footer`. By default, it slides in from the right edge of the screen. Show it by adding `is-active`, hide it by removing it.

```html
<div id="myQuickview" class="quickview">
  <header class="quickview-header">
    <p class="title">Quickview title</p>
    <span class="delete" data-dismiss="quickview"></span>
  </header>

  <div class="quickview-body">
    <div class="quickview-block">
      <p>Quickview content goes here.</p>
    </div>
  </div>

  <footer class="quickview-footer">
    <button class="button" data-dismiss="quickview">Close</button>
  </footer>
</div>
```

### Show / Hide with JavaScript

```js
// Show
document.getElementById('myQuickview').classList.add('is-active');

// Hide
document.getElementById('myQuickview').classList.remove('is-active');
```

## CSS Classes Reference

| Class | Description |
|---|---|
| `.quickview` | Main container for the sliding panel |
| `.quickview-header` | Sticky header area, supports bulma colors |
| `.quickview-body` | Scrollable body area for content |
| `.quickview-block` | Optional wrapper inside body for padded content |
| `.quickview-footer` | Sticky footer area |
| `.is-active` | Makes the panel slide into view |

### Alignment Modifiers

Default animation slides in from the **right**.

| Class | Direction |
|---|---|
| *(none)* | Slides from Right (default) |
| `.is-left` | Slides from Left |

### Color Modifiers

Applied to `.quickview-header`: `is-white`, `is-black`, `is-light`, `is-dark`, `is-text`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
