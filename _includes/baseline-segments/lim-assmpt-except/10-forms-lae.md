### Limitations, Assumptions, or Exceptions

- Read-only (e.g., pre-filled) form fields receive keyboard focus and are selectable but cannot be modified. These must be labeled and programmatically determinable, and are tested under SC 1.3.1.
- Disabled input elements do not receive keyboard focus, cannot be selected, and cannot be modified. These are not included in this test.
- The combination of an element's accessible name and accessible description is its text alternative.
- Clicking an option or selecting an option in a form should select the option but should not initiate a change in context.
- [Change of context](https://www.w3.org/TR/WCAG22/#dfn-change-of-context) is a major change that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
    1. User agent
    2. Viewport
    3. Focus
    4. Content that changes the meaning of the web page
        - Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).
        - Examples: Opening a new window, moving focus to a different component, going to a new page or window (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page/screen are examples of changes of context.
- Per <a href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions">WCAG 2.2 Understanding SC 3.3.2: Labels or Instructions</a>, this Success Criterion does not apply to links or other controls (such as an expand/collapse widget, or similar interactive components) that are not associated with data entry.
