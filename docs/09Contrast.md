# 9. Contrast
## Accessibility Requirements
* [WCAG SC 1.4.3 Contrast (minimum)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) -- The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
    * Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
    * Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
    * Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.

## Test Method Rationale
This test is conducted to evaluate equal access to information for all users, including those who may experience difficulty in discerning between items with low contrast.

## Limitations, Assumptions, or Exceptions
* While text contained in logos rendered as images is exempt from this requirement, the image must still provide alternative text (e.g., via an `alt` attribute).

## Test Procedure for SC 1.4.3 Contrast (minimum)
### Select/Identify Content
Select all text AND images of text that meet the following criteria:
* The text or image of text is NOT part of an inactive user interface component
* The text or image of text is NOT pure decoration
* The text or image of text IS visible to anyone
* The text or image of text is NOT part of a picture that contains significant other visual content
* The  text or image of text is NOT part of a logo

### Test Instructions
1. Determine the [contrast ratio](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef) of foreground text and background.
1. Check that the contrast ratio is at least 4.5:1. 
1. If the contrast ratio is less than 4.5:1, check that the ratio is at least 3:1 AND the font meets one of the following criteria:
    * At least 18 point (23.94 pixels)
    * At least 14 point (18.62 pixels) AND bold (at least 700 font weight)

### Test Results
If both of the above checks fail, then SC 1.4.3 and Baseline Requirement 9 fail.

## Advisory: Tips for streamlined test processes
* Testing of text contrast changes includes changes due to mouse hover and selection status.
* There are a variety of color contrast tools that can perform the algorithms necessary to determine the contrast. See http://www.w3.org/TR/WCAG20-TECHS/G18.html for possible testing tools that use an appropriate algorithm. 
* **Note:** Read-only and disabled interface components are not the same. Disabled interface components can be considered inactive interface components, read-only interface components are active interface components.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/TR/WCAG20-TECHS/G18.html)
    * [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](https://www.w3.org/TR/WCAG20-TECHS/G174.html)
    * [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/TR/WCAG20-TECHS/F83.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](08Sensory.md) | [Next Baseline](10Flashing.md)
