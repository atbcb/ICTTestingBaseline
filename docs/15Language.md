# 15. Language

Accessibility Requirements
--------------------------
-   [WCAG SC 3.1.1 Language of Page](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html) -- The default human language of each Web page can be programmatically determined.
-   [WCAG SC 3.1.2 Language of Parts](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html) -- The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

Test Method Rationale
---------------------
The default human language for each page must be programmatically identified. Passages that use a language other than the default must be programmatically identified.

Limitations, Assumptions or Exceptions
--------------------------------------
-   For Web content, the language attribute lang can be an attribute for many HTML tags. The structure for it is HTML tag `lang="[primary language subtag]"`. The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. Dialects specified after the primary language subtag (additional 2 or 3 character codes) are not part of this test.
-   Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts.

15.1 Test Procedure for Language of Page
--------------------------------------------
**Baseline Test ID:** 15.1-LanguagePage
### Identify Content
Pages with text (including text alternatives).

### Test Instructions
1.  Identify the default human language of the page by reviewing the page content. The default human language of the page is the language in which most of the content is presented.
2.  Check that the lang attribute is defined on the `<html>` tag for the page. [SC 3.1.1]
3.  Check that the value of the lang attribute matches the determined default human language for the page. [SC 3.1.1]
    -  The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    -  The primary language subtag must conform to the Internet Assigned Numbers Authority's [IANA Language subtag registry](http://www.iana.org/assignments/language-subtag-registry).

### Test Results
If any of the above checks fail, then Baseline Test 15.1-LanguagePage fails.

15.2 Test Procedure for Language of Parts
---------------------------------------------
**Baseline Test ID:** 15.2-LanguagePart
### Identify Content
Text content that differs from the default human language of the page including alternative text for non-text content.

### Test Instructions
1.  Identify the human language of the text content that differs from the default human language of the page.
2.  Check that the lang attribute is specified for any HTML element that contains a content segment that differs from the default human language of the page. [SC 3.1.2]
    - Note: An element without a set language inherits its language attribute from parent elements.
3.  Check that the value of the lang attribute is correctly defined for the content segment. [SC 3.1.2]
    1.  The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    2.  The primary language subtag must conform to the Internet Assigned Numbers Authority's [IANA Language subtag registry](http://www.iana.org/assignments/language-subtag-registry).

### Test Results
-   If any of the above checks fail, then Baseline Test 15.2-LanguagePart fails.

Advisory: Tips for streamlined test processes
---------------------------------------------
None.

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [H57: Using language attributes on the html element](https://www.w3.org/TR/WCAG20-TECHS/H57.html)
-   [H58: Using language attributes to identify changes in the human language](https://www.w3.org/TR/WCAG20-TECHS/H58.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](14Links.md) | [Next Baseline](16AudioVideo.md)
