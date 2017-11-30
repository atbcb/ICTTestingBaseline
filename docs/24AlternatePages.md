# 24. Alternate Pages

## Rationale
An Alternate Page should only be provided for accessibility when the primary page cannot be made accessible. The accessible version must contain the same information as the primary page.

The information should be 'equivalent', but by definition this is not going to be 'exactly the same'. The main points, themes, concepts etc. that the authors are trying to get across in the primary content should also come across in the alternate page.

## Accessibility Requirements
* WCAG2 Conformance requirement #1: Conforming alternate version - Level AA: For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided. The conforming version must
   1. conform at the designated level, and
   1. provide all of the same information and functionality in the same human language, and
   1. be as up to date as the non-conforming content, and
   1. ensure at least one of the following is true:
      1. the conforming version can be reached from the non-conforming page via an accessibility-supported mechanism, or
      1. the non-conforming version can only be reached from the conforming version, or
      1. the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version.

## Limitations, Assumptions, or Exceptions

## Test Procedure for Requirement 

### Selector (Identify Content)
1. Any alternate pages/sites for content (pay particular attention to content containing maps, directions, complex charts etc.).

### Test Instructions
1. Check that the alternate page/site provides all of the same information and functionality in the same human language.
1. Check that the alternate page/site is as up to date as the non-conforming content.
1. Check that the alternate page/site passes the other baseline tests.
1. Check that at least one of the following is true: 
   1. the alternate version be reached from the non-conforming page via an accessibility-supported mechanism, or
   1. the non-conforming version can only be reached from the alternate version, or
   1. the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the alternate version.

#### Test Results
* If any of the above tests fail, this requirement fails.

## Baseline Requirement Outcome
* If this requirement fails, this baseline fails.
