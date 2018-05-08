# 10. Forms
## Accessibility Requirements
* [WCAG2 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 
* [WCAG SC 3.2.2 On Input](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html) -- Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
* [WCAG2 3.3.1 Error Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html): If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
* [WCAG2 3.3.2 Labels or Instructions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html): Labels or instructions are provided when content requires user input.
* [WCAG2 3.3.3 Error Suggestion](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html): If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
* [WCAG2 3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html): For Web pages [or software] that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:
   1. Reversible: Submissions are reversible.
   1. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
   1. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

## Test Method Rationale
Review form instructions for completeness and programmatic association to their inputs. Enter erroneous inputs and review error notifications provided to the user.

## Limitations, Assumptions, or Exceptions
* Read-only (e.g. pre-filled) form fields receive keyboard focus and are selectable but cannot be modified. These must be labeled and programmatically determinable, and are tested under SC 1.3.1.
* Disabled input elements do not receive keyboard focus, cannot be selected, and cannot be modified. These are not included in this test.
* Clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly intended to initiate a change in context when activated do not fail under this test.
* [Change of context](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html#context-changedef) is defined as: major changes in the content of the Web page [or software] that, if made without user awareness, can disorient users who are not able to view the entire page[/screen] simultaneously. Changes in context include changes of:
    1. User agent
    2. Viewport
    3. Focus
    4. Content that changes the meaning of the Web page [or software screen]

* **Note:** A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus). 
  * Example: Opening a new window, moving focus to a different component, going to a new page[/screen] (including anything that would look to a user as if they had moved to a new page[/screen]) or significantly re-arranging the content of a page[/screen] are examples of changes of context. (Above definition from https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html)

## Test Procedure for 1.3.1 Info and Relationships
### Identify Content
1. Find all form input components. Examples include buttons, text fields, radio buttons, checkboxes, read-only fields, and multi-select lists.
2. Find all instructions and cues (textual and graphical) that are related to form components/controls, including groupings, order of completion, special conditions or qualifiers, format instructions, etc.

### 1.3.1 Info and Relathionships - Web
#### Test Instructions
1. Check that the combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical). Reference [HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/html-aam-1.0/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-url-and-textarea-element) for details on techniques that contribute to the computation of the accessible name and accessible description.

#### Test Results
If any of the above checks fail, then SC 1.3.1 and Baseline Requirement 10 fail.

### 1.3.1 Info and Relathionships - Windows-Native Software
#### Test Instructions
1. Check that the combination of the following UIA properties, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical). 
    * LocalizedControlType
    * Name
    * HelpText
    * The static text from elements referenced by the element's LabeledBy property
    * The static text from elements referenced by the element's DescribedBy property
1. Check that the element is included in the Control View AND the Content View of the UIA tree, i.e., IsControlElement = TRUE and IsContentElement = TRUE

#### Test Results
If any of the above checks fail, then SC 1.3.1 and Baseline Requirement 10 fail.

## Test Procedure for SC 3.2.2 On Input
### Identify Content
All active form components.

### Test Instructions
1. Enter data in all form fields, and exit (tab out of) the field
2. Change selections and/or values for form controls, such as radio buttons, check boxes, select lists, etc.
3. Check that navigating away from a field and/or changing field values/selections (e.g., entering data in a text field, changing a radio button selection) **does NOT** initiate a change of context unless the user has been advised of the behavior before using the component. Examples of a change of context could include:
    * Forms submitted automatically when exiting the field
    * Forms submitted automatically when exiting the last field in a form
    * New windows launched when changing a radio button selection
    * Focus is changed to another component when a select list item is selected

### Test Results
If any of the above checks fail, then SC 3.2.2 and Baseline Requirement 10 fail.

## Test Procedure for 3.3.2 Labels or Instructions
### Identify Content
1. Find all form input components. Examples include buttons, text fields, radio buttons, checkboxes, multi-select lists.
2. Find all instructions and cues (textual and graphical) that are related to form components/controls, including groupings, order of completion, special conditions or qualifiers, format instructions, etc.

### Test Instructions
1. Check that the labels and instructions for each form input inform users what input data is expected and, if applicable, what format is required.

### Test Results
If any of the above checks fail, then SC 3.3.2 and Baseline Requirement 10 fail.

## Test Procedure for 3.3.1 Error Identification
### Identify Content
1. Input fields with automatic error detection and notification.

### Test Instructions
1. Enter incorrect values in input fields in order to trigger automatic error detection that results in error notifications. Examples include but are not limited to:
    * required fields
    * date (format)
    * state (abbreviations in an address)
    * password
2. If an input error is automatically detected, check that the error notification meets all of the following:
    1. the user is made aware of the error (whether immediately upon shifting focus away from the item in error or when trying to submit the form), and
    1. the error is described to the user in text, and
    1. the item that is in error is identified in text.

### Test Results
If any of the above checks fail, then SC 3.3.1 and Baseline Requirement 10 fail.

## Test Procedure for 3.3.3 Error Suggestion
### Identify Content
Input fields with automatic error detection and notification.

### Test Instructions
1. Enter incorrect values in input fields in order to trigger automatic error detection that result in error notifications. Examples include but are not limited to:
    1. required fields
    2. date (format)
    3. state (abbreviations in an address)
    4. password
2. Review error notifications provided.
3. Check that additional guidance (e.g., suggestion for corrected input) is provided on how to correct errors for form fields that would not jeopardize the security or purpose of the content.    

### Test Results
If any of the above checks fail, then SC 3.3.3 and Baseline Requirement 10 fail.

## Test Procedure for 3.3.4 Error Prevention (Legal, Financial, Data)
### Identify Content
Web pages and software that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.

### Test Instructions
1. Complete the form fields necessary to submit.
2. Check that at least one of the following is true:
    1. Reversible: Submissions are reversible.
    1. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
    1. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

### Test Results
If any of the above checks fail, then SC 3.3.4 and Baseline Requirement 10 fail.

## Advisory: Tips for streamlined test processes
* Re-displaying the form and indicating the fields in error within the form is insufficient to meet this requirement. The user should not need to search through the form to find where errors were made.
* For SC 3.3.1, acceptable techniques include a) shifting focus to an error message informing the user that the previous field needs to be corrected and describing the error, b)refreshing the page/screen upon form submission, then listing the error descriptions and locations at the top of the page/screen.

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G115: Using semantic elements to mark up structure](http://www.w3.org/TR/WCAG20-TECHS/G115.html) AND [H49: Using semantic markup to mark emphasized or special text](http://www.w3.org/TR/WCAG20-TECHS/H49.html)
* [G80: Providing a submit button to initiate a change of context](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G80)
* [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G13)
* [G131: Providing descriptive labels](http://www.w3.org/TR/WCAG20-TECHS/G131.html)
* [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/WCAG20-TECHS/H44.html)
* [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/WCAG20-TECHS/H71.html)
* [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/WCAG20-TECHS/H65.html)
* [SCR19: Using an onchange event on a select element without causing a change of context](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR19)
* [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/WCAG20-TECHS/G83.html)
* [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/WCAG20-TECHS/G85.html)
* [F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F36)
* [F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F37)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](09Flashing.md) | [Next Baseline](11PageTitles.md)
