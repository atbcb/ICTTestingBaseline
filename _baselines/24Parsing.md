---
title: "24. Parsing"
order-number: 25
---
## 24. Parsing

### Accessibility Requirements

-   [WCAG SC 4.1.1 Parsing](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html) -- In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

### Test Method Rationale

This baseline test requires that the content has no errors in element and attribute syntax and provides properly nested start/end tags to avoid errors that prevent user agents from parsing the content reliably. If the content cannot be parsed into a data structure, then different user agents, including assistive technologies, may present it differently or be completely unable to parse it. 

### Limitations, Assumptions, or Exceptions

-   Note: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.
-   Markup is not always available to assistive technologies or to user selectable user agents such as browsers. Software sometimes uses markup languages internally for persistence of the software user interface, in ways where the markup is never available to assistive technology (either directly or through a document object model (DOM)), or to a user agent (such as a browser). In such cases, conformance to this provision would have no impact on accessibility as it can have for web content where it is exposed.
-   As stated in the requirement language, some specifications may allow duplicate IDs. For example some markup languages may allow duplicate IDs, provided that IDs are unique for peer elements under the same parent element.

### 24.1 Test Procedure for Parsing

**Baseline Test ID:** 24.1-Parsing
#### Identify Content
<p id="1IC">All web pages</p>

#### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Check that (except where the specifications allow these features): [SC 4.1.1]
        <ol>
        <li id="1TI-1i">elements have complete start and end tags,</li>
        <li id="1TI-1ii">elements are nested according to their specifications,</li>
        <li id="1TI-1iii">elements do not contain duplicate attributes, and</li>
        <li id="1TI-1iv">any IDs are unique.</li>
        </ol></li>
</ol>

#### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 24.1-Parsing fails.</p>

### Advisory: Tips for streamlined test processes

While validators can be great tools for catching errors, they may not specify which are only parsing errors or catch all cases where content fails to fully conform to a specification.

#### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G134: Validating Web pages](https://www.w3.org/TR/WCAG20-TECHS/G134.html)
-   [G192: Fully conforming to specifications](https://www.w3.org/TR/WCAG20-TECHS/G192.html)
-   [H88: Using HTML according to spec](https://www.w3.org/TR/WCAG20-TECHS/H88.html)
-   [H74: Ensuring that opening and closing tags are used according to specification](https://www.w3.org/TR/WCAG20-TECHS/H74.html) AND [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/TR/WCAG20-TECHS/H93.html) AND [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/TR/WCAG20-TECHS/H94.html)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../23MultipleWays) | [Appendix A - Cross Reference Tables](../AppendixA)
