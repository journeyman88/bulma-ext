# @bulma-ext/checkradio

A CheckRadio Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Styled checkboxes and radio buttons that inherit Bulma's full color system and sizing scale. Supports color variants, sizes, block, circle, no-border, indeterminate, and RTL modes out of the box.

## Installation

```bash
pnpm add @bulma-ext/checkradio
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/checkradio/css/checkradio.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/checkradio";
```

## HTML Structure

The `<input>` and its immediately following `<label>` must be paired via `id` / `for`.

```html
<!-- Checkbox -->
<input class="is-checkradio" id="myCheckbox" type="checkbox" name="myCheckbox">
<label for="myCheckbox">Label text</label>

<!-- Radio button -->
<input class="is-checkradio" id="myRadio1" type="radio" name="myGroup" value="1">
<label for="myRadio1">Option One</label>
```

> **Note:** The `indeterminate` state must be set via JavaScript — it cannot be declared in HTML.
> ```js
> document.getElementById('myCheckbox').indeterminate = true;
> ```

## CSS Classes Reference

### Base

| Class | Element | Description |
|---|---|---|
| `.is-checkradio` | `<input>` | Required — applies the custom style. Use with `type="checkbox"` or `type="radio"` |

### Modifiers

| Class | Description |
|---|---|
| `.is-circle` | Gives a checkbox rounded (circle) corners, matching radio style |
| `.is-block` | Expands the label to full width, creating a block-level toggle |
| `.is-rtl` | Mirrors the control for right-to-left layouts |
| `.has-no-border` | Removes the border from the control |

### Sizes

| Class | Description |
|---|---|
| `.is-small` | Small size |
| *(none)* | Normal size (default) |
| `.is-medium` | Medium size |
| `.is-large` | Large size |

### Color Modifiers

Applied to the `<input>` element together with `.is-checkradio`:
`is-white`, `is-black`, `is-light`, `is-dark`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

## Examples

You can find examples of how to use this package in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
