---
title: "13. Content Structure (Docs)"
order-number: 14
toc-group: baseline-docs
banner-title: "Baseline for Documents"
---

## 13. Content Structure

### Accessibility Requirements

-   [WCAG SC 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) -- Headings and labels describe topic or purpose.
-   [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

### Test Method Rationale

-   Visual headings must be programmatically determinable, represent the content structure, and describe the content that follows the headings.
-   Visual lists must be programmatically determinable according to their types (bullet, numbered, multilevel).

### Limitations, Assumptions, or Exceptions

-   A document with only one heading does not have a heading level structure and would not be tested for heading structure.
-   Document can have more than one heading level 1 or no heading level 1.
-   The heading level 1 on a page is not required to match the document title.
-   The order of heading levels may not always be in sequence but may be valid as it relates to the visual structure/importance communicated by visible headings on the page. For example, a heading level 2 might be used for a navigation structure that precedes a heading level 1 title on a page. Similarly, a heading level 1 may be followed by a heading level 3 without a heading level 2 between them.
-   Not all lists need markup. For instance, sentences that contain comma-separated lists may not need list markup.
-   A test for Visually Apparent Lists should not include navigation menus. While programmatic lists are often used to create navigation menus, menus may also be created using other techniques.

### 13.A Test Procedure for Descriptive Headings

**Baseline Test ID:** 13.A-HeadingDescriptive

#### Identify Content

<p id="d13aIC">Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page or screen.</p>

#### Test Instructions

<ol id="d13aTI">
    <li id="d13aTI-1">Check that each heading describes the topic or purpose of its content. [SC 2.4.6]</li>
</ol>

#### Test Results

<p id="d13aTR">If any of the above checks fail, then Baseline Test 13.A-HeadingDescriptive fails.</p>

### 13.B Test Procedure for Visual Headings Programmatic

**Baseline Test ID:** 13.B-VisHeadingProg

#### Identify Content

<p id="d13bIC">Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.</p>

#### Test Instructions

<ol id="d13bTI">
    <li id="d13bTI-1">Check that all visual headings are programmatically determinable and that programmatic heading levels logically match the visual heading presentation within the heading structure [SC 1.3.1]:
        <ol>
            <li id="d13bTI-1a">The most important heading(s) should have the highest priority level. For example, heading level 1 <code>&lt;H1&gt;</code> is a higher level than heading level 2 <code>&lt;H2&gt;</code>, which is higher than heading level 3 <code>&lt;H3&gt;</code>.</li>
            <li id="d13bTI-1b">Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section.</li>
                </ol>
            </li>
        </ol>

#### Test Results

<p id="d13bTR">If the above check fails, then Baseline Test 13.B-VisHeadingProg fails.</p>

### 13.C Test Procedure for Programmatic Headings Visual

**Baseline Test ID:** 13.C-ProgHeadingVisual

#### Identify Content

<p id="d13cIC">Programmatically determined headings: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></p>

#### Test Instructions

<ol id="d13cTI">
    <li id="d13cTI-1">Check that each programmatically determinable heading is also serving as a visual heading on the page. Content that is not a visual heading cannot have a role of heading. For example, heading markup should not be used for emphasis on an element that is not a heading for content after it. [SC 1.3.1]</li>
</ol>

#### Test Results

<p id="d13cTR">If the above check fails, then Baseline Test 13.C-ProgHeadingVisual fails.</p>

### 13.D Test Procedure for Visually Apparent Lists

**Baseline Test ID:** 13.D-List

#### Identify Content

<p id="d13dIC">Visually apparent lists.</p>

<ul>
    <li>A bulleted list is not numbered and is used where sequence or the ability to reference specific items by number/letter is not important. List items have the same visual marking or may have no marking.</li>
    <li>A numbered list is numbered sequentially and, a multilevel list includes hierarchy (e.g., 1, 2, 2a, 2ai, etc.). These types of lists are used where sequence or the ability to reference specific items by number/letter is important.</li>
    <li>A description list is used to group term(s) with their description(s). These are common in a glossary.</li>
</ul>

#### Test Instructions

<ol id="d13dTI">
    <li id="d13dTI-1">For each visually apparent list:
        <ol>
            <li id="d13dTI-1a">Check that content that has the visual appearance of a list (with or without bullets) that has no special order or sequence is marked as a bulleted list. [SC 1.3.1]</li>
            <li id="d13dTI-1b">Check that content that has the visual appearance of a numbered list is marked as a numbered, or multilevel list. [SC 1.3.1]</li>
        </ol>
    </li>
</ol>

#### Test Results

<p id="d13dTR">If any of the above checks fail, Baseline Test 13.D-List fails.</p>

### Advisory: Tips for Streamlined Test Processes

There is not a test to check that programmatic lists are visually apparent lists.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html)
-   [G115: Using semantic elements to mark up structure](https://www.w3.org/WAI/WCAG22/Techniques/general/G115) **AND** [H49: Using semantic markup to mark emphasized or special text](https://www.w3.org/WAI/WCAG22/Techniques/html/H49)
-   [G117: Using text to convey information that is conveyed by variations in presentation of text](https://www.w3.org/WAI/WCAG22/Techniques/general/G117)
-   [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
-   [H42: Using <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
-   [H48: Using <code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code>, and <code>&lt;dl&gt;</code> for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
-   [PDF9: Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF9)
-   [PDF21: Using List tags for lists in PDF documents](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF21)