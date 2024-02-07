---
title: "7. Sensory Characteristics"
order-number: 8
---
## 7. Sensory Characteristics

### Accessibility Requirements


-   [WCAG SC 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) -- All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for [specific] situations.
-   [WCAG SC 1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.
-   [WCAG SC 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) -- Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.



### Test Method Rationale

Users affected by this requirement are sighted and not limited to users of assistive technology (AT), and include those with Color Vision Deficiency. Visual inspection is required to determine the adequacy of instructions or content to account for any limitations of sensory or color perceptions.

### Limitations, Assumptions, or Exceptions

-   This requirement does not prohibit the use of color or sensory characteristics to provide information, directions, or cues. However, they must be used in conjunction with contextual, textual, and/or other visual cues.
-   Text Alternative descriptions that are not available visually would not pass these tests. 
-   The test for audible cues covers short sounds used to notify the user, such as confirmation beeps and error notifications. Audio in time-based media is covered in Baseline [16. Audio-only and Video-only](../16AudioVideo.md).
-   Per [WCAG 2.2 Understanding SC 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color), where color alone distinguishes between visited and unvisited links, it does not result in a failure of this Success Criterion. 
-   Per [WCAG 2.2 Understanding SC 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color), use of colors that differ in color (hue) and lightness with a contrast ratio of 3:1 or greater meet this requirement.

### 7.A Test Procedure for Use of Color

**Baseline Test ID:** 7.A-Color
#### Identify Content
<p id="7AIC">Content that relies on color to convey meaning, indicate an action, prompt a response, distinguish a visual element, or identify errors. Exclude color of visited/unvisited links.</p>

#### Test Instructions
<ol id="7ATI">
    <li id="7ATI-1">Check if one or more of the following is true:
    <ol>
        <li id="7ATI-1i">The content using color to convey meaning also provides on-screen alternate text describing the color and/or the meaning conveyed by the color when the user must be able to accurately perceive or differentiate a particular color. [SC 1.4.1]</li>
        <li id="7ATI-1ii">The content using color to convey meaning also provides other visual differentiation (e.g., shape, position, size, underline) with a clear indication of its meaning when the user must be able to accurately perceive or differentiate a particular color.[SC 1.4.1]</li>
        <li id="7ATI-1iii">The content using only a difference in colors to convey meaning uses colors (hues) that have a contrast ratio of 3:1 or greater. This content does not require the user to be able to accurately perceive or differentiate a particular color.[SC 1.4.1]</li>
    </ol></li>
</ol>

#### Test Results
<p id="7ATR">If BOTH of the above checks fail, then Baseline Test 7.A-Color fails.</p>

### 7.B Test Procedure for Sensory Characteristics
**Baseline Test ID:** 7.B-SensoryCharacteristics
#### Identify Content
<p id="7BIC">Identify instructions for understanding and operating content that use sensory information to convey information. This may include references to shape, size, visual location, orientation, or sound.</p>

#### Test Instructions
<ol id="7BTI">
    <li id="7BTI-1">Check that the instructions contain additional information that allows it to be located, identified, and understood without any knowledge of its shape, size, or relative position. [SC 1.3.3]<br>
    For example:
        <ul>
            <li>To see your changes, select the round button labeled "Go".</li>
            <li>The links on the right, with the heading "Resources", provide further information.</li>
            <li>Select the lower-right "Cancel" button to close this session.</li>
        </ul>
    </li>
    <li id="7BTI-2">Check that any auditory cues also provide programmatically determinable visual and/or textual cues. [SC 1.3.3].<br>
    For example:
        <ul>
            <li>At the sound of the beep and the appearance of the timer, begin the quiz.</li>
        </ul>
    </li>
</ol>

#### Test Results
<p id="7BTR">If any of the above checks fail, then Baseline Test 7.B-SensoryCharacteristics fails.</p>

### 7.C Test Procedure for Audible Cues
**Baseline Test ID:** 7.C-AudibleCues
#### Identify Content
<p id="7CIC">Identify any short sound/audible cue that serves as a notification to the user, such as a beep that signifies an error has occurred or a chime to indicate an incoming message.</p>

#### Test Instructions
<ol id="7CTI">
    <li id="7CTI-1">Check that a text alternative that describes the purpose of the sound is provided with the audible cue. [SC 1.1.1]<br>
    For example:
        <ul>
            <li>A short beep and an asterisk appears on a required field to notify the user that the field must be completed. </li>
            <li>As a timer counts down, a bell rings and a "Two minutes left!" message appears on screen.</li>
        </ul>
    </li>
</ol>

#### Test Results
<p id="7CTR">If any of the above checks fail, then Baseline Test 7.C-AudibleCues fails.</p>

### Advisory: Tips for streamlined test processes

-   Content that uses color must have an additional visual cue. Instructions that rely on a sensory characteristic must have an additional visual cue. It is possible to cover both requirements in a single test.
-   Related tests might include dynamic content, images, links, and alternate pages.
-   Displaying content in greyscale may help identify content that uses only color to convey information.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location](https://www.w3.org/WAI/WCAG22/Techniques/failures/F14)
-   [F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information](https://www.w3.org/WAI/WCAG22/Techniques/failures/F26)
-   [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/WAI/WCAG22/Techniques/failures/F73)
-   [F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only](https://www.w3.org/WAI/WCAG22/Techniques/failures/F81)
-   [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/WAI/WCAG22/Techniques/general/G14)
-   [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/WAI/WCAG22/Techniques/general/G96)
-   [G111: Using color and pattern](https://www.w3.org/WAI/WCAG22/Techniques/general/G111)
-   [G182: Ensuring that additional visual cues are available when text color differences are used to convey information](https://www.w3.org/WAI/WCAG22/Techniques/general/G182)
-   [G205: Including a text cue for colored form control labels](https://www.w3.org/WAI/WCAG22/Techniques/general/G205)

    

   
