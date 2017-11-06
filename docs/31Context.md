# 31. Context Changes
Navigation through a user interface and interaction with interface components should be predictable for all users. Unexpected changes in context can be disorienting for users with visual or cognitive limitations and can make it difficult to use or consume content. Changes in context should only occur with sufficient warning of changes and/or when it is clear to users that specific actions will lead to context changes.

## Accessibility Requirements
* WCAG SC 3.2.1 On Focus - When any component receives focus, it does not initiate a change of context.
* WCAG SC 3.2.2 On Input - Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.

## Limitations, Assumptions, or Exceptions
* Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior. 
* Note that for some types of controls, clicking on a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context do not fail under this test.
* Change of context is defined as: major changes in the content of the Web page that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
    * User agent
    * Viewport
    * Focus
    * Content that changes the meaning of the Web page
* Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus). 
* Example: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

## Test Procedure for SC 3.2.1
### Selector (identify Content)
* Select all focusable interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

### Test Instructions
1. Using a physical system keyboard, move focus to each interface component (Tab, [Shift+Tab], space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content. Use a pointing device (e.g., mouse) to move focus to interface components. 
1. Check that when the interface component receives focus, it does not initiate a change of context. Examples of a change of context could include:
    * Forms submitted automatically when a component receives focus;
    * New windows launched when a component receives focus;
    * Focus is changed to another component when that component receives focus

** Note:** Clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context when activated do not fail under this test.

### Test Results
* If any of the above checks fail, this SC fails.

## Test Procedure for SC 3.2.2
### Selector (identify Content)
* Select all `<form>` elements

### Test Instructions
1.
1.
1.
1. Check that when the interface component..., it does not initiate a change of context.

### Test Results
* If any of the above checks fail, this SC fails.

## Baseline Requirement Outcome
* If any SC fails, this baseline fails.
