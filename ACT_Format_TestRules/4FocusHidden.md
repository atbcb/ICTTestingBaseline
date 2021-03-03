# 4. Focus (revealing hidden content)
## Requirement
WCAG SC 2.4.3 - Focus Order: If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

WCAG SC 2.1.1 - Keyboard: All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

WCAG SC 1.3.2 - Meaningful Seqeuence: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

## Rationale
### Test Rationale
Keyboard users need to be able to get to the information and revealed controls, and users without vision, or with low vision, need to know that new content has appeared. 

### Test Method Rationale
Some components on web content and software screens are intentionally hidden to reduce visual clutter. Other components only appear as part of a procedure, such as an error notification.

Content with interface components must be revealed in an accessible manner without requiring user vision and/or use of a mouse.

## Test Rules
### Focus (revealing hidden content) - B4.1-revealed-content-trigger
#### Rule Description
This test determines whether hidden menus or dialogs, when revealed, provides the same function and/or information to users with low vision, without vision, or to keyboard users as to sighted individuals using a mouse.

#### Accessibility Requirements
* WCAG SC 2.1.1
* WCAG SC 1.3.2
* WCAG SC 2.4.3
  * F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order

#### Limitations, Assumptions, or Exceptions
* Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.
* If using the keyboard reveals "tooltip" or Title information (e.g., through scripts), then it is not necessary to have that information on the page.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered page

#### Test Procedure
##### Selector
Select menus and dialogs revealed by trigger controls

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard
1.	Move the focus to the control that reveals the menu or dialog; activate the control using the keyboard. 
2. Determine whether focus is in the revealed content. It may be necessary to TAB once to find the focus. Continue to move through the revealed content using the keyboard.

##### Test Cases
1. Check that focus is in the menu or dialog
2. Check that advancing the focus in the sequential navigation order puts focus in the menu or dialog

##### Output
* Passed - if any test case passed
* Failed - if no test case passed

## Test Rules
### Focus (revealing hidden content) - B4.2-revealed-content-info
#### Rule Description
This test determines whether focus is returned to the control that triggers a menu or dialog after dismissing the menu or dialog.

#### Accessibility Requirements
*	WCAG SC 2.1.1
* WCAG SC 1.3.2

#### Limitations, Assumptions, or Exceptions
* Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.
* If using the keyboard reveals "tooltip" or Title information (e.g., through scripts), then it is not necessary to have that information on the page.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered page

#### Test Procedure
##### Selector

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard
1.	Move the focus to the control that triggers the menu or dialog; activate the control using the keyboard. 
2. Determine whether focus is in the revealed content. It may be necessary to TAB once to find the focus. Continue to move through the revealed content using the keyboard.
3. Dismiss the menu or dialog and verify the focus location after the dialog or menu is dismissed.

##### Test Cases
* Check whether focus is on the trigger control.
* Check whether advancing the focus backwards in the sequential navigation order puts focus in the trigger control.

##### Output
* Passed - if any test case passed
* Failed - if no test case passed

## Baseline Test Outcome
* Pass: All outputs of B4.1 and B4.2 passed
* Fail: Any output of B4.1 and B4.2 failed

## Advisory: Tips for streamlined test processes
* It may be useful to remind testers that keyboard access and visible focus should be tested also during this test.
* Instructions on what "modal dialog boxes" are and how they should behave should be included.
* Instructions for the use of Inspect / Java Ferret for identifying focusable content should be included for testers.
