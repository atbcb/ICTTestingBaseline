# 4. Focus (revealing interactive hidden content)

## Accessibility Requirements
* [WCAG SC 2.4.3 Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) -- If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

## Test Method Rationale
Some components on web pages are intentionally hidden to reduce visual clutter and only appear as part of a procedure, such as an error notification. Hidden content must be revealed in an accessible manner without requiring user vision and/or use of a mouse.

## Limitations, Assumptions, or Exceptions
* Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
* Assistive technology will process aria live regions without a focus shift. Live regions that do not contain interactive content do not require a focus shift and would not be included in this test.

## Test Procedure for 2.4.3 Focus Order
### Select/Identify Content
Menus and dialogs revealed by mouse controls

### Test Instructions 
1.	Using standard keyboard commands, move the focus to the interface component that reveals hidden content (typically a menu or dialog); activate the interface component using the keyboard. 
1. Determine if focus is moved to the revealed content. It may be necessary to TAB once to find the focus. Continue to move through the revealed content using the keyboard.
    1. Check that focus is in the menu or dialog
    1. Check that advancing the focus [TAB] in the sequential navigation order puts focus in the menu or dialog ([F85](https://www.w3.org/TR/WCAG20-TECHS/F85.html))
1. Close the menu or dialog and verify the focus location after the dialog or menu is closed.
    1. Check if focus returned to the previous location prior to activating the interface component.
    1. Check if advancing the focus backwards [SHIFT + TAB] in the sequential navigation order puts focus in the previously activated interface component.

### Test Results
If any of the above checks fail, then SC 2.4.3 and Baseline Requirement 4 fails

## Advisory: Tips for streamlined test processes
* It may be useful to combine these tests with tests for keyboard navigation and visible focus.
* It may be useful to provide instructions about what "modal dialog boxes" are and how they should behave.
* Flash and embedded Java content can only be tested in IE v11 to determine the accessibility of the coded content.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/TR/WCAG20-TECHS/SCR26.html)

----------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](03FocusOrder.md) | [Next Baseline](05RepetitiveContent.md)
