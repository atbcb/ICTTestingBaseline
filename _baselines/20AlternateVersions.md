---
title: "20. Conforming Alternate Version"
order-number: 21
---
## 20. Conforming Alternate Version

### Accessibility Requirements

-   [WCAG Conforming Alternate Version](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head): Conformance requirement \#1 allows non-conforming pages to be included within the scope of conformance as long as there is a "conforming alternate version", which is defined as a version that
    1.  conforms at the designated level, and
    2.  provides all of the same information and functionality in the same human language, and
    3.  is as up to date as the non-conforming content, and
    4.  for which at least one of the following is true:
        1.  the conforming version can be reached from the non-conforming version via an accessibility-supported mechanism, or
        2.  the non-conforming version can only be reached from the conforming version, or
        3.  the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version.

### Test Method Rationale

An alternate version must meet all parts of the definition in order to be considered a "conforming alternate version".

### Limitations, Assumptions, or Exceptions

-   Notes from the Conforming Alternate Version definition:
    -   Note 1: In this definition, "can only be reached" means that there is some mechanism, such as a conditional redirect, that prevents a user from "reaching" (loading) the non-conforming page unless the user had just come from the conforming version.
    -   Note 2: The alternate version does not need to be matched page for page with the original (e.g., the conforming alternate version may consist of multiple pages).
    -   Note 3: If multiple language versions are available, then conforming alternate versions are required for each language offered.
    -   Note 4: Alternate versions may be provided to accommodate different technology environments or user groups. Each version should be as conformant as possible. One version would need to be fully conformant in order to meet conformance requirement 1.
    -   Note 5: The conforming alternative version does not need to reside within the scope of conformance, or even on the same Web site, as long as it is as freely available as the non-conforming version.
    -   Note 6: Alternate versions should not be confused with supplementary content, which support the original page and enhance comprehension.
    -   Note 7: Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.
-   It is not a WCAG requirement to provide a conforming alternate version. This test only checks that a conforming alternate version is present. If there is not a conforming alternate version, the result for this baseline test is Does Not Apply. (It would not be a failure.)
-   To meet Conformance Requirement 1 for Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided.

### 20.1 Test Procedure for Conforming Alternate Version

**Baseline Test ID:** 20.1-ConformingAltVersion
#### Identify Content
<p id="1IC">Multiple versions of the same content</p>

#### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Check that the alternate version provides all of the same information and functionality in the same human language.</li>
    <li id="1TI-2">Check that the alternate version is as up to date as the non-conforming content.</li>
    <li id="1TI-3">Check that the alternate version passes all other baseline tests.</li>
    <li id="1TI-4">Check that at least one of the following is true:
        <ol>
        <li id="1TI-4i">the conforming alternate version can be reached from the non-conforming version via an accessibility-supported mechanism, or</li>
        <li id="1TI-4ii">the non-conforming version can only be reached from the alternate version, or</li>
        <li id="1TI-4iii">the non-conforming version can only be reached from a conforming version that also provides a mechanism to reach the alternate version.</li>
        </ol></li>
</ol>

#### Test Results
<p id="1TR">If any of the above tests fail, a Conforming Alternate Version does not exist and Baseline Requirement 20.1-ConformingAltVersion DOES NOT APPLY.</p>

### Advisory: Tips for streamlined test processes

-   When a conforming alternate version is provided, non-conforming versions of that content are tested only for [Conformance Requirement 5](25Noninterference.html). It is not necessary to test the non-conforming versions of that content for other baseline tests.
-   The presence of a conforming alternate version can determine whether other versions of the content need to be tested. To save on time and effort, it is advised that this be one of the first tests performed.

#### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G136)
-   [G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G190)
-   [C29: Using a style switcher to provide a conforming alternate version (CSS)](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C29)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../19Frames) | [Next Baseline](../21TimedEvents)
