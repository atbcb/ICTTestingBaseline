# 24. Parsing
## Accessibility Requirements
* [WCAG SC 4.1.1 Parsing](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html) -- In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

## Test Method Rationale
If the content cannot be parsed into a data structure, then different user agents, including assistive technologies, may present it differently or be completely unable to parse it. In markup languages, errors in element and attribute syntax and failure to provide properly nested start/end tags lead to errors that prevent user agents from parsing the content reliably. Therefore, the Success Criterion requires that the content can be parsed using only the rules of the formal grammar.

## Limitations, Assumptions, or Exceptions
* When applying SC 4.1.1 Parsing to software applications, the requirement is modified as following: For non-web documents or software that use markup languages, in such a way that the markup is separately exposed and available to assistive technologies and accessibility features of software or to a user-selectable user agent, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.
* **Note:** Markup is not always available to assistive technologies or to user selectable user agents such as browsers. Software sometimes uses markup languages internally for persistence of the software user interface, in ways where the markup is never available to assistive technology (either directly or through a document object model (DOM)), or to a user agent (such as a browser). In such cases, conformance to this provision would have no impact on accessibility as it can have for web content where it is exposed.
* As noted in the requirement language, some specifications may allow duplicate IDs. For example some markup languages may allow duplicate IDs, provided that IDs are unique for peer elements under the same parent element.

## Test Procedure for SC 4.1.1 Parsing
### Identify Content
The entire source code for a web page or software application

### Test Instructions
1. Check that (except where the specifications allow these features)
    1. elements have complete start and end tags,
    1. elements are nested according to their specifications,
    1. elements do not contain duplicate attributes, and
    1. any IDs are unique.

### Test Results
If any of the above checks fail, then SC 4.1.1 and Baseline Requirement 24 fail.

## Advisory: Tips for streamlined test processes
While validators can be great tools for catching errors, they usually cannot catch all cases where content fails to fully conform to a specification. 

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G134: Validating Web pages](https://www.w3.org/TR/WCAG20-TECHS/G134.html)
* [G192: Fully conforming to specifications](https://www.w3.org/TR/WCAG20-TECHS/G192.html)
* [H88: Using HTML according to spec](https://www.w3.org/TR/WCAG20-TECHS/H88.html)
* [H74: Ensuring that opening and closing tags are used according to specification](https://www.w3.org/TR/WCAG20-TECHS/H74.html) AND [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/TR/WCAG20-TECHS/H93.html) AND [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/TR/WCAG20-TECHS/H94.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](23MultipleWays.md)
