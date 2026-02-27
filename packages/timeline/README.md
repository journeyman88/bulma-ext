# @bulma-ext/timeline

A Timeline Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

Vertical timelines with icons or image markers. Supports left-aligned (default), centered (alternating sides), and right-aligned layouts, plus all Bulma colors for markers.

## Installation

```bash
pnpm add @bulma-ext/timeline
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/timeline/css/timeline.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/timeline/sass/timeline";
```

## HTML Structure

### Basic Timeline (left-aligned)

```html
<div class="timeline">
    <header class="timeline-header">
        <span class="tag is-medium is-link">Start</span>
    </header>
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <p class="heading">Step 1</p>
            <p>Something happened.</p>
        </div>
    </div>
    <footer class="timeline-header">
        <span class="tag is-medium is-link">End</span>
    </footer>
</div>
```

### Marker with Icon

```html
<div class="timeline-marker is-link">
    <span class="icon"><i class="fas fa-check"></i></span>
</div>
```

### Marker with Image

```html
<div class="timeline-marker is-warning">
    <figure class="image is-64x64">
        <img src="photo.jpg" class="is-rounded">
    </figure>
</div>
```

### Centered Layout

Items alternate left and right:

```html
<div class="timeline is-center">
    <!-- Items will alternate sides automatically -->
</div>
```

### Right-Aligned Layout

Content appears on the left of the timeline line:

```html
<div class="timeline is-right">
    ...
</div>
```

## CSS Classes Reference

| Class | Description |
|---|---|
| `.timeline` | Root timeline container |
| `.timeline-header` | Section divider (placed as `<header>` or `<footer>`) |
| `.timeline-item` | A single event row |
| `.timeline-marker` | The dot/icon/image on the timeline line |
| `.timeline-content` | Text content beside the marker |
| `.timeline-content .heading` | Bold heading inside the content block |

### Layout Modifiers

Applied to `.timeline`:

| Class | Description |
|---|---|
| *(none)* | Left-aligned (default) |
| `.is-center` | Alternating sides (centered line) |
| `.is-right` | Right-aligned (content on the left) |

### Marker Color Modifiers

Applied to `.timeline-marker`: `is-white`, `is-black`, `is-light`, `is-dark`, `is-text`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
