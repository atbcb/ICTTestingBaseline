### Limitations, assumptions, exceptions

- Assumes source HTML is available for inspection.
- Automated tools may not reliably identify complex header associations.
- Complex multi-dimensional tables may require manual review to ensure accessibility.
### Limitations, Assumptions, or Exceptions

-   Data tables are those tables where information in a cell requires a row or column header to adequately describe the cell's contents. If a table is used for placement of components on the page for visual aesthetics, then it is considered a layout table.
-   Some content may visually appear to require a data table structure, but, linearizing the content and/or viewing the code reveals that the content is understandable without the table. This technique may be used for responsive design. These elements use CSS and/or other styling methods to present content in columns or rows. The information conveyed does not rely on programmatic relationships between column or row headers to be understood. This content is not a data table and should not use the element, ARIA role="table", and associated programmatic table attributes. It should be tested using other baseline tests, such as 13. Structure and/or possibly 10. Forms (associated instructions).
-   Rows of data that are related must have a row header so assistive technology users can understand the relationship of the row's data cells. Not every table requires a row header.
-   In the Baseline Test instructions, where an ARIA role is identified, it is the first valid ARIA role attribute value.
