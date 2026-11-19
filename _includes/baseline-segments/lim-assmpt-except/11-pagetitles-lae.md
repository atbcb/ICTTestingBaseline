### Limitations, Assumptions, Exceptions

{% if page.source == "Web" %}
-   Every Web page must have a descriptive title. This test always applies.
-   The `<title>` element in this test is different from the title attribute used to add tooltip/extra information about an element.
-   Some Web and non-Web applications and may include content that changes dynamically. In such cases, the page title should be sufficient to describe the purpose of the application.
-   [HTML5 specification](https://www.w3.org/TR/html50/document-metadata.html#the-title-element) stipulates that an HTML document should have only one `<title>` element,  **AND**  the `<title>` element should be a child of the `<head>` element. However, in practice all modern browsers correct syntax errors related to location and nesting of the `<title>` element. Therefore, user agents that rely on the Document Object Model (DOM) will encounter the `<title>` in the correct location and will typically present only the first `<title>` element (if there is more than one) to the user.
{elsif page.source == "Doc" %}
1. Every document must have a descriptive title. This test always applies.
2. This test would apply to all documents in a collection of documents (e.g., PDF portfolios).
{% endif %}
