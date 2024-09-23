---
title: "4. Repetitive Content"
order-number: 5
---
## 4. Repetitive Content

### Accessibility Requirements

-   [WCAG SC 2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) -- A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.
-   [WCAG SC 3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) -- Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.
-   [WCAG 3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) -- Components that have the same functionality within a set of Web pages are identified consistently.

### Test Method Rationale

To enable equitable use by keyboard-only users, there must be a keyboard-accessible method to bypass repetitive content, with no additional tools required. A common method used to bypass repetitive content is internal (same page) links, but other methods such as a hide menu option and a navigation tree are acceptable. Repeated content is also evaluated for consistent relative order.

### Limitations, Assumptions, or Exceptions
* Small sections, such as repeated individual words, phrases, or single links are not considered blocks for the purposes of this Baseline Requirement.
* Most web browsers provide keyboard shortcuts to move the user focus to the top of the page or browser, so providing a "skip" link may be unnecessary if a set of navigation links is at the bottom of a web page.
* [Same relative order](https://www.w3.org/TR/WCAG22/#dfn-same-relative-order) is the same position relative to other items. Items are considered to be in the same relative order even if other items are inserted or removed from the original order. For example, expanding navigation menus may insert an additional level of detail or a secondary navigation section may be inserted into the reading order.
* Consistent text alternatives for interface components that perform the same function are not always truly “identical.” This is acceptable if they follow a consistent format. For instance, in the use of a graphical arrow at the bottom of a Web page that links to the next Web page, the text alternative may be: “Go to page 4.” However, the same arrow image on the next page should then state "Go to page 5."
* "Navigational mechanisms" as referenced in SC 3.2.3 includes both interactive and non-interactive components repeated on pages. Consistent presentation and layout benefit users who interact with repeated content within a set of Web pages and need to locate specific information or functionality more than once. 
*   This baseline test covers bypass methods that are functional with just a keyboard. The following WCAG Sufficient Techniques, which require additional assistive tools to function as bypass methods, were not included:
    -   [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
    -   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG22/Techniques/html/H69)

### 4.A Test Procedure for Bypass Blocks

**Baseline Test ID:** 4.A-BypassBlocks
#### Identify Content
<p id="4aIC">Blocks of content that are repeated on multiple pages, including navigation links, page headers, and banners.</p>

#### Test Instructions
<ol id="4aTI">
    <li id="4aTI-1">Use standard keyboard commands to navigate forward to repetitive blocks of content. Some bypass functions may not be visible until they receive focus.</li>
    <li id="4aTI-2">Check that a keyboard-accessible method is provided to bypass repetitive content. [SC 2.4.1]</li>
    <li id="4aTI-3">Use the keyboard to activate the bypass method and verify the functionality of the bypass function.</li>
    <li id="4aTI-4">Check that the method works as intended. [SC 2.4.1]<br>
        For example:
        <ul>
            <li>The block of repeated content is hidden, closed or skipped.</li>
            <li>If the method is intended to skip, check that the focus is shifted past the repetitive content only. Content that is not repetitive should not be skipped. If there is only text/no interactive component to receive the shift of focus, it may not be evident that a focus shift occurred.</li>
        </ul></li>
</ol>

#### Test Results
<p id="4aTR">If any of the above checks fail, then Baseline Test 4.A-BypassBlocks fails.</p>

### 4.B Test Procedure for Consistent Navigation

**Baseline Test ID:** 4.B-ConsistentNavigation
#### Identify Content
<p id="4bIC">Navigational mechanisms that are repeated on multiple pages (which may or may not be contained within a block of content).</p>

#### Test Instructions
<ol id="4bTI">
    <li id="4bTI-1">Review multiple Web pages. Do not initiate changes to the content.</li>
    <li id="4bTI-2">Check that each repeated navigational mechanism is in the same relative order as other repeated interface components on each Web page where it appears. [SC 3.2.3]</li>
</ol>

#### Test Results
<p id="4bTR">If any of the above checks fail, then Baseline Test 4.B-ConsistentNavigation fails.</p>

### 4.C Test Procedure for Consistent Identification

**Baseline Test ID:** 4.C-ConsistentIdentification
#### Identify Content
<p id="4cIC">Components that have the same functionality within a set of Web pages.</p>

#### Test Instructions
<ol id="4cTI">
    <li id="4cTI-1">Check that associated text (e.g., label, name, or text alternative) for identified content is identical for each instance where they perform the same function. [SC 3.2.4] </li>
</ol>

#### Test Results
<p id="4cTR">If any of the above checks fail, then Baseline Test 4.C-ConsistentIdentification fails.</p>

### Advisory: Tips for streamlined test processes

-   Some bypass methods may require a specific keyboard shortcut (i.e., the F6 key is the browser default for navigating between frames).
-   If bypass method is provided but cannot be activated by keyboard, this is also a failure of Baseline Test 1.A Keyboard Access.
-   If bypass method is in the focus order but is not visible when it has keyboard focus, this is a failure of Baseline 2.1 Focus Visible.
-   If there is a need for multiple bypass methods on a page, each method must describe its purpose to comply with Baseline 14.A Links. For example, a page with repetitive links should have a descriptive bypass method. If there is also a block of repetitive content, this should have a separate descriptive bypass method.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages](https://www.w3.org/WAI/WCAG22/Techniques/failures/F31)
-   [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)
-   [G61: Presenting repeated components in the same relative order each time they appear](https://www.w3.org/WAI/WCAG22/Techniques/general/G61)
-   [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG22/Techniques/general/G123)
-   [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG22/Techniques/general/G124)
-   [G197: Using labels, names, and text alternatives consistently for content that has the same functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G197)
-   [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
-   [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG22/Techniques/html/H70) **AND** [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
-   [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/TR/WCAG20-TECHS/SCR28.html)
