# 2. Focus (Visible)

## Accessibility Requirements
* [WCAG SC 2.4.7 Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html) -- Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

## Test Method Rationale
Manually navigating or controlling the interface by keyboard only will enable a tester to identify when there is no visual differentiation between a focused item and the rest of the interface or content.

## Limitations, Assumptions, or Exceptions
* The clarity of visible focus is subjective and the minimum level is the browser’s (or OS platform) default display setting for indicating focus. Browsers may also represent visual focus differently in specific situations, which could indicate a need for cross-browser testing.
* Some interface components, which are not normally considered interactive, may actually be in the tab order (e.g., screen text for form filling instructions). Such interface components should receive a visible indication of focus when the user navigates to them using a keyboard.
* Skip link visual focus is a part of this test.
* Focus-shift to revealed hidden content is not tested here. See [4. Focus (revealing hidden content)](04FocusHidden).
* Loss of focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.

## Test Procedure for SC 2.4.7 Focus Visible
### Select/Identify Content
All keyboard accessible components on the page. These components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) are navigable by keyboard.

### Tests Instructions
1. Use [standard keyboard commands](https://en.wikipedia.org/wiki/Table_of_keyboard_shortcuts#User_interface_navigation_(widgets_and_controls)) (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interface component which require interactivity.
1. Check that a visible indication of focus is provided when focus is on the interface component.

### Test Results
* If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Advisory: Tips for streamlined test processes
* This test may be performed simultaneously with Baseline 01: Keyboard Navigation
* Flash and embedded Java content can only be tested in IE v11 to determine the accessibility of the coded content.
* Some testing tools will add a visible outline around elements that receive focus. While testing tools may help testers to track focus, any markup provided by a testing tool should not be used as an indicator of visible focus for meeting this requirement.
* Given the variability in how browsers may present visual focus in specific situations, test reports should include details about testing environment, including browser and version.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G149: Using user interface components that are highlighted by the user agent when they receive focus.](http://www.w3.org/TR/WCAG20-TECHS/G149.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](01Keyboard.md) | [Next Baseline](03FocusOrder.md)
