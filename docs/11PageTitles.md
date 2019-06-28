# 11. Page Titles

Accessibility Requirements
--------------------------
-   [WCAG2 SC 2.4.2 Page Titled](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html) -- Web pages have titles that describe topic or purpose.

Test Method Rationale
---------------------
The &lt;title&gt; element defines the title of the document, and is required in all HTML/XHTML documents. This test evaluates the presence of a descriptive title for the Web page.

Limitations, Assumptions, Exceptions
------------------------------------
-   Every Web page should have a descriptive title.
-   The &lt;title&gt; element must be located as a child of the &lt;head&gt; element and is not accessibility supported in other locations (see [Conformance Requirement 4. Accessibility Support](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-support-head)). The &lt;title&gt; element in this test is different from the title attribute used to add extra information about an element.
-   Some Web applications and may include content that changes dynamically. In such cases, the page title should be sufficient to describe the purpose of the application.

Test Procedure for SC 2.4.2 Page Titled
---------------------------------------
### Identify Content
Page &lt;title&gt; element for the page.

### Test Instructions
1.  Check that the &lt;title&gt; element is a child of the &lt;head&gt; element.
1.  Check that the Page Title is not empty and identifies the contents or purpose of the Web page:
    -   For pages within a Web site, check that the Page Title can be used to distinguish among the pages.
    -   For documents or Web applications, the name of the document or Web application would be sufficient to describe the purpose of the page.

### Test Results
If any of the above checks fail, then SC 2.4.2 and Baseline Requirement 11 fail.

Advisory: Tips for streamlined test processes
---------------------------------------------
-   Although it is not part of this requirement, HTML5 specification stipulates that “there must be no more than one &lt;title&gt; element per document.”

### WCAG 2.0 Techniques
-   The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    -   [G88: Providing descriptive titles for Web page](https://www.w3.org/TR/WCAG20-TECHS/G88.html)
    -   [H25: Providing a title using the title element](https://www.w3.org/TR/WCAG20-TECHS/H25.html)
    -   [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](https://www.w3.org/TR/WCAG20-TECHS/F25.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](10Forms.md) | [Next Baseline](12DataTables.md)
