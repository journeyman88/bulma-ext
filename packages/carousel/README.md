# @bulma-ext/carousel

A Carousel / Slider Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

A flexible slider system supporting horizontal and vertical transitions, optional pagination dots, and seamless integration into Bulma `hero` sections.

## Installation

```bash
pnpm add @bulma-ext/carousel
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/carousel/css/carousel.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/carousel";
```

## HTML Structure

### Standard Slider

```html
<div class="slider">
  <div class="slider-container">
    <div class="slider-item">...</div>
    <div class="slider-item">...</div>
  </div>
  <div class="slider-navigation-previous"><!-- prev arrow SVG --></div>
  <div class="slider-navigation-next"><!-- next arrow SVG --></div>
  <div class="slider-pagination">
    <div class="slider-page is-active" data-index="0"></div>
    <div class="slider-page" data-index="1"></div>
  </div>
</div>
```

### Vertical Slider

Add `is-vertical` to `.slider-container` for vertical transitions:

```html
<div class="slider">
  <div class="slider-container is-vertical">
    <div class="slider-item">...</div>
  </div>
</div>
```

### Hero Integration

```html
<section class="hero is-medium has-carousel">
  <div class="hero-carousel">
    <div class="slider">
      <div class="slider-container">
        <div class="slider-item">
          <img src="..." class="is-background" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="hero-body">
    <div class="container">...</div>
  </div>
</section>
```

## CSS Classes Reference

| Class | Description |
|---|---|
| `.slider` | Root carousel container |
| `.slider-container` | Flex row holding all slides |
| `.slider-container.is-vertical` | Enables vertical transitions |
| `.slider-item` | A single slide |
| `.slider-item .image.is-covered img` | Cover-fit image inside a slide |
| `.slider-navigation-previous` | Previous button |
| `.slider-navigation-next` | Next button |
| `.slider-navigation-*.is-hidden` | Hides a navigation button |
| `.slider-pagination` | Pagination dot container (visible ≥ 800px) |
| `.slider-page` | A single pagination dot |
| `.slider-page.is-active` | Active/selected dot |
| `.hero.has-carousel` | Integrates slider as hero background |
| `.hero-carousel` | Wrapper for the background slider inside a hero |

> **Note:** Navigation and pagination require JavaScript. See the [demo](demo/index.html) for a complete `BulmaCarousel` class example.

## Examples

You can find live examples in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
