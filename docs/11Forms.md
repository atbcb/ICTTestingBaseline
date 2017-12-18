# 11. Forms
## Rationale
### Test Rationale
Labels, instructions, directions and cues (including error messages) necessary to complete a form must be programmatically associated with their respective input control in order to provide equivalent information to AT users, especially in cases where a given form component may be the subject of instructions that are not positioned next to the component.

Error suggestions should be provided in an accessible manner where they would not jeopardize the security or content of the page.

For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, ensure that submissions are reversible, checked for input errors and correctable, and/or presented for review and confirmation before completing the submission.

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
1. Check that each form field/control is programmatically related to all its relevant instructions and cues (textual and graphical), including groupings, order of completion, special conditions or qualifiers, input formatting, etc. This may be done using methods such as (but not restricted to):
   * fieldset-legend grouping
   * label-for association
   * aria labeling (e.g. aria-labeledby, aria-label)
   * the TITLE attribute

##### Test Results for SC 3.3.1, 3.3.2
* If any of the above checks fail, then the content fails these SCs.

#### Tests for SC 3.3.1, 3.3.2
### Selector (Identify Content)
1. Enter incorrect values in some input fields in order to trigger and display error information.

### Test Instructions
1. If an input error is automatically detected, check that:
   1. the user is made aware of the error, whether immediately, upon shifting focus away from the item in error (by keyboard), or when trying to submit the form (by keyboard). 
   1. the error is described to the user in text, and
   1. the item that is in error is identified.
Note: The above may be accomplished by using a combination of methods, such as 
   * shifting focus to an error message informing the user that the previous field needs to be corrected and describing the error.
   * refreshing the page upon form submission, then listing the errors and the items that are in error at the top of the page.
   * refreshing the page upon form submission, displaying an error message saying that one or more form fields need to be corrected, and using markup to associate the fields in error to information identifying them as needing correction and information about the errors.
   
##### Test Results for SC 3.3.1, 3.3.2
* If any of the above checks fail, then the content fails these SCs.

#### Tests for SC 3.3.3 (could be merged with tests for 3.3.1, 3.3.2)
### Selector (Identify Content)
1. Enter incorrect values in each input fields in order to trigger and display error information (there may be multiple error conditions). Determine instances where an input error is automatically detected and suggestions for correction are known.

### Test Instructions
1. If an input error is automatically detected and suggestions for correction are known, check whether providing those  suggestions would jeopardize the security or purpose of the content.
   1. If yes, move to the next element to test.
   1. If no, check that these suggestions are provided to the user using a conformant method.
   
##### Test Results for SC 3.3.3
* If check 1a fails, then the content fails this SC.

#### Tests for SC 3.3.4
### Selector (Identify Content)
1. Find Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.

### Test Instructions
1. Check that at least one of the following is true, that the user is made aware of it, and that it is not difficult to accomplish:
   1. Reversible: Submissions are reversible.
   1. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
   1. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.
   
##### Test Results for SC 3.3.4
* If none of the above are true, then the content fails this SC.

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement


## Advisory: Tips for streamlined test processes
...
