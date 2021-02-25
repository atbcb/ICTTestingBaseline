# 17. Language
## Requirement
WCAG SC 3.1.1: Language of Page
WCAG SC 3.1.2: Language of Parts
## Rationale
### Test Rationale

### Test Method Rationale

## Tools Necessary

## Test Rules
### Language - B17.1-language

#### Rule Description
The human language of Web page content can be programmatically determined.

#### Accessibility Requirements
* SC 3.1.1: Language of Page
  * Technique H57: Using language attributes on the html element
* SC 3.1.2: Language of Parts
  * Technique H58: Using language attributes to identify changes in the human language

#### Limitations, Assumptions or Exceptions
•	Limitation: Testing tool capability to find the <lang> attribute(s) of the page
•	Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts

#### Accessibility Support
•	Attributes: HTML <lang> within <head>

#### Test Subject Types 
Rendered page

#### Test Procedure
##### Selector:  
1)	Identify the default language of the page by reviewing the page content. Note any content or passages that differ from the default language of the page.

##### Test Cases
###### Test Case Mode
Manual inspection 

###### Test Case Step (3.1.1)
1. Check that the <lang> attribute in the <html> tag is provided for the page (H57)
    1. Use the ‘Show Lang Attributes’ tool to reveal the page’s language setting. 
    2. The tool markup for the page’s language will appear at the top left corner of the page. 
2. Check that the primary language subtag is correctly defined for the page.
    1. The primary language subtag is a 2 or 3 character code that represents the name of a language. (Do not test additional language specification that may follow the primary language subtag.)
    2. Check that the correct abbreviation for the primary language is used, for example, “en” for English. 
        1. Use the Language subtag lookup tool at https://r12a.github.io/app-subtags/. 
        2. In the “Look up” section, enter the language abbreviation revealed in Step 1a. 

###### Output (3.1.1)
1. The correct primary language subtag is used to identify the language for the page.
    1. Pass: the statement is true
    2. Fail: the statement is false

###### Test Case Step (3.1.2) 
1. Check that the <lang> attribute is specified for content or passage that differs from the default language of the page (H58)
    1. Use the ‘Show Lang Attributes’ tool to reveal the <lang> markup. 
    2. The tool markup will display near the content it describes. 
2. Check that the secondary primary language subtag is correctly defined for the passage.
    1. The language subtag is a 2 or 3 character code that represents the name of a language. (Check only instances the passages where the secondary language specification is appropriate.)
    2. Check that the language subtag is properly “closed” at the end of the passage so that the primary language is again applied.
    3. Check that the correct abbreviation for the primary language is used, for example, “es” for Spanish. 
        1. Use the Language subtag lookup tool at https://r12a.github.io/app-subtags/. 
        2. In the “Look up” section, enter the language abbreviation revealed in Step 1a. 

###### Output (3.1.2)
1. The correct primary language subtag is used to identify the language for the passage.
    1. Pass: the statement is true
    2. Fail: the statement is false

#### Outcome

Baseline Outcome
•	Both 3.1.1 and 3.1.2 pass – Passes Baseline Requirement 17
•	Either 3.1.1 or 3.1.2 fails – Fails Baseline Requirement 17 
