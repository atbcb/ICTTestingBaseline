# 15. Headings
## Rationale
Headings must be programmatically determinable. Headings levels must be programmatically determinable and correct within the heading structure. Headings must be descriptive.

### Test Rationale

### Test Method Rationale

## Accessibility Requirements
* WCAG2: 1.3.1 Info and relationships
    * Technique ARIA12: Using `role=”heading”` and `aria-level=”#”` to identify heading levels
    * Technique H42: Using `<h1>` to `<h6>` to identify headings
* WCAG2: 2.4.6 Headings and Labels
    * Technique G130: Providing descriptive headings 
* *__PLACEHOLDER - VALID CODE Requirement related to use of `<h1>` in combination with role="heading" and aria-level="#"__*

## Tools Necessary
* *Headings* favelet - used to reveal headings markup
    
## Limitations, Assumptions, or Exceptions
* Limitation: Testing tool capability to find HTML <H> and ARIA <role=heading> attribute(s) of the page
* Exception: A page with only one heading on the page does not have a heading level structure and would not be tested

## Test Procedure
### Selector (Identify Content)
Identify the headings and non-headings of the page by visual inspection of the page content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.

### Test Instructions
#### Tests for SC 1.3.1:
1. Execute the ‘Headings’ favelet to reveal the headings markup.
1. Review the markup inserted on the page.
    1. For each content element identified visually as a heading, check that each heading is determined programmatically using either `<h1>` to `<h6>` or `role=”heading”` AND check that heading levels are in logical order. 
        1. The most important heading should have the level of 1, and the least important heading should have a level of 6. 
        1. Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section. Either of these techniques is acceptable for each heading:
            * H42: each heading is marked with `<h1>` to `<h6>`.
            * ARIA: each heading is marked with `role=”heading”`. If all headings on the page are at the same level, the additional `aria-level=”#”` is not required. For multiple heading levels, 'aria-level' must be specified.
            * `<h1>` to `<h6>` MUST NOT be used in combination with `role="heading"` and `aria-level="#"` *__(PLACEHOLDER - reference to valid code Success Criterion)__*
    1. For each content element identified visually as a non-heading, check that the content IS NOT determined programmatically using `<h1>` to `<h6>` or `role="heading"`

#### Test Results for SC 1.3.1
1. If any test for SC 1.3.1 fails, then the content is not conformant to SC 1.3.1

#### Tests for SC 2.4.6
    1. (G130) For each content element identified visually as a heading, check that each heading describes its section of the content. Descriptive headings identify sections of the content in relation both to the Web page as a whole and to other sections of the same Web page. Descriptive headings also help users find specific content and orient themselves within the Web page.

#### Test Results SC 2.4.6
1. If the test for SC 2.4.6 fails, then the content is not conformant to SC 2.4.6

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
