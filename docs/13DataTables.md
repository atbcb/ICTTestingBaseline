# 13. Tables
## Accessibility Requirements
* [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

## Test Method Rationale
Programmatic evaluation of row and column headers association with data cells.

## Limitations, Assumptions, Exceptions
* Data tables are those tables where information in a cell requires a row or column header to adequately describe the cell's contents. If a table is used for placement of components on the page for visual aesthetics, then it is considered a layout table. This requirement applies to data tables only.
* Rows of data that are related must have a row header so assistive technology users can understand the relationship of the row's data cells. While row headers are often in the first column, it is not a requirement. An example of an exception to this rule: a calendar month is a data table, typically with the days of the week as column headers. The dates in a row are not related so typically, there is no row header present.

## Test Procedures 

### Selector (Identify Content)
All content/data visually presented in columns and/or rows where understanding of the content requires association to column and/or row headers, including:
* Data organized in tables designated with explicit programmatic markup, i.e., using the `<table>` element
* Data organized with a visual column or row structure using other techniques, e.g., using CSS or spacing to visually denote data and header relationships <<KE: http://divtable.com/generator/ creates div and css tables. [Accessible aria div tables by level access](https://labs.ssbbartgroup.com/index.php/ARIA_Table_Role) >>

### Test Instructions for 1.3.1
1. Table: Check that each data table has programmatic markup to identify it as a table using one of the following techniques:
  * HTML '<table>'. 
  * ARIA `role="table"` (must not be combined with HTML '<table>`)

1. Table data cell: Check that each data cell has programmatic markup to identify it as a data cell within a table
  * For HTML '<table>: `<td>` for the cell, which must be within a `<tr>` row. 
  * For ARIA `role="table"`: `role="cell"`, which must be within a `role="row"`
  
1. Identify all column and row headers for each `<td>`.
   * Check that each column and row header have programmatic markup to identify it as a column/row header for the data cell.
      * For a `<table>` with all column headers in the first row and/or all row headers in the first column, the header cell can be marked up with `<th>` without additional attributes.
      * For a `<table>` that has up to two levels of headers that are not entirely within the same column or row as the `<td>`, the headers can be marked up with `<th scope=col|row|colgroup|rowgroup>`. In HTML4, `<td scope>` is a supported. In HTML5, `<td scope>` is not supported so all header cells must be `<th>`.
      * For any `<table>`, `<th>` and `<td>` header cells can be marked up with a unique `ID` attribute AND associated to `<td>` data cells by including the ID in its `headers` attribute.

#### Test Results
* If any of the above tests fail, this SC and baseline fail

## Advisory
### Techniques
  * H43: Using id and headers attributes to associate data cells with header cells in data tables
  * H51: Using table markup to present tabular information
  * H63: Using the scope attribute to associate header cells and data cells in data tables
