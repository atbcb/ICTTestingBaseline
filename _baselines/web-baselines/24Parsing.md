---
title: "24. Parsing"
order-number: 25
---
## 24. Parsing

### Accessibility Requirements

-   [WCAG SC 4.1.1 Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing) -- In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

### Test Method Rationale

-   WCAG 2.2 has deprecated SC 4.1.1 Parsing as it no longer has utility because accessibility errors due to assistive technology directly parsing HTML no longer exist or are addressed in other criteria.
-   Section 508 is not directly affected by WCAG 2.2 as it incorporates by reference WCAG 2.0 Level A and AA, W3C Recommendation, December 11, 2008. SC 4.1.1 Parsing is not deprecated in WCAG 2.0, and the criterion is a Section 508 requirement. However, this Baseline test will incorporate the [WCAG 2.0 Errata](https://www.w3.org/WAI/WCAG20/errata/) which states "This criterion should be considered as always satisfied for any content using HTML or XML."
 

### Limitations, Assumptions, or Exceptions

-   From [WCAG 2.0 Errata](https://www.w3.org/WAI/WCAG20/errata/): Success Criterion 4.1.1 was originally adopted to address problems that assistive technology had directly parsing HTML. Since this criterion was written, the HTML Standard has adopted specific requirements governing how user agents must handle incomplete tags, incorrect element nesting, duplicate attributes, and non-unique IDs. Although the HTML Standard treats some of these cases as non-conforming for authors, it is considered to "allow these features" for the purposes of this Success Criterion because the specification requires that user agents support handling these cases consistently. In practice, this criterion no longer provides any benefit to people with disabilities in itself. Issues such as missing roles due to inappropriately nested elements or incorrect states or names due to a duplicate ID are covered by different Success Criteria and should be reported under those criteria rather than as issues with 4.1.1.

### 24.A Test Procedure for Parsing

**Baseline Test ID:** 24.A-Parsing
#### Identify Content
<p id="24aIC">All web pages</p>

#### Test Instructions
<ol id="24aTI">
    <li id="24aTI-1">No testing necessary.</li>
</ol>

#### Test Results
<p id="24aTR">Baseline Test 24.A-Parsing passes.</p>

### Advisory: Tips for streamlined test processes

- None

### WCAG 2.2 Techniques

While SC 4.1.1 has been deprecated in WCAG 2.2, the following sufficient techniques are listed for reference:

-   [G134: Validating Web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G134)
-   [G192: Fully conforming to specifications](https://www.w3.org/WAI/WCAG22/Techniques/general/G192)
-   [H74: Ensuring that opening and closing tags are used according to specification](https://www.w3.org/WAI/WCAG22/Techniques/html/H74) **AND** [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG22/Techniques/html/H93) **AND** [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/WAI/WCAG22/Techniques/html/H94)
-   [H88: Using HTML according to spec](https://www.w3.org/WAI/WCAG22/Techniques/html/H88)
  