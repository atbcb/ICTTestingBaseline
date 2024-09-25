---
title: "11. Document Titles"
order-number: 12
toc-group: baseline-docs
banner-title: "Baseline for Documents"
---

## 11. Document Titles

### Accessibility Requirements

1.  [WCAG2 SC 2.4.2 Document Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) -- Documents have titles that describe topic or purpose.

### Test Method Rationale

The Title property defines the title of the document and is required in all documents. This test evaluates the presence of a descriptive title for the document.

### Limitations, Assumptions, Exceptions

1. Every document must have a descriptive title. This test always applies.

2. This test would apply to all documents in a collection of documents (e.g., PDF portfolios).

### 11.A Test Procedure for Document Titled

**Baseline Test ID:** 11.A-DocumentTitled

#### Identify Content

<p id="d11aIC">Title property for the document.</p>

#### Test Instructions

<ol id="d11aTI">
    <li id="d11aTI-1">Check that the document's Title property is defined for the document. [SC 2.4.2]</li>
    <li id="d11aTI-2">Check that the document title describes the contents or purpose of the document. [SC 2.4.2]</li>
</ol>

#### Test Results

<p id="d11aTR">If any of the above checks fail, then Baseline Test 11.A-DocumentTitled fails.</p>

### Advisory: Tips for Streamlined Test Processes

None

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](https://www.w3.org/WAI/WCAG22/Techniques/failures/F25)
-   [G88: Providing descriptive titles for Web pages](https://www.w3.org/TR/WCAG20-TECHS/G88.html)
-   [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG22/Techniques/html/H25)
-   [PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF18)
