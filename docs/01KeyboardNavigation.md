# 1. Keyboard Access

## Accessibility Requirements
* [WCAG SC  2.1.1 Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html) – All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. 

* [WCAG SC 2.1.2 No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html) – If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

## Test Method Rationale
This requirement relies on use of a keyboard to validate access and control of all functionality of the content first by checking use of standard keyboard commands (TAB, Space Bar, Enter, Escape, etc). If an interface uses non-standard keyboard commands, the interface must clearly document the commands and make users aware that the commands exist.

Keyboard access and control includes the ability to navigate to AND away from interactive content using only a keyboard. This requirement also validates a keyboard-only user’s ability to move focus away from components. 

## Limitations, Assumptions, or Exceptions
* This test was written to be performed on a standard physical keyboard for a Windows PC. While keyboard emulators (such as on-screen keyboards, alternate keyboards, speech input, etc.) may be utilized, testing instructions may differ. Mouse Keys (a Windows and Mac OS feature that enables control of the mouse pointer by keyboard) is not a keyboard emulator.

## Test Procedure for SC 2.1.1 Keyboard
### Select/Identify Content
All functionality of the content that is available by mouse control must be keyboard accessible. Determine the functionality of visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

### Test Instructions
1. Check that all functionality can be accessed and executed using only the keyboard.
    1. Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to perform functions available by mouse: navigate through each interactive interface component (including form drop-down lists and form fields), reveal hidden content, AND activate all interface components.
    1.  Each of the individual mouse activated controls do not require keyboard access as long as there is a keyboard accessible method to perform the same function available on the page. 
1. Inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys). An interface must clearly document non-standard keyboard commands to include instructions for: extending standard keyboard command operations (e.g., getting out of a keyboard "trap"); and/or remapped or alternate keys.
    1. If alternate keyboard commands are required for navigating or performing a function, check that the commands work AND that the interface clearly documents and clearly notifies the user of available, non-standard keyboard commands. 
*<<Comment from KE: I think this fits better under a Fundamental Alternation exception. From the [WCAG page](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html), this requirement wouldn't apply to inputs that are path dependent. I don't think we should ask a tester to determine that. Since we are 508, let's apply keyboard, test and fail it, and then it can get reviewed for the FA exception.>>*
1. Evaluate whether the interface’s underlying function requires input that depends on the path of the user's movement (e.g., free-hand drawing); if the underlying function itself requires input that depends on the path of the user’s movement, then it may require specific timing for individual keystrokes.
    1. Check that keyboard navigation and interaction DOES NOT require specific timing for individual keystrokes. 
    2. If keyboard navigation and interaction REQUIRES specific timing, then check that the interface’s underlying function REQUIRES input that depends on the path of the user's movement (e.g., free-hand drawing; if the underlying function itself requires input that depends on the path of the user’s movement, then it may require specific timing for individual keystrokes). 

### Test Results
If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Test Procedure for SC 2.1.2 No Keyboard Trap
### Select/Identify Content
Visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) that can be navigated to by keyboard.

### Test Instructions
1. Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), reveal hidden content, and activate all interface components. 
    1. Check that it is possible to move focus away from the interface component in both directions (forward and in reverse) using standard keyboard commands. There must be NO “TRAP” that disrupts keyboard navigation.
1. If a keyboard trap is found, inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys). An interface must clearly document non-standard keyboard commands to include instructions for: extending standard keyboard command operations (e.g., getting out of a keyboard "trap"); and/or remapped or alternate keys.    
    1. Check that the user is advised, in an accessible manner, of available, non-standard keyboard commands necessary to navigate away from the interface component before the user encounters the the component. 

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
