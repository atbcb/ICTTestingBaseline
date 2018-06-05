# 2. Focus Visible

## Accessibility Requirements
* [WCAG SC 2.4.7 Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html) -- Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

**This Baseline Requirement applies to software and Web content.**

## Test Method Rationale
Manually navigating or controlling the interface by keyboard only will enable a tester to identify when there is no visual differentiation between a focused item and the rest of the interface or content.

## Limitations, Assumptions, or Exceptions
* Some interface components (e.g., screen text for form filling instructions), which are not normally considered interactive, may be in the tab order. Such interface components should receive a visible indication of focus when the user navigates to them using a keyboard.
* Skip link visual focus is a part of this test.
* Focus-shift to revealed hidden content is not tested here. See [4. Focus (revealing hidden content)](04FocusHidden)
* Loss of visible focus should not occur while manually shifting focus through the page (using the TAB or arrow keys). However, when a function that moves the focus is executed (such as an internal page link or hidden content is revealed), it may be necessary to manually shift focus once with the keyboard before focus becomes visible again. This is not considered a failure.

## Test Procedure for SC 2.4.7 Focus Visible
### Identify Content
Keyboard accessible interface components (e.g., links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes).

### Tests Instructions
1. Use the keyboard to navigate through each interface component.
2. Check that a visible indication of focus is provided when focus is on the interface component.

### Test Results
* If any of the above checks fail, then SC 2.4.7 and Baseline Requirement 2 fail.

## Advisory: Tips for streamlined test processes
* The clarity of visible focus is subjective and the minimum level is the browser’s (or OS platform) default display setting for indicating focus. Browsers may also represent visual focus differently in specific situations. 
* No focus modifications should be enabled in the test environment during testing. 
* This test may be performed simultaneously with Baseline 1Keyboard Access
* Some testing tools will add a visible outline around elements that receive focus. While testing tools may help testers to track focus, any markup provided by a testing tool should not be used as an indicator of visible focus for meeting this requirement.
* Given the variability in how browsers may present visual focus in specific situations, test reports should include details about testing environment, including browser and version.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G149: Using user interface components that are highlighted by the user agent when they receive focus.](http://www.w3.org/TR/WCAG20-TECHS/G149.html)
    * [G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over](https://www.w3.org/TR/WCAG20-TECHS/G165.html)
    * [G195: Using an author-supplied, highly visible focus indicator](https://www.w3.org/TR/WCAG20-TECHS/G195.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](01Keyboard.md) | [Next Baseline](03FocusOrder.md)
