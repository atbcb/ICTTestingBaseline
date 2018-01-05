# 2. Focus (visible)
## Rationale
### Requirement Rationale
By default Web browsers provide a visual indication of focus. Some software applications also provide visual indication of focus. Custom programming, styles, style sheets, and scripting, can either disrupt or enhance visual indication of focus.

### Test Method Rationale
Manually navigating or controlling the interface by keyboard only will enable a tester to identify when there is no visual differentiation between a focused item and the rest of the interface or content.

**NOTE:** Some testing tools will add a visible outline around elements that receive focus. While testing tools may help testers to track focus, any markup provided by a testing tool should not be used as an indicator of visible focus for meeting this requirement.

## Accessibility Requirements
* WCAG SC 2.4.7 Focus Visible -- Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

## Limitations, Assumptions, or Exceptions
* The clarity of visible focus is subjective and the minimum level is the browser’s (or OS platform) default display setting for indicating focus.
* Some components that are not normally considered interactive may actually be in the tab order, and therefore interactive (e.g., screen text for form filling instructions). Such components should receive a visible indication of focus when the user navigates to it using the keyboard.
* Skip link visual focus is a part of this test.
* Focus on revealed hidden content is not tested here. See 4.Focus (revealing hidden content).
* Loss of focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.

## Test Procedure for SC 2.4.7 Focus Visible
### Select/Identify Content
All keyboard accessible components on the page. These components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) are navigable by keyboard.

### Tests Instructions
1. Use keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each keyboard accessible component.
1. Check that a visible indication of focus is provided when focus is on the  component.

### Test Results
* If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Advisory: Tips for streamlined test processes
* G149: Using user interface components that are highlighted by the user agent when they receive focus.

***Comment-Explain how to determine the browser's (or OS platform) default behavior for indicating focus.***
