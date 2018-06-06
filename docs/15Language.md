# 15. Language
## Accessibility Requirements
* [WCAG SC 3.1.1 Language of Page](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html) -- The default human language of each Web page [or software application] can be programmatically determined.
* [WCAG SC 3.1.2 Language of Parts](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html) -- The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. 

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
The default human language for each page or software application must be programmatically identified. Passages that use a language other than the default must be programmatically identified.

## Limitations, Assumptions or Exceptions
* The requirement to identify page or software language is applicable to all Web pages and software applications.
* For Web content, the language attribute `lang` can be an attribute for many HTML tags. The structure for it is `<[HTML tag] lang="[primary language subtag]">`. The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. Dialects specified after the primary language subtag (additional 2 or 3 character codes) are not part of this test.
* For Windows-native software, the [UIA Culture property](https://msdn.microsoft.com/en-us/library/windows/desktop/ee684017(v=vs.85).aspx#UIA_CulturePropertyId) identifies the locale and language for an application and/or for any content or control.
* Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts.

## Test Procedure for SC 3.1.1 Language of Page
### Identify Content
Pages/software with text.

### 3.1.1 Language of Page - Web
#### Test Instructions
1. Identify the default human language of the page by reviewing the page content. The default human language of the page is the language in which most of the content is presented.
2. Check that the `lang` attribute is defined on the `<html>` tag for the page.
3. Check that the value of the `lang` attribute matches the determined default human language for the page.
    1. The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. The primary language subtag must conform to the Internet Assigned Numbers Authority's [IANA Language subtag registry](http://www.iana.org/assignments/language-subtag-registry).  

#### Test Results
If any of the above checks fail, SC 3.1.1 and Baseline Requirement 15 fail.

### 3.1.1 Language of Page - Windows-Native Software
#### Test Instructions
1. Identify the default human language of the software application by reviewing the software content. The default human language of the software application is the language in which most of the content is presented.
2. Check that the UIA Culture property is defined on the primary application node of the UIA tree and/or the primary node that contains all of the text content for the application.
3. Check that the value of the UIA Culture property attribute matches the determined default human language for the software. See [Language Identifier Constants and Strings](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693(v=vs.85).aspx) for Culture property value definitions.   

#### Test Results
If any of the above checks fail, SC 3.1.1 and Baseline Requirement 15 fail.

## Test Procedure for SC 3.1.2 Language of Parts
### Identify Content
Text content that differs from the default human language of the page/software including alternative text for non-text content.

### SC 3.1.2 Language of Parts - Web
#### Test Instructions
1. Identify the human language of the text content that differs from the default human language of the page.
2. Check that the `lang` attribute is specified for any `<html>` element that contains a content segment that differs from the default human language of the page. Note: An element without a set language inherits its language attribute from parent elements.
3. Check that the value of the `lang` attribute is correctly defined for the content segment.
    1. The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications that may follow the primary language subtag.)
    1. The primary language subtag must conform to the Internet Assigned Numbers Authority's [IANA Language subtag registry](http://www.iana.org/assignments/language-subtag-registry).

#### Test Results
* If any of the above checks fail, SC 3.1.2 and Baseline Requirement 15 fail.

### SC 3.1.2 Language of Parts - Windows-Native Software
#### Test Instructions
1. Identify the human language of the text content that differs from the default human language of the software application.
2. Check that the UIA Culture property is specified for any control element node or control ancestor node in the UIA tree that contains a content segment that differs from the default human language of the software. Note: An element without a set Culture property inherits its language/locale from parent elements.
3. Check that the value of the UIA Culture property is correctly defined for the content segment. See [Language Identifier Constants and Strings](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693(v=vs.85).aspx) for Culture property value definitions.

#### Test Results
* If any of the above checks fail, SC 3.1.2 and Baseline Requirement 15 fail.

## Advisory: Tips for streamlined test processes

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [H57: Using language attributes on the html element](https://www.w3.org/TR/WCAG20-TECHS/H57.html)
* [H58: Using language attributes to identify changes in the human language](https://www.w3.org/TR/WCAG20-TECHS/H58.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](14Links.md) | [Next Baseline](16AudioVideo.md)
