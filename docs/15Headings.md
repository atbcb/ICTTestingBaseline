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
* WCAG2: 4.1.1 Parsing 
    * Technique H88: Using HTML according to spec (VALID CODE Requirement related to use of `<h1>` in combination with role="heading" and aria-level="#")
   
## Limitations, Assumptions, or Exceptions
* Exception: A page with only one heading on the page does not have a heading level structure and would not be tested for heading structure.

## Test Procedure
### Selector (Identify Content)
Identify the headings and non-headings of the page by visual inspection of the page content. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.

### Test Instructions

#### Tests for SC 2.4.6
1. For each content element identified visually as a heading, check that each heading describes its section of the content (G130). Descriptive headings identify sections of the content in relation both to the Web page as a whole and to other sections of the same Web page. Descriptive headings also help users find specific content and orient themselves within the Web page.
##### Test Results SC 2.4.6
* If any of the above checks fail, then the content fails this SC

#### Tests for SC 1.3.1 and 4.1.1

##### Tests for SC 1.3.1:
1. Check that each element marked as a programmatic heading (via HTML (H1 to H6), aria role="heading") is a visual heading for the content. Content that is not a visual heading should not have heading markup.
1. Check that each visual heading is identified programmatically as a heading AND that heading levels are logical for the content. 
      1. The most important heading should have the level of 1, and the least important heading should have a level of 6. 
      1. Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section. 
      1. Either of these techniques is acceptable for each heading:
            * H42: each heading is marked with `<h1>` to `<h6>`.
            * ARIA12: each heading is marked with `role=”heading”`. If all headings on the page are at the same level, the additional `aria-level=”#”` is not required. For multiple heading levels, 'aria-level' must be specified.
###### Test Results for SC 1.3.1
* If any of the above checks fail, then the content fails this SC

##### Tests for SC 4.1.1
1. Check that each programmatic heading uses EITHER the HTML heading technique H42 `<h1>` to `<h6>` OR the ARIA12 technique `<role="heading" aria-level="#">`. A heading cannot use both techniques per [W3C specification ARIA in HTML](http://w3c.github.io/html-aria/#docconformance).
###### Test Results for SC 4.1.1
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
