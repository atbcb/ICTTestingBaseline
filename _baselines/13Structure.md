---
title: "13. Content Structure"
order-number: 14
---
## 13. Content Structure

### Accessibility Requirements

-   [WCAG SC 2.4.6 Headings and Labels](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html) -- Headings and labels describe topic or purpose.
-   [WCAG SC 1.3.1 Info and Relationships](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

### Test Method Rationale

-   Visual headings must be programmatically determinable, represent the content structure, and describe the content that follows the headings.
-   Visual lists must be programmatically determinable according to their types (ordered, unordered, description).

### Limitations, Assumptions, or Exceptions

-   A page with only one heading on the page does not have a heading level structure and would not be tested for heading structure.
-   Pages can have more than one heading level 1 or no heading level 1.
-   The heading level 1 on a page is not required to match the page title.
-   The order of heading levels may not always be in sequence but may be valid as it relates to the visual structure/importance communicated by visible headings on the page. For example, an `<h2>` heading may be used for a navigation structure that precedes an `<h1>` title on a page. Similarly, `<h1>` may be followed by `<h3>` without `<h2>` between them. 
-   Not all lists need markup. For instance, sentences that contain comma-separated lists may not need list markup ([H48: Using ol, ul and dl for lists or groups of links](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H48)).
-   While an unordered list structure is often used to create navigation menus, menus can be created using other techniques such as `<nav>`. The test for Visually Apparent Lists does not include navigation menus.

### 13.1 Test Procedure for Descriptive Headings

**Baseline Test ID:** 13.1-HeadingDescriptive
#### Identify Content
<p id="1IC">Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page or screen.</p>

#### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Check that each heading describes the topic or purpose of its content. [SC 2.4.6]</li>
</ol>

#### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 13.1-HeadingDescriptive fails.</p>

### 13.2 Test Procedure for Visual Headings Programmatic   

**Baseline Test ID:** 13.2-VisHeadingProg
##### Identify Content
<p id="2IC">Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.</p>

##### Test Instructions
<ol id="2TI">
    <li id="2TI-1">Check that all visual headings are programmatically determinable and that programmatic heading levels logically match the visual heading presentation within the heading structure [SC 1.3.1]:
        <ol>
            <li id="2TI-1a">The most important heading(s) should have the highest priority level. For example, <code>&lt;h1&gt;</code> is a higher level than <code>&lt;h2&gt;</code>, which is higher than <code>&lt;h3&gt;</code>.</li>
            <li id="2TI-1b">Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section.</li>
            <li id="2TI-1c">HTML or ARIA programmatically identify each heading. When both are used, heading levels must match.
            <ol>
                <li><a href="https://www.w3.org/TR/WCAG20-TECHS/H42.html" target="_blank" rel="noopener">H42</a>: each heading is marked with <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</li>
                <li><a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA12.html" target="_blank" rel="noopener">ARIA12</a>: each heading is marked with <code>role="heading"</code> and <code>aria-level="#"</code>. The default heading level is "2" when none is specified.</li>
            </ol></li>
        </ol></li>
</ol>

##### Test Results
<p id="2TR">If the above check fails, then Baseline Test 13.2-VisHeadingProg fails.</p>

### 13.3 Test Procedure for Programmatic Headings Visual

**Baseline Test ID:** 13.3-ProgHeadingVisual
##### Identify Content
<p id="3IC">Programmatically determined headings: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> or ARIA <code>role="heading"</code>.</p>

##### Test Instructions
<ol id="3TI">
    <li id="3TI-1">Check that each programmatically determinable heading is also serving as a visual heading on the page. <br>
    Content that is not a visual heading cannot have a role of heading. For example, heading markup should not be used for emphasis on an element that is not a heading for content after it. [SC 1.3.1]</li>
</ol>

##### Test Results
<p id="3TR">If the above check fails, then Baseline Test 13.3-ProgHeadingVisual fails.</p>

### 13.4 Test Procedure for Visually Apparent Lists

**Baseline Test ID:** 13.4-List
##### Identify Content
<p id="4IC">Visually apparent lists, which appear as a grouping of items typically one below the other. Determine the type of list: 
    <ul>
        <li>An unordered list is not numbered and is used where sequence or the ability to reference specific items by number/letter is not important. List items have the same visual marking or may have no marking. </li>
        <li>An ordered lists is numbered sequentially and, if necessary, hierarchically (e.g., 1, 2, 2a, 2ai, etc.) and is used where sequence or the ability to reference specific items by a unique number/letter is important.</li>
        <li>A description list is used to group term(s) with their description(s). These are common in a glossary.</li>
    </ul>
</p>

##### Test Instructions
For each visually apparent list:
<ol id="4TI">
    <li id="4TI-1">Check that content that has the visual appearance of a list (with or without bullets) that has no special order or sequence is programmatically an unordered list <code>&lt;ul&gt;</code>, and each item in the list is programmatically a list item <code>&lt;li&gt;</code>. [SC 1.3.1]</li>
    <li id="4TI-2">Check that content that has the visual appearance of a numbered list is programmatically an ordered list <code>&lt;ol&gt;</code>, and each item in the list is programmatically a list item <code>&lt;li&gt;</code>. [SC 1.3.1]</li>
    <li id="4TI-3">Check that content has a visual appearance of a description list is programmatically a description list <code>&lt;dl&gt;</code>, each term is programmatically a description term <code>&lt;dt&gt;</code> and each description is programmatically a definition description <code>&lt;dd&gt;</code>. [SC 1.3.1]</li>
</ol>

##### Test Results
<p id="4TR">If any of the above checks fail, Baseline Test 13.4-List fails.</p>

### Advisory: Tips for streamlined test processes

#### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [ARIA12: Using role=”heading” and aria-level=”\#” to identify heading levels](https://www.w3.org/TR/WCAG20-TECHS/ARIA12.html)
-   [H42: Using &lt;h1&gt; to &lt;h6&gt; to identify headings](https://www.w3.org/TR/WCAG20-TECHS/H42.html)
-   [G130: Providing descriptive headings](https://www.w3.org/TR/WCAG20-TECHS/G130.html)
-   [G115: Using semantic elements to mark up structure](http://www.w3.org/TR/WCAG20-TECHS/G115.html) **AND** [H49: Using semantic markup to mark emphasized or special text](http://www.w3.org/TR/WCAG20-TECHS/H49.html)
-   [G117: Using text to convey information that is conveyed by variations in presentation of text](http://www.w3.org/TR/WCAG20-TECHS/G117.html)
-   [H48: Using ol, ul and dl for lists or groups of links](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H48)
