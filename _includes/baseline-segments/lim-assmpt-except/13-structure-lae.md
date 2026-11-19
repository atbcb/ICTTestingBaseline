### Limitations, Assumptions, or Exceptions

{% if page.source == "Web" %}
-   A page with only one heading on the page does not have a heading level structure and would not be tested for heading structure.
-   Pages can have more than one heading level 1 or no heading level 1.
-   The heading level 1 on a page is not required to match the page title.
-   The order of heading levels may not always be in sequence but may be valid as it relates to the visual structure/importance communicated by visible headings on the page.
-   ARIA 1.2: elements with role=heading should use `aria-level` to indicate nesting level; this differs from ARIA 1.1 behavior.
-   Not all lists need markup; e.g., comma-separated sentences may not require list markup.
-   Tests for visually apparent lists should exclude navigation menus.
{elsif page.source == "Doc" %}
-   A document with only one heading does not have a heading level structure and would not be tested for heading structure.
-   Document can have more than one heading level 1 or no heading level 1.
-   The heading level 1 on a page is not required to match the document title.
-   The order of heading levels may not always be in sequence but may be valid as it relates to the visual structure/importance communicated by visible headings on the page. For example, a heading level 2 might be used for a navigation structure that precedes a heading level 1 title on a page. Similarly, a heading level 1 may be followed by a heading level 3 without a heading level 2 between them.
-   Not all lists need markup. For instance, sentences that contain comma-separated lists may not need list markup.
-   A test for Visually Apparent Lists should not include navigation menus. While programmatic lists are often used to create navigation menus, menus may also be created using other techniques.
{% endif %}