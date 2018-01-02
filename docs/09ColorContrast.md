# 9. Color (contrast)
## Rationale
### Requirement Rationale
Many factors beyond the designer's control affect peoples' ability to discern between colors/shades, including age (contrast sensitivity reduces with age), screen brightness, ambient light, color blindness, and some types of low vision. 

In general, the higher the level of contrast used, the more people will be able to see and use the content. 

### Test Method Rationale
This test is conducted to provide equal access to information for all users, including those who may experience difficulty in discerning between items with low contrast. Since larger font is easier to read, lower contrast ratios are permitted.    

## Accessibility Requirements
* WCAG SC 1.4.3 Contrast (minimum) -- The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
    * Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
    * Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
    * Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.

## Limitations, Assumptions, or Exceptions
* While text contained in logos rendered as images is exempt from this requirement, the image must still provide alternative text (e.g., via an `alt` attribute).

## Test Procedure for SC 1.4.3 Contrast (minimum)
WCAG 2.0 defines the contrast ratio as:
(L1 + 0.05) / (L2 + 0.05)
* L1 is the [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) of the lighter of the foreground or background colors
* L2 is the [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) of the darker of the foreground or background colors

### Selector/Identify Content
Select all text AND images of text that meet the following criteria:
* The text or image of text is NOT part of an inactive user interface component
* The text or image of text is NOT pure decoration
* The text or image of text IS visible to anyone
* The text or image of text is NOT part of a picture that contains significant other visual content
* The  text or image of text is NOT part of a logo

### Test Instructions
1. Determine the contrast ratio of foreground text and background.
1. Check that the contrast ratio is at least 4.5:1. 
1. If the contrast ratio is less than 4.5:1, check that the ratio is at least 3:1 AND the font meets one of the following criteria:
    * At least 18 point (23.94 pixels)
    * At least 14 point (18.62 pixels) AND bold (at least 700 font weight)

### Test Results
If both of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* Testing of text contrast changes includes changes due to mouse hover and selection status.
* The color contrast requirment is not specific to web content only, but includes software inspection in any window.
* There are a variety of color contrast tools that can perform the algorithms necessary to determine the contrast. See http://www.w3.org/TR/WCAG20-TECHS/G18.html for possible testing tools which use an appropriate algorithm.
