# 3. Focus Order
## Accessibility Requirements
* [WCAG SC 2.4.3 Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) -- If a Web page [or software screen] can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
* [WCAG SC 3.2.1 On Focus](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html) -- When any component receives focus, it does not initiate a change of context.

## Test Method Rationale
Using the keyboard to navigate facilitates inspection of focus order.

## Limitations, Assumptions, or Exceptions
* Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior. 
* Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
* Assistive technology will process aria live regions without a focus shift. Live regions that do not contain interactive content do not require a focus shift and would not be included in this test.
* For some types of controls, clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context do not fail under this test.
* This test evaluates 3.2.1 On Focus using only the keyboard to avoid unintentional activation of controls with a mouse.
* [Change of context](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html#context-changedef) is defined as: major changes in the content of the Web page or software screen that, if made without user awareness, can disorient users who are not able to view the entire page/screen simultaneously. Changes in context include changes of:
    1. User agent
    2. Viewport
    3. Focus
    4. Content that changes the meaning of the Web page or sowftware screen

* **Note:** A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).
* On Focus context change examples: Opening a new window, moving focus to a different component, going to a new page or software window (including anything that would look to a user as if they had moved to a new page/screen) or significantly re-arranging the content of a page/screen are examples of changes of context. (Above definition from [Understanding SC 3.2.1 On Focus](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html))

## Test Procedure for SC 2.4.3 Focus Order
### Identify Content
Keyboard accessible interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

### Test Instructions
1.	Use the keyboard to navigate through interface components.
    1.	Use the keyboard to activate trigger controls that reveal hidden content (menus, dialogs, expandable tree list, etc.).
        1.	Check that focus is moved to the revealed content. (It is acceptable to TAB once or use an arrow key to move the focus forward into the revealed content.)
        2.	Advance the focus through the revealed content.
    2.	Use the keyboard to close/hide the revealed content. 
        1.	Check that focus is returned to the trigger control. (It is acceptable to [Shift+ TAB] once or use an arrow key to move the focus backward to the trigger control.
2.	Check that the focus order preserves the meaning and operability of the Web page or sofware screen. 

### Test Results
If any of the above checks fail, then SC 2.4.3 and Baseline Requirement 3 fail.

## Test Procedure for SC 3.2.1 On Focus
### Identify Content
Keyboard accessible interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

### Test Instructions
1. Use the keyboard to move focus to and navigate through each interactive interface component (including form drop-down lists and form fields).
2. Check that when an interface component receives focus, it does not initiate an unexpected change of context. Examples of a change of context include:
    * Forms submitted automatically when a component receives focus
    * New windows launched when a component receives focus
    * Focus is moved to another component 

### Test Results
If any of the above checks fail, then SC 3.2.1 and Baseline Requirement 3 fail.

## Advisory: Tips for streamlined test processes
* Tab order that initially appears illogical may still meet this requirement due to an application-specific business logic.
* It may be useful to combine these tests with tests for keyboard navigation and visible focus.
* It may be useful to provide instructions about what "modal dialog boxes" are and how they should behave.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](http://www.w3.org/TR/WCAG20-TECHS/G59.html) 
    * [H4: Creating a logical tab order through links, form controls, and objects](http://www.w3.org/TR/WCAG20-TECHS/H4.html)
    * [G107: Using "activate" rather than "focus" as a trigger for changes of context](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G107)
    * [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F55)
    * [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/TR/WCAG20-TECHS/SCR26.html)
    * [F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order](https://www.w3.org/TR/WCAG20-TECHS/F85.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](02FocusVisible.md) | [Next Baseline](04RepetitiveContent.md)
