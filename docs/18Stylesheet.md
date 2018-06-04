# 18. Stylesheet non-dependence
## Accessibility Requirements
- [WCAG SC 1.1.1 Non-Text Content](http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html) -- All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.  
    - **Sensory:** If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.
    - **Decoration, Formatting, Invisible:** If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.
- [WCAG SC 1.3.1 Info and Relationships](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
- [WCAG SC 1.3.2 Meaningful Sequence](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html) -- When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

## Test Method Rationale
Meaningful information provided solely through CSS content may not be in the Document Object Model (DOM). Equivalent information must be available without CSS.

## Limitations, Assumptions, or Exceptions
* Only the CSS techniques identified as Failures in WCAG 2.0 Level A and Level AA are included in this test. There may be other CSS techniques that affect conformance.
* The tests described in this Baseline requirement do not apply to native software applications.

## Test Procedure for SC 1.1.1 Non-Text Content
### Identify Content
Meaningful background images rendered by CSS

### Test Instructions
1. Check that the meaningful CSS image provides an equivalent text alternative description: 
    1. ARIA `role=”img”` and non-empty `aria-label` value, and
    1. The `aria-label` value provides the same information as the meaningful background image

### Test Results
If any of the above checks fail, then SC 1.1.1 and Baseline Requirement 18 fail.

## Test Procedure for SC 1.3.1 Info Relationships
### Identify Content
Meaningful page content inserted by CSS using `:before` or `:after`

### Test Instructions
1. For meaningful content provided via CSS, check that equivalent information is available without the CSS content.

### Test Results
If any of the above checks fail, then SC 1.3.1 and Baseline Requirement 18 fail.

## Test Procedure for SC 1.3.2 Meaningful Sequence
### Identify Content
Content positioned with CSS `position: absolute`

### Test Instructions
1. Check that the reading order of the content (in context) is correct without the absolute position property.
2. Check that the meaning of the content (in context) is preserved without the absolute position property.

#### Test Results
If any of the above checks fail, then SC 1.3.2 and Baseline Requirement 18 fail.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G57: Ordering the content in a meaningful sequence](https://www.w3.org/TR/WCAG20-TECHS/G57.html)
* [F3: Using CSS to include images that convey important information](https://www.w3.org/TR/WCAG20-TECHS/F3.html)
* [F87:Inserting non-decorative content by using :before and :after pseudo-elements and the &#39;content&#39; property in CSS](https://www.w3.org/TR/WCAG20-TECHS/F87.html)
* [F1: Changing the meaning of content by positioning information with CSS](https://www.w3.org/TR/WCAG20-TECHS/F1.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](17SyncMedia.md) | [Next Baseline](19Frames.md)
