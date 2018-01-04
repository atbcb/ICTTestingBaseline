# 17. Language
## Rationale
The default language for each page must be programmatically identified. Passages that use a language other than the default must be programmatically identified.

## Accessibility Requirements
* WCAG2 SC: 3.1.1 Language of Page 
* WCAG2 SC: 3.1.2 Language of Parts
    
## Limitations, Assumptions or Exceptions
* The requirement to identify page language is applicable to all Web pages.
* The language attribute 'lang' can be an attribute for many HTML tags. The structure for it is
'<[HTML tag] lang="[primary language subtag]">'. The primary language subtag is the first 2 or 3 character code in the value of the `lang` attribute. Additional languages specified after the primary language subtag are not part of this test.
*	Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts

## Test Procedure for SC 3.1.1
### Selector (Identify Content)  
Page content

### Test Instructions
1. Check that the `lang` attribute is defined on the `<html>` tag for the page (H57). *<<KE comment - this is a ST but the entire test is ST-based.>>*
1. Identify the default language of the page by reviewing the page content. 
1. Check that the value of the 'lang' attribute is correctly defined for the page.
    1. The primary language subtag is the first 2 or 3 character code in the value of the `lang` attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. Check that the primary language subtag conforms to the Internet Assigned Numbers Authority's [IANA  Language subtag registry](http://www.iana.org/assignments/language-subtag-registry).  

#### Test Results
* If any of the above checks fail, this SC fails, and this Baseline fails.

## Test Procedure for SC 3.1.2
### Selector (Identify Content)  
Content segment that differs from the default language of the page

### Test Instructions
1. Check that the `lang` attribute is specified for any HTML element that contains a content segment that differs from the default language of the page (H58). An element without a set language inherits its language attribute from parent elements.
1. Identify the language of the content segment.
1. Check that value of the 'lang' attribute is correctly defined for the content segment. 
    1. The primary language subtag is the first 2 or 3 character code in the value of the `<lang>` attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. Check that the primary language subtag conforms to the Internet Assigned Numbers Authority's [IANA  Language subtag registry](http://www.iana.org/assignments/language-subtag-registry). 

#### Test Results
* If any of the above checks fail, this SC fails, and this Baseline fails.

## Advisory
* Technique [H57](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H57.html): Using language attributes on the html element
* Technique [H58](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H58.html): Using language attributes to identify changes in the human language
