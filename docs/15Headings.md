# 15. Headings
## Rationale
Headings must be programmatically determinable. Headings levels must be programmatically determinable and correct within the heading structure. Headings must be descriptive.

## Accessibility Requirements
* WCAG2 SC: 1.3.1 Info and relationships
    * Technique ARIA12: Using `role=”heading”` and `aria-level=”#”` to identify heading levels
    * Technique H42: Using `<h1>` to `<h6>` to identify headings
* WCAG2 SC: 2.4.6 Headings and Labels
    * Technique G130: Providing descriptive headings 
* WCAG2 SC: 4.1.1 Parsing 
    * Technique H88: Using HTML according to spec (VALID CODE Requirement related to use of `<h1>` in combination with role="heading" and aria-level="#")
* WCAG2 SC: 4.1.2 Name, Role, Value

## Limitations, Assumptions, or Exceptions
* Exception: A page with only one heading on the page does not have a heading level structure and would not be tested for heading structure.

## Test Procedure for SC 2.4.6
### Selector (Identify Content)
Visual Headings on the page

### Test Instructions
1. Check that each heading describes its section of the content (G130). 
      1. Descriptive headings identify sections of the content in relation both to the Web page as a whole and to other sections of the same Web page. 
      1. Descriptive headings also help users find specific content and orient themselves within the Web page.
      
#### Test Results
* If any of the above tests fail, this SC fails


## Test Procedure for SC 1.3.1
### Selector (Identify Content)
Visual headings and headings structure on the page. Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.

### Test Instructions
1. Check that each visual heading is identified programmatically as a heading AND that its heading level is logical within the heading structure. 
      1. The most important heading should have the level of 1, and the least important heading should have a level of 6. 
      1. Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section. 
      1. Either of these techniques is acceptable for each heading:
            * H42: each heading is marked with `<h1>` to `<h6>`.
            * ARIA12: each heading is marked with `role=”heading”`. If all headings on the page are at the same level, the additional `aria-level=”#”` is not required. For multiple heading levels, 'aria-level' must be specified.

#### Test Results
* If any of the above checks fails, this SC fails

## Test Procedure for SC 4.1.1
### Selector (Identify Content)
Programmatic Headings

### Test Instructions
1. Check that each programmatic heading uses EITHER the HTML heading technique H42 `<h1>` to `<h6>` OR the ARIA12 technique `<role="heading" aria-level="#">`. A heading cannot use both techniques per [W3C specification ARIA in HTML](http://w3c.github.io/html-aria/#docconformance).

#### Test Results
* If any check fails, this SC fails.

## Test Procedure for SC 4.1.2
### Selector (Identify Content)
Programmatic Headings

### Test Instructions
1. Check that each programmatic heading is a visual heading on the page. Content that is not a visual heading should not have a role of heading.

#### Test Results
* If any check fails, this SC fails.

## Baseline Requirement Outcome
* If any SC fails, this baseline fails.