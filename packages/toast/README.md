# @bulma-ext/toast

A Toast Notification Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Provides a fixed-position container that stacks animated toast notifications. Items slide in from the screen edge, support all four corners, and use Bulma's `.notification` classes for color and styling. A small JavaScript helper is included to manage message lifecycle.

## Installation

```bash
pnpm add @bulma-ext/toast
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/toast/css/toast.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/toast";
```

## HTML Structure

Place one or more `.toast-container` elements anywhere in your page — they use `position: fixed` and are removed from the normal document flow. Give each container an `id` so the JavaScript helper can register it.

```html
<div id="my-toaster" class="toast-container" data-duration="3000"></div>
```

Individual toast messages are `div.toast-item` elements placed inside the container, styled with Bulma's `.notification` class. Adding the `is-visible` class triggers the slide-in animation.

```html
<div class="toast-item notification is-success is-visible">
    <button class="delete"></button>
    Operation completed successfully.
</div>
```

### Show / Hide with JavaScript

Toasts are shown and hidden by toggling the `is-visible` class on `.toast-item` elements. The provided helper script (`toast.js`) handles this automatically.

```html
<script src="path/to/toast.js"></script>
```

On `DOMContentLoaded`, the helper scans all `.toast-container` elements and registers a `BulmaToast` instance for each in `window.toasters`, keyed by element `id`.

```js
// Append a message using the container's default duration
window.toasters['my-toaster'].appendMessage('Operation completed!', 'is-success');

// Override with a custom duration (ms)
window.toasters['my-toaster'].appendMessage('Quick alert!', 'is-warning', 1500);

// Sticky toast — duration 0, close manually via the × button
window.toasters['my-toaster'].appendMessage('Sticky message.', 'is-info', 0);
```

### `appendMessage(message, colorClass, duration?)`

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | HTML string for the toast body |
| `colorClass` | `string` | Bulma color modifier, e.g. `is-success` |
| `duration` | `number` (optional) | Auto-dismiss delay in ms. Overrides `data-duration`. `0` = no auto-dismiss. |

## CSS Classes Reference

### Container

| Class / Attribute | Description |
|---|---|
| `.toast-container` | Fixed-position container |
| `.is-top-right` | Position: top-right |
| `.is-top-left` | Position: top-left |
| `.is-bottom-left` | Position: bottom-left |
| *(none)* | Default position: bottom-right |
| `data-duration` | Default auto-dismiss duration in ms (used by the JS helper) |

### Item

| Class | Description |
|---|---|
| `.toast-item` | Individual toast element (animated wrapper) |
| `.is-visible` | Triggers the slide-in and fade-in transition |

Toast items are styled using Bulma's standard `.notification` color modifiers: `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`.

## Accessibility

The CSS respects `prefers-reduced-motion`: the slide animation is disabled and the fade transition is shortened to 150 ms for users who prefer reduced motion.

## Examples

You can find live examples in the [demo directory](demo/index.html).

## License

Apache-2.0
