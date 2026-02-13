# @bulma-ext/pageloader

A PageLoader / PageBlocker Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

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

## Examples

You can find examples of how to use this package in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-pageloader](https://www.npmjs.com/package/bulma-pageloader/v/0.3.0) (version 0.3.0).

## License

Apache-2.0

