---
title: "22. Resize Text"
order-number: 23
---
## 22. Resize Text

### Accessibility Requirements

-   [WCAG SC 1.4.4 Resize text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html) -- Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

### Test Method Rationale

This baseline test requires an evaluation of visual content and functionality after text has been resized.

### Limitations, Assumptions, or Exceptions

-   Exception: captions and images of text are not included in the test.

### 22.1 Test Procedure for Resize Text

**Baseline Test ID:** 22.1-ResizeText
#### Identify Content
<p id="1IC">All text on a page.</p>

#### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Check that there is a mechanism to resize, scale, or zoom in on the content at least to 200% of original size. [SC 1.4.4] <br>
    Known approaches include:
        <ul>
        <li id="1TI-1i">Browser zoom function</li>
        <li id="1TI-1ii">Accessibility features provided by the platform or Operating System</li>
        <li id="1TI-1iii">Controls to change text size. (If browser, operating system, or platform’s zoom function is not supported by the page, the page must provide the resize mechanism.)</li>
        </ul></li>
    <li id="1TI-2">Modify the font size appearance to twice the width and height, or 200% larger.</li>
    <li id="1TI-3">Check for all of the following [SC 1.4.4]:
        <ol>
        <li id="1TI-3i">Text is not clipped, truncated or obscured</li>
        <li id="1TI-3ii">Text entered in text-based form controls resize fully</li>
        <li id="1TI-3iii">All functionality is available</li>
        <li id="1TI-3iv">All content is available</li>
        </ol></li>
</ol>

#### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 22.1-ResizeText fails.</p>

### Advisory: Tips for streamlined test processes

#### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent](https://www.w3.org/TR/WCAG20-TECHS/G178.html)
-   [G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width](https://www.w3.org/TR/WCAG20-TECHS/G179.html)
-   [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured](https://www.w3.org/TR/WCAG20-TECHS/F69.html)
-   [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](https://www.w3.org/TR/WCAG20-TECHS/F80.html)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../21TimedEvents) | [Next Baseline](../23MultipleWays)
