# 16. Language
## Accessibility Requirements
* [WCAG SC 3.1.1 Language of Page](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html) -- The default human language of each Web page can be programmatically determined.
* [WCAG SC 3.1.2 Language of Parts](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html) -- The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. 

## Test Method Rationale
The default language for each page must be programmatically identified. Passages that use a language other than the default must be programmatically identified.
    
## Limitations, Assumptions or Exceptions
* The requirement to identify page language is applicable to all Web pages.
* The language attribute 'lang' can be an attribute for many HTML tags. The structure for it is
'<[HTML tag] lang="[primary language subtag]">'. The primary language subtag is the first 2 or 3 character code in the value of the `lang` attribute. Additional languages specified after the primary language subtag are not part of this test.
* Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts

## Test Procedure for SC 3.1.1 Language of Page
### Select/Identify Content
Text and alternative text on pages.

### Test Instructions
1. Check that the `lang` attribute is defined on the `<html>` tag for the page (H57).
1. Identify the default language of the page by reviewing the page content. The default language of the page is the language in which most of the content is presented.
1. Check that the value of the 'lang' attribute matches the determined default language for the page.
    1. Identify the default language of the page by reviewing the page content. Check that the primary language subtag correctly identifies this language. The primary language subtag is the first 2 or 3 character code in the value of the `lang` attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. Check that the primary language subtag conforms to the Internet Assigned Numbers Authority's [IANA  Language subtag registry](http://www.iana.org/assignments/language-subtag-registry).  

### Test Results
* If any of the above checks fail, SC 3.1.1 and Baseline Requirement 16 fail.

## Test Procedure for SC 3.1.2 Language of Parts
### Select/Identify Content
Content text or alternative text segment(s) that differs from the default language of the page.

### Test Instructions
1. Check that the `lang` attribute is specified for any HTML element that contains a content segment that differs from the default language of the page (H58). An element without a set language inherits its language attribute from parent elements.
1. Identify the language of the content segment.
1. Check that the value of the 'lang' attribute is correctly defined for the content segment. 
    1. Identify the default language of the page by reviewing the page content. Check that the primary language subtag correctly identifies this language. The primary language subtag is the first 2 or 3 character code in the value of the `<lang>` attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. Check that the primary language subtag conforms to the Internet Assigned Numbers Authority's [IANA  Language subtag registry](http://www.iana.org/assignments/language-subtag-registry). 

### Test Results
* If any of the above checks fail, SC 3.1.2 and Baseline Requirement 16 fail.

## Advisory: Tips for streamlined test processes

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * Technique [H57](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H57.html): Using language attributes on the html element
    * Technique [H58](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H58.html): Using language attributes to identify changes in the human language

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](15Links.md) | [Next Baseline](17AudioVideo.md)
