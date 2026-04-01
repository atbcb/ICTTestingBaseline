### 2.B Test Procedure for Focus Order

**Baseline Test ID:** {{ page.source }}-2.B-FocusOrder
#### Identify Content
<p id="{{ page.source }}-2bIC">Keyboard accessible {% if page.source == "Web" %}interface{% elsif page.source == "Doc" %}document{% endif %} components (links, form fields, drop-down menus, show/hide content, tree views, pop ups{% if page.source == "Web" %}/light boxes, frames, iframes{% elsif page.source == "Doc" %}{% endif %}, etc.) that have a meaningful sequence of navigation.</p>

#### Test Instructions
<ol id="{{ page.source }}-2bTI">
    <li id="{{ page.source }}-2bTI-1">Use the keyboard to navigate through {% if page.source == "Web" %}interface{% elsif page.source == "Doc" %}document{% endif %} components.
    <ol>
        <li id="{{ page.source }}-2bTI-1a">Use the keyboard to activate trigger controls that reveal hidden content (menus, dialogs, expandable tree list, etc.).
        <ol>
            <li id="{{ page.source }}-2bTI-1ai">Check that the revealed focusable content is included in the focus order. [SC 2.4.3]</li>
            <li id="{{ page.source }}-2bTI-1aii">Advance the focus through the revealed content.</li>
        </ol></li>
        <li id="{{ page.source }}-2bTI-1b">Use the keyboard to close/hide the revealed content.
        <ol>
            <li id="{{ page.source }}-2bTI-1bi">Check that focus is returned to the trigger control. It is acceptable to Shift+ TAB once or use an arrow key to move the focus backward to the trigger control. [SC 2.4.3]</li>
        </ol></li>
    </ol></li>
    <li id="{{ page.source }}-2bTI-2">Check that the focus order preserves the meaning and usability of the page. [SC 2.4.3]</li>
</ol>

#### Test Results
<p id="{{ page.source }}-2bTR">If any of the above checks fail, then Baseline Test {{ page.source }}-2.B-FocusOrder fails.</p>
