# 4. Focus (revealing hidden content)
## Rationale
### Test Rationale
Keyboard users need to be able to get to the information and revealed controls, and users without vision, or with low vision, need to know that new content has appeared. 

### Test Method Rationale
Some components on web content and software screens are intentionally hidden to reduce visual clutter. Other components only appear as part of a procedure, such as an error notification.

Content with interface components must be revealed in an accessible manner without requiring user vision and/or use of a mouse.

## Accessibility Requirements
* WCAG SC 2.4.3 - Focus Order: If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
    * F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order
* WCAG SC 2.1.1 - Keyboard: All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.
* WCAG SC 1.3.2 - Meaningful Seqeuence: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

## Test Tools Necessary
* Physical system keyboard

#### Limitations, Assumptions, or Exceptions
* Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.
* If using the keyboard reveals "tooltip" or Title information (e.g., through scripts), then it is not necessary to have that information on the page.

## Test Procedure
This test determines whether hidden menus or dialogs, when revealed, provides the same function and/or information to users with low vision, without vision, or to keyboard users as to sighted individuals using a mouse.

### Selector
Select menus and dialogs revealed by trigger controls

### Test Instructions
1.	Using keyboard controls, move the focus to the control that reveals the menu or dialog; activate the control using the keyboard. 
1. Determine whether focus is in the revealed content. It may be necessary to TAB once to find the focus. Continue to move through the revealed content using the keyboard.
    1. Check that focus is in the menu or dialog
    1. Check that advancing the focus in the sequential navigation order puts focus in the menu or dialog
1. Dismiss the menu or dialog and verify the focus location after the dialog or menu is dismissed.
    1. Check whether focus is on the trigger control.
    1. Check whether advancing the focus backwards in the sequential navigation order puts focus in the trigger control.

#### Test Results
* If the tests fail, then the content is not conformant to SC 1.3.2, 2.1.1 and 2.4.3

## Baseline Test Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* It may be useful to remind testers that keyboard access and visible focus should be tested also during this test.
* Instructions on what "modal dialog boxes" are and how they should behave should be included.
* Instructions for the use of Inspect / Java Ferret for identifying focusable content should be included for testers.
