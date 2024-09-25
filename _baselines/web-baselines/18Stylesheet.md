---
title: "18. CSS Positioning"
order-number: 19
toc-group: baseline-web
---
## 18. CSS Positioning

### Accessibility Requirements

-   [WCAG SC 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) -- When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

### Test Method Rationale

Meaningful information provided solely through CSS content may not be in the Document Object Model (DOM). Equivalent information must be available without CSS.

### Limitations, Assumptions, or Exceptions

-   Only the CSS techniques identified as Failures in WCAG 2.0 Level A and Level AA are included in this test. There may be other CSS techniques that affect conformance.
-   Inline styling is included in this test.

### 18.A for Test Procedure for Meaningful Background Image 
CSS background image is now covered under [Baseline 6.B Test Procedure for Images with empty text alternatives](https://ictbaseline.access-board.gov/web-baselines/06Images/#6b-test-procedure-for-images-with-an-empty-text-alternative).

### 18.B Test Procedure for CSS Positioned Content

**Baseline Test ID:** 18.B-CSSPositionedContent
#### Identify Content
<p id="18bIC">Meaningful content positioned with CSS</p>

#### Test Instructions
<ol id="18bTI">
    <li id="18bTI-1">Check that the reading order of the content (in context) is correct without the CSS position property. [SC 1.3.2]</li>
    <li id="18bTI-2">Check that the meaning of the content (in context) is preserved without the CSS position property. [SC 1.3.2]</li>
</ol>

#### Test Results
<p id="18bTR">If any of the above checks fail, then Baseline Test 18.B-CSSPositionedContent fails.</p>

### Advisory: Tips for streamlined test processes
- These tests are not to be performed by disabling all CSS. Content is not required to be perceivable and operable with all CSS disabled.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F1: Changing the meaning of content by positioning information with CSS](https://www.w3.org/WAI/WCAG22/Techniques/failures/F1)
-   [G57: Ordering the content in a meaningful sequence](https://www.w3.org/WAI/WCAG22/Techniques/general/G57)

