# 11. Page Titles
## Accessibility Requirements
* [WCAG2 SC 2.4.2 Page Titled](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html) -- Web pages have titles that describe topic or purpose.

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
The `<title>` element defines the title of the document, and is required in all HTML/XHTML documents. Client-based software applications provide window or screen titles to describe and differentiate content and purpose. This test evaluates the presence of a descriptive title for the Web page or application window. 

## Limitations, Assumptions, Exceptions
* Assumption: every Web page or software window should have a descriptive title.
* For the purpose of this test, the term software “window” may be used synonymously with software “screen” or “tab.”
* The `<title>` element must be located as a child of the `<head>` element and is not accessibility supported in other locations (see [Conformance Requirement 4. Accessibility Support](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-support-head)). The `<title>` element in this test is different from the `title` attribute used to add extra information about an element.
* Some Web and non-Web applications and may include content that changes dynamically. In such cases, the page title should be sufficient to describe the purpose of the application.

## Test Procedure for SC 2.4.2 Page Titled 
### 2.4.2 Page Titled - Web
#### Identify Content
Page `<title>` element for the page, if any.

#### Test Instructions
1. Check that the `<title>` element is located as a child of the `<head>` element
2. If a page `<title>` element was found:
    1. Check that the Page Title identifies the contents or purpose of the Web page
        1. For pages within a Web site, check that the Page Title can be used to distinguish among the pages.
        1. For documents or Web applications, the name of the document or Web application would be sufficient to describe the purpose of the page.
    1. Check that there is only one page `<title>` element.

#### Test Results
If any of the above checks fail, then SC 2.4.2 and Baseline Requirement 11 fail.

### 2.4.2 Page Titled - Software
#### Identify Content
The application window’s title.

#### Test Instructions
1. Check that the application window title identifies the contents or purpose of the window (e.g., via the UIA Name property of a Window control in a Windows-native software application).
2. For windows within a collection of application windows or screens (for the same application), check that the application window title can be used to distinguish among the windows.

#### Test Results
If any of the above checks fail, then SC 2.4.2 and Baseline Requirement 11 fail.

## Advisory Tips for streamlined test processes
* HTML5 specification stipulates that “there must be no more than one `<title>` element per document.”  

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G88: Providing descriptive titles for Web page](https://www.w3.org/TR/WCAG20-TECHS/G88.html)
    * [H25: Providing a title using the title element](https://www.w3.org/TR/WCAG20-TECHS/H25.html)
    * [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](https://www.w3.org/TR/WCAG20-TECHS/F25.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](10Forms.md) | [Next Baseline](12DataTables.md)
