# 3. Focus (Order)
## Accessibility Requirements
* [WCAG SC 2.4.3 Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) -- If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
* [WCAG SC 3.2.1 On Focus](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html) -- When any component receives focus, it does not initiate a change of context.

## Test Method Rationale
Using the keyboard to navigate facilitates inspection of focus order. 

## Limitations, Assumptions, or Exceptions
* Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior. 
* Note that for some types of controls, clicking on a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context do not fail under this test.
* [Change of context](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html#context-changedef) is defined as: major changes in the content of the Web page that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
    * User agent
    * Viewport
    * Focus
    * Content that changes the meaning of the Web page
* Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus). 
    * Example: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.
(Above definition from https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html)

## Test Procedure for SC 2.4.3 Focus Order
### Select/Identify Content
Keyboard accessible interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

### Test Instructions
1. Use the keyboard to navigate through interface components and content (including any hidden content). 
1. If the order of content presented affects understanding or function of the content, then check that the focus order matches the same logical order as the order presented visually. 

### Test Results
If any of the above checks fail, then SC 2.4.3 and Baseline Requirement 3 fail.

## Test Procedure for SC 3.2.1
### Selector (identify Content)
* Select all focusable interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

### Test Instructions
1. Move focus to each interface component (e.g., Tab, [Shift+Tab], Spacebar, ALT, arrow keys, Enter, etc.), navigate through each interactive interface component (including form drop-down lists and form fields), and reveal hidden content. 
1. Check that when an interface component receives focus, it does not initiate an unexpected change of context. Examples of a change of context could include:
    * Forms submitted automatically when a component receives focus
    * New windows launched when a component receives focus
    * Focus is changed to another component when that component receives focus
1. Check that the page or application provides suffient warning of any context changes prior to any initiated focus change events

** Note:** Clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context when activated do not fail under this test.

### Test Results
If any of the above checks fail, then SC 3.2.1 and Baseline Requirement 3 fail.

## Advisory: Tips for streamlined test processes
* [Standard keys]((https://en.wikipedia.org/wiki/Table_of_keyboard_shortcuts#User_interface_navigation_(widgets_and_controls)) used to move focus include the Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, and directional arrow keys.
* Tab order that initially appears illogical may still meet this requirement due to an application-specific business logic. 
* For web content that is in layout tables, it is possible to produce a linearized representation that may be useful in determining whether a logical order is used.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](http://www.w3.org/TR/WCAG20-TECHS/G59.html) 
    * [H4: Creating a logical tab order through links, form controls, and objects](http://www.w3.org/TR/WCAG20-TECHS/H4.html)
    * [F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability](http://www.w3.org/TR/WCAG20-TECHS/F44.html)
    * [G107: Using "activate" rather than "focus" as a trigger for changes of context](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G107)
    * [G201: Giving users advanced warning when opening a new window](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G201)
    * [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F55)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](02FocusVisible.md) | [Next Baseline](04FocusHidden.md)
