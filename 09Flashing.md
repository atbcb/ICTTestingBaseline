# 9. Flashing

Accessibility Requirements
--------------------------
-   [WCAG SC 2.3.1 Three Flashes or Below Threshold](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) - Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the [general flash and red flash thresholds](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html#general-thresholddef).
-   [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5) - The following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page: 1.4.2 - Audio Control, 2.1.2 - No Keyboard Trap, 2.3.1 - Three Flashes or Below Threshold, and 2.2.2 - Pause, Stop, Hide.

Test Method Rationale
---------------------
Flashing can be caused by factors beyond the control of authors (e.g., the user's display, the computer rendering of the image, or connectivity issues). There is no reliable, freely or widely available solution for determining the resulting flash frequency for these types of factors.

This test addresses flashing caused by the content itself, including:
-   Determining the flash rate from programmatically available information
-   Determining if any flashing element is within the "small safe area" -- smaller than a contiguous area of 25% of a 10 degree viewing angle of the total screen size at intended viewing distance
-   Determining if the [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) changes by more than 10% for a pair of opposing changes in a flash
-   Determining if flashing elements include a [saturated red](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#general-thresholddef)

Limitations, Assumptions, or Exceptions
---------------------------------------
-   It is possible that users could view content at a resolution or from a distance much different from the intended resolution and viewing distance.
-   For the purposes of this baseline, the terms flicker and blink may be used synonymously with the term flash.
-   Blinking elements that conform to this requirement are still required to conform to SC 2.2.2 Pause Stop Hide, if the blinking lasts longer than 5 seconds ([Baseline 21. Timed Events](21TimedEvents.md)).
-   Note from SC 2.3.1:
    -   Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

## 9.1 Test Procedure for Three Flashes or Below Threshold
**Baseline Test ID:** 9.1-Flashes
### Identify Content
<p id="1IC">Visually identify content that [flashes](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html#flash-def) (excluding exception noted in Limitations, Assumptions, or Exceptions above).</p>

### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Determine the flashing frequency. If the flashing frequency is at or below 3Hz (three flashes in any one second period), no further testing is necessary.</li>
    <li id="1TI-2">If the content flashes above 3Hz or the frequency cannot be determined, check that it meets one of the following: [SC 2.3.1]</li>
    <ol>
        <li id="1TI-2i">The combined, contiguous area that is flashing simultaneously within any 10 degree angle of view is less than the equivalent of the small safe area for flashing (i.e., less than 25% of a 10 degree viewing angle of the total screen size at intended viewing distance).</li>
        <li id="1TI-2ii">The opposing transitions that flash do not involve a saturated red AND</li>
        <ol>
            <li id="1TI-2iia">The darkest image’s relative luminance is above 0.80, or</li>
            <li id="1TI-2iib">The darkest image’s relative luminance is below 0.80 and the maximum change in relative luminance between the darkest image and the brightest image is less than 10%.</li>
        </ol>
    </ol>
</ol>

### Test Results
<p id="1TR">If all of the above checks fail, then Baseline Test 9.1-Flashes fails.</p>

Advisory: Tips for streamlined test processes
---------------------------------------------
-   If content will be displayed or viewed at significantly different sizes or distances (e.g., responsive content intended for display across desktop, mobile, and/or other displays), the content should be evaluated for each scenario.

### WCAG 2.0 Techniques
-   The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    -   [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](https://www.w3.org/TR/WCAG20-TECHS/G19.html)
    -   [G176: Keeping the flashing area small enough](https://www.w3.org/TR/WCAG20-TECHS/G176.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](08Contrast.md) | [Next Baseline](10Forms.md)
