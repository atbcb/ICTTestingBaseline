---
title: "12. Tables"
order-number: 13
---
## 12. Tables

### Accessibility Requirements

-   [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

### Test Method Rationale

For assistive technology (AT) users, data tables must explicitly associate table data with table row and column headers via programmatic markup. Table markup also facilitates navigation for AT users by providing programmatic landmarks via column and row headers.

When `<table>` elements are used for layout purposes, data table structure elements are not permitted, such as `<th>`, `<caption>`, or `<summary>` (HTML4).

### Limitations, Assumptions, Exceptions

-   Data tables are those tables where information in a cell requires a row or column header to adequately describe the cell's contents. If a table is used for placement of components on the page for visual aesthetics, then it is considered a layout table.
-   Some content may visually appear to require a data table structure, but, linearizing the content and/or viewing the code reveals that the content is understandable without the table. This technique may be used for responsive design. These elements use CSS and/or other styling methods to present content in columns or rows. The information conveyed does not rely on programmatic relationships between column or row headers to be understood. This content is not a data table and should not use the element, ARIA role="table", and associated programmatic table attributes. It should be tested using other baseline tests, such as [13.Structure](https://github.com/Section508Coordinators/ICTTestingBaseline/blob/master/docs/13Headings) and/or possibly [10. Forms (associated instructions)](https://github.com/Section508Coordinators/ICTTestingBaseline/blob/master/docs/10Forms).
-   Rows of data that are related must have a row header so assistive technology users can understand the relationship of the row's data cells. Not every table requires a row header. For example, a calendar month is a data table, typically with the days of the week as column headers. The dates in a row are not related so typically, there is no row header present. However, if there was a cell in each row to indicate the week of the year, this cell would serve as a row header for the dates within that row.

### 12.1 Test Procedure for Data Tables

**Baseline Test ID:** 12.1-DataTable
#### Identify Content
<p id="1IC">All content/data visually presented in a table with column and/or row headers where the content is not in a meaningful sequence when linearized.</p>

<p>Note: Linearization of table content is the presentation of a table’s two-dimensional content in one-dimensional order of the content in the source, beginning with the first cell in the first row and ending with the last cell in the last row, from left to right, top to bottom.</p>

#### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Table: Check that each data table has programmatic markup to identify it as a table using one of the following techniques [SC 1.3.1]:
        <ul>
            <li>HTML <code>&lt;table&gt;</code></li>
            <li>ARIA <code>role="table"</code></li>
            <li>ARIA <code>role="grid"</code></li>
        </ul></li>
    <li id="1TI-2">Check that the data <code>&lt;table&gt;</code> element DOES NOT have <code>role="presentation"</code> or <code>role="none"</code>. [SC 1.3.1]</li>
    <li id="1TI-3">Table data cell: Check that each data cell uses only one of the following methods to identify it as a data cell within a table row depending on the technique identified in the first step [SC 1.3.1]:
        <ul>
            <li>For HTML <code>&lt;table&gt;</code>: <code>&lt;td&gt;</code> for the cell, which must be within a <code>&lt;tr&gt;</code> row.</li>
            <li>For ARIA <code>role="table"</code>: ARIA <code>role="cell"</code>, which must be within an ARIA <code>role="row"</code>.</li>
            <li>For ARIA <code>role="grid"</code>: ARIA <code>role="gridcell"</code>, which must be within an ARIA <code>role="row"</code> (if the ARIA grid is not making use of the native HTML <code>&lt;table&gt;</code> element and structure).</li>
        </ul></li>
    <li id="1TI-4">Header cells and data cell association: Identify all column and row headers for each data cell. Check that all data cells are programmatically associated with relevant headers using one of the following techniques [SC 1.3.1]:
    <ul>
        <li>For a simple HTML <code>&lt;table&gt;</code>, with all headers in the first row OR column, each header cell can be marked up with <code>&lt;th&gt;</code> without additional attributes.</li>
        <li>For any HTML <code>&lt;table&gt;</code>, header cells can be marked up with <code>scope</code> if all data cells that follow the header belong to the header. In HTML4, <code>&lt;td scope&gt;</code> is supported. In HTML5, <code>&lt;td scope&gt;</code> is not supported so all header cells must be <code>&lt;th&gt;</code>. Acceptable values for <code>scope</code> are <code>col|row|colgroup|rowgroup</code>. The <code>scope</code> only applies to cells that occur after the header cell(s) in the reading order.</li>
        <li>For any HTML <code>&lt;table&gt;</code>, data cells can be associated to a header cell by including the header cell's unique id value in <code>&lt;td headers&gt;</code>.
            <ul>
                <li>Data cells must refer to the id(s) of all relevant header cells via the headers attribute in order for the row and column headers to be properly associated.</li>
                <li>The order of the IDs referenced in the headers attribute are consistent and in a meaningful sequence.</li>
            </ul></li>
        <li>For any HTML <code>&lt;table&gt;</code> that uses BOTH <code>scope</code> AND refers to header IDs using <code>&lt;td headers&gt;</code> attributes in the same table, any data cell with a <code>headers</code> reference will override any <code>scope</code> attributes for associated table headers for that particular data cell. Therefore, data cells with a <code>headers</code> reference, must identify all relevant headers, independent from and regardless of <code>scope</code> attributes in associated headers.</li>
        <li>For ARIA <code>role="table"</code>: each column header must have <code>role="columnheader"</code> and each row header must have <code>role="rowheader"</code>.</li>
        <li>For ARIA <code>role="grid"</code>: each column header must have <code>role="columnheader"</code> and each row header must have <code>role="rowheader"</code> (if the ARIA grid is not making use of the native HTML <code>&lt;table&gt;</code> element and structure).</li>
	</ul></li>
</ol>

#### Test Results
<p id="1TR">If any of the above tests fail, Baseline Test 12.1-DataTable fails.</p>

### 12.2 Test Procedure for Layout Tables

**Baseline Test ID:** 12.2-LayoutTable
#### Identify Content
<p id="2IC">All content/data visually presented in a table that retains any meanigful sequence when linearized.</p>

<p>Note: Linearization of table content is the presentation of a table’s two-dimensional content in one-dimensional order of the content in the source, beginning with the first cell in the first row and ending with the last cell in the last row, from left to right, top to bottom.</p>

#### Test Instructions
<ol id="2TI">
    <li id="2TI-1">Check that tables used purely for layout purposes [SC 1.3.1]:
        <ol>
            <li id="2TI-1i">Do NOT designate the layout as a table using ARIA role="table" and associated ARIA table attributes.</li>
            <li id="2TI-1ii">Do NOT include table structure and relationship elements and/or associated attributes (e.g, <code>&lt;th&gt;</code>, summary, <code>&lt;caption&gt;</code>, <code>scope</code>, and/or <code>headers</code>) UNLESS at least one of the following is true:
            <ol>
                <li id="2TI-1iia">the table has <code>role="presentation"</code></li>
                <li id="2TI-1iib">the table has <code>role="none"</code></li>
            </ol></li>
            <li id="2TI-1iii">Do NOT identify column or row headers using <code>role="columnheader"</code> or <code>role="rowheader"</code> in an ARIA grid (where the data grid is identified using <code>role="grid"</code>).</li>
        </ol></li>
</ol>

#### Test Results
<p id="2TR">If any of the above tests fail, Baseline Test 12.2-LayoutTable fails.</p>

### Advisory: Tips for streamlined test processes

Content that is presented with a CSS table appearance, but does not rely on header association, can most easily be identified by linearization. Another helpful indicator is the table only has row headers or column headers but not both.

#### WCAG 2.0 Techniques
The following sufficient techniques were considered when developing this test procedure for this baseline requirement:
-   [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
-   [H51: Using table markup to present tabular information](https://www.w3.org/TR/WCAG20-TECHS/H51.html)
-   [H63: Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H63.html)
-   [F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized](https://www.w3.org/TR/WCAG20-TECHS/F49.html)
-   [F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](http://www.w3.org/TR/WCAG20-TECHS/F46.html)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../11PageTitles) | [Next Baseline](../13Structure)
