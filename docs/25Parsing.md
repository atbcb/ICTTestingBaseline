# 25. Parsing
## Accessibility Requirements
* [WCAG SC 4.1.1 Parsing](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html) -- In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

## Test Method Rationale
If the content cannot be parsed into a data structure, then different user agents, including assistive technologies, may present it differently or be completely unable to parse it. In markup languages, errors in element and attribute syntax and failure to provide properly nested start/end tags lead to errors that prevent user agents from parsing the content reliably. Therefore, the Success Criterion requires that the content can be parsed using only the rules of the formal grammar.

## Test Procedure for SC 4.1.1 Parsing
### Selector (Identify Content)
1. The entire web page

### Test Instructions
1. Check that (except where the specifications allow these features)
   1. elements have complete start and end tags, 
   1. elements are nested according to their specifications, 
   1. elements do not contain duplicate attributes, and 
   1. any IDs are unique.

### Test Results
If any of the above checks fail, then SC 4.1.1 and Baseline Requirement 32 fail.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G134: Validating Web pages](H74: Ensuring that opening and closing tags are used according to specification AND H93: Ensuring that id attributes are unique on a Web page AND H94: Ensuring that elements do not contain duplicate attributes)
* [G192: Fully conforming to specifications](https://www.w3.org/TR/WCAG20-TECHS/G192.html)
* [H88: Using HTML according to spec](https://www.w3.org/TR/WCAG20-TECHS/H88.html)
* [H74: Ensuring that opening and closing tags are used according to specification](https://www.w3.org/TR/WCAG20-TECHS/H74.html) AND [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/TR/WCAG20-TECHS/H93.html) AND [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/TR/WCAG20-TECHS/H94.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](24MultipleWays.md) | [Next Baseline](26ConformReq.md)
