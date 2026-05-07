# @bulma-ext/pricingtable

A PricingTable Stylesheet compatible with Bulma 1.0.x (https://bulma.io).

## Installation

```bash
pnpm add @bulma-ext/pricingtable
```

## Usage

Include the CSS or Sass file **after** the Bulma stylesheet.

### CSS

```html
<link rel="stylesheet" href="node_modules/bulma/css/bulma.min.css">
<link rel="stylesheet" href="node_modules/@bulma-ext/pricingtable/css/pricingtable.min.css">
```

### Sass

```scss
@use "bulma/bulma";
@use "@bulma-ext/pricingtable";
```

## HTML Structure

### Standard Pricing Table

```html
<div class="pricing-table">
  <div class="pricing-plan is-primary">
    <div class="plan-header">Starter</div>
    <div class="plan-price">
      <span class="plan-price-amount">
        <span class="plan-price-currency">$</span>9
      </span>/month
    </div>
    <div class="plan-items">
      <div class="plan-item">5 Projects</div>
      <div class="plan-item">10 GB Storage</div>
    </div>
    <div class="plan-footer">
      <a class="button is-fullwidth">Choose</a>
    </div>
  </div>

  <div class="pricing-plan is-danger is-active">
    <div class="plan-header">Pro</div>
    <div class="plan-price">
      <span class="plan-price-amount">
        <span class="plan-price-currency">$</span>29
      </span>/month
    </div>
    <div class="plan-items">
      <div class="plan-item">Unlimited Projects</div>
      <div class="plan-item">100 GB Storage</div>
    </div>
    <div class="plan-footer">
      <a class="button is-fullwidth">Choose</a>
    </div>
  </div>
</div>
```

### Comparative Table

Plans share a row-by-row feature list. On mobile, each row shows the feature label (from `data-feature`) before its value.

```html
<div class="pricing-table is-comparative">
  <div class="pricing-plan is-features">
    <div class="plan-header">Features</div>
    <div class="plan-items">
      <div class="plan-item">Projects</div>
      <div class="plan-item">Storage</div>
    </div>
    <div class="plan-footer"></div>
  </div>
  <div class="pricing-plan">
    <div class="plan-header">Free</div>
    <div class="plan-items">
      <div class="plan-item" data-feature="Projects">5</div>
      <div class="plan-item" data-feature="Storage">1 GB</div>
    </div>
    <div class="plan-footer">
      <a class="button is-fullwidth">Choose</a>
    </div>
  </div>
</div>
```

### Horizontal Layout

On tablet and above, each plan renders its header, price, and items side by side.

```html
<div class="pricing-table is-horizontal">
  <!-- .pricing-plan items as above -->
</div>
```

## CSS Classes Reference

### Structure

| Class | Element | Description |
|---|---|---|
| `.pricing-table` | wrapper `<div>` | Flex container holding all plans |
| `.pricing-plan` | `<div>` | A single pricing column |
| `.plan-header` | `<div>` | Plan name / title row |
| `.plan-price` | `<div>` | Price display area |
| `.plan-price-amount` | `<span>` | The numeric price (large) |
| `.plan-price-currency` | `<span>` | Currency symbol (superscript) |
| `.plan-items` | `<div>` | Container for feature rows |
| `.plan-item` | `<div>` | A single feature row |
| `.plan-footer` | `<div>` | Bottom area, typically holds the CTA button |

### Plan State

| Class | Description |
|---|---|
| `.is-active` | Highlights the plan: scales it up and styles the footer button with the primary color |

### Layout Modifiers

Applied to `.pricing-table`:

| Class | Description |
|---|---|
| *(none)* | Default card grid layout |
| `.is-comparative` | Side-by-side comparison mode; feature labels shown via `data-feature` on mobile |
| `.is-horizontal` | On tablet+, each plan renders header/price/items in a single row |
| `.is-features` | Marks a plan as the feature-label column in a comparative table (hidden on mobile) |

### Color Modifiers

Applied to `.pricing-plan`: `is-white`, `is-black`, `is-light`, `is-dark`, `is-text`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`

The color modifier tints the price text and the footer button.

## Examples

You can find examples of how to use this package in the [demo directory](demo/index.html).

## Credits

Based on the original project [bulma-extensions](https://www.npmjs.com/package/bulma-extensions/v/6.2.7) (version 6.2.7).

## License

Apache-2.0
