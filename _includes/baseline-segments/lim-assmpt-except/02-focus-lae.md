### Limitations, Assumptions, or Exceptions

<ul>
    <li>Some interface components (e.g., screen text for form filling instructions), which are not normally considered interactive, may be in the tab order. Such interface components should receive a visible indication of focus when the user navigates to them using a keyboard.</li>
    {% if page.source == "Web" %}
    <li>Skip link visual focus is a part of this test.</li>
    {% endif %}
    <li>Loss of visible focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.</li>
    <li>Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior.</li>
    <li>While it may be a common best practice, Focus Order is not required to move left to right, top to bottom.</li>
    <li>Focus order includes forward and backward navigation.</li>
    <li>Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.</li>
    <li>Assistive technology will process aria live regions without a focus shift. Live regions that do not contain interactive content do not require a focus shift and would not be included in this test.</li>
    <li>For some types of controls, clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly labeled and intended to initiate a change in context do not fail under this test.</li>
    <li>This test evaluates 3.2.1 On Focus using only the keyboard to avoid unintentional activation of controls with a mouse.</li>
    <li><a href="https://www.w3.org/TR/WCAG22/#dfn-change-of-context">Changes of context</a> are major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
        <ol>
            <li>User agent</li>
            <li>Viewport</li>
            <li>Focus</li>
            <li>Content that changes the meaning of the page</li>
        </ol>
        <ul>
            <li><strong>Note:</strong> A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).</li>
            <li><strong>Examples:</strong> Opening a new window, moving focus to a different component, going to a new page or window (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page/screen are examples of changes of context.</li>
        </ul>
    </li>
</ul>
