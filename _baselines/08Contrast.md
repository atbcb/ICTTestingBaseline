---
title: "8. Contrast"
order-number: 9
---
## 8. Contrast

### Accessibility Requirements

-   [WCAG SC 1.4.3 Contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) -- The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
    -   Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
    -   Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
    -   Logotypes: Text that is part of a logo or brand name has no contrast requirement.

### Test Method Rationale

This test is conducted to evaluate equal access to information for all users, including those who may experience difficulty in discerning between items with low contrast.

### Limitations, Assumptions, or Exceptions

-   **Exception:** The following types of text and images of text are not included in this test:
    -   Logotypes: logo or brand name
    -   Inactive (disabled) user interface components
    -   Pure decoration purposes and not meaningful, having no functionality
    -   Contained within a picture that contains significant other visual content
-   Testing of text contrast changes includes changes due to mouse hover and selection status.
-   Disabled input elements do not receive keyboard focus, cannot be selected, and cannot be modified. These are not required to meet contrast ratio requirements. **Note:** Read-only and disabled interface components are not the same. Disabled interface components can be considered inactive interface components; read-only interface components are active interface components and must meet contrast ratio requirements.
-   [Large scale text](https://www.w3.org/TR/WCAG22/#dfn-large-scale) is at least 18 point text or 14 point bold text.

### 8.A Test Procedure for Contrast (minimum)

**Baseline Test ID:** 8.A-ContrastMinimum
#### Identify Content
<p id="8aIC">All visible text  **AND**  images of text (except those noted in Limitations, Assumptions, or Exceptions above)</p>

#### Test Instructions
<ol id="8aTI">
    <li id="8aTI-1">Determine the <a href="https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio" target="_blank" rel="noopener">contrast ratio</a> of foreground text and background.</li>
    <li id="8aTI-2">Check that the contrast ratio is at least 4.5:1. [SC 1.4.3]</li>
    <li id="8aTI-3">If the contrast ratio is less than 4.5:1, check that the ratio is at least 3:1 <strong>AND</strong> the font meets one of the following criteria: [SC 1.4.3]
        <ul>
            <li>At least 18 point (24 pixels)</li>
            <li>At least 14 point (18.5 pixels) <strong>AND</strong> bold (at least 700 font weight)</li>
        </ul>
    </li>
</ol>

#### Test Results
<p id="8ATR">If both of the above checks fail, then Baseline Test 8.A-ContrastMinimum fails.</p>

### Advisory: Tips for streamlined test processes

-   There are a variety of color contrast tools that can perform the algorithms necessary to determine the contrast. See [Sufficient Technique G18](https://www.w3.org/WAI/WCAG22/Techniques/general/G18) for possible testing tools that use an appropriate algorithm.
-   Use contrast tools that do not round values. A ratio of 4.499:1 would not meet the 4.5:1 threshold.
-   [WCAG 2.2 Understanding 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) suggests using foreground and background colors obtained from the user agent, or the underlying markup and stylesheets for the contrast ratio computation, rather than the text as presented on screen.
-   While text contained in logos rendered as images is exempt from this requirement, the image must still provide alternative text (e.g., via an alt attribute).

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)
-   [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG22/Techniques/general/G145)
