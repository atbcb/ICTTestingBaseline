# 13. Headings
## Accessibility Requirements
* [WCAG SC 2.4.6 Headings and Labels](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html) -- Headings and labels describe topic or purpose.
* [WCAG SC 1.3.1 Info and Relationships](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

## Test Method Rationale
Visual headings must be programmatically determinable, represent the content structure, and describe the content that follows the headings.

## Limitations, Assumptions, or Exceptions
* A page with only one heading on the page does not have a heading level structure and would not be tested for heading structure.
* Pages can have more than one heading level 1 or no heading level 1.
* The heading level 1 on a page is not required to match the page title.
* The order of headings may not always be in sequence but may be valid as it relates to the visual structure/importance communicated by visible headings on the page. For example, an `<h2>` heading may be used for a navigation structure that precedes an `<h1>` title on a page.

## Test Procedure for SC 2.4.6 Headings and Labels
### Identify Content
Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page or screen.

### Test Instructions
1. Check that each heading describes the topic or purpose of its content.
      
### Test Results
If any of the above checks fail, SC 2.4.6 and Baseline Requirement 13 fail.

## Test Procedure for SC 1.3.1 Info and Relationships
### Visually Apparent Headings
#### Identify Content
Visually apparent headings, which denote sections of content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.

#### 1.3.1 Info and Relationships - Web
##### Test Instructions
1. Check that all visual headings are programmatically determinable and that programmatic heading levels logically match the visual heading presentation within the heading structure.
    1. The most important heading(s) should have the highest priority level. For example, `<h1>` is a higher level than `<h2>`, which is higher than `<h3>`. 
    1. Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section.
    1. Either of these techniques is acceptable for each heading:
          * [H42](https://www.w3.org/TR/WCAG20-TECHS/H42.html): each heading is marked with `<h1>` to `<h6>`.
          * [ARIA12](https://www.w3.org/TR/WCAG20-TECHS/ARIA12.html): each heading is marked with `role=”heading”` and `aria-level=”#”`. If all headings on the page are at the same level, the additional `aria-level=”#”` is not required.

##### Test Results
If any of the above checks fail, SC 1.3.1 and Baseline Requirement 13 fail.

#### 1.3.1 Info and Relationships - Software
##### Test Instructions
1. Check that all visual headings are programmatically determinable and that programmatic heading levels logically match the visual heading presentation within the heading structure.
    1. Each heading is identified using the UIA HeadingLevel property
    1. The most important heading(s) should have the highest priority level. For example, Heading Level 1 is a higher level than Heading Level 2, which is higher than Heading Level 3. 
    1. Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section.

##### Test Results
If any of the above checks fail, SC 1.3.1 and Baseline Requirement 13 fail.

### Programmatically Identified Headings
#### 1.3.1 Info and Relationships - Web
##### Identify Content
Programmatically determined headings: `<h1>` to `<h6>` or ARIA `role=”heading”`.

##### Test Instructions
1. Check that each programmatically determinable heading is also serving as a visual heading on the page. Content that is not a visual heading cannot have a role of heading (for example, heading markup should not be used for emphasis on an element that is not a heading for content after it).
2. Check that each programmatic heading uses **EITHER** the HTML heading technique, `<h1>` to `<h6>`, **OR** the ARIA technique `<role="heading" aria-level="#">`. A heading cannot use both techniques per [W3C specification ARIA in HTML](http://w3c.github.io/html-aria/#docconformance) and is not accessibility supported (see [Conformance Requirement 4. Accessibility Support](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-support-head)).

##### Test Results
If any of the above checks fail, SC 1.3.1 and Baseline Requirement 13 fail.

#### 1.3.1 Info and Relationships - Software
##### Identify Content
Programmatically determined headings: using the UIA HeadingLevel property.

##### Test Instructions
1. Check that each programmatically determinable heading is also serving as a visual heading on the page. Content that is not a visual heading cannot have a role of heading (for example, heading markup should not be used for emphasis on an element that is not a heading for content after it).

##### Test Results
If any of the above checks fail, SC 1.3.1 and Baseline Requirement 13 fail.


## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [ARIA12: Using `role=”heading”` and `aria-level=”#”` to identify heading levels](https://www.w3.org/TR/WCAG20-TECHS/ARIA12.html)
* [H42: Using `<h1>` to `<h6>` to identify headings](https://www.w3.org/TR/WCAG20-TECHS/H42.html)
* [G130: Providing descriptive headings](https://www.w3.org/TR/WCAG20-TECHS/G130.html)
* [H88: Using HTML according to spec](https://www.w3.org/TR/WCAG20-TECHS/H88.html) (Accessibility Support Conformance Requirement related to use of `<h1>` in combination with `role="heading"` and `aria-level="#"`)
* [G115: Using semantic elements to mark up structure](http://www.w3.org/TR/WCAG20-TECHS/G115.html)  AND [H49: Using semantic markup to mark emphasized or special text](http://www.w3.org/TR/WCAG20-TECHS/H49.html)
* [G117: Using text to convey information that is conveyed by variations in presentation of text](http://www.w3.org/TR/WCAG20-TECHS/G117.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](12DataTables.md) | [Next Baseline](14Links.md)
