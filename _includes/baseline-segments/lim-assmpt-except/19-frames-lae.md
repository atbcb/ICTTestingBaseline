### Limitations, Assumptions, Exceptions

-   In HTML5 the <code>&lt;frame&gt;</code> element is marked as obsolete. The <code>&lt;iframe&gt;</code> element remains part of the HTML5 specification. While the <code>&lt;frame&gt;</code> element has been deprecated in HTML5, testers may still encounter web pages and/or web applications with code that, while outdated, can and should still be accessible.
-   The combination of accessible name and accessible description of an <code>&lt;iframe&gt;</code> is its text alternative.
-   The <a href="https://www.w3.org/TR/using-aria/#4thrule">Fourth Rule of ARIA Use</a> states "do not use <code>role=\"presentation\"</code> or <code>aria-hidden=\"true\"</code> on a focusable element. Using either of these on a focusable element will result in some users focusing on 'nothing'." 
-   The <a href="https://www.w3.org/TR/using-aria/#fifthrule">Fifth Rule of ARIA Use</a> states "all interactive elements must have an accessible name."
