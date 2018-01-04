# 17. Language
## Rationale
To ensure text and screen readers properly render language for understanding, the default language for each page must be programmatically identified. In addition, passages that use a language other than the default must be programmatically identified.

## Accessibility Requirements
* WCAG2 SC: 3.1.1 Language of Page -- The default language for each page can be programmatically determined.
* WCAG2 SC: 3.1.2 Language of Parts -- The human language of each passage or phrase in the content can be programmatically determined.

## Limitations, Assumptions or Exceptions
*	Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts

## Test Procedure for SC 3.1.1
### Selector (Identify Content)  
Identify the primary (default) language used on the page by reviewing the page content. 

### Test Instructions
1. Check that the `<lang>` attribute is defined on the `<html>` tag for page. 
1.Check that the primary language subtag is correctly defined for the page.
    1. The primary language subtag is the first 2 or 3 character code in the value of the `<lang>` attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. The value of the `<lang>` attribute must conform to the Internet Assigned Numbers Authority's [IANA  Language subtag registry](http://www.iana.org/assignments/language-subtag-registry).  

#### Test Results
* If any of the above checks fail, this SC fails.

## Test Procedure for SC 3.1.2
### Selector (Identify Content)  
Identify any content on page that differs from the the default language of the page by reviewing the page content. 

### Test Instructions
1. Check that the `<lang>` attribute is specified for any HTML element that contains content that differs from the default language of the page. Note: An element without a set language inherits its language attribute from parent elements.
1. Identify the language of the content.
1. Check that the primary language subtag is correctly defined for the content. 
    1. The primary language subtag is the first 2 or 3 character code in the value of the `<lang>` attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. The value of the `<lang>` attribute must conform to the Internet Assigned Numbers Authority's [IANA  Language subtag registry](http://www.iana.org/assignments/language-subtag-registry). 

#### Test Results
* If any of the above checks fail, this SC fails.

## Baseline Requirement Outcome
* If any SC fails, this baseline fails.
