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

## Test Procedure

### Selector (Identify Content)
1. Find all form input components. Examples include buttons, text fields, radio buttons, checkboxes, multi-select lists (combo boxes).
1. Find all instructions and cues (textual and graphical) that are related to form components/controls, including groupings, order of completion, special conditions or qualifiers, error messages, error correction suggestions, etc.

### Test Instructions
#### Tests for SC 2.4.3.
1. Use the keyboard to navigate through interface components and content (including any hidden content). 
1. If the order of content presented visually affects understanding or function of the content, then check that the focus order when using a keyboard matches the same logical order as the order presented visually. 

##### Test Results for SC 2.4.3
* If any of the above checks fail, then the content fails this SC

#### Tests for SC 3.2.3
1. Use the keyboard to navigate through interface components and content (including any hidden content). Identify content elements that repeat over multiple linked pages or screens.
    1. Check that the relative order of keyboard and/or visual focus is the same across pages.
    1. Check that any change in the content order is only the result of a user-initiated change 

##### Test Results for 3.2.3
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* This test is for interactive interface components, excluding forms which are covered by the forms test.
* To get to all components, it may require more than simply TABbing between items. For example, it may be necessary to tab to a set of components then use the arrow keys to get focus on individual components.
* Tab order may be application specific—reflecting business logic—so it may be helpful to ask developers whether a seemingly non-logical order was intentional. It may be useful to verify order discrepancies using the Tab Index attribute, if it is present (Although a Tab Index is not required). It is also possible to Tab through components to see if there is a visual focus on static text.
* For web content that is in layout tables, it is possible to produce a linearized representation that may be useful in determining whether a logical order is used. To linearize table content, use WAT (Tables - Linearize).
