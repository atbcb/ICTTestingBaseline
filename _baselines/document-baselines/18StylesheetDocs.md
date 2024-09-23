---
title: "18. Meaningful Content and Sequence (Documents)"
order-number: 19
---

## 18. Meaningful Content and Sequence

### Accessibility Requirements

-   [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
-   [WCAG SC 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) -- When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

### Test Method Rationale

Meaningful content must be available to all users. The sequence of the content (in context) must be logical and preserve content meaning.

### Limitations, Assumptions, or Exceptions

-   Meaningful content provides information or context and includes content in headers, footers, watermarks, master page items, artifacts, and in floating elements.
-   Inline styling is included in this test.
-   Invisible content (text and background are the same color) is used for accessibility purposes and is not covered in Test 18.A. It is covered in 18.B.
-   Programmatically identified content is exposed to assistive technology. Document content that is not exposed to assistive technology can vary depending on document type.

### 18.A Test Procedure for Meaningful Visible Content

**Baseline Test ID:** 18.A-MeaningfulContent

#### Identify Content

<p id="d18aIC">Meaningful visible content</p>

Do not include meaningful background images, which are covered under [Baseline 6.B Test Procedure for Decorative Images](#b-test-procedure-for-images-with-an-empty-text-alternative).

#### Test Instructions

<ol id="d18aTI">
    <li id="d18aTI-1">Check that all meaningful content is available in the body of the document or programmatically identified. [SC 1.3.1]</li>
</ol>

#### Test Results

<p id="d18aTR">If any of the above checks fail, then Baseline Test 18.A-MeaningfulContent fails.</p>

### 18.B Test Procedure for Meaningful Sequence

**Baseline Test ID:** 18.B-MeaningfulSequence

#### Identify Content

<p id="d18bIC">Identify all meaningful content including invisible meaningful content</p>

#### Test Instructions

<ol id="d18bTI">
    <li id="d18bTI-1">Check that the reading order of all meaningful content (in context) is logical. [SC 1.3.2]</li>
</ol>

#### Test Results

<p id="d18bTR">If the above checks fail, then Baseline Test 18.B-MeaningfulSequence fails.</p>

### Advisory: Tips for Streamlined Test Processes

<p id="d18Advisory">None</p>

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F1: Changing the meaning of content by positioning information with CSS](https://www.w3.org/WAI/WCAG22/Techniques/failures/F1)
-   [G57: Ordering the content in a meaningful sequence](https://www.w3.org/WAI/WCAG22/Techniques/general/G57)
-   [PDF3: Ensuring correct tab and reading order in PDF documents](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF3)
-   [PDF4: Hiding decorative images with the Artifact tag in PDF documents](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF4)
-   [PDF17: Specifying consistent page numbering for PDF documents](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF17)