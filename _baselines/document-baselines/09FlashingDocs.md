---
title: "9. Flashing"  
order-number: 10
toc-group: baseline-docs
banner-title: "Baseline for Documents"
---

## 9. Flashing

### Accessibility Requirements

-   [WCAG SC 2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) - Documents do not contain anything that flashes more than three times in any one second period, or the flash is below the [general flash and red flash thresholds](https://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds).

-   [Conformance Requirement 5: Non-Interference](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conf-req5) - The following success criteria apply to all content in the document, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the document: 1.4.2 - Audio Control, 2.1.2 - No Keyboard Trap, 2.3.1 - Three Flashes or Below Threshold, and 2.2.2 - Pause, Stop, Hide.

### Test Method Rationale

Flashing can be caused by factors beyond the control of authors (e.g., the user's display, the computer rendering of the image, or connectivity issues). There is no reliable, free, or widely available solution for determining the resulting flash frequency for these types of factors.

This test addresses flashing caused by the content itself, including:

-   Determining the flash rate from programmatically available information
-   Determining the pixel dimensions of any flashing element
-   Determining if the [relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance) changes by more than 10% for a pair of opposing changes in a flash
-   Determining if a pair of opposing transitions in a flash involves a [saturated red](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#general-thresholddef)

### Limitations, Assumptions, or Exceptions

-   It is possible that users could view content at a resolution or from a distance much different from the intended resolution and viewing distance.
-   For the purposes of this baseline, the terms flicker and [blink](https://www.w3.org/TR/WCAG22/#dfn-blinking) may be used synonymously with the term flash.
-   Blinking elements that conform to this requirement are still required to conform to SC 2.2.2 Pause, Stop, Hide, if the blinking lasts longer than 5 seconds ([Baseline 21. Timed Events]({{site.baseurl}}/document-baselines/21TimedEventsDocs)).
-   Note from SC 2.3.1:
    -   Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

### 9.A Test Procedure for Three Flashes or Below Threshold

**Baseline Test ID:** 9.A-Flashes

#### Identify Content

<p id="d9aIC">Visually identify content that <a href="https://www.w3.org/TR/WCAG22/#dfn-flashes" target="_blank" rel="noopener">flashes</a>.</p>

#### Test Instructions

<ol id="d9aTI">
    <li id="d9aTI-1">Set the user agent at standard zoom level, e.g. 100% in a browser.</li>
    <li id="d9aTI-2">If there is an option to view a larger version of the flashing content, such as a full screen mode, test the larger version. If there is an option to loop or repeat the flashing content, test the looping version.</li>
    <li id="d9aTI-3">Check that one of the following is true of the flashing content: [SC 2.3.1]
        <ol type="a">
            <li id="d9aTI-3a">The flashing frequency is less than or equal to 3 flashes in any one second (3 Hertz).</li>
            <li id="d9aTI-3b">The flashing frequency is above 3 Hertz or cannot be determined, and at least one of the following is true: 
                <ol type="i">
                    <li id="d9aTI-3bi">The combined area of flashes occurring concurrently occupies no more than a 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 x 768 pixels.</li>
                    <li id="d9aTI-3bii">The flash does not include "general flashes" (a pair of opposing changes in relative luminance of 10% or more of the maximum relative luminance (1.0) where the relative luminance of the darker image is below 0.80; and where "a pair of opposing changes" is an increase followed by a decrease, or a decrease followed by an increase).</li>
                    <li id="d9aTI-3biii">The flash does not include any "pair of opposing transitions involving a saturated red" (a pair of opposing transitions where one transition is either to or from a state with a value R/(R + G + B) that is greater than or equal to 0.8, and the difference between states is more than 0.2 (unitless) in the CIE 1976 UCS chromaticity diagram. [[ISO_9241-391]])</li>
                </ol>
            </li>
        </ol>
    </li>
</ol>



#### Test Results

<p id="d9aTR">If all of the above checks fail, then Baseline Test 9.A-Flashes fails.</p>

### Advisory: Tips for Streamlined Test Processes

-   If content will be displayed or viewed at significantly different sizes or distances (e.g., responsive content intended for display across desktop, mobile, and/or other displays), the content should be evaluated for each scenario.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](https://www.w3.org/WAI/WCAG22/Techniques/general/G19)
-   [G176: Keeping the flashing area small enough](https://www.w3.org/WAI/WCAG22/Techniques/general/G176)
