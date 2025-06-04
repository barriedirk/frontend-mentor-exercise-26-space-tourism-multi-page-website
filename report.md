HTML REPORT 

Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
no-redundant-role
(2 occurrences)
error

Redundant role "banner" on <header>

<header id="header" class="header h-fit fixed top-0 left-0 w-full lg:pt-[30px]" role="banner">

Learn more
aria-label-misuse
(1 occurrence)
error

"aria-label" cannot be used on this element

<svg class="logo w-[40px] h-[40px]" aria-label="Bookmark logo">

Learn more
no-implicit-button-type
(1 occurrence)
error

<button> is missing recommended "type" attribute

<button id="headerBtnToggle" class="header__toggle bg-transparent border-0" aria-label="Toggle navig ...

Learn more
prefer-native-element
(2 occurrences)
error

Prefer to use the native <section> element

<div class="hero flex gap-12 items-center mx-auto" aria-labelledby="hero-title" role="region" data-a ...

---
 
CSS Report 


Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
at-rule-no-unknown
(1 occurrence)
error

Use only standard CSS at-rules to maintain cross-browser compatibility and prevent parsing errors.

@.header__nav-list {
  items-align: center;
}

Learn more
declaration-property-value-no-unknown
(1 occurrence)
error

Use only recognized property values to ensure styles apply correctly and consistently.

background-size: center center;

Learn more
frontend-mentor/no-fixed
(3 occurrences)
warning

Avoid position: fixed as it can cause content to be cut off when zoomed, creating accessibility issues for users who need to enlarge content.

position: fixed;

Learn more
frontend-mentor/prefers-reduced-motion
(3 occurrences)
warning

Provide alternatives for users who prefer reduced motion to prevent motion sickness and other accessibility issues.

-webkit-animation: slide-in-bck-center 1s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

Learn more
declaration-no-important
(1 occurrence)
warning

Avoid !important as it breaks the natural cascade and makes future style changes more difficult to implement.

display: none !important;

Learn more
declaration-property-unit-disallowed-list
(32 occurrences)
warning

Consider using relative units (em, rem) instead of absolute units (px, pt) to support resizing and improve accessibility.

height: 1px;

Learn more
declaration-property-value-keyword-no-deprecated
(2 occurrences)
warning

Replace deprecated keyword values with modern alternatives to ensure better browser compatibility.

appearance: button;

Learn more
no-duplicate-selectors
(7 occurrences)
warning

Consolidate duplicate selectors to maintain an organized and efficient stylesheet.

::file-selector-button {
          font: inherit;
          font-feature-settings: inherit;

Learn more
frontend-mentor/use-logical-properties
(13 occurrences)
info

Use logical properties (e.g., inline-start instead of left) to support different reading directions and improve internationalization.

margin-top: calc(var(--spacing) * 6);

Learn more
frontend-mentor/encourage-css-functions
(76 occurrences)
info

Consider using CSS functions like calc(), min(), and clamp() to create more responsive and flexible layouts that adapt to different viewport sizes.

height: 1px;

Learn more
frontend-mentor/encourage-css-variables
(8 occurrences)
info

Use CSS custom properties (variables) to centralize values, improve consistency, and make site-wide changes easier to implement.

color: #979797;

Learn more
frontend-mentor/max-width-media-query
(3 occurrences)
info

Consider using min-width instead of max-width and using a mobile-first approach, which can lead to cleaner code and better performance on smaller devices.

@media screen and (max-width: 40.625em) {
  .header__nav-link::after {
    bottom: -10px;
