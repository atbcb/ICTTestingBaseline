---
title: "18. CSS Content and Positioning"
order-number: 19
---
## 18. CSS Content and Positioning

### Accessibility Requirements

-   [WCAG SC 1.1.1 Non-Text Content](http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html) -- All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.
    -   **Decoration, Formatting, Invisible:** If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.
-   [WCAG SC 1.3.1 Info and Relationships](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
-   [WCAG SC 1.3.2 Meaningful Sequence](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html) -- When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

### Test Method Rationale

Meaningful information provided solely through CSS content may not be in the Document Object Model (DOM). Equivalent information must be available without CSS.

### Limitations, Assumptions, or Exceptions

-   Only the CSS techniques identified as Failures in WCAG 2.0 Level A and Level AA are included in this test. There may be other CSS techniques that affect conformance.
-   Inline styling is included in this test.

### 18.1 Test Procedure for Meaningful Background Image

**Baseline Test ID:** 18.1-CSSMeaningfulImage
#### Identify Content
<p id="1IC">Meaningful background images rendered by CSS</p>

#### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Check that the meaningful CSS image provides an equivalent text alternative description: [SC 1.1.1]
        <ul>
            <li>ARIA <code>role=”img”</code> and non-empty <code>aria-label</code> value, and</li>
            <li>The <code>aria-label</code> value provides the same information as the meaningful background image</li>
        </ul></li>
</ol>

#### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 18.1-CSSMeaningfulImage fails.</p>

### 18.2 Test Procedure for CSS Positioned Content

**Baseline Test ID:** 18.2-CSSPositionedContent
#### Identify Content
<p id="2IC">Content positioned with CSS position</p>

#### Test Instructions
<ol id="2TI">
    <li id="2TI-1">Check that the reading order of the content (in context) is correct without the CSS position property. [SC 1.3.2]</li>
    <li id="2TI-2">Check that the meaning of the content (in context) is preserved without the CSS position property. [SC 1.3.2]</li>
</ol>

#### Test Results
<p id="2TR">If any of the above checks fail, then Baseline Test 18.2-CSSPositionedContent fail.</p>

### Advisory: Tips for streamlined test processes

#### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G57: Ordering the content in a meaningful sequence](https://www.w3.org/TR/WCAG20-TECHS/G57.html)
-   [F3: Using CSS to include images that convey important information](https://www.w3.org/TR/WCAG20-TECHS/F3.html)
-   [F1: Changing the meaning of content by positioning information with CSS](https://www.w3.org/TR/WCAG20-TECHS/F1.html)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../17SyncMedia) | [Next Baseline](../19Frames)
