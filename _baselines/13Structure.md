---
title: "13. Content Structure"
order-number: 14
---
## 13. Content Structure

### Accessibility Requirements

-   [WCAG SC 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) -- Headings and labels describe topic or purpose.
-   [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

### Test Method Rationale

-   Visual headings must be programmatically determinable, represent the content structure, and describe the content that follows the headings.
-   Visual lists must be programmatically determinable according to their types (ordered, unordered, description).

### Limitations, Assumptions, or Exceptions

-   A page with only one heading on the page does not have a heading level structure and would not be tested for heading structure.
-   Pages can have more than one heading level 1 or no heading level 1.
-   The heading level 1 on a page is not required to match the page title.
-   The order of heading levels may not always be in sequence but may be valid as it relates to the visual structure/importance communicated by visible headings on the page. For example, an `<h2>` heading may be used for a navigation structure that precedes an `<h1>` title on a page. Similarly, `<h1>` may be followed by `<h3>` without `<h2>` between them.
-   [ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/#heading): To ensure elements with a role of heading are organized into a logical outline, authors must use the `aria-level` attribute to indicate the proper nesting level. (This is a change from [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#heading) where the default aria-level was 2.)
-   Not all lists need markup. For instance, sentences that contain comma-separated lists may not need list markup ([H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)).
-   A test for Visually Apparent Lists should not include navigation menus. While programmatic lists are often used to create navigation menus, menus may also be created using other techniques. 

### 13.A Test Procedure for Descriptive Headings

**Baseline Test ID:** 13.A-HeadingDescriptive
#### Identify Content
<p id="13aIC">Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page or screen.</p>

#### Test Instructions
<ol id="13aTI">
    <li id="13aTI-1">Check that each heading describes the topic or purpose of its content. [SC 2.4.6]</li>
</ol>

#### Test Results
<p id="13aTR">If any of the above checks fail, then Baseline Test 13.A-HeadingDescriptive fails.</p>

### 13.B Test Procedure for Visual Headings Programmatic   

**Baseline Test ID:** 13.B-VisHeadingProg
##### Identify Content
<p id="13bIC">Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.</p>

##### Test Instructions
<ol id="13bTI">
    <li id="13bTI-1">Check that all visual headings are programmatically determinable and that programmatic heading levels logically match the visual heading presentation within the heading structure [SC 1.3.1]:
        <ol>
            <li id="13bTI-1a">The most important heading(s) should have the highest priority level. For example, <code>&lt;h1&gt;</code> is a higher level than <code>&lt;h2&gt;</code>, which is higher than <code>&lt;h3&gt;</code>.</li>
            <li id="13bTI-1b">Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section.</li>
            <li id="13bTI-1c">HTML or ARIA programmatically identify each heading. When both are used, heading levels must match.
            <ol>
                <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H42" target="_blank" rel="noopener">H42</a>: each heading is marked with <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</li>
                <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12" target="_blank" rel="noopener">ARIA12</a>: each heading is marked with <code>role="heading"</code> and <code>aria-level="#"</code>. </li>
            </ol></li>
        </ol></li>
</ol>

##### Test Results
<p id="13bTR">If the above check fails, then Baseline Test 13.B-VisHeadingProg fails.</p>

### 13.C Test Procedure for Programmatic Headings Visual

**Baseline Test ID:** 13.C-ProgHeadingVisual
##### Identify Content
<p id="13cIC">Programmatically determined headings: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> or ARIA <code>role="heading"</code>.</p>

##### Test Instructions
<ol id="13cTI">
    <li id="13cTI-1">Check that each programmatically determinable heading is also serving as a visual heading on the page. <br>
    Content that is not a visual heading cannot have a role of heading. For example, heading markup should not be used for emphasis on an element that is not a heading for content after it. [SC 1.3.1]</li>
</ol>

##### Test Results
<p id="13cTR">If the above check fails, then Baseline Test 13.C-ProgHeadingVisual fails.</p>

### 13.D Test Procedure for Visually Apparent Lists

**Baseline Test ID:** 13.D-List
##### Identify Content
<p id="13dIC">Visually apparent lists, which appear as a grouping of items typically one below the other. Exclude navigation menus. Determine the type of list: 
    <ul>
        <li>An unordered list is not numbered and is used where sequence or the ability to reference specific items by number/letter is not important. List items have the same visual marking or may have no marking. </li>
        <li>An ordered lists is numbered sequentially and, if necessary, hierarchically (e.g., 1, 2, 2a, 2ai, etc.) and is used where sequence or the ability to reference specific items by a unique number/letter is important.</li>
        <li>A description list is used to group term(s) with their description(s). These are common in a glossary.</li>
    </ul>
</p>

##### Test Instructions
For each visually apparent list:
<ol id="13dTI">
    <li id="13dTI-1">Check that content that has the visual appearance of a list (with or without bullets) that has no special order or sequence is programmatically an unordered list <code>&lt;ul&gt;</code>, and each item in the list is programmatically a list item <code>&lt;li&gt;</code>. [SC 1.3.1]</li>
    <li id="13dTI-2">Check that content that has the visual appearance of a numbered list is programmatically an ordered list <code>&lt;ol&gt;</code>, and each item in the list is programmatically a list item <code>&lt;li&gt;</code>. [SC 1.3.1]</li>
    <li id="13dTI-3">Check that content has a visual appearance of a description list is programmatically a description list <code>&lt;dl&gt;</code>, each term is programmatically a description term <code>&lt;dt&gt;</code> and each description is programmatically a definition description <code>&lt;dd&gt;</code>. [SC 1.3.1]</li>
</ol>

##### Test Results
<p id="13dTR">If any of the above checks fail, Baseline Test 13.D-List fails.</p>

### Advisory: Tips for streamlined test processes
- There is not a test to check that programmatic lists are visually apparent lists. 

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [ARIA12: Using role=”heading” and aria-level=”\#” to identify heading levels](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12)
-   [F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html)
-   [G115: Using semantic elements to mark up structure](https://www.w3.org/WAI/WCAG22/Techniques/general/G115) **AND** [H49: Using semantic markup to mark emphasized or special text](https://www.w3.org/WAI/WCAG22/Techniques/html/H49)
-   [G117: Using text to convey information that is conveyed by variations in presentation of text](https://www.w3.org/WAI/WCAG22/Techniques/general/G117)
-   [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
-   [H42: Using &lt;h1&gt; to &lt;h6&gt; to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
-   [H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
