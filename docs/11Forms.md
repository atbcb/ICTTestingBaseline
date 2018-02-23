# 11. Forms
## Rationale
### Test Rationale
Labels, instructions, directions and cues (including error messages and indicators of required fields) necessary to complete a form must be programmatically associated with their respective input control in order to provide equivalent information to AT users, especially in cases where a given form component may be the subject of instructions that are not positioned next to the component.

Error notifications may be provided either immediately following the error or by creating a mechanism that allows users to jump to errors. Error suggestions should be provided in an accessible manner where they would not jeopardize the security or content of the page.

For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, ensure that submissions are reversible, checked for input errors and correctable, and/or presented for review and confirmation before completing the submission.

Read-only (e.g. pre-filled) form fields are considered interactive, in that they need to receive keyboard focus and must be labeled.

### Test Method Rationale

## Accessibility Requirements
* WCAG2 1.3.1 Info and Relationships: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 
    * G115: Using semantic elements to mark up structure.
    * H44: Using label elements to associate text labels with form controls.
    * H65: Using the title attribute to identify form controls when the label element cannot be used.
    * H71: Providing a description for groups of form controls using fieldset and legend elements.
    * H85: Using OPTGROUP to group OPTION elements inside a SELECT.
* WCAG2 3.3.1 Error Identification: If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
    * G83: Providing text descriptions to identify required fields that were not completed.
    * ARIA21: Using Aria-Invalid to Indicate An Error Field.
* WCAG2 3.3.2 Labels or Instructions: Labels or instructions are provided when content requires user input.
    * G131: Providing descriptive labels using noted techniques (in 1.3.1) or one of the following:
        * ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls.
        * ARIA9: Using aria-labelledby to concatenate a label from several text nodes. 
        * ARIA17: Using grouping roles to identify related form controls 
        * G89: Providing expected data format and example 
        * G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input 
        * G162: Positioning labels to maximize predictability of relationships 
        * G83: Providing text descriptions to identify required fields that were not completed 
        * H90: Indicating required form controls using label or legend 
    * G167: Using an adjacent button to label the purpose of a field 
* WCAG2 3.3.3 Error Suggestion: If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
    * Mandatory fields should meet the following standards: 
        * G83: Providing text descriptions to identify required fields that were not completed.
        * ARIA2: Identifying a required field with the aria-required property.
    * If the mandatory field also requires information to be provided in a specific data format, these standards also apply:
        * ARIA18: Using aria-alertdialog to Identify Errors.
        * G85: Providing a text description when user input falls outside the required format or values.
        * G177: Providing suggested correction text.
        * SCR18: Providing client-side validation and alert.
        * SCR32: Providing client-side validation and adding error text via the DOM. 
    * If the mandatory field also requires selection of one option from a limited set of values, these standars also apply:
        * ARIA18: Using aria-alertdialog to Identify Errors. 
        * G84:Providing a text description when the user provides information that is not in the list of allowed values. 
        * G177: Providing suggested correction text. 
        * SCR18: Providing client-side validation and alert. 
        * SCR32: Providing client-side validation and adding error text via the DOM.
* WCAG2 3.3.4 Error Prevention (Legal, Financial, Data): For Web pages that cause legal commitments, financial transactions, or testing competency for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: 
    * Reversible: Submissions are reversible.
    * Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
    * Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.
 * If WCAG 2.3.4 applies, the following error prevention methods apply: 
      * G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request.
     * G98: Providing the ability for the user to review and correct answers before submitting. 
     * G155: Providing a checkbox in addition to a submit button.
* In addition, if an action causes information to be deleted, the following apply:
    * G99: Providing the ability to recover deleted information.
    * G168: Requesting confirmation to continue with selected action.
* In addition, if the Web page includes a test of student knowledge, the following applies:
    * G168: Requesting confirmation to continue with selected action.

* WCAG 4.1.2 Name, Role Value: For all user interface components (including but not limited to: form elements, links and components
generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. 
    * ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used. 
    * ARIA16: Using aria-labelledby to provide a name for user interface controls. 
    * G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide
notification of changes  using one of the following techniques:
    * H91: Using HTML form controls and links: 
    * H44: Using label elements to associate text labels with form controls. 
    * H64: Using the title attribute of the frame and iframe elements. 
    * H65: Using the title attribute to identify form controls when the label element cannot be used. 
    * H88: Using HTML according to spec.

## Tests for SC 1.3.1, 3.3.2, 4.1.2
### Selector (Identify Content)
1. Find all form input components. Examples include buttons, text fields, radio buttons, checkboxes, multi-select lists (combo boxes).
1. Find all instructions and cues (textual and graphical) that are related to form components/controls, including groupings, order of completion, special conditions or qualifiers, error messages, error correction suggestions, etc. 

### Test Instructions (11.a)
1. Check that each form field/control is programmatically related to all its relevant instructions and cues (textual and graphical), including groupings, order of completion, special conditions or qualifiers, input formatting, etc. This may be done using methods such as (but not restricted to):
   * fieldset-legend grouping
   * label-for association
   * aria labeling (e.g. aria-labeledby, aria-label)
   * the TITLE attribute

##### Test Results for SC 3.3.1, 3.3.2, 4.1.2
* If any of the above checks fail, then the content fails these SCs.

#### Tests for SC 3.3.1, 3.3.2, 4.1.2
### Selector (Identify Content)
1. Enter incorrect values in some input fields in order to trigger and display error information.

### Test Instructions (11.b)
1. If an input error is automatically detected, check that:
   1. the user is made aware of the error, whether immediately, upon shifting focus away from the item in error (by keyboard), or when trying to submit the form (by keyboard). 
   1. the error is described to the user in text, and
   1. the item that is in error is identified.
Note: The above may be accomplished by using a combination of methods, such as 
   * shifting focus to an error message informing the user that the previous field needs to be corrected and describing the error.
   * refreshing the page upon form submission, then listing the errors and the items that are in error at the top of the page.
   * refreshing the page upon form submission, displaying an error message saying that one or more form fields need to be corrected, and using markup to associate the fields in error to information identifying them as needing correction and information about the errors.
   
##### Test Results for SC 3.3.1, 3.3.2, 4.1.2
* If any of the above checks fail, then the content fails these SCs.

#### Tests for SC 3.3.3 (could be merged with tests for 3.3.1, 3.3.2, 4.1.2)
### Selector (Identify Content)
1. Enter incorrect values in each input fields in order to trigger and display error information (there may be multiple error conditions). Determine instances where an input error is automatically detected and suggestions for correction are known.

### Test Instructions (11.c)
1. If an input error is automatically detected and suggestions for correction are known, check whether providing those  suggestions would jeopardize the security or purpose of the content.
   1. If yes, move to the next element to test.
   1. If no, check that these suggestions are provided to the user using a conformant method.
   
##### Test Results for SC 3.3.3
* If check 1a fails, then the content fails this SC.

#### Tests for SC 3.3.4
### Selector (Identify Content)
1. Find Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.

### Test Instructions (11.d)
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
