# 22. Resize Text
## Accessibility Requirements
* [WCAG SC 1.4.4 Resize text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html) -- Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

## Test Method Rationale
This baseline test requires visual inspection of text to evaluate content and functionality.

## Limitations, Assumptions, or Exceptions
* Exception: Captions and images of text are not included in the test.

## Test Procedure for 1.4.4 Resize Text
### Identify Content
All text in software or on a Web page 

### Test Instructions
1. Check that there is a mechanism to resize, scale, or zoom in on the content at least to 200% of original size. Known approaches include:
    * Browser zoom function
    * Accessibility features provided by the platform or Operating System
    * Page/software controls to change text size. (If browser, operating system, or platform’s zoom function is not supported by the page/software, the page/software must provide the resize mechanism.)
2. Modify the font size appearance to twice the width and height, or 200% larger.
3. Check for all of the following:
    * Text is not clipped, truncated or obscured
    * Text entered in text-based form controls resize fully
    * All functionality is available
    * All content is available 

### Test Results
If any of the above checks fail, then SC 1.4.4 and Baseline Requirement 22 fail.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent](https://www.w3.org/TR/WCAG20-TECHS/G178.html)
* [G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width](https://www.w3.org/TR/WCAG20-TECHS/G179.html)
* [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured](https://www.w3.org/TR/WCAG20-TECHS/F69.html)
* [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](https://www.w3.org/TR/WCAG20-TECHS/F80.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](21TimedEvents.md) | [Next Baseline](23MultipleWays.md)
