---
title: "2. Focus"
order-number: 3
toc-group: baseline-docs
---

## 2. Focus

### Accessibility Requirements

-   [WCAG SC 2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) -- If a document can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
-   [WCAG SC 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) -- Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
-   [WCAG SC 3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) -- When any user interface component receives focus, it does not initiate a change of context.

### Test Method Rationale

Manually navigating or controlling document components by keyboard-only will enable a tester to identify when there is no visual differentiation between a focused item and the rest of the document or content. Using the keyboard to navigate facilitates inspection of focus order.

### Limitations, Assumptions, or Exceptions

-   Some interface components (e.g., screen text for form filling instructions), which are not normally considered interactive, may be in the tab order. Such interface components should receive a visible indication of focus when the user navigates to them using a keyboard.
-   Loss of visible focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.
-   Focus may be moved to a control either via the keyboard (e.g., tabbing to a control) or the mouse (e.g., clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior.
-   While it may be a common best practice, Focus Order is not required to move left to right, top to bottom.
-   Focus order includes forward and backward navigation.
-   Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
-   For some types of controls, clicking a control may also activate the control (e.g., button), which may, in turn, initiate a change in context. Controls that are clearly labeled and intended to initiate a change in context do not fail under this test.
-   This test evaluates 3.2.1 On Focus using only the keyboard to avoid unintentional activation of controls with a mouse.
-   [Changes of context](https://www.w3.org/TR/WCAG22/#dfn-change-of-context) are major changes in content that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
    1.  User agent
    2.  Viewport
    3.  Focus
    4.  Content that changes the meaning of the page
    -   **Note:** A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).
    -   **Examples:** Opening a new window, moving focus to a different component, going to a new document or window (including anything that would look to a user as if they had moved to a new document) or significantly re-arranging the content of a page/screen are examples of changes of context.

### 2.A Test Procedure for Focus Visible

**Baseline Test ID:** 2.A-FocusVisible

#### Identify Content

<p id="d2aIC">Keyboard accessible interface components (e.g., links, form fields, drop-down menus, show/hide content, tree views, and pop ups).</p>

#### Test Instructions

<ol id="d2aTI">
    <li id="d2aTI-1">Use the keyboard to navigate through each interface component.</li>
    <li id="d2aTI-2">Check that a visible indication of focus is provided when focus is on the interface component. The focus indicator must not be limited; when the keyboard focus is shown it must remain. [SC 2.4.7]</li>
</ol>

#### Test Results

<p id="d2aTR">If any of the above checks fail, then Baseline Test 2.A-FocusVisible fails.</p>

### 2.B Test Procedure for Focus Order

**Baseline Test ID:** 2.B-FocusOrder

#### Identify Content

<p id="d2bIC">Keyboard accessible document components (links, form fields, drop-down menus, show/hide content, tree views, and pop ups, etc.) that have a meaningful sequence of navigation.</p>

#### Test Instructions

<ol id="d2bTI">
    <li id="d2bTI-1">Use the keyboard to navigate through document components.
        <ol>
            <li id="d2bTI-1a">Use the keyboard to activate trigger controls that reveal hidden content (menus, dialogs, expandable tree list, etc.).
                <ol>
                    <li id="d2bTI-1a-i">Check that the revealed focusable content is included in the focus order. [SC 2.4.3]</li>
                    <li id="d2bTI-1a-ii">Advance the focus through the revealed content.</li>
                </ol>
            </li>
            <li id="d2bTI-1b">Use the keyboard to close/hide the revealed content.
                <ol>
                    <li id="d2bTI-1b-i">Check that focus is returned to the trigger control. It is acceptable to Shift+ TAB once or use an arrow key to move the focus backward to the trigger control. [SC 2.4.3]</li>
                </ol>
            </li>
        </ol>
    </li>
    <li id="d2bTI-2">Check that the focus order preserves the meaning and usability of the page. [SC 2.4.3]</li>
</ol>



#### Test Results

<p id="d2bTR">If any of the above checks fail, then Baseline Test 2.B-FocusOrder fails.</p>

### 2.C Test Procedure for On Focus

**Baseline Test ID:** 2.C-OnFocus

#### Identify Content

<p id="d2cIC">Keyboard accessible document components (links, form fields, drop-down menus, show/hide content, tree views, and pop ups, etc.).</p>

#### Test Instructions

<ol id="d2cTI">
    <li id="d2cTI-1">Use the keyboard to move focus to and navigate through each interactive document component (including form drop-down lists and form fields).</li>
    <li id="d2cTI-2">Check that when a document component receives focus, it does not initiate an unexpected change of context. [SC 3.2.1]
        <ul>
            <li>Forms submitted automatically when a component receives focus</li>
            <li>New document window or browser launched when a component receives focus</li>
            <li>Focus is moved to another component</li>
        </ul>
    </li>
</ol>

#### Test Results

<p id="d2cTR">If any of the above checks fail, then Baseline Test 2.C-OnFocus fails.</p>

### Advisory: Tips for Streamlined Test Processes

-   The clarity of visible focus is subjective, and the minimum level is the application's (or OS platform's) default display setting for indicating focus. Applications may also represent visual focus differently in specific situations.
-   This test may be performed simultaneously with [Baseline 1: Keyboard Access]({{site.baseurl}}/document-baselines/01KeyboardDocs).
-   No focus modifications should be enabled in the test environment during testing. Some testing tools will add a visible outline around elements that receive focus. While testing tools may help testers to track focus, any markup provided by a testing tool should not be used as an indicator of visible focus for meeting this requirement.
-   Given the variability in how applications may present visual focus in specific situations, test reports should include details about testing environment, including application and version.
-   Tab order that initially appears illogical may still meet this requirement due to an application-specific business logic.
-   It may be useful to combine these tests with tests for keyboard navigation and visible focus.
-   It may be useful to provide instructions about what "modal dialog boxes" are and how they should behave.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](https://www.w3.org/WAI/WCAG22/Techniques/failures/F55)
-   [F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order](https://www.w3.org/WAI/WCAG22/Techniques/failures/F85)
-   [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG22/Techniques/general/G59)
-   [G107: Using "activate" rather than "focus" as a trigger for changes of context](https://www.w3.org/WAI/WCAG22/Techniques/general/G107)
-   [G149: Using user interface components that are highlighted by the user agent when they receive focus.](https://www.w3.org/WAI/WCAG22/Techniques/general/G149)
-   [G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over](https://www.w3.org/WAI/WCAG22/Techniques/general/G165)
-   [G195: Using an author-supplied, highly visible focus indicator](https://www.w3.org/WAI/WCAG22/Techniques/general/G195)
-   [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR26)
-   [PDF3: Ensuring correct tab and reading order in PDF documents](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF3)
