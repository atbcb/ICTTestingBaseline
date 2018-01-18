# 12. Page Titles
## Accessibility Requirements
* [WCAG2 SC 2.4.2 Page Titled](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html) -- Web pages have titles that describe topic or purpose.

## Test Method Rationale
The `<TITLE>` element defines the title of the document, and is required in all HTML/XHTML documents. This test evaluates the presence of a descriptive title for the document. 

## Limitations, Assumptions, Exceptions
* Assumption: every page should have a descriptive title.
* The `<TITLE>` element in this test is different from the `title` attribute used to add extra information about an element and is often shown as a tooltip text when the mouse moves over the element.

## Test Procedure for SC 2.4.2 Page Titled 
### Select/Identify Content
Identify the title for the page.

### Test Instructions
1. Review the page content and the Page Title.
1. Check if the Page Title identifies the contents or purpose of the Web page.
1. Check if the Page Title can be used to distinguish pages within a site.

### Test Results
* If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Advisory Tips for a Streamlined Test Process
* The `<TITLE>` element is required for validate HTML and can be included as a test for 4.1.1 Parsing.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [Technique G88: Providing descriptive titles for Web page](https://www.w3.org/TR/WCAG20-TECHS/G88.html)
    * [Technique H25: Providing a title using the title element](https://www.w3.org/TR/WCAG20-TECHS/H25.html)
    * [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](https://www.w3.org/TR/WCAG20-TECHS/F25.html)
