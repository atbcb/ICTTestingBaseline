# 13. Tables
## Accessibility Requirements
* **[WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)** -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
* **[WCAG SC 2.4.6 Headings and Labels](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)** -- Headings and Labels provide topic and purpose

## Test Method Rationale
For assistive technology (AT) users, data tables must explicitly associate table data with table row and column headers via programmatic markup. Table markup also facilitates navigation for AT users by providing programmatic landmarks via column and row headers.

## Limitations, Assumptions, Exceptions
* Data tables are those tables where information in a cell requires a row or column header to adequately describe the cell's contents. If a table is used for placement of components on the page for visual aesthetics, then it is considered a layout table. This requirement applies to data tables only.
* Some responsive content may visually appear to be a table, but it is not. These elements use CSS and/or other styling methods, and the information conveyed does not rely on interrelationships between row and column headers to be understood. This content may not use the <table> element, ARIA role="table", and associated programmatic table attributes. Resizing the page or disabling style sheets can reveal if the “table” is really responsive content. This type of content is not evaluated as a table. It should be tested using other baseline tests, such as 15. Headings, 11. Forms (associated instructions).
* Rows of data that are related must have a row header so assistive technology users can understand the relationship of the row's data cells. While row headers are often in the first column, it is not a requirement. An example of an exception to this rule: a calendar month is a data table, typically with the days of the week as column headers. The dates in a row are not related so typically, there is no row header present.
* The use of `<table>` elements for layout purposes is discouraged. No other elements associated with data tables are permitted to be used for table layout purposes, such as `<th>`, `<td>`, `<summary>`, or `<caption>`.

## Test Procedures for 1.3.1 Info and Relationships
### Select/Identify Content
All content/data visually presented in columns and/or rows where understanding of the content requires association to column and/or row headers, including:
* Data organized in tables designated with explicit programmatic markup, e.g., using the `<table>` element
* Data organized with a visual column or row structure using other techniques, e.g., using CSS or spacing to visually denote data and header relationships 
* Confirm content requires programmatic table markup:
    * Linearize the content
    * If the content reading order, when linearized, has a meaningful sequence, programmatic table markup is not necessary; this test does not apply.
    * If the linearized reading order of the content does not have a meaningful sequence, data table markup is required. Continue testing.

### Test Instructions
1. Table: Check that each data table has programmatic markup to identify it as a table using only one of the following techniques:
   * HTML `<table>`. 
   * ARIA `role="table"`
   * **NOTE**: according to HTML5 specifications, the `<table>` element and associated elements and attributes may not be used in combination with ARIA `role="table"` and associated roles and attributes. If a table combines these techniques, it fails this test
2. Table data cell: Check that each data cell uses only one of the following methods to identify it as a data cell within a table row depending on the technique identified in the first step:
   * For HTML `<table>`: `<td>` for the cell, which must be within a `<tr>` row. 
   * For ARIA `role="table"`: ARIA `role="cell"`, which must be within an ARIA `role="row"`
3. Header cells and data cell association: Identify all column and row headers for each data cell. Check that each column header and row header has programmatic markup to identify it as a column/row header for the data cell.
   * For a simple HTML `<table>` with all column headers in the first row and/or all row headers in the first column: each header cell can be marked up with `<th>` without additional attributes.
   * For a HTML `<table>` that has up to two levels of headers (column or row), the header cells can be marked up with `<th scope=>`. In HTML4, `<td scope>` is supported. In HTML5, `<td scope>` is not supported so all header cells must be `<th>`. Acceptable values for `scope` are `col|row|colgroup|rowgroup`.
   * For any HTML `<table>`, each header cell (`<th>` or `<td>`) can be marked up with a unique `ID` attribute AND associated to its data cells by including the ID value in the `<td headers=>` attribute.
   * For ARIA `role="table"`: each column header must have `role=columnheader` and each row header must have `role="rowheader"`.

### Test Results
* If any of the above tests fail, SC 1.3.1 and Baseline Requirement 13 fail.

## Test Procedures for 2.4.6 Headings and Labels
### Select/Identify Content
All content/data presented in columns and/or rows where understanding of the content requires association to column and/or row headers, including data organized in tables designated with explicit programmatic markup, i.e., using the `<table>` element or ARIA `role="table"`

### Test Instructions
1. Check that the text provided for the data table column and row headers describes its section of the content. 

### Test Results
* If the above test fails, SC 2.4.6 fails and Baseline 13 fails.

## Advisory
### WCAG 2.0 Techniques
The following sufficient techniques  were considered when developing this test procedure for this baseline requirement:
  * [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
  * [H51: Using table markup to present tabular information](https://www.w3.org/TR/WCAG20-TECHS/H51.html)
  * [H63: Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H63.html)
  * [F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized](https://www.w3.org/TR/WCAG20-TECHS/F49.html)
