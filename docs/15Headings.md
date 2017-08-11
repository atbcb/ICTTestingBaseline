# 15. Headings
## Rationale
### Test Rationale

### Test Method Rationale

## Tools Necessary

## Test Rules

### Headings - B15.1-

#### Rule Description 
Headings must be programmatically determinable.

#### Accessibility Requirements
* WCAG2: 1.3.1 Info and relationships
    * Technique ARIA12: Using role=heading to identify headings
    * Technique H42: Using h1-h6 to identify headings

#### Limitations, Assumptions, or Exceptions
•	Limitation: Testing tool capability to find HTML <H> and ARIA <role=heading> attribute(s) of the page

#### Accessibility Support
•	Technologies that support ARIA and HTML H1-H6

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
1)	Identify the headings of the page by visual inspection of the page content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always).

##### Test Cases
###### Test Case Mode
Manual inspection

###### Test Tools Necessary / Test Tool Instructions
Step 1. Execute the ‘Headings’ favelet to reveal the headings markup. 
Step 2. Review the markup inserted next to the headings elements.

###### Test Cases
1.	Check that each heading is determined programmatically using <h1> to <h6>
2.	Check that each heading is determined programmatically using aria-role=”heading”

###### Output
1. Heading markup is revealed on content that is a heading.
2. Heading markup is not revealed on content that is not a heading.
•	Passed – Either statement is true 
•	Failed – Both statements are false

### Headings - B15.2-
#### Rule Description 
Headings levels must be programmatically determinable and correct within heading structure.

#### Accessibility Requirements
* WCAG2: 1.3.1 Info and relationships
    * Technique ARIA12: Using role=”heading” and aria-level=”#” to identify heading levels
    * Technique H42: Using h1-h6 to identify headings

#### Limitations, Assumptions, or Exceptions
* Limitation: Testing tool capability to find HTML <H> and ARIA <role=heading> attribute(s) of the page
* Exception: Pages with only one heading on the page does not have a heading structure

#### Accessibility Support
* Technologies that support ARIA and HTML H1-H6

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
1. Identify the headings of the page by visual inspection of the page content. Note the hierarchy and structure of each heading with respect to other headings on the page.

##### Test Cases
###### Test Case Mode
Manual inspection

###### Test Cases
1.	Check the levels of each heading. 
    1. Use the ‘Headings’ favelet to reveal the headings markup of the page.
    2. The markup will be inserted next to the elements.
2.	Check that each visual heading has markup that identifies its heading level and fits correctly within the heading structure. The most important heading has the level of 1, and the least important heading has a level of 6. Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section. 
    1. H42: each heading is marked with <H1> to <h6>.
    2. ARIA: each heading is marked with role=”heading”. If all headings on the page are at the same level, the additional aria-level=”#” is not required.

###### Output
1. Heading level markup is appropriate for the heading within the headings structure.
2. All headings on the page are set correctly at the same level.
    * Passed – either statement is true
    * Failed – either statement is false

#### Output for 1.3.1
1. Determine the outcome of 15.1
2. Determine the outcome of 15.2
    * Passed: Both outcomes of 15.1 and 15.2 passed
    * Failed: Both outcomes of 15.1 and 15.2 did not pass

### Headings - B15.3-
#### Rule Description 
Headings must be descriptive.

#### Accessibility Requirements
* WCAG2: 2.4.6 Headings and Labels
    * Technique G130: Providing descriptive headings 

#### Limitations, Assumptions, or Exceptions
None

#### Accessibility Support
None

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
1. Identify the headings of the page by visual inspection of the page content. 

##### Test Cases
###### Test Case Mode
Manual inspection

###### Test Cases
1. (G130) Check that each heading identifies its section of the content. Descriptive headings identify sections of the content in relation both to the Web page as a whole and to other sections of the same Web page. Descriptive headings also help users find specific content and orient themselves within the Web page.

###### Output for 2.4.6
1. Each heading identifies its section of the content.
    * Passed – the statement is true
    * Failed – the statement is false
