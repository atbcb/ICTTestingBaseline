---
title: "1. Keyboard Accessible (Docs)"
order-number: 2
toc-group: baseline-docs
banner-title: "Baseline for Documents"
---

## 1. Keyboard Accessible
### Accessibility Requirements

- [WCAG SC 2.1.1 Keyboard ](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)-- All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.
- [WCAG SC 2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) -- If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.
- [Conformance Requirement 5: Non-Interference](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conf-req5) The following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:
    -   1.4.2 - Audio Control
    -   2.1.2 - No Keyboard Trap
    -   2.3.1 - Three Flashes or Below Threshold, and
    -   2.2.2 - Pause, Stop, Hide.

### Test Method Rationale

This requirement relies on use of a keyboard to validate access and control of all functionalities of the content first by checking use of standard keyboard commands (Tab, Space Bar, Enter, Escape, etc.). If a document uses non-standard keyboard commands, the document must clearly document the commands and make users aware that the commands exist.

Keyboard access and control includes the ability to navigate to **AND** away from interactive content using only a keyboard.

### Limitations, Assumptions, or Exceptions

-   This test was written to be performed on a standard physical keyboard for a Windows PC. While keyboard emulators (such as on-screen keyboards, alternate keyboards, speech input, etc.) may be utilized, testing instructions may differ. Mouse Keys (a Windows and Mac OS feature that enables control of the mouse pointer by keyboard) is not a keyboard emulator.

-   Notes from SC 2.1.1:

    -   Note 1: This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input, but the underlying function (text input) does not.
    -   Note 2: This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

-   Note from SC 2.1.2:

    -   Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole document, all content in a document (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

### 1.A Test Procedure for Keyboard Access

**Baseline Test ID:** 1.A-KeyboardAccess

#### Identify Content

<p id="d1aIC">All functionality of the content that is available by mouse control must be keyboard accessible. Determine the functionality of visible and hidden interactive document components (links, form fields, drop down menus, show/hide content, tree views, pop ups, etc.) available using a mouse (hover and/or click).</p>

#### Test Instructions

<ol id="d1aTI">
    <li id="d1aTI-1">Check that all functionality can be accessed and executed using only the keyboard. [SC 2.1.1]
        <ol>
            <li id="d1aTI-1a">Use the keyboard to perform functions available by mouse (including drop-down menus, form fields, revealing/hiding content, tooltips, **AND** all interactive interface components).</li>
            <li id="d1aTI-1b">If an interactive component is not available by keyboard, check if another keyboard control with the same functionality is provided. (All functionalities must meet this requirement.)</li>
        </ol>
    </li>
    <li id="d1aTI-2">Check that individual keystrokes do not require specific timings for activation. [SC 2.1.1]
        <ol>
            <li id="d1aTI-2a">If operation requires specific timings of individual keystrokes, check if another control is provided on the page with the same functionality which does not require specific timings for operation. (All functionality must be available without requiring specific timings for individual keystrokes to operate.)</li>
        </ol>
    </li>
</ol>

#### Test Results

<p id="d1aTR">If any of the above checks fail, then Baseline Test 1.A-KeyboardAccess fails.</p>

### 1.B Test Procedure for No Keyboard Trap

**Baseline Test ID:** 1.B-NoKeyboardTrap

#### Identify Content

<p id="d1bIC">Components that receive keyboard focus.</p>

#### Test Instructions

<ol id="d1bTI">
    <li id="d1bTI-1">Check that focus can be moved away from the component. There must be NO "TRAP" that disrupts keyboard navigation. [SC 2.1.2, Conformance Requirement 5]
        <ol>
            <li id="d1bTI-1a">If a keyboard trap is found, inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys).</li>
            <li id="d1bTI-1b">If nonstandard keyboard commands are required to navigate away from a component or set of components, check that the commands work.</li>
        </ol>
    </li>
</ol>



#### Test Results

<p id="d1bTR">If the above check fails, then Baseline Test 1.B-NoKeyboardTrap fails.</p>

### Advisory: Tips for Streamlined Test Processes
-   Keyboard focusable components include links, form fields, drop-down menus, show/hide content, tree views, embedded objects, and pop ups. Focusable components may also be "hidden", positioned off-screen, and/or have no visible indication of focus.
-   Keyboard commands include standard and any nonstandard keyboard commands.
-   This test may be combined with tests for keyboard focus.
-   Tips and techniques for finding hidden content may be useful for testers.
-   Based on the document format being tested, it may be useful for testers to reference the applications' guide for keyboard commands.
-   Content that is found non-conformant with SC 2.1.1 may be marked for further review for a Section 508 exception if "the underlying function requires input that depends on the path of the user's movement and not just the endpoints".

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G21: Ensuring users are not trapped in content](https://www.w3.org/WAI/WCAG22/Techniques/general/G21)
-   [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
-   [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10) in a way that traps users inside one format type
