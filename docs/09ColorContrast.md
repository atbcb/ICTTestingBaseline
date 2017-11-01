# 9. Color (contrast)
## Rationale
Many factors beyond the designer's control affect peoples' ability to discern between colors/shades, including age (contrast sensitivity reduces with age), screen brightness, ambient light, color blindness, and some types of low vision. 

In general, the higher the level of contrast used, the more people will be able to see and use the content. 

## Accessibility Requirements
WCAG SC 1.4.3 Contrast (minimum)

The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
* Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
* Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
* Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.

## Limitations, Assumptions, or Exceptions
* While text contained in logos rendered as images is exempt from this requirement, the image must still provide alternative text (e.g., via an `alt` attribute).
* When the contrast ratio of text to background is less than 4.5:1 but at least 3.1, the size of the text needs to be examined to determine if it meets the WCAG 2.0 definition of 'large scale' text (18 point or 14 point bold). 
* There are a variety of color contrast tools that can perform the algorithms necessary to determine the contrast. See http://www.w3.org/TR/WCAG20-TECHS/G18.html for possible testing tools which use an appropriate algorithm.

## Test Procedure
The luminance of the foreground and background and their contrast ratio should be determined using the WCAG algorithms.

***Luminance formula***

L = 0.2126 * __R__ + 0.7152 * __G__ + 0.0722 * __B__

The __R__, __G__ and __B__ are defined as:
* if R sRGB <= 0.03928 then __R__ = R sRGB/12.92, else __R__ = ((R sRGB +0.055)/1.055) ^ 2.4
* if G sRGB <= 0.03928 then __G__ = G sRGB/12.92, else __G__ = ((G sRGB +0.055)/1.055) ^ 2.4
* if B sRGB <= 0.03928 then __B__ = B sRGB/12.92, else __B__ = ((B sRGB +0.055)/1.055) ^ 2.4

The "^" character is the exponentiation operator, and R sRGB,G sRGB, and B sRGB are defined as:
* R sRGB = R 8bit /255
* G sRGB = G 8bit /255
* B sRGB = B 8bit /255

***Contrast Ratio formula***
(L1 + 0.05) / (L2 + 0.05)
* L1 is the relative luminance of the lighter of the foreground or background colors
* L2 is the relative luminance of the darker of the foreground or background colors

### Selector (Identify Content)
Select all text AND images of text that meet the following criteria:
* The text or image of text is NOT part of an inactive user interface component
* The text or image of text is NOT pure decoration
* The text or image of text IS visible to anyone
* The text or image of text is NOT part of a picture that contains significant other visual content
* The  text or image of text is NOT part of a logo or brand name

### Test Instructions

#### Tests for 1.4.3
Use the WCAG algorithm or a color contrast analyzer tool that does so to:
<ol>
<li> Measure the relative luminance of each letter (unless they are all uniform).</li>
<li> Measure the relative luminance of the background pixels immediately next to the letter using same formula.</li>
<li> Calculate the contrast ratio. If the contrast ratio is less than 4.5:1 but at least 3:1, continue to the next step.</li>
<li> Calculate if the font size meets one of the following criteria:
<ol> 
<li> At least 18 point (23.94 pixels)</li> 
<li> At least 14 point (18.62 pixels) AND bold (at least 700 font weight)</li>
</ol>
</ol> 

##### Test Results for 1.4.3
If the tests for SC 1.4.3 fails, then the content is not conformant to SC 1.4.3

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* Testing of text contrast changes includes changes due to mouse hover and selection status.
* The color contrast requirment is not specific to web content only, but includes software inspection in any window.
