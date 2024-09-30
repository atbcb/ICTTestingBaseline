---
title: "15. Language (Docs)"
order-number: 16
toc-group: baseline-docs
banner-title: "Baseline for Documents"
---

## 15. Language

### Accessibility Requirements

-   [WCAG SC 3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) -- The default human language of the document can be programmatically determined.
-   [WCAG SC 3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) -- The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

### Test Method Rationale

The default human language for the document must be programmatically identified. Passages of content that use a language other than the default must be programmatically identified.

### Limitations, Assumptions, or Exceptions

-   The primary language for documents is based on the application's language preference settings. Other language properties may be applied to the entire document, specific content, or sections of a document. Dialects specified after the primary language are not part of this test.
-   Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts.

### 15.A Test Procedure for Language of Document

**Baseline Test ID:** 15.A-LanguageDocument

#### Identify Content

<p id="d15aIC">Pages with text (including text alternatives).</p>

#### Test Instructions

<ol id="d15aTI">
    <li id="d15aTI-1">Identify the default human language of the document by reviewing the document content. The default human language of the document is the language in which most of the content is presented.</li>
    <li id="d15aTI-2">Check that the value of the language property matches the determined default human language for the document. [SC 3.1.1]</li>
</ol>

#### Test Results

<p id="d15aTR">If any of the above checks fail, then Baseline Test 15.A-LanguagePage fails.</p>

### 15.B Test Procedure for Language of Parts

**Baseline Test ID:** 15.B-LanguageParts

#### Identify Content

<p id="d15bIC">Text content that differs from the default human language of the document including alternative text for non-text content.</p>

#### Test Instructions

<ol id="d15bTI">
    <li id="d15bTI-1">Identify the human language of the text content that differs from the default human language of the document.</li>
    <li id="d15bTI-2">Check that the appropriate language is programmatically specified for any content segment that differs from the default human language of the document. [SC 3.1.2]</li>
    Note: An element without a set language inherits its language property from the document’s default language settings.
</ol>

#### Test Results

<p id="d15bTR">If any of the above checks fail, then Baseline Test 15.B-LanguagePart fails.</p>

### Advisory: Tips for Streamlined Test Processes

None

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
-   [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG22/Techniques/html/H58)
-   [PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF16)
-   [PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF19)