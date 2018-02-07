# 11. Forms

## Accessibility Requirements
* [WCAG2 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 
* [WCAG2 3.3.1 Error Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html): If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
* [WCAG2 3.3.2 Labels or Instructions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html): Labels or instructions are provided when content requires user input.
* [WCAG2 3.3.3 Error Suggestion](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html): If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
* [WCAG2 3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html): For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:
   1. Reversible: Submissions are reversible.
   1. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
   1. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

## Test Method Rationale
Review form instructions for completeness and programmatic association to their inputs. Enter erroneous inputs and review error notifications provided to the user. 

## Limitations, Assumptions, Exceptions
* Read-only (e.g. pre-filled) form fields receive keyboard focus and are selectable but cannot be modified. These must be labeled and programmatically determinable. 
* Disabled input elements do not receive keyboard focus, cannot be selected, and cannot be modified. These are not included in this test. 

## Select/Identify Content for 3.3.2, 1.3.1
1. Find all form input components. Examples include buttons, text fields, radio buttons, checkboxes, multi-select lists.
1. Find all instructions and cues (textual and graphical) that are related to form components/controls, including groupings, order of completion, special conditions or qualifiers, format instructions, etc.

### Test for 3.3.2
1.	Check that the labels and instructions for each form input are adequate for users to know what input data is expected and, if applicable, what format is required.

#### Test Results for 3.3.2
* If any of the above checks fail, then SC 3.3.2 and this baseline fail.

### Test for 1.3.1
1. Check that the combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) is adequate for each input field and includes all relevant instructions and cues (textual and graphical). Reference [HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/html-aam-1.0/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-url-and-textarea-element) for details on techniques that contribute to the computation of the accessible name and accessible description.

#### Test Results for 1.3.1
* If any of the above checks fail, then SC 1.3.1 and this baseline fail.

## Selector (Identify Content) for 3.3.1, 3.3.3
1. Input fields with automatic error detection and notification

### Tests for 3.3.1
1. Enter incorrect values in input fields in order to trigger automatic error detection that result in error notifications. Examples include but are not limited to:
   * required fields 
   * date (format)
   * state (abbreviations in an address)
   * password
1. If an input error is automatically detected, check the error notification meets all of the following:
   1. the user is made aware of the error (whether immediately upon shifting focus away from the item in error or when trying to submit the form) , and
   1. the error is described to the user in text, and
   1. the item that is in error is identified in text.

#### Test Results for 3.3.1
* If any of the above checks fail, then SC 3.3.1 and this baseline fail.

### Tests for SC 3.3.3 
1. Review error notifications provided.
1. Check that additional guidance (e.g., suggestion for corrected input) is provided on how to correct errors for form fields that would not jeopardize the security or purpose of the content.      
#### Test Results for SC 3.3.3
* If any of the above checks fail, then SC 3.3.3 and this baseline fail.

## Selector (Identify Content) for 3.3.4
Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.

### Tests for 3.3.4
1. Complete the form fields and attempt to submit.
1. Check that at least one of the following is true:
   1. Reversible: Submissions are reversible.
   1. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
   1. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.
#### Test Results for SC 3.3.4
* If any of the above checks fail, then SC 3.3.4 and this baseline fail.

## Advisory: Tips for streamlined test processes
* Re-displaying the form and indicating the fields in error within the form is insufficient to meet this requirement. The user should not need to search through the form to find where errors were made.
* For SC 3.3.1, acceptable techniques include a) shifting focus to an error message informing the user that the previous field needs to be corrected and describing the error, b)refreshing the page upon form submission, then listing the error descriptions and locations at the top of the page. 
