# 4. Focus (revealing interactive hidden content)

## Accessibility Requirements
* [WCAG SC 2.4.3 Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) -- If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
* [WCAG SC 1.3.2 Meaningful Seqeuence](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html) -- When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

## Test Method Rationale
Some components on web pages are intentionally hidden to reduce visual clutter and only appear as part of a procedure, such as an error notification. Hidden content must be revealed in an accessible manner without requiring user vision and/or use of a mouse.

## Limitations, Assumptions, or Exceptions
* Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
* Assistive technology will process aria live regions without a focus shift. Live regions that do not contain interactive content do not require a focus shift and would not be included in this test.

## Test Procedure for SC 1.3.2 and 2.4.3
### Select/Identify Content
Menus and dialogs revealed by mouse controls

### Test Instructions 
1.	Using keyboard controls, move the focus to the control that reveals the hidden content (typically a menu or dialog); activate the control using the keyboard. 
1. Determine whether focus is in the revealed content. It may be necessary to TAB once to find the focus. Continue to move through the revealed content using the keyboard.
    1. Check that focus is in the menu or dialog
    1. Check that advancing the focus [TAB] in the sequential navigation order puts focus in the menu or dialog ([F85](https://www.w3.org/TR/WCAG20-TECHS/F85.html))
1. Dismiss the menu or dialog and verify the focus location after the dialog or menu is dismissed.
    1. Check whether focus returned to the trigger control.
    1. Check whether advancing the focus backwards [SHIFT + TAB] in the sequential navigation order puts focus in the trigger control.

### Test Results
If any of the above checks fail, then the content fails these SCs and the Baseline Requirement fails

## Advisory: Tips for streamlined test processes
* It may be useful to combine these tests with tests for keyboard navigation and visible focus.
* It may be useful to provide instructions about what "modal dialog boxes" are and how they should behave.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/WCAG20-TECHS/G83.html) 
    * [G84: Providing a text description when the user provides information that is not in the list of allowed values](http://www.w3.org/TR/WCAG20-TECHS/G84.html)
    * [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/WCAG20-TECHS/G85.html)
    * [G107: Using "activate" rather than "focus" as a trigger for changes of context](http://www.w3.org/TR/WCAG20-TECHS/G107.htmlt)
