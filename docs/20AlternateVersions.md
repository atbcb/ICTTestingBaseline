# 20. Conforming Alternate Version
## Accessibility Requirements
* [WCAG Conforming Alternate Version](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head): Conforming alternate version - Level AA: For Level AA conformance, the [content] satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided. Conformance requirement #1 allows non-conforming pages to be included within the scope of conformance as long as there is a "conforming alternate version", which is a version that
   1. conforms at the designated level, and
   1. provides all of the same information and functionality in the same human language, and
   1. is as up to date as the non-conforming content, and
   1. for which at least one of the following is true:
      1. the conforming version can be reached from the non-conforming version via an accessibility-supported mechanism, or
      1. the non-conforming version can only be reached from the conforming version, or
      1. the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version.

## Test Method Rationale
The conforming alternate version and non-conforming version(s) must contain equivalent information, but does need to be 'exactly the same'. The main points, themes, concepts etc. that the authors are trying to get across in the primary content should also come across in the alternate version. 

## Limitations, Assumptions, or Exceptions
* Notes from the Conforming Alternate Version definition:
   * Note 1: In this definition, "can only be reached" means that there is some mechanism, such as a conditional redirect, that prevents a user from "reaching" (loading) the non-conforming page unless the user had just come from the conforming version.
   * Note 2: The alternate version does not need to be matched page for page with the original (e.g., the conforming alternate version may consist of multiple pages).
   * Note 3: If multiple language versions are available, then conforming alternate versions are required for each language offered.
   * Note 4: Alternate versions may be provided to accommodate different technology environments or user groups. Each version should be as conformant as possible. One version would need to be fully conformant in order to meet conformance requirement 1.
   * Note 5: The conforming alternative version does not need to reside within the scope of conformance, or even on the same Web site, as long as it is as freely available as the non-conforming version.
   * Note 6: Alternate versions should not be confused with supplementary content, which support the original page and enhance comprehension.
   * Note 7: Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.
* It is not a WCAG requirement to provide a conforming alternate version. This test only checks that a conforming alternate version is present. If there is not a conforming alternate version, the result for this baseline test is Does Not Apply. (It would not be a failure.)
* When a conforming alternate version is provided, it is not necessary to test other versions of that content.

## Test Procedure for Conformance Requirement 1 - Conforming Alternate Version
### Identify Content
Multiple versions of the same content. 

### Test Instructions
1. Check that the alternate version provides all of the same information and functionality in the same human language.
1. Check that the alternate version is as up to date as the non-conforming content.
1. Check that the alternate version passes all other baseline tests.
1. Check that at least one of the following is true:
    1. the conforming alternate version can be reached from the non-conforming version via an accessibility-supported mechanism, or
    1. the non-conforming version can only be reached from the alternate version, or
    1. the non-conforming version can only be reached from a conforming version that also provides a mechanism to reach the alternate version.

### Test Results
If any of the above tests fail, a Conforming Alternate Version does not exist and Baseline Requirement 20 DOES NOT APPLY.

## Advisory: Tips for streamlined test processes
* Conformance testing of content that is non-conforming and that has a conforming alternate version is not necessary.

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G136)
* [G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G190)
* [C29: Using a style switcher to provide a conforming alternate version (CSS)](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C29)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](19Frames.md) | [Next Baseline](21TimedEvents.md)
