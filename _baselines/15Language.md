---
title: "15. Language"
order-number: 16
---
## 15. Language

### Accessibility Requirements

-   [WCAG SC 3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) -- The default human language of each Web page can be programmatically determined.
-   [WCAG SC 3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) -- The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

### Test Method Rationale

The default human language for each page must be programmatically identified. Passages that use a language other than the default must be programmatically identified.

### Limitations, Assumptions or Exceptions

-   For Web content, the language attribute lang can be an attribute for many HTML tags. The structure for it is HTML tag `lang="[primary language subtag]"`. The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. Dialects specified after the primary language subtag (additional 2 or 3 character codes) are not part of this test.
-   Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts.

### 15.A Test Procedure for Language of Page

**Baseline Test ID:** 15.A-LanguagePage
#### Identify Content
<p id="15aIC">Pages with text (including text alternatives).</p>

#### Test Instructions
<ol id="15aTI">
    <li id="15aTI-1">Identify the default human language of the page by reviewing the page content. The default human language of the page is the language in which most of the content is presented.</li>
    <li id="15aTI-2">Check that the lang attribute is defined on the <code>&lt;html&gt;</code> tag for the page. [SC 3.1.1]</li>
    <li id="15aTI-3">Check that the value of the lang attribute matches the determined default human language for the page. [SC 3.1.1]
    <ul>
        <li>The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications that may follow the primary language subtag.)</li>
        <li>The primary language subtag must conform to the Internet Assigned Numbers Authority's <a href="https://www.iana.org/assignments/language-subtag-registry" target="_blank" rel="noopener">IANA Language subtag registry</a>.</li>
    </ul></li>
</ol>

#### Test Results
<p id="15ATR">If any of the above checks fail, then Baseline Test 15.A-LanguagePage fails.</p>

### 15.B Test Procedure for Language of Parts

**Baseline Test ID:** 15.B-LanguagePart
#### Identify Content
<p id="15bIC">Text content that differs from the default human language of the page including alternative text for non-text content.</p>

#### Test Instructions
<ol id="15bTI">
    <li id="15bTI-1">Identify the human language of the text content that differs from the default human language of the page.</li>
    <li id="15bTI-2">Check that the lang attribute is specified for any HTML element that contains a content segment that differs from the default human language of the page. [SC 3.1.2]<br>
    Note: An element without a set language inherits its language attribute from parent elements.</li>
    <li id="15bTI-3">Check that the value of the lang attribute is correctly defined for the content segment. [SC 3.1.2]
        <ul>
            <li id="15bTI-3i">The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications that may follow the primary language subtag.)</li>
            <li id="15bTI-3ii">The primary language subtag must conform to the Internet Assigned Numbers Authority's <a href="https://www.iana.org/assignments/language-subtag-registry" target="_blank" rel="noopener">IANA Language subtag registry</a>.</li>
        </ul>
    </li>
</ol>

#### Test Results
<p id="15BTR">If any of the above checks fail, then Baseline Test 15.B-LanguagePart fails.</p>

### Advisory: Tips for streamlined test processes

None.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
-   [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG22/Techniques/html/H58)
