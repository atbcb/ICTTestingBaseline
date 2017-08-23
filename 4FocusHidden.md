# 4. Focus (revealing hidden content)
## Requirement
WCAG SC 2.1.1 – Keyboard: All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

## Rationale
### Test Rationale
Keyboard users need to be able to get to the information and revealed controls, and users without vision, or with low vision, need to know that new content has appeared. 

### Test Method Rationale
Some components on web content and software screens are intentionally hidden to reduce visual clutter. Other components only appear as part of a procedure, such as an error notification.

Content with interface components must be revealed in an accessible manner without requiring user vision and/or use of a mouse.

## Test Rules
### Focus (revealing hidden content) - B4.1-revealed-content
#### Rule Description

#### Accessibility Requirements
*	WCAG SC X.X.X

#### Limitations, Assumptions, or Exceptions
* Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
* Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content.


#### Accessibility Support
TBD

#### Test Subject Type
Rendered page

#### Test Procedure
##### Selector

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard, WAT, Inspect, Java Ferret
a.	Move the focus to the control that reveals hidden content, activate the control with the keyboard, and then determine whether focus is in the revealed content. It may be necessary to TAB once to find the focus. Continue to move through the revealed content using the keyboard.
b.	If focus does not shift to the revealed content, an accurate description of the content change event must be provided.
o	[Web only] Use the WAT (Doc Info - Titles, Images - Show Images) to examine the control's name, title and any adjacent screen text or ALT text.
o	[SW only] Use Inspect/Java Ferret to examine the control's Name and description. 


##### Test Cases

##### Output
Each element tested will return a test result of pass or fail for eash test case as well as a description of any errors causing a failure result. 
/[Test case results are combined with other test case results to provide a cumulative outcome, pass or fail, of the rule. When a rule has multiple test cases, the results of all test cases are combined to give a single result for each selected item. The results are cumulative, meaning that as long as one test case passes, the rule has passed./]
/[If either one of these passed, the rule has passed. Only if both fail, does that element fail the rule./]
* Passed - if any test case passed
* Failed - if no test case passed

## Baseline Test Outcome
Pass: All outputs of Baseline Requirement test rules passed

Fail: Any output of Baseline Requirement test rules failed

## Advisory: Tips for streamlined test processes
