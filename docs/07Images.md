# 7. Images
## Rule Description (in plain language)
Images must have a text alternative that serves the equivalent purpose.

## Accessibility Requirements
* WCAG2 SC: 1.1.1. Non-Text 
  * Technique [ARIA6](https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html): Using aria-label to provide labels for objects
  * Technique [ARIA10](https://www.w3.org/TR/WCAG20-TECHS/ARIA10.html): Using ariaG196: Using a text alternative on one item within a group of images that describes all items in the group-labelledby to provide a text alternative for non-text content
  * Technique [G196](https://www.w3.org/TR/WCAG20-TECHS/G196.html): Using a text alternative on one item within a group of images that describes all items in the group
  * Technique [H2](https://www.w3.org/TR/WCAG20-TECHS/H2.html): Combining adjacent image and text links for the same resource
  * Technique [H37](https://www.w3.org/TR/WCAG20-TECHS/H37.html): Using alt attributes on img elements
  (not really an image) * Technique [H53](https://www.w3.org/TR/WCAG20-TECHS/H53.html): Using the body of the object element *refer to Software Baseline for testing the object contents; support for Flash is best in IE*
  (not really and image) * Technique [H35](https://www.w3.org/TR/WCAG20-TECHS/H35.html): Providing text alternatives on applet elements *refer to Software Baseline for testing the applet contents; support for JAVA is best in IE*

  * Technique [H86](https://www.w3.org/TR/WCAG20-TECHS/H86.html): Providing text alternatives for ASCII art, emoticons, and leetspeak
* WCAG2 SC: 1.4.5 Images of Text

## Limitations, Assumptions, Exceptions
 * Image formats include .jpg, .png, .svg, .gif, .tiff, .bmp.
 * Decoration, Formatting, Invisible: If image is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.
 * CAPTCHA: If the purpose of the image is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the image(s) are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. ([G143](https://www.w3.org/TR/WCAG20-TECHS/G143.html) and [G144](https://www.w3.org/TR/WCAG20-TECHS/G144.html) are specific to captchas.) 
 * Font icons are considered a form of ASCII art, graphics generated with text.
 * Images of text which are essential to the information being conveyed are exempt from SC 1.4.5.  Logotypes (text that is part of a logo or brand name) are considered essential.
 
## Test Procedure 
### Selector
Meaningful Images

### Test Instructions
1. Review the accessible name and accessible description properties of the meaningful image.
  * Numerous attributes contribute to the computation of the accessible name and accessible description. 
  * [HTML Accessibility API Mappings 1.0 for img](https://www.w3.org/TR/2017/WD-html-aam-1.0-20171027/#img-element)
2. Check that the combination of accessible name and accessible description provide an equivalent description and purpose.

#### Test Results
* If any of the above checks fail, then this SC fails

### Selector
Decorative Images

### Test Instructions
1. Review the accessible name and accessible description properties of the decorative image.
  * Numerous attributes contribute to the computation of the accessible name and accessible description. 
  * [HTML Accessibility API Mappings 1.0 for img](https://www.w3.org/TR/2017/WD-html-aam-1.0-20171027/#img-element)
2. Check that the combination of accessible name and accessible description are empty.

#### Test Results
* If any of the above checks fail, then this SC fails

## Baseline Requirement Outcome
* If any SC fails, then this baseline fails
