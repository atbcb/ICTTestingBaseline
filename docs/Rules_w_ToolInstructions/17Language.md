# 17. Language
## Rationale
The default language for each page must be programmatically identified. Passages that use a language other than the default must be programmatically identified.

### Test Rationale

### Test Method Rationale

#### Accessibility Requirements
* WCAG2: 3.1.1: Language of Page
    * Technique H57: Using language attributes on the html element
* WCAG2: 3.1.2: Language of Parts
    * Technique H58: Using language attributes to identify changes in the human language

## Tools Necessary
* *Show Lang Attributes* favelet - used to reveal language markup

## Limitations, Assumptions or Exceptions
*	Limitation: Testing tool capability to find the <lang> attribute(s) of the page
*	Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts

## Test Procedure
### Selector (Identify Content):  
Identify the default language of the page by reviewing the page content. Note any content or passages that differ from the default language of the page.

### Test Instructions

#### Tests for SC 3.1.1
1. Check that the html <lang> attribute is provided for the page (H57)
    1. Use the ‘Show Lang Attributes’ tool to see if the page’s default language is set. If so, the tool markup for the page’s language will appear at the top left corner of the page.
1. Check that the primary language subtag is correctly defined for the page.
    1. The primary language subtag is a 2 or 3 character code that represents the name of a language. (Do not test additional language specification that may follow the primary language subtag.)
    1. Check that the correct abbreviation for the primary language is used, for example, “en” for English. 
        1. Use the Language subtag lookup tool at https://r12a.github.io/app-subtags/. 
        1. In the “Look up” section, enter the language abbreviation that was revealed in this test. 

##### Test Results for SC 3.1.1
* If the test for 3.1.1 fails, the content is not conformant to SC 3.1.1.

#### Tests for SC 3.1.2
1. Check that the <lang> attribute is specified for any content or passage that differs from the default language of the page (H58)
    1. Use the ‘Show Lang Attributes’ tool to reveal the <lang> markup. The tool markup will display near the content it describes. 
    1. Check that the secondary language subtag is correctly defined for the passage. The language subtag is a 2 or 3 character code that represents the name of a language. (Check only instances where the secondary language specification is appropriate.)
    1. Check that the language subtag is properly “closed” at the end of the passage so that the primary language is again applied.
    1. Check that the correct abbreviation for the primary language is used, for example, “es” for Spanish. 
        1. Use the Language subtag lookup tool at https://r12a.github.io/app-subtags/. 
        1. In the “Look up” section, enter the language abbreviation revealed in this test. 

##### Test Results for SC 3.1.2
* If the test for 3.1.2 fails, the content is not conformant to SC 3.1.2.

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
