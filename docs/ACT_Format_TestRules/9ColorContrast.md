# 9. Color (contrast)
## Requirement
WCAG SC 1.4.3 Contrast (minimum)

The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
* Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
* Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
* Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.

## Rationale
### Test Rationale
Many factors beyond the designer's control affect peoples' ability to discern between colors/shades, including age (contrast sensitivity reduces with age), screen brightness, ambient light, color blindness, and some types of low vision. 

In general, the higher the level of contrast used, the more people will be able to see and use the content. 

### Test Method Rationale

## Tools Necessary
* (PLACEHOLDER) - Tool to determine text size (TBD)
* [Color Contrast Analyzer](https://www.dhs.gov/publication/web-accessibility-toolbar) (included as part of the Web Accessibility Toolbar or as a stand-alone tool)

## Test Rules
### B9.1-color-contrast-large-text
#### Rule Description
This test rule evaluates whether text and its background meets the requirement for sufficient contrast, as defined in the WCAG Success Criterion 1.4.3

#### Accessibility Requirements
*	WCAG SC 1.4.3 Contrast (minimum)

#### Limitations, Assumptions, or Exceptions
* While text contained in logos rendered as images is exempt from this requirement, the image must still provide alternative text (e.g., via an `alt` attribute).
* The thresholds in the Color Contrast Analyzer are based on the WCAG 2 minimum contrast ratio of 4.5:1. WCAG 2.0 recommends a lower threshold of 3:1 for 'large scale' text (18 point or 14 point bold). Although the Colour Contrast Analyser has a pass/fail indicator for large text, it does not determine the size of the text being tested. It is acceptable to allow a 3:1 ratio for larger text so long as the test includes a reliable mechanism for determining the font's point size.
* If using a dual-monitor setup, the Color Contrast Analyzer requires both the tool and the window under test to be displayed on the primary monitor.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select all text AND images of text that meet the following criteria:
* The text or image of text is NOT part of an inactive user interface component
* The text or image of text is NOT pure decoration
* The text or image of text IS visible to anyone
* The text or image of text is NOT part of a picture that contains significant other visual content
* The  text or image of text is NOT part of a logo or brand name

AND

* Rendered font size of at least 18 point (23.94 pixels) (PLACEHOLDER - Use text size tool to determine font size)

OR

* Rendered font size of at least 14 point (18.62 pixels) AND bold (at least 700 font weight)


##### Test Cases
###### Test Case Mode
Semi-automated; manual evaluation of contrast characterisics, using the Color Contrast Analyzer to specifically identify contrast ratios.

###### Test Case
Using the Color Contrast Analyzer, identify text color, background color, and contrast ratio between text and background
1. Check that contrast ratio is AT LEAST 3:1

###### Output
Pass: if test case passes
Fail: if test case fails

### B9.2-color-contrast-small-text
#### Rule Description
This test rule evaluates whether text and its background meets the requirement for sufficient contrast, as defined in the WCAG Success Criterion 1.4.3

#### Accessibility Requirements
*	WCAG SC 1.4.3 Contrast (minimum)

#### Limitations, Assumptions, or Exceptions
* While text contained in logos rendered as images is exempt from this requirement, the image must still provide alternative text (e.g., via an 'alt' attribute.
* The thresholds in the Color Contrast Analyzer are based on the WCAG 2 minimum contrast ratio of 4.5:1. WCAG 2.0 recommends a lower threshold of 3:1 for 'large scale' text (18 point or 14 point bold). Although the Colour Contrast Analyser has a pass/fail indicator for large text, it does not determine the size of the text being tested. It is acceptable to allow a 3:1 ratio for larger text so long as the test includes a reliable mechanism for determining the font's point size.
* If using a dual-monitor setup, the Color Contrast Analyzer requires both the tool and the window under test to be displayed on the primary monitor.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select all text AND images of text that meet the following criteria:
* The text or image of text is NOT part of an inactive user interface component
* The text or image of text is NOT pure decoration
* The text or image of text IS visible to anyone
* The text or image of text is NOT part of a picture that contains significant other visual content
* The  text or image of text is NOT part of a logo or brand name

AND

* Rendered font size of less than 14 point (18.62 pixels)  (PLACEHOLDER - Use text size tool to determine font size)

OR

* Rendered font size of non-bold (less than 700 font weight) text less than 18 point (23.94 pixels) 

##### Test Cases
###### Test Case Mode
Semi-automated; manual evaluation of contrast characterisics, using the Color Contrast Analyzer to specifically identify contrast ratios.

###### Test Case
Using the Color Contrast Analyzer, identify text color, background color, and contrast ratio between text and background
1. Check non-bold (less than 700 text font weight) that contrast ratio is AT LEAST 4.5:1

###### Output
Pass: if test case passes
Fail: if test cases fails

##### Outcome for WCAG SC 1.4.3
The overall test procedure (accumulating the results of the individual test cases) should return one of the following outcomes:
* Passed – the test target passed the test
* Failed – the test target failed the test
* Cannot tell: it is unclear whether or not the test target passes or fails the test

The web page or system meets the Baseline Requirement for 9. Color (contrast) and WCAG SC 1.4.3 if BOTH B9.1 and B9.2 pass

The web page or system DOES NOT meet the Baseline Requirement for 9. Color (contrast) and WCAG SC 1.4.3 if either B9.1 or B9.2 fails

## Advisory: Tips for streamlined test processes
* Instructions for testing of text contrast changes, due to mouse hover and status, can be incorporated into streamlined tests
* The Color Contrast Analyzer is not specific to web content only. The tool can be used for software inspection in any window.
