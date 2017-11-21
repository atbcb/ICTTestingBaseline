# 28 Built-in Accessibility Features

## Rationale
Assistive technology (AT) is provided to users with disabilities with the intent of providing them equivalent access to information. These tools are designed with a specific disability or disabilities in mind. As such they target specific audiences and are not intended for general use by all users.

### Test Method Rationale
Software is required to interoperate with assistive technology unless the ICT is self-contained and accessible, requiring no AT or other equipment (other than an headset or other audio coupler) for operation.

## Accessibility Requirements
**Appendix C to Part 1194 – Functional Performance Criteria and Technical Requirements: 502 Interoperabiltiy with Assistive Tehcnology:** 

* 502.2.1 User Control of Accessibility Features: Platform software shall provide user control over platform features that are defined in the platform documentation as accessibility features. 
 
* 502.2.2 No Disruption of Accessibility Features: Software shall not disrupt platform features that are defined in the platform documentation as accessibility features. </br>

https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#502-interoperability-assistive-technology

## Limitations, Assumptions, or Exceptions
If the software is assistive technology and supports the accessibility services of a platform is **NOT required** to conform to 
E207.2 requirements for platforms and applications to conform to Level A and Level AA Success Criteria.

## Test Procedure
If the application has built-in accessibility features, test for 502.2.1 alone. Otherwise, testing for 502.2.2 requires access to the Operating Systems (OS) accessibility features.

## Selector (Identify Content)

* 502.2.1 Review the software documentation to determine if there are built in accessibility features. You will need to activate each feature and interact with the setting options. 

* 502.2.2 Find and activate the OS accessibility features. Configure settings so that it is obvious that the accessibility features are active. This process varies depending upon the OS.

Note: This may also be tested as part of usabiltiy testing. A user may activate their AT and open the application.

## Test Instructions

### Test for 502.2.1 User Control of Accessibility Features
1. Navigate to the application's contrast options, and ensure one of the following is true:
* at least 4 contrast options are available
* foreground and background colors can be selected by the user (AAA)
2. Resize the default text size to 200% and check that all of the following are true: 
* the text size has increased
* the text is readable and information is not cut off because of the larger font size
* the use of a horizontal scroll bar is not required to read a line of text on a full-screen window.
3. If other accessibility features are offered, i.e., sound notificiations, ensure they function as designed. 

### Test for 502.2.2 No Disruption of Accessibility Features
1. Ensure the OS accessibility features are active.
2. Check that the application adopted the high contrast appearance.
3. Set the browser zoom control to 200% and check that all of the following are true:
* the text size has increased
* the text is readable and information is not cut off because of the larger font size
* the use of a horizontal scroll bar is not required to read a line of text on a full-screen window.
4. Verify that 'Sticky Keys' have not been disrupted in the OS.
5. Verify that sound notifications (i.e., Sound Sentry) have not been disrupted.

### Test Results
* If any of the above checks fail, then the contnt fails for this requirement.

# Baseline Requirement Outcome
* If no content fails, then the content passes the Baselkne Requirement.
