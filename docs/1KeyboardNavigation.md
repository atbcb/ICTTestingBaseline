# 1. Keyboard navigation
## Requirement
WCAG SC  2.1.1 Keyboard – All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. 
WCAG SC 2.1.2 No keyboard trap – If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

## Rationale
### Test Rationale
Wherever users are expected to interact with components, it must be possible for users to get to those components or perform those functions using only the keyboard, because using a mouse is not possible when: 
* (i)	the user has no sight
* (ii) the user does not have the physical capability / dexterity to effectively control a pointing device.

### Test Method Rationale
Ideally interfaces should use standard keyboard commands (TAB, Space Bar, Enter, Escape, etc.), making their use easy and efficient. 
On occasion, an interface may be designed to expand on the basic set of standard keyboard commands; and/or remap standard keys. In both of these cases, users must be notified of the existence of non-standard key commands and their correct use.

**Notes:**
* Access must be via a physical keyboard. Specifically excluded from this test is the use of an on-screen keyboard, or using the Mouse-Keys feature in Windows.
At this time the baseline tests do not address the use of Tablet PCs or other portable devices.

## Tools Necessary
Physical system keyboard and pointing device (e.g., mouse), WAT/WAF

## Test Rules
To validate that content conforms to this requirement, execute the following test rules:

### Keyboard Navigation – B1.1-keyboard-navigation
#### Rule Description
Keyboard access and control must be available for all interactive content. This test rule validates whether an individual can use a keyboard to navigate to and through all content and perform all intended content functions. 
Ideally, interfaces use standard keyboard commands (TAB, Space Bar, Enter, Escape, etc). If an interface uses non-standard keyboard commands, the interface must clearly document the commands and make users aware that the commands exist. This test rule also validates whether an interface documents non-standard commands to facilitate navigation and interaction with content.

#### Accessibility Requirements
*	WCAG SC 2.1 – Keyboard Accessible: Make all functionality available from a keyboard.
*	WCAG SC 2.1.1 – All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

#### Limitations, Assumptions, or Exceptions
Access must be via a physical keyboard. Specifically excluded from this test is the use of an on-screen keyboard, or using the Mouse-Keys feature in Windows.
At this time the baseline tests herein cover use of software and Web sites on PCs (i.e., desktops and laptops) that have a keyboard as a primary input device. Tablet PCs and software running on other portable devices are not addressed in the baseline tests.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

##### Test Cases
###### Test Case Mode
Manual inspection

###### Test Case Steps
1. Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), reveal hidden content, AND activate all interface components.
2. Inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys). An interface must clearly document non-standard keyboard commands to include instructions for: 
    * Extending standard keyboard command operations (e.g., getting out of a keyboard "trap"), and/or 
    * Remapped or alternate keys. 

Verify that the non-standard keyboard commands enable navigation and interaction with content to overcome any deficiency found in step 1.

###### Output
Each element tested will return a test result of pass or fail for eash test case as well as a description of any errors causing a failure result. 
/[Test case results are combined with other test case results to provide a cumulative outcome, pass or fail, of the rule. When a rule has multiple test cases, the results of all test cases are combined to give a single result for each selected item. The results are cumulative, meaning that as long as one test case passes, the rule has passed./]
/[If either one of these passed, the rule has passed. Only if both fail, does that element fail the rule./]

##### Outcome
The overall test procedure (accumulating the results of the individual test cases) should return one of the following outcomes:
* Passed – the test target passed the test
* Failed – the test target failed the test
* Cannot tell: it is unclear whether or not the test target passes or fails the test

### Keyboard, No Keystroke Ttiming – B1.2-no-keystroke-timing
#### Rule Description
Some users with mobility impairments use a keyboard to access and control content. Content interaction that requires specific timing for individual keystrokes can prevent or impede the ability to perform intended functions for some users with mobility impairments. This test rule validates whether a keyboard-only user can navigate through and interact with components WITHOUT the requirement for specific timing for individual keystrokes. 

#### Accessibility Requirements
* WCAG SC 2.1 – Keyboard Accessible: Make all functionality available from a keyboard.
* WCAG SC 2.1.1 – All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

