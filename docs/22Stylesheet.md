# 22. Stylesheet non-dependence
## Rationale
Important information must not be provided through CSS

## Accessibility Requirements
- WCAG2 SC: 1.1.1 Non-Text Content
  - Failure [F3](https://www.w3.org/TR/WCAG20-TECHS/F3.html): Using CSS to include images that convey important information
- WCAG2 SC: 1.3.1 Info and Relationships
  - Failure [F87](https://www.w3.org/TR/WCAG20-TECHS/F87.html):Inserting non-decorative content by using :before and :after pseudo-elements and the &#39;content&#39; property in CSS
- WCAG2 SC: 1.3.2 Meaningful Sequence
  - Failure [F1](https://www.w3.org/TR/WCAG20-TECHS/F1.html): Changing the meaning of content by positioning information with CSS
  - Sufficient Technique [G57](https://www.w3.org/TR/WCAG20-TECHS/G57.html): Ordering the content in a meaningful sequence

## Test Procedure for SC 1.1.1
### Selector (Identify Content)
Meaningful background images rendered by CSS

### Test Instructions
1. Check that equivalent information provided by meaningful background images is available without the CSS background image
1. Check that the equivalent information meets the following criteria:
    1. Presents the same information as the meaningful background image
    1. Is able to substitute for the meaningful background image

#### Test Results
- If any of the above checks fail, then this SC fails.

## Test Procedure for SC 1.3.1
### Selector (Identify Content)
Meaningful page content inserted by CSS using `:before` or `:after`

### Test Instructions
1. Check that equivalent information provided by meaningful CSS content is available without the CSS content
1. Check that the equivalent information meets the following criteria:
    1. Presents the same information as the meaningful CSS content
    1. Is able to substitute for the meaningful CSS content

#### Test Results
- If any of the above checks fail, then this SC fails.

## Test Procedure for SC 1.3.2
### Selector (Identify Content)
Content positioned with CSS `position: absolute`

### Test Instructions

1. Check that the content meaning (in context) does not rely on CSS positioning.
2. Check that the reading order of the content (in context) is correct without the absolute position property.
3. Check that the meaning of the content (in context) is preserved without the absolute position property.

##### Test Results for SC 1.3.2
- If any of the above checks fail, then this SC fails.

### Baseline Requirement Outcome
- If any SC fails, this baseline fails.
