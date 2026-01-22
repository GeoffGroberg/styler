# Styler

A simple, clean CSS framework that applies reasonable styles to HTML tags without requiring many custom classes.

## Goals

- Tags are styled without needing to specify classes
- Simplicity in HTML code - allows for simple, clean, lean markup
- Consistency across platforms (including/especially mobile)
- Elegance in the visual style
- Avoid JavaScript - everything is done with CSS (demo.html has minimal JS for theme switching only)
- Mobile-first approach, preferring fewer media queries

## Files

```
demo.html              - Interactive demo with theme/font switchers
styler/
  base.css             - Main stylesheet (includes Google Fonts + imports src files)
  src/
    reset.css          - CSS reset/normalize baseline
    colors.css         - Themes, selection styling
    general.css        - Layout, utilities, tables, details, alerts, print
    typography.css     - Fonts and text styling
    forms.css          - Form element styling
    media.css          - Images, video, audio styling
```

### Usage

```html
<link rel="stylesheet" href="styler/base.css">
<link rel="stylesheet" href="styles.css">  <!-- your overrides -->

<html class="dark">           <!-- theme -->
<html class="serif">          <!-- font -->
<html class="dark serif">      <!-- combine classes -->

<!-- Themes and fonts work on any element -->
<footer class="patagonia bg">Footer with different theme</footer>
<blockquote class="cormorant">Fancy quote font</blockquote>
<div class="sahel bg1 p2">Themed section</div>
```

## Themes

### Base Themes

