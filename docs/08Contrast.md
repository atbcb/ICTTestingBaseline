# 8. Contrast
## Accessibility Requirements
* [WCAG SC 1.4.3 Contrast (minimum)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) -- The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
    * Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
    * Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
    * Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.
    
**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
This test is conducted to evaluate equal access to information for all users, including those who may experience difficulty in discerning between items with low contrast.

## Limitations, Assumptions, or Exceptions
* **Exception:** The following types of text and images of text are not included in this test:
  * Logotypes: logo or brand name
  * Inactive (disabled) user interface components
  * Pure decoration purposes and not meaningful, having no functionality
  * Contained within a picture that contains significant other visual content
* While text contained in logos rendered as images is exempt from this requirement, the image must still provide alternative text (e.g., via an alt attribute).
* Testing of text contrast changes includes changes due to mouse hover and selection status.
* Disabled input elements do not receive keyboard focus, cannot be selected, and cannot be modified. These are not required to meet contrast ratio requirements. **Note:** Read-only and disabled interface components are not the same. Disabled interface components can be considered inactive interface components, read-only interface components are active interface components.
* Large scale text is defined as at least 18 point, regular or 14 point, bold.

## Test Procedure for SC 1.4.3 Contrast (minimum)
### Identify Content
All visible text AND images of text (except those noted in Limitations, Assumptions, or Exceptions above)

### Test Instructions
1. Determine the [contrast ratio](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef) of foreground text and background.
2. Check that the contrast ratio is at least 4.5:1.
3. If the contrast ratio is less than 4.5:1, check that the ratio is at least 3:1 AND the font meets one of the following criteria:
    * At least 18 point (23.94 pixels)
    * At least 14 point (18.62 pixels) AND bold (at least 700 font weight)

### Test Results
If both of the above checks fail, then SC 1.4.3 and Baseline Requirement 8 fail.

## Advisory: Tips for streamlined test processes
* There are a variety of color contrast tools that can perform the algorithms necessary to determine the contrast. See http://www.w3.org/TR/WCAG20-TECHS/G18.html for possible testing tools that use an appropriate algorithm.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/TR/WCAG20-TECHS/G18.html)
    * [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](http://www.w3.org/TR/WCAG20-TECHS/G145.html) (when the text is at least 18 point if not bold and at least 14 point if bold).

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](07Sensory.md) | [Next Baseline](09Flashing.md)
