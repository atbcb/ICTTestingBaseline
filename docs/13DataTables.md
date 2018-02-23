# 13. Tables
## Rationale
For sighted users, the process of determining table structures and relationships is usually straightforward, especially when borders, bold lettering, and shading are applied to table headers and cells. For assistive technology (AT) users most visual formatting has no useful meaning. Instead, row and column headers must have programmatic markup to explicitely associate table data with table headers. Table markup also facilitates navigation for AT users by providing programmatic landmarks via column and row headers.

## Accessibility Requirements
* **1.3.1 Info and Relationships.** Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
  * H43: Using id and headers attributes to associate data cells with header cells in data tables
  * H51: Using table markup to present tabular information
  * H63: Using the scope attribute to associate header cells and data cells in data tables
* **2.4 Navigable.** Provide ways to help users navigate, find content, and determine where they are.

## Limitations, Assumptions, Exceptions
* Data tables are those tables where information in a cell requires a row or column header to adequately describe the cell's contents. If a table is used for placement of components on the page for visual aesthetics, then it is considered a layout table. This requirement applies to data tables only.

## Test Procedures 
### Selector (Identify Content)
Select all data tables where data in the table requires column and/or row headers to accurately interpret data presented in the table, including:
* Data organized in tables designated with explicit programmatic markup, i.e., using the `<table>` element
* Data organized within an implicit table structure, e.g., using white space and/or other character spacing to visually denote data and header relationships
* Data organized using other spacing techniques, e.g., CSS styles and grids, to visually denote data and header relationships

### Test Instructions for 1.1.1
1. Check that each data cell in a data table has programmatic markup and/or text available that is sufficient to associate the data with each of it's relevant headers. 
2. Check that tables defined programmatically using the `<table>` element, appropriately associate table data with all relvant headers:
    * Check that tables with only one header in only one direction use at least the `<th>` element to identify the header
    * Check that tables with more than one header use the `scope=` attribute in combination with the `<th>` element to identify headers (e.g., `scope="col | row | colgroup | rowgroup"`); **Note:** in HTML5, the `scope=` attribute may only be used in conjuction with the `<th>` element -- it my not be used with the `<td>` element
    * For tables with multiiple header cells associated per data cell and which are too complex to allow a strict verticle or horizontal association between headers and data cells, check that:
        * Cell headers are identified with unique `id=` attributes to identify headers
        * Data cells reference ALL relevant headers, using the `headers=` attribute (e.g., `headers="id1 id2 id3 ..."`)
        * **Note:** `id` attributes may be assigned to table data cells (`<td>` cells), and data cells may reference other data cells as headers using the `headers` attribute

#### Test Results
* If any of the above tests fail, this SC fails

### Test Intructions for 2.4. Navigable
1. Check that when navigating data presented in a table, the table provides sufficient programmtic information and/or available text to enable the user to determine relative location within the table

#### Test Results
* If any of the above tests fail, this SC fails

## Baseline Requirement Outcome
* If any SC fails, this baseline fails.
