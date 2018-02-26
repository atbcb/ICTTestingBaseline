# 22. Stylesheet non-dependence
## Accessibility Requirements
- [WCAG SC 1.1.1 Non-Text Content](http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html) -- All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.  
    - Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)
    - Time-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)
    - Test: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.
    - Sensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.
    - CAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.
    - Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.
- [WCAG SC 1.3.1 Info and Relationships](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
- [WCAG SC 1.3.2 Meaningful Sequence](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html) -- When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

## Test Method Rationale
Important information must not be provided solely through CSS

## Test Procedure for SC 1.1.1
### Select/Identify Content
Meaningful background images rendered by CSS

### Test Instructions
1. Check that equivalent information provided by meaningful background images is available without the CSS background image
1. Check that the equivalent information meets the following criteria:
    1. Presents the same information as the meaningful background image
    1. Is able to substitute for the meaningful background image

### Test Results
- If any of the above checks fail, then SC 1.1.1 fails and Baseline 22 fails.

## Test Procedure for SC 1.3.1
### Select/Identify Content
Meaningful page content inserted by CSS using `:before` or `:after`

### Test Instructions
1. Check that equivalent information provided by meaningful CSS content is available without the CSS content
1. Check that the equivalent information meets the following criteria:
    1. Presents the same information as the meaningful CSS content
    1. Is able to substitute for the meaningful CSS content

### Test Results
- If any of the above checks fail, then SC 1.3.1 fails and Baseline 22 fails.

## Test Procedure for SC 1.3.2
### Selector (Identify Content)
Content positioned with CSS `position: absolute`

### Test Instructions
1. Check that the content meaning (in context) does not rely on CSS positioning.
2. Check that the reading order of the content (in context) is correct without the absolute position property.
3. Check that the meaning of the content (in context) is preserved without the absolute position property.

#### Test Results
- If any of the above checks fail, then SC 1.3.2 fails and Baseline 22 fails.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
- Failure [F3](https://www.w3.org/TR/WCAG20-TECHS/F3.html): Using CSS to include images that convey important information
- Failure [F87](https://www.w3.org/TR/WCAG20-TECHS/F87.html):Inserting non-decorative content by using :before and :after pseudo-elements and the &#39;content&#39; property in CSS
- Failure [F1](https://www.w3.org/TR/WCAG20-TECHS/F1.html): Changing the meaning of content by positioning information with CSS
- Sufficient Technique [G57](https://www.w3.org/TR/WCAG20-TECHS/G57.html): Ordering the content in a meaningful sequence
