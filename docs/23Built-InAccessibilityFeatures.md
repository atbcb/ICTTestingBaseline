# 23 Built-In Accessibility Features
## Accessibility Requirements
**[Appendix C to Part 1194 – Functional Performance Criteria and Technical Requirements: 502 Interoperabiltiy with Assistive Tehcnology:](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#502-interoperability-assistive-technology)** 
* 502.2.1 User Control of Accessibility Features: Platform software shall provide user control over platform features that are defined in the platform documentation as accessibility features. 
* 502.2.2 No Disruption of Accessibility Features: Software shall not disrupt platform features that are defined in the platform documentation as accessibility features.

## Test Method Rationale
Software is required to interoperate with assistive technology unless the ICT is self-contained and accessible, requiring no AT or other equipment (other than an headset or other audio coupler) for operation.

## Limitations, Assumptions, or Exceptions
* If the software is assistive technology and supports the accessibility services of a platform, it is **NOT required** to conform to 
E207.2 requirements for platforms and applications to conform to Level A and Level AA Success Criteria.

## Test Procedure for 502.2.1 User Control of Accessibility Features
If the application has built-in accessibility features, test for 502.2.1 alone. Otherwise, testing for 502.2.2 requires access to the Operating Systems (OS) accessibility features.

### Select/Identify Content
* Review the software documentation to identify all built-in accessibility features. 

### Test Instructions
1. Navigate to the application's contrast options, and ensure **ONE** of the following is true:
    * At least 4 contrast options are available.
    * Foreground and background colors can be selected by the user.
1. Resize the default text size to 200% and check that **ALL** of the following are true: 
    * The text size has increased.
    * The text is readable and information is not cut off because of the larger font size.
    * There is no loss of functionality.
    * A scrollbar is provided as needed to the read text. *(Optimally, the use of a horizontal scroll bar is not required to read a line of text on a full-screen window. (1.4.8 AAA))*
1. Activate each additional platform accessibility feature and check if they function as designed. 

### Test Results
* If any of the above checks fail, then 502.2.1 and Baseline Requirement 23 fail.

## Test Procedure for 502.2.2 No Disruption of Accessibility Features
If the application has built-in accessibility features, test for 502.2.1 alone. Otherwise, testing for 502.2.2 requires access to the Operating Systems (OS) accessibility features.

### Select/Identify Content
* OS accessibility features

### Test Instructions
1. Ensure the OS accessibility features are active.
1. Check that the application adopted the high contrast appearance.
3. Set the browser zoom control to 200% and check that **ALL** of the following are true:
    * The text size has increased
    * There is no loss of functionality 
    * The text is readable and information is not cut off because of the larger font size
    * A scrollbar is provided as needed the read text. *(Optimally, the use of a horizontal scroll bar is not required to read a line of text on a full-screen window. (1.4.8 AAA))*
4. Check that 'Sticky Keys' have not been disrupted in the OS.
5. Check that sound notifications (i.e., Sound Sentry) have not been disrupted.

### Test Results
* If any of the above checks fail, then 502.2.2 and Baseline Requirement 23 fail.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent](https://www.w3.org/TR/WCAG20-TECHS/G178.html)
* [G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width](https://www.w3.org/TR/WCAG20-TECHS/G179.html)
* [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured](https://www.w3.org/TR/WCAG20-TECHS/F69.html)
* [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](https://www.w3.org/TR/WCAG20-TECHS/F80.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](22TimeLimits.md) | [Next Baseline](24MultipleWays.md)
