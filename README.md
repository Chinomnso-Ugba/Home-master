# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-t9GjaBK1o). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard
- View the optimal layout for each of the site's pages depending on their device's screen size

### Screenshot

![Screenshot of the Room homepage solution](./preview.jpg)

### Links

- Solution URL: [Add your GitHub repo URL here](https://your-solution-url.com)
- Live Site URL: [Add your live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript for the slider and mobile nav

### What I learned

The hero slider needed to swap both an image and a block of text together, at two different breakpoints (separate mobile/desktop images). Rather than hardcoding three near-identical blocks of markup, I kept the slide content in a small JS array and had the buttons just update whichever slide index is "current," then re-render from that single source of truth:

```js
const slides = [
  { mobile: "...", desktop: "...", title: "...", text: "..." },
  // ...
];

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  const slide = slides[current];
  heroImageMobile.src = slide.mobile;
  heroImageDesktop.src = slide.desktop;
  heroTitle.textContent = slide.title;
  heroText.textContent = slide.text;
}
```

The `(index + slides.length) % slides.length` line is what lets the arrows wrap around in both directions without extra if/else branching for the first and last slide.

### Continued development

- Swap the plain `<img>` swapping approach for a small crossfade transition between slides.
- Revisit the mobile nav for very short viewport heights, where the dropdown panel could end up taller than the visible screen.

## Author

- GitHub - [@Chinomnso-Ugba](https://github.com/Chinomnso-Ugba)
- Frontend Mentor - [Add your Frontend Mentor profile link here](https://www.frontendmentor.io/profile/your-username)
# Home-master