#### Limitations, Assumptions, or Exceptions
Access must be via a physical keyboard. Specifically excluded from this test is the use of an on-screen keyboard, or using the Mouse-Keys feature in Windows.
At this time the baseline tests herein cover use of software and Web sites on PCs (i.e., desktops and laptops) that have a keyboard as a primary input device. Tablet PCs and software running on other portable devices are not addressed in the baseline tests.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

##### Test Cases
###### Test Case Mode
Manual inspection

###### Test Case Steps
1. Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields); check that navigation and interaction DOES NOT require specific timing for individual keystrokes. 
2. Evaluate whether the interface’s underlying function requires input that depends on the path of the user's movement (e.g., free-hand drawing); if the underlying function itself requires input that depends on the path of the user’s movement, then it may require specific timing for individual keystrokes.

###### Output
Each element tested will return a test result of pass or fail for eash test case as well as a description of any errors causing a failure result. 
/[Test case results are combined with other test case results to provide a cumulative outcome, pass or fail, of the rule. When a rule has multiple test cases, the results of all test cases are combined to give a single result for each selected item. The results are cumulative, meaning that as long as one test case passes, the rule has passed./]
/[If either one of these passed, the rule has passed. Only if both fail, does that element fail the rule./]

##### Outcome
The overall test procedure (accumulating the results of the individual test cases) should return one of the following outcomes:
* Passed – the test target passed the test
* Failed – the test target failed the test
* Cannot tell: it is unclear whether or not the test target passes or fails the test

### Keyboard, No Keyboard Trap – B1.3-no-trap
#### Rule Description
Keyboard access and control includes the ability to navigate to AND away from interactive content using only a keyboard. This test rule validates a keyboard-only user’s ability to move focus away from components. 
Ideally, interfaces use standard keyboard commands (TAB, Space Bar, Enter, Escape, etc). If an interface uses non-standard keyboard commands, the interface must clearly document the commands and make users aware that the commands exist. This test rule also validates whether an interface documents non-standard commands to facilitate navigation and interaction with content.

#### Accessibility Requirements
* WCAG SC 2.1 – Keyboard Accessible: Make all functionality available from a keyboard.
* WCAG SC 2.1.2 – No Keyboard Trap: If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

#### Limitations, Assumptions, or Exceptions
Access must be via a physical keyboard. Specifically excluded from this test is the use of an on-screen keyboard, or using the Mouse-Keys feature in Windows.
At this time the baseline tests herein cover use of software and Web sites on PCs (i.e., desktops and laptops) that have a keyboard as a primary input device. Tablet PCs and software running on other portable devices are not addressed in the baseline tests.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

##### Test Cases
###### Test Case Mode
Manual inspection
###### Test Case Steps
1. Use the standard keyboard commands (Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, etc.) to navigate through each interactive interface component (including form drop-down lists and form fields), reveal hidden content, and activate all interface components. There MUST be NO “TRAP” that disrupts keyboard navigation.
2. Inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys). An interface must clearly document non-standard keyboard commands to include instructions for: 
    * Extending standard keyboard command operations (e.g., getting out of a keyboard "trap"), and/or 
    * Remapped or alternate keys. 

Verify that the non-standard keyboard commands enable navigation and interaction with content to overcome any deficiency found in step 1.

###### Output
Each element tested will return a test result of pass or fail for eash test case as well as a description of any errors causing a failure result. 
/[Test case results are combined with other test case results to provide a cumulative outcome, pass or fail, of the rule. When a rule has multiple test cases, the results of all test cases are combined to give a single result for each selected item. The results are cumulative, meaning that as long as one test case passes, the rule has passed./]
/[If either one of these passed, the rule has passed. Only if both fail, does that element fail the rule./]

#### Outcome
The overall test procedure (accumulating the results of the individual test cases) should return one of the following outcomes:
* Passed – the test target passed the test
* Failed – the test target failed the test
* Cannot tell: it is unclear whether or not the test target passes or fails the test

## Advisory: Tips for streamlined test processes
* Keyboard access for Title content is available in Internet Explorer 11 for Windows 8.1 and 10. It may be useful to notify testers to pause while tabbing through interactive content with a TITLE attribute to see if TITLE content is revealed during Keyboard Navigation testing.
* This test may be combined with tests for focus.
* It may be useful to separate out a test for keyboard use, and then have a separate test for documentation of non-standard commands.
* Tips and techniques for finding hidden content may be useful for testers.
* It may be useful to provide a Windows keyboard reference guide to testers.
