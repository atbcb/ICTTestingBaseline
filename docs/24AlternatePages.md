# 24. Alternate Pages
## Accessibility Requirements
* [WCAG Conformance requirement #1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head): Conforming alternate version - Level AA: For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided. The conforming version must
   1. conform at the designated level, and
   1. provide all of the same information and functionality in the same human language, and
   1. be as up to date as the non-conforming content, and
   1. ensure at least one of the following is true:
      1. the conforming version can be reached from the non-conforming page via an accessibility-supported mechanism, or
      1. the non-conforming version can only be reached from the conforming version, or
      1. the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version.
      
## Test Mehod Rationale
The accessible alternate version must contain the same information as the primary page. The information should be 'equivalent', but by definition this is not going to be 'exactly the same'. The main points, themes, concepts etc. that the authors are trying to get across in the primary content should also come across in the alternate page.

## Test Procedure for Conformance Requirement 1 - Conforming alternate version

### Select/Identify Content
1. Any alternate pages/sites for content (pay particular attention to content containing maps, directions, complex charts etc.).

### Test Instructions
1. Check that the alternate page/site provides all of the same information and functionality in the same human language.
1. Check that the alternate page/site is as up to date as the non-conforming content.
1. Check that the alternate page/site passes the other baseline tests.
1. Check that at least one of the following is true: 
   1. the alternate version be reached from the non-conforming page via an accessibility-supported mechanism, or
   1. the non-conforming version can only be reached from the alternate version, or
   1. the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the alternate version.

### Test Results
* If any of the above tests fail, this Conformance Requirement 1 fails and Baseline 24 fails.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G136](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G136): Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version
* [G190](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G190): Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version
* [C29](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C29): Using a style switcher to provide a conforming alternate version (CSS)