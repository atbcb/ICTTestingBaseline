# 9. Flashing
## Accessibility Requirements
* [WCAG SC 2.3.1 Three Flashes or Below Threshold](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) -- [Pages] do not contain anything that flashes more than three times in any one second period, or the flash is below the general [flash and red flash thresholds](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html#general-thresholddef).
* **Note:** Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
Flashing can be caused by factors beyond the control of authors (e.g., the user's display, the computer rendering of the image, or connectivity issues). There is no reliable, freely or widely available solution for determining the resulting flash frequency for these types of factors.

This test addresses flashing caused by the content itself, including:
* Determining the flash rate from programmatically available information
* Determining if any flashing element is within the "small safe area" -- smaller than a contiguous area of 25% of a 10 degree viewing angle of the total screen size at intended viewing distance
* Determining if the [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) changes by more than 10% for a pair of opposing changes in a flash
* Determining if flashing elements include a [saturated red](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#general-thresholddef)
   
## Limitations, Assumptions, or Exceptions
* There is no reliable, widely available method to test the flash rate resulting from the computer or hardware. However, no tool is necessary to evaluate for this condition if flashing is less than or equal to 3 flashes in any one second. Content automatically passes ([Understanding SC 3.2.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)).
* It is possible that users could view content at a resolution or from a distance much different from the intended resolution and viewing distance.
* For the purposes of this baseline, the terms flicker and blink may be used synonymously with the term flash.
* Blinking elements that conform to this requirement are still required to conform to SC 2.2.2 Pause Stop Hide, if the blinking lasts longer than 5 seconds ([Baseline 29. Pause, Stop, Hide, Control](29Control.md)).
* Per Conformance Requirement 5, all content on the Web page (whether or not it is used to meet other success criteria) must meet SC 2.3.1.
* **Exception:** Flashing that is a fine, balanced, pattern such as white noise or an alternating checkerboard pattern with "squares" smaller than 0.1 degree (of visual field at typical viewing distance) on a side does not violate the thresholds ([Understanding SC 3.2.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)).

## Test Procedure for SC 2.3.1 Three Flashes or Below Threshold
### Identify Content
Visually identify content that [flashes](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html#flash-def) (excluding exception noted in Limitations, Assumptions, or Exceptions above).

### Test Instructions
1. Determine the flashing frequency. If the flashing frequency is at or below 3Hz (three flashes in any one second period), no further testing is necessary.
1. If the content flashes above 3Hz or the frequency cannot be determined, check that it meets one of the following:
    1. The combined, contiguous area that is flashing simultaneously within any 10 degree angle of view is less than the equivalent of the small safe area for flashing (i.e., less than 25% of a 10 degree viewing angle of the total screen size at intended viewing distance).
    1. The opposing transitions that flash do not involve a saturated red AND 
        1. The darkest image’s relative luminance is above 0.80, or
        2. The darkest image’s relative luminance is below 0.80 and the maximum change in relative luminance between the darkest image and the brightest image is less than 10%.

### Test Results
If any of the above checks fail, then SC 2.3.1, Conformance Requirement 5, and Baseline Requirement 9 fail.

## Advisory: Tips for streamlined test processes
* If content will be displayed or viewed at significantly different sizes or distances (e.g., responsive content intended for display across desktop, mobile, and/or other displays), the content should be evaluated for each scenario.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](https://www.w3.org/TR/WCAG20-TECHS/G19.html)
    * [G176: Keeping the flashing area small enough](https://www.w3.org/TR/WCAG20-TECHS/G176.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](08Contrast.md) | [Next Baseline](10Forms.md)
