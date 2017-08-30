# 2. Focus (visible)
## Requirement
WCAG SC 2.4.7 Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

## Rationale
### Test Rationale
By default Web browsers provide a visual indication of focus. Some software applications also provide visual indication of focus. Custom programming, styles, style sheets, and scripting , can either disrupt or enhance visual indication of focus.

### Test Method Rationale
Manually navigating or controlling the interface by keyboard only will enable a tester to identify when there is no visual differentiation between a focused item and the rest of the interface or content.

## Test Rules
### Focus (visible) B2.1-focus-visible
#### Rule Description
TBD

#### Accessibility Requirements
*	WCAG SC 2.4.7

#### Limitations, Assumptions, or Exceptions
* The clarity of visible focus is subjective and the minimum level is the browser’s (or OS platform) default display setting for indicating focus.
* Some components that are not normally considered interactive may actually be in the tab order, and therefore interactive (e.g., screen text for form filling instructions). Such components should receive a visible indication of focus when tabbed to.
* Skip link visual focus is a part of this test.
* Loss of focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered page

#### Test Procedure
##### Selector
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) navigable by keyboard.

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard

Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content.

##### Test Cases
1. When navigating via keyboard, check that the interface component provides a visible indication of focus when focus is on the  component.

##### Output
* Passed - if the test case passed
* Failed - if the test case failed

## Baseline Test Outcome
Pass: All outputs of B2.1 passed

Fail: Any output of B2.1 failed

## Advisory: Tips for streamlined test processes
* Explain how to determine the browser's (or OS platform) default behavior for indicating focus.
