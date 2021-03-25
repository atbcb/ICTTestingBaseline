---
title: "2. Focus"
order-number: 3
---
## 2. Focus

### Accessibility Requirements

-   [WCAG SC 2.4.7 Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html) -- Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
-   [WCAG SC 2.4.3 Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) -- If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
-   [WCAG SC 3.2.1 On Focus](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html) -- When any component receives focus, it does not initiate a change of context.

### Test Method Rationale

Manually navigating or controlling the interface by keyboard-only will enable a tester to identify when there is no visual differentiation between a focused item and the rest of the interface or content. Using the keyboard to navigate facilitates inspection of focus order.

### Limitations, Assumptions, or Exceptions

-   Some interface components (e.g., screen text for form filling instructions), which are not normally considered interactive, may be in the tab order. Such interface components should receive a visible indication of focus when the user navigates to them using a keyboard.
-   Skip link visual focus is a part of this test.
-   Focus-shift to revealed hidden content is not tested here. See [5. Changing Content](../05Changing)
-   Loss of visible focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.
-   Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior.
-   While it may be a common best practice, Focus Order is not required to move left to right, top to bottom.
-   Focus order includes forward and backward navigation.
-   Without exception, focus must shift to modal dialog boxes and remain within the dialog box until the box is closed by the user.
-   Assistive technology will process aria live regions without a focus shift. Live regions that do not contain interactive content do not require a focus shift and would not be included in this test.
-   For some types of controls, clicking a control may also activate the control (e.g. button), which may, in turn, initiate a change in context. Controls that are clearly labeled and intended to initiate a change in context do not fail under this test.
-   This test evaluates 3.2.1 On Focus using only the keyboard to avoid unintentional activation of controls with a mouse.
-   [Change of context](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html#context-changedef) is defined as: major changes in the content that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously. Changes in context include changes of:
    1.  User agent
    2.  Viewport
    3.  Focus
    4.  Content that changes the meaning of the page
    -   **Note:** A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).
    -   **Examples:** Opening a new window, moving focus to a different component, going to a new page or window (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page/screen are examples of changes of context. (Above definition from [Understanding SC 3.2.1 On Focus](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html))

### 2.1 Test Procedure for Focus Visible

**Baseline Test ID:** 2.1-FocusVisible

#### Identify Content
<p id="1IC">Keyboard accessible interface components (e.g., links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes).</p>

#### Tests Instructions
<ol id="1TI">
    <li id="1TI-1">Use the keyboard to navigate through each interface component.</li>
    <li id="1TI-2">Check that a visible indication of focus is provided when focus is on the interface component.[SC 2.4.7]</li>
</ol>

#### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 2.1-FocusVisible fails.</p>

### 2.2 Test Procedure for Focus Order

**Baseline Test ID:** 2.2-FocusOrder
#### Identify Content
<p id="2IC">Keyboard accessible interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) that have a meaningful sequence of navigation.</p>

#### Test Instructions
<ol id="2TI">
    <li id="2TI-1">Use the keyboard to navigate through interface components.
    <ol>
        <li id="2TI-1i">Use the keyboard to activate trigger controls that reveal hidden content (menus, dialogs, expandable tree list, etc.).
        <ol>
            <li id="2TI-1ia">Check that the revealed focusable content is included in the focus order. [SC 2.4.3]</li>
            <li id="2TI-1ib">Advance the focus through the revealed content.</li>
        </ol></li>
        <li id="2TI-1ii">Use the keyboard to close/hide the revealed content.
        <ol>
            <li id="2TI-1iia">Check that focus is returned to the trigger control. (It is acceptable to Shift+ TAB once or use an arrow key to move the focus backward to the trigger control. [SC 2.4.3]</li>
        </ol></li>
    </ol></li>
    <li id="2TI-2">Check that the focus order preserves the meaning and usability of the page. [SC 2.4.3]</li>
</ol>

#### Test Results
<p id="2TR">If any of the above checks fail, then Baseline Test 2.2-FocusOrder fails.</p>

### 2.3 Test Procedure for On Focus

**Baseline Test ID:** 2.3-OnFocus
#### Identify Content
<p id="3IC">Keyboard accessible interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).</p>

#### Test Instructions
<ol id="3TI">
    <li id="3TI-1">Use the keyboard to move focus to and navigate through each interactive interface component (including form drop-down lists and form fields).</li>
    <li id="3TI-2">Check that when an interface component receives focus, it does not initiate an unexpected change of context. [SC 3.2.1]<br>
    Examples of a change of context include:
        <ul>
            <li>Forms submitted automatically when a component receives focus</li>
            <li>New windows launched when a component receives focus</li>
            <li>Focus is moved to another component</li>
        </ul></li>
</ol>

#### Test Results
<p id="3TR">If any of the above checks fail, then Baseline Test 2.3-OnFocus fails.</p>

### Advisory: Tips for streamlined test processes

-   The clarity of visible focus is subjective and the minimum level is the browser’s (or OS platform) default display setting for indicating focus. Browsers may also represent visual focus differently in specific situations.
-   This test may be performed simultaneously with [Baseline 1: Keyboard Access](../01Keyboard).
-   No focus modifications should be enabled in the test environment during testing. Some testing tools will add a visible outline around elements that receive focus. While testing tools may help testers to track focus, any markup provided by a testing tool should not be used as an indicator of visible focus for meeting this requirement.
-   Given the variability in how browsers may present visual focus in specific situations, test reports should include details about testing environment, including browser and version.
-   Tab order that initially appears illogical may still meet this requirement due to an application-specific business logic.
-   It may be useful to combine these tests with tests for keyboard navigation and visible focus.
-   It may be useful to provide instructions about what "modal dialog boxes" are and how they should behave.

#### WCAG 2.0 Techniques
-   The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    -   [G149: Using user interface components that are highlighted by the user agent when they receive focus.](http://www.w3.org/TR/WCAG20-TECHS/G149.html)
    -   [G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over](https://www.w3.org/TR/WCAG20-TECHS/G165.html)
    -   [G195: Using an author-supplied, highly visible focus indicator](https://www.w3.org/TR/WCAG20-TECHS/G195.html)
    -   [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](http://www.w3.org/TR/WCAG20-TECHS/G59.html)
    -   [H4: Creating a logical tab order through links, form controls, and objects](http://www.w3.org/TR/WCAG20-TECHS/H4.html)
    -   [G107: Using "activate" rather than "focus" as a trigger for changes of context](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G107)
    -   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F55)
    -   [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/TR/WCAG20-TECHS/SCR26.html)
    -   [F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order](https://www.w3.org/TR/WCAG20-TECHS/F85.html)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../01Keyboard) | [Next Baseline](../03Noninterference)
