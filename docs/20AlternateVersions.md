# 20. Alternate Versions
## Accessibility Requirements
* [WCAG Conformance requirement #1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head): Conforming alternate version - Level AA: For Level AA conformance, the [content] satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided. The conforming version must
   1. conform at the designated level, and
   1. provide all of the same information and functionality in the same human language, and
   1. be as up to date as the non-conforming content, and
   1. ensure at least one of the following is true:
      1. the conforming version can be reached from the non-conforming version via an accessibility-supported mechanism, or
      1. the non-conforming version can only be reached from the conforming version, or
      1. the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version.

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
The accessible alternate version must contain the same information as the primary version. The information should be 'equivalent', but by definition this is not going to be 'exactly the same'. The main points, themes, concepts etc. that the authors are trying to get across in the primary content should also come across in the alternate version.

## Limitations, Assumptions, or Exceptions
None

## Test Procedure for Conformance Requirement 1 - Conforming Alternate Version
### Identify Content
Any alternate versions of content (pay particular attention to content containing maps, directions, complex charts etc.).

### Test Instructions
1. Check that the alternate version provides all of the same information and functionality in the same human language.
1. Check that the alternate version is as up to date as the non-conforming content.
1. Check that the alternate version passes all other baseline tests.
1. Check that at least one of the following is true:
    1. the alternate version can be reached from the non-conforming version via an accessibility-supported mechanism, or
    1. the non-conforming version can only be reached from the alternate version, or
    1. the non-conforming version can only be reached from a conforming version that also provides a mechanism to reach the alternate version.

### Test Results
If any of the above tests fail, Conformance Requirement 1 and Baseline Requirement 20 fail.

## Advisory: Tips for streamlined test processes
* Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.
* Conformance testing of pages that are clearly identified as non-conforming and that have alternative versions is not necessary.

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G136)
* [G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G190)
* [C29: Using a style switcher to provide a conforming alternate version (CSS)](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C29)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](19Frames.md) | [Next Baseline](21TimedEvents.md)
