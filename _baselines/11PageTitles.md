---
title: "11. Page Titles"
order-number: 12
---
## 11. Page Titles

### Accessibility Requirements

-   [WCAG2 SC 2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) -- Web pages have titles that describe topic or purpose.

### Test Method Rationale

The `<title>` element defines the title of the document, and is required in all HTML/XHTML documents. This test evaluates the presence of a descriptive title for the Web page.

### Limitations, Assumptions, Exceptions

-   Every Web page must have a descriptive title. This test always applies.
-   The `<title>` element in this test is different from the title attribute used to add tooltip/extra information about an element.
-   Some Web and non-Web applications and may include content that changes dynamically. In such cases, the page title should be sufficient to describe the purpose of the application.
-   [HTML5 specification](https://www.w3.org/TR/html50/document-metadata.html#the-title-element) stipulates that an HTML document should have only one `<title>` element,  **AND**  the `<title>` element should be a child of the `<head>` element. However, in practice all modern browsers correct syntax errors related to location and nesting of the `<title>` element. Therefore, user agents that rely on the Document Object Model (DOM) will encounter the `<title>` in the correct location and will typically present only the first `<title>` element (if there is more than one) to the user.

### 11.A Test Procedure for Page Titled

**Baseline Test ID:** 11.A-PageTitled
#### Identify Content
<p id="11aIC">Web page</p>

#### Test Instructions
<ol id="11aTI">
    <li id="11aTI-1">Check that a page <code>&lt;title&gt;</code> element is defined for the page. [SC 2.4.2]</li>
    <li id="11aTI-2">Check that the page title describes the contents or purpose of the Web page. [SC 2.4.2]
        <ol>
            <li id="11aTI-2i">For pages within a Web site, the page title can be used to distinguish among the pages.</li>
            <li id="11aTI-2ii">For documents or Web applications, the name of the document or Web application would be sufficient to describe the purpose of the page.</li>
        </ol></li>
</ol>

#### Test Results
<p id="11aTR">If any of the above checks fail, then Baseline Test 11.A-PageTitled fails.</p>

### Advisory: Tips for streamlined test processes
- None

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](https://www.w3.org/WAI/WCAG22/Techniques/failures/F25)
-   [G88: Providing descriptive titles for Web page](https://www.w3.org/WAI/WCAG22/Techniques/general/G88)
-   [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG22/Techniques/html/H25)
    
