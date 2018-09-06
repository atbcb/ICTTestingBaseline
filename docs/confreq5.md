# 25. Non-Interference
## Accessibility Requirements
* [WCAG Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5) -- If technologies are used in a way that is not accessibility supported, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. In addition, the Web page as a whole continues to meet the conformance requirements under each of the following conditions:
  1. when any technology that is not relied upon is turned on in a user agent,
  1. when any technology that is not relied upon is turned off in a user agent, and
  1. when any technology that is not relied upon is not supported by a user agent

In addition, the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:
  * 1.4.2 - Audio Control,
  * 2.1.2 - No Keyboard Trap,
  * 2.3.1 - Three Flashes or Below Threshold, and
  * 2.2.2 - Pause, Stop, Hide.

Note: If a page cannot conform (for example, a conformance test page or an example page), it cannot be included in the scope of conformance or in a conformance claim.

## Test Method Rationale
The test results for SC's 1.4.2, 2.1.2, 2.3.1, and 2.2.2 determine the result of this baseline test.

## Limitations, Assumptions, or Exceptions
None.

## Test Procedure 
### Identify Content
Baseline tests for [1.4.2 and 2.2.2](21TimedEvents), [2.1.2](01Keyboard), [2.3.1](09Flashing).

### Test Instructions
1. Check that all test results have passed.

### Test Results
If any of the above checks fail, then Conformance Requirement 5 and Baseline Requirement 25 fail.

## Advisory: Tips for streamlined test processes
* Result for Conformance Requirement 5

### WCAG 2.0 Techniques
NA.
----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](24Parsing.md)
