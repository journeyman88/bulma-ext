# @bulma-ext/badge

A Badge Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Adds notification/status indicator badges to any element. Supports two usage modes — a simple data-attribute approach and a richer class-based approach — plus all Bulma colors, outlined variants, and four corner positions.

## Installation

```bash
pnpm add @bulma-ext/badge
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/badge/css/badge.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/badge";
```

## HTML Structure

### Simple Usage (data-attribute)

The badge text is rendered via a CSS `::after` pseudo-element — no extra HTML elements needed.

```html
<button class="button" data-badge="8">Notifications</button>
```

Color and position modifiers are applied as additional classes on the parent element:

```html
<button class="button has-badge-danger has-badge-bottom" data-badge="!">Alert</button>
```

### Rich Usage (.badge class)

For badges containing icons or complex content, nest a `.badge` element inside the parent:

```html
<button class="button">
    Profile
    <span class="badge is-success">
        <span class="icon is-small"><i class="fas fa-check"></i></span>
    </span>
</button>
```

## CSS Classes Reference

### Simple (data-attribute) Modifiers

Applied to the element carrying `data-badge`:

| Class | Description |
|---|---|
| `has-badge-{color}` | Badge color (e.g. `has-badge-primary`, `has-badge-danger`) |
| `has-badge-outlined` | Outlined style |
| `has-badge-left` | Position: top-left |
| `has-badge-bottom` | Position: bottom-right (combine with `has-badge-left` for bottom-left) |

### Rich (.badge) Modifiers

Applied to the `.badge` element:

| Class | Description |
|---|---|
| `.badge` | The badge element itself |
| `.is-{color}` | Badge color (e.g. `is-primary`, `is-danger`) |
| `.is-outlined` | Outlined style |
| `.is-left` | Position: top-left |
| `.is-bottom` | Position: bottom-right (combine with `is-left` for bottom-left) |

Default position (no modifier) is **top-right**. All Bulma color names are supported: `white`, `black`, `light`, `dark`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`.

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
