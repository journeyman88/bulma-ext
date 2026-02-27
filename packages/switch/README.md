# @bulma-ext/switch

A Switch Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Replaces the native checkbox with a sleek toggle-switch control. Inherits Bulma's full color system and sizing scale, and supports shape variants (rounded, thin), an outlined style, RTL layout, and disabled states — all with a smooth animated paddle.

## Installation

```bash
pnpm add @bulma-ext/switch
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/switch/css/switch.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/switch";
```

## HTML Structure

The `<input>` and its immediately following `<label>` must be paired via `id` / `for`.

```html
<input id="mySwitch" type="checkbox" name="mySwitch" class="switch">
<label for="mySwitch">Label text</label>
```

## CSS Classes Reference

### Base

| Class | Element | Description |
|---|---|---|
| `.switch` | `<input type="checkbox">` | Required — applies the toggle-switch style |

### Modifiers

| Class | Description |
|---|---|
| `.is-rounded` | Fully rounded track ends and a circular paddle |
| `.is-thin` | Collapses the track into a thin line with a floating paddle |
| `.is-outlined` | Transparent track with a coloured border and paddle |
| `.is-rtl` | Mirrors the switch for right-to-left layouts |

### Sizes

| Class | Description |
|---|---|
| `.is-small` | Small size |
| *(none)* | Normal size (default) |
| `.is-medium` | Medium size |
| `.is-large` | Large size |

### Color Modifiers

Applied to the `<input>` element together with `.switch`:
`is-white`, `is-black`, `is-light`, `is-dark`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

## Examples

You can find examples of how to use this package in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
