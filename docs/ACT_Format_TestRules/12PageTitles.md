# 12. Page Titles
## Rule Description (in plain language)
This test checks that a page has a programmatic title that identifies the Web page and makes sense without requiring users to read or interpret page content. 

## WCAG 2.0 Accessibility Requirements
SC 2.4.2: Page titled
Technique G88: Providing descriptive titles for Web pages
Technique H25: Providing a title using the title element

## Rationale
### Test Rationale
### Test Method Rationale

## Tools Necessary

## Test Rules
### Page Titles - B12.1-page-titles

#### Rule Description

#### Limitations, Assumptions, Exceptions
Tool accuracy limitation, if one is used.

#### Accessibility Support
•	Requires support for <title> within <head> section


#### Test Subject Type
Rendered page

#### Test Procedure 
##### Selector: Find Title of Page (H25)
1. Mouse over the browser’s tab of the Web page , or
2. Select the <title> existing within the <head> section .

##### Test Cases
###### Test Case Mode
Manually Inspect the Title of the Page (G88)

###### Test Case Steps
1. Check if the page <title> describes the subject of the page and makes sense without further context.

###### Outcome
1. Pass: true
2. Fail: false

#### Outcome
* 2.4.2 fails 
  * Fail Baseline Requirement #12
* 2.4.2 passes
  * Pass Baseline Requirement #12
