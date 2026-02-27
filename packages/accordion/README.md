# @bulma-ext/accordion

An Accordion Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Collapsible content sections with animated open/close transitions, support for all Bulma colors, and multiple sizes.

## Installation

```bash
pnpm add @bulma-ext/accordion
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/accordion/css/accordion.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/accordion";
```

## HTML Structure

```html
<div class="accordions">
    <article class="accordion is-active">
        <div class="accordion-header toggle">
            <p>Header</p>
            <button class="toggle" aria-label="toggle"></button>
        </div>
        <div class="accordion-body">
            <div class="accordion-content">Content...</div>
        </div>
    </article>
</div>
```

> **Note:** Toggling the `is-active` class on the `.accordion` element requires a small JavaScript snippet. See the [demo](demo/index.html) for a ready-to-use example.

## CSS Classes Reference

| Class | Description |
|---|---|
| `.accordions` | Outer wrapper for one or more accordion items |
| `.accordion` | A single collapsible panel |
| `.accordion-header` | Clickable header area |
| `.accordion-body` | Collapsible body |
| `.accordion-content` | Inner content of the body |
| `.toggle` | On the header or button — marks the toggle trigger |
| `[data-action="toggle"]` | Alternative toggle trigger attribute |

### State

| Class | Description |
|---|---|
| `.is-active` | Expands the accordion panel |

### Sizes

| Class | Description |
|---|---|
| `.is-small` | Small font size |
| `.is-medium` | Medium font size |
| `.is-large` | Large font size |

### Color Modifiers

Applied to `.accordion`: `is-white`, `is-black`, `is-light`, `is-dark`, `is-text`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
