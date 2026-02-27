# @bulma-ext/ribbon

A Ribbon Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Adds a banner label to any container. Supports four corner positions, outlined variant, all Bulma colors, and three sizes.

## Installation

```bash
pnpm add @bulma-ext/ribbon
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/ribbon/css/ribbon.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/ribbon";
```

## HTML Structure

Add a position class to the container and place the `.ribbon` element inside it:

```html
<div class="box has-ribbon">
    <div class="ribbon is-primary">New</div>
    <p>Content goes here</p>
</div>
```

## CSS Classes Reference

### Container Classes

| Class | Ribbon Position |
|---|---|
| `.has-ribbon` | Top-right (default) |
| `.has-ribbon-left` | Top-left |
| `.has-ribbon-bottom` | Bottom-right |
| `.has-ribbon-left.has-ribbon-bottom` | Bottom-left |

### Ribbon Modifiers

Applied to `.ribbon`:

| Class | Description |
|---|---|
| `.is-{color}` | ribbon color (e.g. `is-primary`, `is-danger`) |
| `.is-outlined` | Transparent background, colored border |
| `.is-small` | Small font size |
| `.is-medium` | Medium font size |
| `.is-large` | Large font size |

Color options: `white`, `black`, `light`, `dark`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
