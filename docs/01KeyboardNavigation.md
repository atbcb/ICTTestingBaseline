# 1. Keyboard Access

## Accessibility Requirements
* [WCAG SC  2.1.1 Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html) – All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes[...].  

* [WCAG SC 2.1.2 No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html) – If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

## Test Method Rationale
This requirement relies on use of a keyboard to validate access and control of all functionality of the content first by checking use of standard keyboard commands (TAB, Space Bar, Enter, Escape, etc). If an interface uses non-standard keyboard commands, the interface must clearly document the commands and make users aware that the commands exist.

Keyboard access and control includes the ability to navigate to AND away from interactive content using only a keyboard. This requirement also validates a keyboard-only user’s ability to move focus away from components. 

The exception condition within 2.1.1 Keyboard is not included in the test so that the 2.1.1 test outcome will indicate keyboard operability. Within Section 508, the Fundamental Alteration exception may be applied to cover an application "where the underlying function requires input that depends on the path of the user's movement and not just the endpoints".

## Limitations, Assumptions, or Exceptions
* This test was written to be performed on a standard physical keyboard for a Windows PC. While keyboard emulators (such as on-screen keyboards, alternate keyboards, speech input, etc.) may be utilized, testing instructions may differ. Mouse Keys (a Windows and Mac OS feature that enables control of the mouse pointer by keyboard) is not a keyboard emulator.
* The determination for the exception in 2.1.1 whether "the underlying function requires input that depends on the path of the user's movement and not just the endpoints" is not included in this test. 

## Test Procedure for SC 2.1.1 Keyboard
### Select/Identify Content
All functionality of the content that is available by mouse control must be keyboard accessible. Determine the functionality of visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

### Test Instructions
1. Check that all functionality can be accessed and executed using only the keyboard.
    1. Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to perform functions available by mouse (including drop-down menus, form fields, hidden content, tooltips, AND all interactive interface components).
    1. Check that individual keystrokes do not require specific timings for activation.
    1. Each of the individual mouse activated controls do not require keyboard access as long as there is a keyboard accessible method to perform the same function available on the page. 
1. Inspect any help (contextual help, application help) and documentation for available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys) to perform a function.
    1. If alternate keyboard commands are required for navigating or performing a function, check that the commands work. 
 
### Test Results
If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Test Procedure for SC 2.1.2 No Keyboard Trap
### Select/Identify Content
Visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) that can be navigated to by keyboard.

### Test Instructions
1. Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), reveal hidden content, and activate all interface components. 
    1. Check that it is possible to move focus away from the interface component in both directions (forward and in reverse) using standard keyboard commands. There must be NO “TRAP” that disrupts keyboard navigation.
1. If a keyboard trap is found, inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys).    
    1. If alternate keyboard commands are required to navigate away from a component, check that the commands work. 

### Test Results
•	If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Advisory: Tips for streamlined test processes
* Keyboard access for Title attribute is available in Internet Explorer 11 for Windows 8.1 and 10. It may be useful to notify testers to pause while tabbing through interactive content with a TITLE attribute to see if TITLE content is revealed during Keyboard Navigation testing.
* This test may be combined with tests for focus.
* It may be useful to separate out a test for keyboard use, and then have a separate test for documentation of non-standard commands. 
* Tips and techniques for finding hidden content may be useful for testers.
* It may be useful to provide a Windows keyboard reference guide to testers.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G202: Ensuring keyboard control for all functionality](http://www.w3.org/TR/WCAG20-TECHS/G202.html)
    * [G21: Ensuring users are not trapped in content](http://www.w3.org/TR/WCAG20-TECHS/G21.html)
