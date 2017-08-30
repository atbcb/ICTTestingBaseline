### Focus (visible) BX.X-on-focus-context
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
* Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).
* Example: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered page

#### Test Procedure
##### Selector
Select all focasable interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard and pointing device (e.g., mouse)

Move focus to each interface component using Use the standard keyboard commands (Tab, [Shift+Tab], space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content. Use a pointing device (e.g., mouse) to move focus to interface components. 

Note that for some types of controls, clicking on a control may also activate the control (e.g. button), which may, in turn, initiate a change in context.

Check that any change of context is initiated only by mouse click or keyboard activation (space bar, Enter)

Identify any instances where a component triggers an event when it receives focus. Determine whether the event initiates a change in context. Examples of a change of context could include:
* Forms submitted automatically when a component receives focus;
* New windows launched when a component receives focus;
* Focus is changed to another component when that component receives focus

##### Test Cases
1. Check that when the interface component receives focus, it does not initiate a change of context.

##### Output
* Passed - if the test case passed
* Failed - if the test case failed
