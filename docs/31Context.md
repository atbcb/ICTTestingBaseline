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
1. Move focus to each interface component (e.g., Tab, [Shift+Tab], Spacebar, ALT, arrow keys, Enter, etc.), navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content. *Comment KE: "Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field).", from [Understanding 3.2.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html), means this test includes mouse controlled focus changes also so non-keyboard accessible components should be tested. I don't think it's necessary to retest keyboard accessible components by mouse. Like: Use the mouse to select components that can only be accessed by a mouse.*
1. Check that when an interface component receives focus, it does not initiate an unexpected change of context. Examples of a change of context could include:
    * Forms submitted automatically when a component receives focus
    * New windows launched when a component receives focus
    * Focus is changed to another component when that component receives focus
1. Check that the page or application provides suffient warning of any context changes prior to any initiated focus change events

** Note:** Clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context when activated do not fail under this test.

### Test Results
* If any of the above checks fail, this SC fails.

## Test Procedure for SC 3.2.2
### Selector (identify Content)
* Select all `<form>` elements

### Test Instructions
1. Enter data in all form fields, and exit (tab out of) the field
1. Change selections and/or values for form controls, such as radio buttons, check boxes, select lists, etc.
1. Check that navigating away from a field and/or changing field values/selections (e.g., entering data in a text field, changing a radio button selection) does NOT initiate an unexpected change of context. Examples of a change of context could include:
    * Forms submitted automatically when exiting the field
    * Forms submitted automatically when exiting the last field in a form
    * New windows launched when changing a radio button selection
    * Focus is changed to another component when a select list item is selected
1. Check that the page or application provides suffient warning prior to any context changes initiated by data input events

** Note:** Clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context when activated do not fail under this test.

### Test Results
* If any of the above checks fail, this SC fails.

## Baseline Requirement Outcome
* If any SC fails, this baseline fails.
