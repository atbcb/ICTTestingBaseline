### Limitations, Assumptions, or Exceptions

{% if page.source == "Web" %}
-   For Web content, the language attribute lang can be an attribute for many HTML tags. The structure for it is HTML tag `lang="[primary language subtag]"`. The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. Dialects specified after the primary language subtag (additional 2 or 3 character codes) are not part of this test.
{elsif page.source == "Doc" %}
-   The primary language for documents is based on the application's language preference settings. Other language properties may be applied to the entire document, specific content, or sections of a document. Dialects specified after the primary language are not part of this test.
{% endif %}
-   Exception: Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text are not covered by the Language of Parts.