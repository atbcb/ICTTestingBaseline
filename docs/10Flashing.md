# 10. Flashing
## Accessibility Requirements
* [WCAG SC 2.3.1 Three Flashes or Below Threshold](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) -- Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general [flash and red flash thresholds](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html#general-thresholddef).
* **Note:** Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

## Test Method Rationale
Flashing can be caused by factors beyond the control of authors (e.g., the user's display, the computer rendering of the image, or connectivity issues). There is no reliable, freely or widely available solution for determining the resulting flash frequency for these types of factors.

This test addresses flashing caused by the content itself, including: 
* Determining the flash rate from programmatically available information
* Determining if any flashing element is within the "small safe area" -- smaller than a contiguous area of 25% of a 10 degree viewing angle of the total screen size at intended viewing distance
* Determining if the [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) changes by more than 10% for a pair of opposing changes in a flash
* Determining if flashing elements include a [saturated red](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#general-thresholddef)
   
## Limitations, Assumptions, or Exceptions
* There is no reliable, widely available method to test the flash rate resulting from the computer or hardware.
* It is possible that users could view content at a resolution or from a distance much different from the intended resolution and viewing distance.
* If content will be displayed or viewed at significantly different sizes or distances (e.g., responsive content intended for display across desktop, mobile, and/or other displays), the content should be evaluated for each scenario. 
* For the purposes of this baseline, the terms flicker and blink may be used synonymously with the term flash.
* Blinking elements that conform to this requirement are still required to conform to SC 2.2.2 Pause Stop Hide, if the blinking lasts longer than 5 seconds ([Baseline 29. Pause, Stop, Hide, Control](29Control.md)).

## Test Procedure for SC 2.3.1 Three Flashes or Below Threshold
### Select/Identify Content
Visually identify content that [flashes](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html#flash-def).

### Test Instructions
1. Check if the oposing changes in a flashing element includes either: 
    1. A change in the [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) of more than 10% for a pair of opposing changes in a flash (where the relative luminance of the darker state is below 0.80).
    1. A [saturated red](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#general-thresholddef).
    * If the flashing element DOES NOT include either of the above conditions, the element is *conformant for all users.*
    * If the flashing element includes either of the above conditions, continue to the next step.
1. Check that the flash rate is programmatically determinable AND check that the flash rate of any flickering element has been programmatically set to a frequency less than or equal to 3 Hz.
    * If the flash rate is programmatically determinable AND the frequency is less than or equal to 3 Hz, this test passes, and the element is *conformant for all users.*
    * If the flash rate is NOT programmatically determinable OR the frequency is programmatically set above 3 Hz, continue to the next step.
1. Check that the combined, contiguous area that is flashing simultaneously within any 10 degree angle of view is less than the equivalent of the small safe area for flashing (i.e., less than 25% of a 10 degree viewing angle of the total screen size at intended viewing distance).

### Test Results
* If test 1 OR 2 passes, it is *conformant for all users.*
* If only test 3 passes, it is conformant *for users who are not enlarging the area by using screen magnifiers.*
* If test 2 and test 3 fail, then SC 2.3.1 and Baseline Requirement 10 fail.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](https://www.w3.org/TR/WCAG20-TECHS/G19.html)
    * [G176: Keeping the flashing area small enough](https://www.w3.org/TR/WCAG20-TECHS/G176.html)
    * [G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold](https://www.w3.org/TR/WCAG20-TECHS/G15.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](09Contrast.md) | [Next Baseline](11Forms.md)
