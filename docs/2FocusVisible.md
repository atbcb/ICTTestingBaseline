# 2. Focus (visible)
## Requirement
WCAG SC 2.4.7 Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
WCAG SC 3.2.1 When any component receives focus, it does not initiate a change of context.

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
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard and pointing device (e.g., mouse)

Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content.

##### Test Cases
1. When navigating via keyboard, check that the interactive interface component provides a visible indication of focus when focus is on the interactive interface component.

##### Output
* Passed - if the test case passed
* Failed - if the test case failed

### Focus (visible) B2.2-on-focus
#### Rule Description
TBD

#### Accessibility Requirements
*	WCAG SC 3.2.1

#### Limitations, Assumptions, or Exceptions
* Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior. 
* Note that for some types of controls, clicking on a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. 
* Change of context is defined as: major changes in the content of the Web page that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
    * User agent
    * Viewport
    * Focus
    * Content that changes the meaning of the Web page

#### Accessibility Support
TBD

#### Test Subject Type
Rendered page

#### Test Procedure
##### Selector
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard and pointing device (e.g., mouse)

Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content. Identify any instances where a component is able to trigger an event when it receives focus to ensure that it does not initiate a change in context. Examples of a change of context could include:
* Forms submitted automatically when a component receives focus;
* New windows launched when a component receives focus;
* Focus is changed to another component when that component receives focus

##### Test Cases
1. When navigating via keyboard, check that when the interactive interface component receives focus, it does not initiate a change of context.

##### Output
* Passed - if the test case passed
* Failed - if the test case failed

## Baseline Test Outcome
Pass: All outputs of B2.1 and B2.2 passed

Fail: Any output of B2.1 and B2.2 failed

## Advisory: Tips for streamlined test processes
* Explain how to determine the browser's (or OS platform) default behavior for indicating focus.
