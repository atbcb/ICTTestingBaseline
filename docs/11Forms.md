# 11. Forms
## Rationale
### Test Rationale
Labels, instructions, directions and cues (including error messages) necessary to complete a form must be programmatically associated with their respective input control in order to provide equivalent information to AT users, especially in cases where a given form component may be the subject of instructions that are not positioned next to the component.

Read-only (e.g. pre-filled) form fields are considered interactive, in that they need to receive keyboard focus and must be labeled.

### Test Method Rationale

## Accessibility Requirements
* WCAG2 1.3.1 Info and Relationships: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 
* WCAG2 3.3.1 Error Identification: If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
* WCAG2 3.3.2 Labels or Instructions: Labels or instructions are provided when content requires user input.
* WCAG2 3.3.3 Error Suggestion: If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
* WCAG2 3.3.4 Error Prevention (Legal, Financial, Data): For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:
   1. Reversible: Submissions are reversible.
   1. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
   1. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

## Tests for SC 1.3.1, 3.3.2
### Selector (Identify Content)
1. Find all form input components. Examples include buttons, text fields, radio buttons, checkboxes, multi-select lists (combo boxes).
1. Find all instructions and cues (textual and graphical) that are related to form components/controls, including groupings, order of completion, special conditions or qualifiers, error messages, error correction suggestions, etc. 

### Test Instructions
1. Check that each form field/control is programmatically related to all its relevant instructions and cues (textual and graphical), including groupings, order of completion, special conditions or qualifiers, input formatting, etc. 

##### Test Results for SC 3.3.1, 3.3.2
* If any of the above checks fail, then the content fails these SCs.

#### Tests for SC 3.3.1, 3.3.2
### Selector (Identify Content)
1. Enter incorrect values in some input fields in order to trigger and display error information.

### Test Instructions
1. If an input error is automatically detected, check that the item that is in error is identified and the error is described to the user in text (3.3.1)
1. Check that the error messages are associated to their fields (3.3.2) using one of these methods:
   1. The user is made aware ...
   1. ...

##### Test Results for SC 3.3.1, 3.3.2
* If any of the above checks fail, then the content fails these SCs.

#### Tests for SC 3.3.3
### Selector (Identify Content)
1. Enter incorrect values in each input fields in order to trigger and display error information (there may be multiple error conditions). Determine instances where an input error is automatically detected and suggestions for correction are known.

### Test Instructions
1. If an input error is automatically detected and suggestions for correction are known, check whether providing those  suggestions would jeopardize the security or purpose of the content.
   1. If yes, move to the next element to test.
   1. If no, check that these suggestions are provided to the user.
   
##### Test Results for SC 3.3.3
* If check 1a fails, then the content fails this SC.

#### Tests for SC 3.3.4
### Selector (Identify Content)
1. Find Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.

### Test Instructions
1. Check that at least one of the following is true:
   1. Reversible: Submissions are reversible.
   1. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
   1. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.
   
##### Test Results for SC 3.3.4
* If none of the above are true, then the content fails this SC.

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement


## Advisory: Tips for streamlined test processes
...
