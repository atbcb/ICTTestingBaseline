# 28 Built-in Accessibility Features
## Rationale
Assistive technology (AT) is provided to users with disabilities with the intent of providing them equivalent access to information. These tools are designed with a specific disability or disabilities in mind. As such they target specific audiences and are not intended for general use by all users.
### Test Method Rationale
Software is required to interoperate with assistive technology unless the ICT is self-contained and accessible, requiring no AT or other equipment (other than an headset or other audio coupler) for operation.
## Accessibility Requirements
**Appendix C to Part 1194 – Functional Performance Criteria and Technical Requirements: 402 Closed Functionality:** 
* 402.1 ICT with closed functionality shall be operable without requiring the user to attach or install assistive technology other than personal headsets or other audio couplers, and shall conform to 402.
* https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#502-interoperability-assistive-technology

**Appendix B to Part 1194 – Section 255 of the Communications Act:502 Interoperability with Assistive Technology:**
* 502.1 Software shall interoperate with assistive technology and shall: 
conform to 502.
* https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#502-interoperability-assistive-technology

## Limitations, Assumptions, or Exceptions
Software that is assistive technology and supports the accessibility services of a platform is **NOT required** to conform to: 
* E207.2 requirements for platforms and applications to conform to Level A and Level AA Success Criteria.
* A test procedure for ICT with closed functionality is not currently provided.

## Test Procedure
Testing requires access to the Operating Systems (OS) accessibility features.

## Selector (Identify Content)
Find and activate the OS accessibility features. Configure settings so that it is obvious that the accessibility features are active. This process varies depending upon the OS>

Note: This may also be tested as part of usabiltiy testing. A user may activate their AT and open the application.

## Test Instructions
1. Ensure the OS accessibility features are active.
2. Open the application, and begin to interact with it.
3. Check that the application adopted the high contrast appearance.
4. Check that the text size has increased and that information is not cut off because of the larger font size. (Scrolling or enlarging the viewing area is permissable.)
5. Verify that 'Sticky Keys' have not been disrupted in the OS.
6. Verify that sound notifications (i.e., Sound Sentry) have not been disrupted.

### Test Results
* If any of the above checks fail, then the contnt fails for this requirement.

# Baseline Requirement Outcome
* If no content fails, then the content passes the Baselkne Requirement.