**Light** (default)
- Pure white background (#ffffff)
- Neutral grays for text and surfaces
- Blue primary color

**Dark**
- Pure black background (#000000)
- Light grays for text
- Brighter blue primary for contrast

### Place-Inspired Themes

**Ambleside** (dark)
- Inspired by a winter evening in England's Lake District
- Deep slate blue-gray background
- Lighter slate surfaces, heather lavender accent (bg3)
- Misty lake blue primary
- Warm amber warning tones (like cottage lights through windows)

**Windermere** (light)
- Inspired by a misty morning in England's Lake District
- Warm cream background with cool slate accents
- Pairs with Ambleside as light/dark companions
- Cool slate blue primary

**Peebles** (light)
- Inspired by a rainy day and a warm bakery in Scotland
- Warm bakery cream background
- Cool slate blue primary
- Cozy and inviting atmosphere

**Uinta** (light)
- Inspired by a crisp morning in Utah's Uinta mountains
- Pure white background
- Cool green-tinted surfaces
- Pine forest green primary
- Golden morning light accents

**Hokkaido** (light)
- Inspired by where the mountain meets the sea in Hokkaido, Japan
- Pure white background
- Sea mist blue-gray surfaces
- Ocean blue primary
- Coastal and volcanic earth tone accents

**Sahel** (light)
- Inspired by golden hour on the West African savanna
- Pure white background
- Warm sandy/earth-toned surfaces
- Deep indigo primary (like traditional fabrics)
- Terracotta and golden grass accents

**Patagonia** (dark)
- Inspired by twilight over glacial lakes in southern Argentina
- Deep blue-gray background
- Cool slate surfaces
- Glacial teal primary
- Dusty mountain and warm sunset accents

**Kerala** (light)
- Inspired by a monsoon morning in India's backwaters
- Pure white background
- Lush green-tinted surfaces
- Deep tropical green primary
- Spice market and palm frond accents

**Svalbard** (dark)
- Inspired by polar night with aurora in the High Arctic
- Deep navy-black background
- Cool midnight blue surfaces
- Aurora green primary
- Icy blue and purple accents

**Yucatan** (light)
- Inspired by Cozumel's azul waters and coral reefs
- Pure white background
- Warm sandy surfaces with seafoam accents
- Bright Caribbean turquoise primary
- Coral orange, tropical yellow, and reef green accents

**Aegean** (light)
- Inspired by the cerulean waters of the Greek islands
- Pure white background
- Cyan-tinted surfaces like sea mist
- Cerulean blue-green primary
- Warm terracotta accents

**Guilin** (light)
- Inspired by misty karst mountains along China's Li River
- Pure white background
- Subtle jade/mist green surfaces
- Bamboo forest green primary
- Soft ink wash and morning mist tones

**Cusco** (dark)
- Inspired by Machu Picchu's stone cliffs and misty peaks
- Cool gray-stone background
- Subtle blue-gray surfaces like weathered granite
- Verdant teal-green primary (mountain vegetation)
- Warm earth secondary

**Cappadocia** (light)
- Inspired by rose valleys and fairy chimneys at dawn in Turkey
- Pure white background
- Warm sandstone/rose surfaces
- Coral/rose-gold primary
- Soft dawn and volcanic stone accents

**Marrakech** (light)
- Inspired by the red city's medina and spice markets of Morocco
- Pure white background
- Warm ochre/sand surfaces
- Terracotta/burnt sienna primary
- Spice market and zellige tile accents

**Uluru** (light)
- Inspired by the red center at sunrise in Australia
- Pure white background
- Warm desert earth surfaces
- Deep red-ochre primary
- Outback and morning light accents

**Lviv** (dark)
- Inspired by twilight over sunflower fields, Ukrainian flag colors
- Deep Ukrainian blue background
- Blue-tinted surfaces
- Sunflower yellow primary
- Warm gold secondary, wheat-toned text

#### Creating Dark Themes

When creating a new dark theme, update three places that list dark themes explicitly:
- `forms.css` - Select dropdown arrow color (lines ~112-116)
- `typography.css` - Inserted/deleted text colors (lines ~231-241)
- `colors.css` - Media query exclusion list (line ~1274)

When adding a new dark theme, update all three locations.

## Color Variables

All colors use HSL format for maximum browser compatibility (~100% support).

```css
/* Text colors */
--body                        /* Primary text */
--body-strong                 /* Headings (darker/lighter than body) */
--body1                       /* Secondary text */
--body2                       /* Tertiary/muted text */

/* Backgrounds */
--bg                          /* Page background (solid) */
--bg1                         /* Subtle elevation (gradient) */
--bg1-solid                   /* Solid version for form inputs */
--bg2                         /* Medium elevation (gradient) */
--bg3                         /* Accent areas (gradient, may have hue shift) */

/* Semantic colors */
--primary, --primary-hover
--primary-button, --primary-button-hover  /* May differ from --primary in some themes */
--secondary, --secondary-hover
--secondary-button, --secondary-button-hover
--success, --warning, --error, --info     /* Each has -hover variant */
--border, --border-focus
--link, --link-hover, --link-visited
```

### HSL Color Format

HSL uses three components:
- **H (Hue)**: 0-360 degrees (0=red, 60=yellow, 120=green, 240=blue)
- **S (Saturation)**: 0% (gray) to 100% (vivid)
- **L (Lightness)**: 0% (black) to 100% (white)

```css
hsl(220 70% 45%)  /* H=220 (blue), S=70%, L=45% */
hsl(30 20% 22%)   /* H=30 (warm brown), S=20%, L=22% */
```

## Typography

- Base font-size: 20px
- All measurements in rem units
- Each theme has a default font (falls back to system fonts if Google Fonts fail to load)

### Theme Fonts

Themes define `--font-family` (body text) and `--heading-font-family` (headings). Most themes use the same font for both, but some pair different fonts for typographic interest:

| Theme | Body Font | Heading Font | Notes |
|-------|-----------|--------------|-------|
| Light, Dark, Hokkaido, Kerala | System Sans | Same | Clean, neutral |
| Aegean | System Sans | Source Sans | Subtle difference |
| Yucatan, Cappadocia | System Sans | Lora | Sans body, serif headings |
| Cusco | System Sans | PT Serif | Sans body, serif headings |
| Uinta, Uluru | Source Sans | PT Serif | Modern body, traditional headings |
| Patagonia | Source Sans | Same | Fresh, modern |
| Windermere | Source Sans | System Serif | Modern body, classic headings |
| Ambleside | Source Sans | Cormorant | Modern body, elegant headings |
| Svalbard, Lviv | Inter | Same | Crisp, technical |
| Sahel | Lora | Same | Warm, earthy |
| Guilin, Marrakech | Crimson Pro | Same | Refined, elegant |
| Peebles | PT Serif | Cormorant | Traditional body, elegant headings |
| Kerala | System Sans | Crimson Pro | Clean body, refined headings |

Font modifier classes (`.inter`, `.lora`, etc.) override both body and heading fonts.

### Font Classes

**System Fonts** (no external dependencies)
- `sans` - System sans-serif
- `serif` - System serif (Times New Roman, Georgia)

**Google Fonts** (included in base.css)
- `source-sans` - Source Sans 3 (weights: 400, 600 + italics)
- `inter` - Inter (weights: 400, 600)
- `pt-serif` - PT Serif (weights: 400, 700 + italics)
- `lora` - Lora (weights: 400, 600 + italics)
- `crimson` - Crimson Pro (weights: 400, 600 + italics)
- `cormorant` - Cormorant Garamond (weights: 400, 600 + italics) - decorative, best for poetry/quotes

```html
<html class="serif">          <!-- override theme font with system serif -->
<html class="inter">          <!-- override with Inter -->
<html class="crimson">        <!-- override with Crimson Pro -->
<div class="lora">            <!-- section-specific override -->
```

### Readable Container

```css
.readable {
  max-width: 45rem;
  margin: 0 auto;
  padding: 0 10%;
}
```

For full-width backgrounds with readable content:

```html
<div class="bg1">
  <div class="readable">
    Content here...
  </div>
</div>
```

## Layout

### Alignment

```html
<figure class="center">       <!-- centered block -->
<figure class="left">         <!-- float left, pops out, text wraps -->
<figure class="right">        <!-- float right, pops out, text wraps -->
<figure class="square">       <!-- square aspect ratio crop -->
```

When inside a `.readable` container, `.left` and `.right` use negative margins to pop out, creating visual interest. Responsive breakpoints progressively reduce the pop-out (20% → 10% → 0) before collapsing to full-width centered at 45rem.

### Columns

```html
<div class="cols2">           <!-- 2-column layout -->
<div class="cols3">           <!-- 3-column layout -->
<div class="cols4">           <!-- 4-column layout -->
```

Columns collapse to single column at 45rem breakpoint.

### Utility Classes

**Margins** (0-5 rem): `m0`, `m1`, `mx0`, `mx1`, `my0`, `my1`, `mt0`, `mt1`, `mb0`, `mb1`, `ml0`, `ml1`, `mr0`, `mr1`
**Padding** (0-5 rem): `p0`, `p1`, `px0`, `px1`, `py0`, `py1`, `pt0`, `pt1`, `pb0`, `pb1`, `pl0`, `pl1`, `pr0`, `pr1`
**Border radius**: `r0` (none), `r1`-`r4` (progressive), `r100` (circular)
**Backgrounds**: `bg`, `bg1`, `bg2`, `bg3`
**Text colors**: `muted`, `primary`, `secondary`, `success`, `warning`, `error`, `info`
**Text alignment**: `text-center`, `text-left`, `text-right`

```html
<div class="bg1 p2 r2">Card with background, padding, rounded corners</div>
<div class="mt2 mb1">Margin top 2rem, bottom 1rem</div>
<div class="px3 py1">Horizontal padding 3rem, vertical 1rem</div>
```

### Themes on Any Element

Theme and font classes work on any element, not just `<html>`:

```html
<!-- Themed section -->
<section class="patagonia bg py2">
  <div class="readable">Content with Patagonia colors</div>
</section>

<!-- Themed footer -->
<footer class="ambleside bg1 p2">
  Footer with Ambleside theme
</footer>

<!-- Font on specific element -->
<blockquote class="cormorant">Elegant quote</blockquote>
<p class="serif">This paragraph is serif</p>
```

Add `bg`, `bg1`, `bg2`, or `bg3` to apply a background color from the theme. `bg3` uses a complementary hue.

## Forms

- Form inputs use `--bg1` background for subtle contrast
- Inputs are block-level by default
- Sensible max-widths for different input types (phone, date, email, etc.)
- Use `class="inline"` for inline inputs

```html
<button>Primary</button>
<button class="secondary">Secondary</button>
<button class="outline">Outline</button>

<!-- Links styled as buttons -->
<a href="#" class="button">Link Button</a>
<a href="#" class="button secondary">Secondary Link</a>
<a href="#" class="button outline">Outline Link</a>
```

## Media

- Images should be wrapped in `<figure>` tags
- Figcaptions are styled automatically
- Images have slight border-radius by default
- Responsive video container for iframes

```html
<figure>
  <img src="photo.jpg" alt="...">
  <figcaption>Caption text</figcaption>
</figure>

<div class="video-container">
  <iframe src="youtube..."></iframe>
</div>
```

## Tables

Tables are styled automatically with:
- Full width
- Header row with `--bg2` background
- Bottom borders using `--border`
- Add `.striped` class for alternating row colors

```html
<table class="striped">
  <thead>
    <tr><th>Name</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>Item 1</td><td>100</td></tr>
    <tr><td>Item 2</td><td>200</td></tr>
  </tbody>
</table>
```

## Details/Summary

Native HTML accordion elements are styled automatically:

```html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content here...</p>
</details>
```

## Alerts

Simple alert boxes using semantic colors:

```html
<div class="alert success">Success message</div>
<div class="alert warning">Warning message</div>
<div class="alert error">Error message</div>
<div class="alert info">Info message</div>
```

## Definition Lists

```html
<dl>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
</dl>
```

## Keyboard Input

Styled keyboard shortcuts with key-cap appearance:

```html
Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.
```

## Text Changes

Track insertions and deletions with semantic styling:

```html
<del>removed text</del>
<ins>inserted text</ins>
```

Colors adapt for dark themes automatically.

## Progress & Meter

Native HTML progress and meter elements:

```html
<progress value="70" max="100">70%</progress>

<meter value="0.6" min="0" max="1" low="0.25" high="0.75" optimum="0.5">60%</meter>
```

Meter uses semantic colors: green (optimum), yellow (suboptimum), red (low/high range).

## Dialog

Native HTML dialog element with styled backdrop:

```html
<dialog id="my-dialog">
  <h3>Dialog Title</h3>
  <p>Content...</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>

<button onclick="document.getElementById('my-dialog').showModal()">Open</button>
```

## Other Text Elements

These HTML elements are styled automatically:

- `<abbr title="...">` - Abbreviation with help cursor
- `<var>` - Variables (italic, bold)
- `<q>` - Inline quotation (italic)
- `<cite>` - Citation (italic)
- `<samp>` - Sample output (monospace)
- `<address>` - Contact information (italic)

## General Features

- Smooth scrolling enabled (`scroll-behavior: smooth`)
- Visited links use the same color as unvisited links
- Text selection uses `--primary` color
- Print styles hide navigation, buttons, and alerts; show URLs after links
- CSS variables for easy customization
- Google Fonts included by default (comment out in base.css for system fonts only)

## Customizing

Override any CSS variable in your own stylesheet:

```css
:root {
  --readable-width: 40rem;
  --base-font-size: 18px;
  --box-radius: 0.5rem;
  --primary: hsl(295 50% 45%);
  --primary-hover: hsl(295 45% 55%);
}
```

HSL format: `hsl(hue saturation% lightness%)`
- Hue: 0-360 degrees (0=red, 60=yellow, 120=green, 240=blue, 300=magenta)
- Saturation: 0% (gray) to 100% (vivid)
- Lightness: 0% (black) to 100% (white)
