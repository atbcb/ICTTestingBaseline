# 14. Links 
## Accessibility Requirements
* [WCAG 2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html) - The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.

## Test Method Rationale
Links, including scripted elements, must have meaningful text (either directly associated or available in context) that describe its purpose or function. In order for associated text to be available to assistive technologies, the link information must be determinable programmatically.

## Limitations, Assumptions, Exceptions
* [From Understanding SC 2.4.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html): There may be situations where the purpose of the link is is supposed to be unknown or obscured. For instance, a game may have links identified only as door #1, door #2, and door #3. This link text would be sufficient because the purpose of the links is to create suspense for all users.

## Test Procedure for SC 2.4.4 Link Purpose (In Context)
### Identify Content
All links, including those that are scripted elements and assigned a role of a link.

### 2.4.4 Link Purpose - Web
#### Test Instructions
1. Check that the purpose of each link can be determined from any combination of the link text, [accessible name, accessible description](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation), and/or preceding page context (same paragraph, list, or table cell as the link or in a table header cell that is associated with the table cell that contains the link).

#### Test Results
* If any of the above checks fail, then SC 2.4.4 and Baseline 14 fails

### 2.4.4 Link Purpose - Windows-Native Software
#### Test Instructions
1. Check that the purpose of each link can be determined from any combination of the following UIA properties, and/or preceding page/screen context (same paragraph, list, or table cell as the link or in a table header cell that is associated with the table cell that contains the link):
    * Name
    * The static text from elements referenced by the element's LabeledBy property
    * Value
1. Check that the element is included in the Control View AND the Content View of the UIA tree, i.e., IsControlElement = TRUE and IsContentElement = TRUE

#### Test Results
* If any of the above checks fail, then SC 2.4.4 and Baseline 14 fails

## Advisory: Tips for streamlined test processes
* In cases where the link/control takes one to a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the link (which is to take you to the document or web application).
* Test pages for different link techniques for Web include [ARIA link example](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20161214/examples/link/link.html) and [Link accessible name](http://not.webaccessibility.com/link-accessible-name.html). 

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G91: Providing link text that describes the purpose of a link](https://www.w3.org/TR/WCAG20-TECHS/G91.html)
* [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/TR/WCAG20-TECHS/G53.html)
* [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA7.html)
* [ARIA8: Using aria-label for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html)
* [H77: Identifying the purpose of a link using link text combined with its enclosing list item](https://www.w3.org/TR/WCAG20-TECHS/H77.html)
* [H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells](https://www.w3.org/TR/WCAG20-TECHS/H79.html)
* [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F89)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](13Headings.md) | [Next Baseline](15Language.md)
