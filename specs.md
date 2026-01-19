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
  base.css             - Single minified stylesheet (~18KB)
  src/
    reset.css          - CSS reset/normalize baseline
    colors.css         - Color themes and modifiers
    general.css        - Design variables and utility classes
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
<html class="dark warm serif"> <!-- combine classes -->
```

## Color Themes

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
- Deep slate blue-gray background (#181c24)
- Lighter slate surfaces
- Misty lake blue primary
- Warm amber warning tones (like cottage lights through windows)

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

### Modifiers

Modifiers can be combined with any theme:

**warm** - Adds warm tints to bg1, bg2, body1, body2, and borders
**cool** - Adds cool tints to the same properties
**sat** - Increases saturation of backgrounds and semantic colors by 40% (uses relative color syntax)
**desat** - Decreases saturation of backgrounds and semantic colors by 40% (uses relative color syntax)

```html
<html class="dark warm">      <!-- dark theme with warm tints -->
<html class="uinta sat">      <!-- uinta theme with vivid colors -->
<div class="cool">            <!-- cool section within any theme -->
```

#### Creating Dark Themes

When creating a new dark theme, include these requirements:

**1. Font smoothing for macOS** - Prevents fonts from appearing too thick on dark backgrounds:
```css
.mytheme {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**2. Warm/cool modifier support** - Use compound selectors for all class orderings and nesting:
```css
.warm.dark, .dark.warm, .dark .warm,
.warm.mytheme, .mytheme.warm, .mytheme .warm {
  /* dark warm overrides */
}

.cool.dark, .dark.cool, .dark .cool,
.cool.mytheme, .mytheme.cool, .mytheme .cool {
  /* dark cool overrides */
}
```

This ensures modifiers work whether classes are on the same element (`class="dark warm"` or `class="warm dark"`) or nested (`<html class="dark"><div class="warm">`).

#### Creating Modifiers That Override Backgrounds

When creating a modifier that changes background colors (like `warm` or `cool`), you must set both the `-base` variable and the display variable. This ensures `sat` and `desat` work correctly with your modifier:

```css
/* WRONG - sat/desat will ignore these overrides */
.mymodifier {
  --bg1: hsl(40 33% 97%);
  --bg2: hsl(35 25% 92%);
}

/* CORRECT - sat/desat will use these values */
.mymodifier {
  --bg1-base: hsl(40 33% 97%);
  --bg1: var(--bg1-base);
  --bg2-base: hsl(35 25% 92%);
  --bg2: var(--bg2-base);
}
```

Without setting the `-base` variables, `sat` and `desat` will read the original theme's base values instead of your modifier's overrides, causing unexpected color combinations.

## Color Variables

All colors use HSL format for consistency and to enable dynamic saturation modification.

```css
--body, --body1, --body2      /* Text colors (dark to light) */
--bg, --bg1, --bg2            /* Background colors (light to dark) */
--primary, --primary-hover    /* Primary action color */
--secondary, --secondary-hover
--success, --warning, --error, --info
--border, --border-focus
--link, --link-hover
```

### HSL and Base Variables

Backgrounds and semantic colors use a two-tier variable system that enables the `sat` and `desat` modifiers to work with any theme:

```css
/* Themes define -base variables for backgrounds */
--bg-base: hsl(0 0% 100%);
--bg: var(--bg-base);
--bg1-base: hsl(0 0% 96%);
--bg1: var(--bg1-base);

/* ...and for semantic colors */
--primary-base: hsl(217 84% 53%);
--primary: var(--primary-base);
--primary-hover: hsl(217 91% 60%);

/* sat/desat use CSS relative color syntax to modify the base */
.sat {
  --bg: hsl(from var(--bg-base) h calc(s * 1.4) l);
  --bg1: hsl(from var(--bg1-base) h calc(s * 1.4) l);
  --primary: hsl(from var(--primary-base) h calc(s * 1.4) l);
}
```

This allows `sat` and `desat` to dynamically adjust any theme's colors rather than replacing them with fixed values. For themes with neutral backgrounds (0% saturation), the background won't visibly change. For place-inspired themes like Uinta, Hokkaido, and Ambleside with tinted backgrounds, the tints become more or less pronounced.

**Browser support:** CSS relative color syntax requires Chrome 119+, Safari 16.4+, or Firefox 128+.

## Typography

- Base font-size: 20px
- Sans-serif by default (system fonts)
- All measurements in rem units

### Font Classes

**System Fonts** (no external dependencies)
- `sans` - System sans-serif (default)
- `serif` - System serif (Times New Roman, Georgia)

**Google Fonts** (loaded via @import, ~200-400KB total)
- `source-sans` - Source Sans 3 (weights: 400, 600 + italics)
- `pt-serif` - PT Serif (weights: 400, 700 + italics)
- `cormorant` - Cormorant Garamond (weights: 400, 600 + italics)

```html
<html class="serif">          <!-- system serif -->
<html class="source-sans">    <!-- Source Sans 3 -->
<html class="pt-serif">       <!-- PT Serif -->
<html class="cormorant">      <!-- Cormorant Garamond -->
<div class="serif">           <!-- section-specific -->
```

### Readable Container

```css
.readable {
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 10%;
}
```

For full-width backgrounds with readable content:

```html
<div style="background: var(--bg1);">
  <div class="readable">
    Content here...
  </div>
</div>
```

## Layout

### Alignment

```html
<figure class="center">       <!-- centered block -->
<figure class="left">         <!-- float left, text wraps -->
<figure class="right">        <!-- float right, text wraps -->
<figure class="square">       <!-- square aspect ratio crop -->
```

### Columns

```html
<div class="cols2">           <!-- 2-column layout -->
<div class="cols3">           <!-- 3-column layout -->
<div class="cols4">           <!-- 4-column layout -->
```

Columns collapse to single column at 50rem breakpoint.

### Utility Classes

**Margins** (1-10 rem): `m1`, `mx1`, `my1`, `mt1`, `mb1`, `ml1`, `mr1`
**Padding** (1-10 rem): `p1`, `px1`, `py1`, `pt1`, `pb1`, `pl1`, `pr1`
**Border radius**: `r0` (none), `r1`-`r4` (progressive), `r100` (circular)
**Text alignment**: `text-center`, `text-left`, `text-right`

## Forms

- Form inputs use `--bg1` background for subtle contrast
- Inputs are block-level by default
- Sensible max-widths for different input types (phone, date, email, etc.)
- Use `class="inline"` for inline inputs

```html
<button>Primary</button>
<button class="secondary">Secondary</button>
<button class="outline">Outline</button>
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

## General Features

- Smooth scrolling enabled (`scroll-behavior: smooth`)
- Visited links use the same color as unvisited links
- CSS variables for easy customization
- No external font dependencies

## Customizing

Override any CSS variable in your own stylesheet. Use HSL format for colors:

```css
:root {
  --readable-width: 40rem;
  --base-font-size: 18px;
  --box-radius: 0.5rem;
  --primary-base: hsl(263 90% 66%);
  --primary: var(--primary-base);
  --primary-hover: hsl(263 90% 75%);
}
```
