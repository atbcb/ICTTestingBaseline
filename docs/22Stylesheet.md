# 22. Stylesheet non-dependence
## Rationale
Important information must not be provided through CSS

## Accessibility Requirements
- WCAG2: 1.1.1 Non-Text Content
  - Failure [F3](https://www.w3.org/TR/WCAG20-TECHS/F3.html): Using CSS to include images that convey important information
- WCAG2: 1.3.1 Info and Relationships
  - Failure [F87](https://www.w3.org/TR/WCAG20-TECHS/F87.html):Inserting non-decorative content by using :before and :after pseudo-elements and the &#39;content&#39; property in CSS
- WCAG2: 1.3.2 Meaningful Sequence
  - Failure [F1](https://www.w3.org/TR/WCAG20-TECHS/F1.html): Changing the meaning of content by positioning information with CSS
  - Sufficient Technique [G57](https://www.w3.org/TR/WCAG20-TECHS/G57.html): Ordering the content in a meaningful sequence

## Test Procedure for 1.1.1
### Selector (Identify Content)
Meaningful background images rendered by CSS

### Test Instructions
1. Check that equivalent information from meaningful background images is available when the CSS background image is not displayed.
1. Check that the equivalent information meets the following criteria:
    1. Presents the same information as the meaningful background image
    1. Is able to substitute for the meaningful background image

#### Test Results
- If any check for SC 1.1.1 fails, then the content is not conformant to SC 1.1.1.

## Test Procedure for 1.3.1
### Selector (Identify Content)
Meaningful page content inserted by CSS

### Test Instructions
1. Check that equivalent information from meaningful CSS content is available without CSS content is not displayed
1. Check that the equivalent information meets the following criteria:
    1. Presents the same information as the meaningful CSS content
    1. Is able to substitute for the meaningful CSS content

#### Test Results
- If any test for SC 1.3.1 fails, then the content is not conformant to SC 1.3.1.

## Test Procedure for 1.3.1
### Selector (Identify Content)
Identify content that is positioned absolute with CSS.
1. Use the new favelet: CSS absolute position.
    - Choose to only highlight the absolute position content or highlight and remove the absolute position property.

#### Test Instructions
##### Tests for SC 1.3.2:
1. Check that the content meaning does not rely on CSS positioning.
2. Check that the reading order of the content is correct if the absolute position property is removed.
3. Check that the meaning of the content is preserved if the absolute position property is removed.

##### Test Results for SC 1.3.2
- If any test for SC 1.3.2 fails, then the content is not conformant to SC 1.3.2.

### Baseline Requirement Outcome
- If no content fails, then the content passes the Baseline Requirement.
