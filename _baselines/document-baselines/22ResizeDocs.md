---
title: "22. Resize Text (Docs)"
order-number: 23
toc-group: baseline-docs
banner-title: "Baseline for Documents"
---

## 22. Resize Text

### Accessibility Requirements

-   [WCAG SC 1.4.4 Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) -- Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

### Test Method Rationale

-   This baseline test requires an evaluation of visual content and functionality after text has been resized.

### Limitations, Assumptions, or Exceptions

-   Exception: captions and images of text are not included in the test.

### 22.A Test Procedure for Resize Text

**Baseline Test ID:** 22.A-ResizeText

#### Identify Content
<p id="d22aIC">All text on a page.</p>

#### Test Instructions
<ol id="d22aTI">
    <li id="d22aTI-1">Check that there is a mechanism to resize, scale, or zoom in on the content at least to 200% of original size. [SC 1.4.4] <br>
    Known approaches include:
        <ul>
        <li id="d22aTI-1i">Browser zoom function or text-sizing feature</li>
        <li id="d22aTI-1ii">Accessibility features provided by the platform or Operating System</li>
        <li id="d22aTI-1iii">On-page controls to change text size.</li>
        </ul></li>
    <li id="d22aTI-2">Modify the font size appearance to twice the width and height, or 200% larger.</li>
    <li id="d22aTI-3">Check for all of the following [SC 1.4.4]:
        <ul>
        <li id="d22aTI-3i">Text is not clipped, truncated, or obscured</li>
        <li id="d22aTI-3ii">Text entered in text-based form controls resize fully</li>
        <li id="d22aTI-3iii">All functionality is available</li>
        <li id="d22aTI-3iv">All content is available</li>
        </ul></li>
</ol>

#### Test Results
<p id="d22aTR">If any of the above checks fail, then Baseline Test 22.A-ResizeText fails.</p>

### Advisory: Tips for Streamlined Test Processes
-   None

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent](https://www.w3.org/WAI/WCAG22/Techniques/failures/F69) causes the text, image, or controls to be clipped, truncated, or obscured
-   [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](https://www.w3.org/WAI/WCAG22/Techniques/failures/F80)
-   [F94: Failure of Success Criterion 1.4.4 due to incorrect use of viewport units to resize text](https://www.w3.org/WAI/WCAG22/Techniques/failures/F94)
-   [G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent](https://www.w3.org/WAI/WCAG22/Techniques/general/G178)
-   [G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width](https://www.w3.org/WAI/WCAG22/Techniques/general/G179)
