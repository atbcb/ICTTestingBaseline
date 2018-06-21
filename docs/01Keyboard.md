# 1. Keyboard Access

## Accessibility Requirements
* [WCAG SC  2.1.1 Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html) – All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes[...].  

* [WCAG SC 2.1.2 No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html) – If keyboard focus can be moved to a component of the [content] using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.
    * Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page [or software application], all content on the Web page [or in software] (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
This requirement relies on use of a keyboard to validate access and control of all functionality of the content first by checking use of standard keyboard commands (TAB, Space Bar, Enter, Escape, etc.). If an interface uses non-standard keyboard commands, the interface must clearly document the commands and make users aware that the commands exist.

Keyboard access and control includes the ability to navigate to AND away from interactive content using only a keyboard. 

Within Section 508, the Fundamental Alteration exception may be applied to cover an application "where the underlying function requires input that depends on the path of the user's movement and not just the endpoints."

## Limitations, Assumptions, or Exceptions
* This test was written to be performed on a standard physical keyboard for a Windows PC. While keyboard emulators (such as on-screen keyboards, alternate keyboards, speech input, etc.) may be utilized, testing instructions may differ. Mouse Keys (a Windows and Mac OS feature that enables control of the mouse pointer by keyboard) is not a keyboard emulator.
* The determination for the exception in 2.1.1 whether "the underlying function requires input that depends on the path of the user's movement and not just the endpoints" is not included in this test.
* Per Conformance Requirement 5, all content (whether or not it is used to meet other success criteria) must meet SC 2.1.2

## Test Procedure for SC 2.1.1 Keyboard
### Identify Content
All functionality of the content that is available by mouse control must be keyboard accessible. Determine the functionality of visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

### Test Instructions
1.	Check that all functionality can be accessed and executed using only the keyboard.
    1. Use the keyboard to perform functions available by mouse (including drop-down menus, form fields, revealing/hiding content, tooltips, AND all interactive interface components). 
        1. If a function is not available by mouse, check if another control is provided on the page with the same functionality which is available by mouse. (At least one must meet this requirement.)
1. Check that individual keystrokes do not require specific timings for activation.
     1. If activation requires specific timings, check if another control is provided on the page with the same functionality which does not require specific timings for activation. (At least one must be available without specific timings to activate.)
 
### Test Results
If any of the above checks fail, then SC 2.1.1 and Baseline Requirement 1 fail.

## Test Procedure for SC 2.1.2 No Keyboard Trap
### Identify Content
Visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) that can be navigated to by keyboard.

### Test Instructions
1.	Check that focus can be moved away from the selected component. There must be NO “TRAP” that disrupts keyboard navigation.
    1. If a keyboard trap is found, inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys).
    1. If nonstandard keyboard commands are required to navigate into or out of one or more components, check that the commands work.

### Test Results
If the above check fails, then SC 2.1.2, Conformance Requirement 5, and Baseline Requirement 1 fail.

## Advisory: Tips for streamlined test processes
* Keyboard commands include standard and any nonstandard keyboard commands found. 
* Keyboard access for Title attribute is available in Internet Explorer 11 for Windows 8.1 and 10. It may be useful to notify testers to pause while tabbing through interactive content with a TITLE attribute to see if TITLE content is revealed during Keyboard Navigation testing.
* This test may be combined with tests for focus.
* Tips and techniques for finding hidden content may be useful for testers.
* It may be useful to provide a Windows keyboard reference guide to testers.
* Content that is found non-conformant with SC 2.1.1, “where the underlying function requires input that depends on the path of the user's movement and not just the endpoints" may be marked for further review for a Section 508 exception.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G202: Ensuring keyboard control for all functionality](http://www.w3.org/TR/WCAG20-TECHS/G202.html)
    * [G21: Ensuring users are not trapped in content](http://www.w3.org/TR/WCAG20-TECHS/G21.html)

-------------------------------------------------
[Home/Table of Contents](index.md)    |    [Next Baseline](02FocusVisible.md)
