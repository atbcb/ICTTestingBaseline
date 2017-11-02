# 12. Page Titles
## Rule Description (in plain language)
A Web page must have a programmatic title that identifies the Web page and makes sense without requiring users to read or interpret page content. 

## Accessibility Requirements
* WCAG2 SC: 2.4.2 Page titled
  * Technique G88: Providing descriptive titles for Web page
  * Technique H25: Providing a title using the title element
  * F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents

## Limitations, Assumptions, Exceptions
 * Assumption: Browsers render the title of the page in the browser's tab. *<<<Comment from Kathy: If this too much HOW TO TEST, it should be removed.*

## Test Procedure 
### Selector
All web pages

### Test Instructions
1. Review the page content and the Page Title *displayed in the browser tab <<<see Kathy's comment above*
1. Check if the Page Title identifies the contents or purpose of the Web page
1. Check if the Page Title can be used to distinguish pages within a site.

#### Test Results
* If any of the above checks fail, then this SC fails

## Baseline Requirement Outcome
* If any SC fails, then this baseline fails
