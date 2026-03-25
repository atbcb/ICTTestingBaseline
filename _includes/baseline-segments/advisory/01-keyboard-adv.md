### Advisory: Tips for Streamlined Test Processes

<ul>
{% if page.source == "Web" %}
    <li>Keyboard access for <code>title</code> attribute is available in Internet Explorer 11 for Windows 8.1 and 10. It may be useful to notify testers to pause while tabbing through interactive content with a <code>title</code> attribute to see if <code>title</code> content is revealed during keyboard navigation testing.</li>
{% endif %}
    <li>Keyboard focusable components include links, form fields, drop-down menus, show/hide content, tree views, pop ups, and embedded objects. Focusable components may also be "hidden", positioned off-screen, and/or have no visible indication of focus.</li>
    <li>Keyboard commands include standard and any nonstandard keyboard commands.</li>
    <li>This test may be combined with tests for keyboard focus.</li>
    <li>Tips and techniques for finding hidden content may be useful for testers.</li>
    <li>{% if page.source == "Web" %}It{% elsif page.source == "Doc" %}Based on the document format being tested, it{% endif %} may be useful for testers to have references for operating system and {% if page.source == "Web" %}browser{% elsif page.source == "Doc" %}the document application's{% endif %} keyboard commands.</li>
    <li>Content that is found non-conformant with SC 2.1.1 may be marked for further review for a Section 508 exception if “the underlying function requires input that depends on the path of the user's movement and not just the endpoints".</li>
</ul>