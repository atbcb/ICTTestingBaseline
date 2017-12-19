# 2. Focus (visible)
## Rationale
### Test Rationale
By default Web browsers provide a visual indication of focus. Some software applications also provide visual indication of focus. Custom programming, styles, style sheets, and scripting , can either disrupt or enhance visual indication of focus.

### Test Method Rationale
Manually navigating or controlling the interface by keyboard only will enable a tester to identify when there is no visual differentiation between a focused item and the rest of the interface or content.

**NOTE:** Some testing tools will add a visible outline around elements that receive focus. While testing tools may help testers to track focus, any markup provided by a testing tool should not be used as an indicator of visible focus for meeting this requirement.

## Accessibility Requirement
WCAG SC 2.4.7 Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

## Limitations, Assumptions, or Exceptions
* The clarity of visible focus is subjective and the minimum level is the browser’s (or OS platform) default display setting for indicating focus.
* Some components that are not normally considered interactive may actually be in the tab order, and therefore interactive (e.g., screen text for form filling instructions). Such components should receive a visible indication of focus when the user navigates to it using the keyboard.
* Skip link visual focus is a part of this test.
* Focus on revealed hidden content is not tested here. See 4.Focus (revealing hidden content).
* Loss of focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.

## Test Procedure
### Selector (Identify Content)
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) navigable by keyboard.

### Tests for SC 2.4.7
Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content.

1. When navigating via keyboard, check that the interface component provides a visible indication of focus when focus is on the  component.

#### Test Results for SC 2.4.7
* If any of the above checks fail, then the content fails this SC

## Baseline Test Outcome
If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* Explain how to determine the browser's (or OS platform) default behavior for indicating focus.
