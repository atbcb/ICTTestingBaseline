---
title: "Chapter 1: Using the ADA Standards"
order-number: 11
---
# 10. Forms

Accessibility Requirements
--------------------------
-   [WCAG2 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
-   [WCAG 2.4.6 Headings and Labels](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html): Headings and labels describe topic or purpose.
-   [WCAG 3.2.2 On Input](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html): Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
-   [WCAG2 3.3.1 Error Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html): If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
-   [WCAG2 3.3.2 Labels or Instructions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html): Labels or instructions are provided when content requires user input.
-   [WCAG2 3.3.3 Error Suggestion](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html): If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
-   [WCAG2 3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html): For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:
    1.  Reversible: Submissions are reversible.
    2.  Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
    3.  Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.
-   [WCAG2 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html): For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.

Test Method Rationale
---------------------
Review form instructions for completeness and programmatic association to their inputs. Enter erroneous inputs and review error notifications provided to the user.

Limitations, Assumptions, or Exceptions
---------------------------------------
-   Read-only (e.g. pre-filled) form fields receive keyboard focus and are selectable but cannot be modified. These must be labeled and programmatically determinable, and are tested under SC 1.3.1.
-   Disabled input elements do not receive keyboard focus, cannot be selected, and cannot be modified. These are not included in this test.
-   The combination of an element's accessible name and accessible description is its text alternative.
-   Clicking an option or selecting an option in a form should select the option, but should not initiate a change in context.
-   [Change of context](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html#context-changedef) is defined in [Understanding SC 3.2.1: On Focus](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html) as: major changes in the content of the Web page that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
    1.  User agent
    2.  Viewport
    3.  Focus
    4.  Content that changes the meaning of the Web page
    - Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).
    - Example: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

## 10.1 Test Procedure for Form Names 
**Baseline Test ID:** 10.1-FormName
### Identify Content
<ol id="1IC">
    <li id="1IC-1">Find all form components. Examples include buttons, text fields, radio buttons, checkboxes, read-only fields, and multi-select lists.</li>
    <li id="1IC-2">Find all instructions and cues (textual and graphical) that are related to form components, including groupings, order of completion, special conditions or qualifiers, format instructions, etc.</li>
</ol>

### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Check that the combination of the accessible name and accessible description is not empty. [SC 4.1.2]</li>
    <li id="1TI-2">Check that the non-empty combination of the accessible name and accessible description and other programmatic associations (e.g., table column and/or row associations) describes each form component and includes all relevant instructions and cues (textual and graphical).  [SC 1.3.1]  For details on the computation of the accessible name and accessible description, references include:</li>
    <ul>
        <li><a href="https://www.w3.org/TR/html-aam-1.0/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-url-and-textarea-element" target="_blank" rel="noopener">HTML Accessibility API Mappings 1.0 for text <code>input</code></a></li>
        <li><a href="https://www.w3.org/TR/html-aam-1.0/#input-type-button-input-type-submit-and-input-type-reset" target="_blank" rel="noopener">HTML Accessibility API Mappings for <code>input</code> controls</a></li>
        <li><a href="https://www.w3.org/TR/html-aam-1.0/#button-element" target="_blank" rel="noopener">HTML Accessibility API Mappings for <code>button</code> element</a>
        <li><a href="https://www.w3.org/TR/html-aam-1.0/#input-type-image" target="_blank" rel="noopener">HTML Accessibility API Mappings for <code>input type="image"</code></a></li>
        <li><a href="https://www.w3.org/TR/html-aam-1.0/#other-form-elements" target="_blank" rel="noopener">HTML Accessibility API Mappings for Other Form Elements</a></li>
    </ul>
</ol>

### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 10.1-FormName fails.</p>

## 10.2 Test Procedure for Form Labels Descriptive 
**Baseline Test ID:** 10.2-FormDescriptiveLabel
### Identify Content
<ol id="2IC">
    <li id="2IC-1">Find all form components. Examples include buttons, text fields, radio buttons, checkboxes, multi-select lists.</li>
    <li id="2IC-2">Find all instructions and cues (textual and graphical) that are related to form components, including groupings, order of completion, special conditions or qualifiers, format instructions, etc.</li>
</ol>

### Test Instructions
<ol id="2TI">
    <li id="2TI-1">Check that provided labels (instructions and cues) for each form component describe purpose, inform users what input data is expected and, if applicable, what format is required. [SC 2.4.6]</li>
</ol>

### Test Results
<p id="2TR">If any of the above checks fail, then Baseline Test 10.2-FormDescriptiveLabel fails.</p>

10.3 Test Procedure for On Input
------------------------------------
**Baseline Test ID:** 10.3-OnInput
### Identify Content
<p id="3IC">All active form components.</p>

### Test Instructions
<ol id="3TI">
    <li id="3TI-1">Enter data in all form fields, and exit (tab out of) the field</li>
    <li id="3TI-2">Change selections and/or values for form components, such as radio buttons, check boxes, select lists, etc.</li>
    <li id="3TI-3">Check that navigating away from a component and/or changing component values/selections (e.g., entering data in a text field, changing a radio button selection) <strong>does NOT</strong> initiate a change of context unless the user has been advised of the behavior before using the component. [SC 3.2.2]<br>
    Examples of a change of context could include:</li>
    <ul>
        <li>Forms submitted automatically when exiting the field</li>
        <li>Forms submitted automatically when exiting the last field in a form</li>
        <li>New windows launched when changing a radio button selection</li>
        <li>Focus is changed to another component when a select list item is selected</li>
    </ul>
</ol>

### Test Results
<p id="3TR">If any of the above checks fail, then Baseline Test 10.3-OnInput fails.</p>

10.4 Test Procedure for Error Identification
---------------------------------------------
**Baseline Test ID:** 10.4-ErrorIdentification
### Identify Content
<p id="4IC">Input form components with automatic error detection and notification.</p>

### Test Instructions
<ol id="4TI">
    <li id="4TI-1">Enter incorrect values in input form components in order to trigger automatic error detection that results in error notifications. <br> Examples include but are not limited to:</li>
        <ul>
            <li>required fields</li>
            <li>date (format)</li>
            <li>state (abbreviations in an address)</li>
            <li>password</li>
        </ul>
    <li id="4TI-2">If an input error is automatically detected, check that the error notification meets all of the following [SC 3.3.1]:</li>
        <ul>
            <li>the user is made aware of the error (whether immediately upon shifting focus away from the item in error or when trying to submit the form), and</li>
            <li>the error is described to the user in text, and</li>
            <li>the item that is in error is identified in text.</li>
        </ul>
</ol>

### Test Results
<p id="4TR">If any of the above checks fail, then Baseline Test 10.4-ErrorIdentification fails.</p>

10.5 Test Procedure for Form has a Label
-----------------------------------------------
**Baseline Test ID:** 10.5-FormHasLabel
### Identify Content
<ol id="5IC">
    <li id="5IC-1">Find all form components. Examples include buttons, text fields, radio buttons, checkboxes, multi-select lists.</li>
    <li id="5IC-2">Find all instructions and cues (textual and graphical) that are related to form components, including groupings, order of completion, special conditions or qualifiers, format instructions, etc.</li>
</ol>

### Test Instructions
<ol id="5TI">
    <li id="5TI-1">Check that each form component has label(s) or instructions. [SC 3.3.2]</li>
</ol>

### Test Results
<p id="5TR">If any of the above checks fail, then Baseline Test 10.5-FormHasLabel fails.</p>

10.6 Test Procedure for Error Suggestion
-----------------------------------------
**Baseline Test ID:** 10.6-ErrorSuggestion
### Identify Content
<p id="6IC">Input form components with automatic error detection and notification.</p>

### Test Instructions
<ol id="6TI">
    <li id="6TI-1">Enter incorrect values in input form components in order to trigger automatic error detection that result in error notifications. Examples include but are not limited to:</li>
        <ul>
            <li>required fields</li>
            <li>date (format)</li>
            <li>state (abbreviations in an address)</li>
            <li>password</li>
        </ul>
    <li id="6TI-2">Review error notifications provided.</li>
    <li id="6TI-3">Check that additional guidance (e.g., suggestion for corrected input, guidance on how to correct the user's input) is provided on how to correct errors for form fields that would not jeopardize the security or purpose of the content. [SC 3.3.3]</li>
</ol>

### Test Results
<p id="6TR">If any of the above checks fail, then Baseline Test 10.6-ErrorSuggestion fails.</p>

10.7 Test Procedure for Error Prevention (Legal, Financial, Data)
------------------------------------------------------------------
**Baseline Test ID:** 10.7-ErrorPrevention
### Identify Content
<p id="7IC">Page that causes legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.</p>

### Test Instructions
<ol id="7TI">
    <li id="7TI-1">Complete the form components necessary to submit. Include errors.</li>
    <li id="7TI-2">Check that at least one of the following is true [SC 3.3.4]:</li>
    <ol>
        <li id="7TI-2i">Reversible: Submissions are reversible.</li>
        <li id="7TI-2ii">Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li>
        <li id="7TI-2iii">Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li>
    </ol>
</ol>

### Test Results
<p id="7TR">If any of the above checks fail, then Baseline Test 10.7-ErrorPrevention fails.</p>

Test Procedure for Form Changes
------------------------------------------------------------------
<p>Form components that change are tested in [Baseline 5. Changing Content](05Changing.md).</p>

Advisory: Tips for streamlined test processes
---------------------------------------------
-   For SC 3.3.1, acceptable techniques include a) shifting focus to an error message informing the user that the previous field needs to be corrected and describing the error, b)refreshing the page upon form submission, then listing the error descriptions and locations at the top of the page. Re-displaying the form and indicating the fields in error within the form is insufficient to meet this requirement. The user should not need to search through the form to find where errors were made.
-   For SC 3.3.4, because the user can review a simple, 1-page form before pressing the submit button on the page, another review mechanism is not required. 

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G115: Using semantic elements to mark up structure](http://www.w3.org/TR/WCAG20-TECHS/G115.html) AND [H49: Using semantic markup to mark emphasized or special text](http://www.w3.org/TR/WCAG20-TECHS/H49.html)
-   [G80: Providing a submit button to initiate a change of context](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G80)
-   [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G13)
-   [G131: Providing descriptive labels](http://www.w3.org/TR/WCAG20-TECHS/G131.html)
-   [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/WCAG20-TECHS/H44.html)
-   [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/WCAG20-TECHS/H71.html)
-   [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/WCAG20-TECHS/H65.html)
-   [SCR19: Using an onchange event on a select element without causing a change of context](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR19)
-   [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/WCAG20-TECHS/G83.html)
-   [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/WCAG20-TECHS/G85.html)
-   [F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F36)
-   [F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F37)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](09Flashing.md) | [Next Baseline](11PageTitles.md)