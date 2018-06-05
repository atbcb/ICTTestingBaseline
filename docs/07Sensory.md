# 7. Sensory Characteristics
## Accessibility Requirements
* [WCAG SC 1.4.1 Use of Color](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html) -- Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
* [WCAG SC 1.3.3 Sensory Characteristics](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html) -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
Users affected by this requirement are not limited to users of assistive technology (AT), and include those with Color Vision Deficiency. Others using AT may not have a way to determine shape, size, location, or perceive sound. Visual inspection is required to determine the adequacy of instructions or content to account for any limitations of sensory or color perceptions.

## Limitations, Assumptions, or Exceptions
* This requirement does not prohibit the use of color or sensory characteristics to provide information, directions, or cues. However, they must be used in conjunction with contextual, textual, and/or other visual cues.
* This is not a test of alternative text descriptions which require assistive technology access. Users with color deficiency do not typically use AT.

## Test Procedure for SC 1.4.1 Use of Color
### Identify Content
Content that relies on color to convey meaning, indicate an action, prompt a response, 
distinguish a visual element, or identify errors. 

### Test Instructions
1. Check if one or more of the following is true:
    1. The element using color to convey meaning also provides on-screen alternate text describing the color and/or the meaning conveyed by the color
    1. The element using color to convey meaning also provides other visual differentiation (e.g., shape, position, size, underline) with a clear indication of its meaning

### Test Results
If BOTH of the above checks fail, then SC 1.4.1 Baseline Requirement 7 fail.

## Test Procedure for SC 1.3.3 Sensory Characteristics
### Identify Content
Identify instructions for understanding and operating content that use sensory information to convey information. This may include references to shape, size, visual location, orientation, or sound.

### Test Instructions
1. Check that the instructions contain additional information that allows it to be located, identified, and understood without any knowledge of its shape, size, or relative position. For instance,
    * To see your changes, select the round button labeled "Go".
    * The links on the right, with the heading "Resources", provide further information.
    * Select the lower-right [Cancel] button to close this session.
2. Check that any auditory cues also provide programmatically determinable visual and/or textual cues. For instance,
    * At the sound of the beep and the appearance of the timer, begin the quiz.

### Test Results
If any of the above checks fail, then SC 1.3.3 and Baseline Requirement 7 fail.

## Advisory: Tips for streamlined test processes
* Content that uses color with other visual differentiation must also provide textual cues to convey the same information to satisfy both SC 1.3.3 and 1.4.1; therefore, it is recommended to combine both requirements in a single test.
* Related tests might include dynamic content, images, links, and alternate pages.
* Displaying content in greyscale may help identify content that uses only color to convey information.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/TR/WCAG20-TECHS/G14.html)
    * [G205: Including a text cue for colored form control labels](https://www.w3.org/TR/WCAG20-TECHS/G205.html)
    * [G182: Ensuring that additional visual cues are available when text color differences are used to convey information](https://www.w3.org/TR/WCAG20-TECHS/G182.html)
    * [G111: Using color and pattern](https://www.w3.org/TR/WCAG20-TECHS/G111.html)
    * [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/TR/WCAG20-TECHS/F73.html)
    * [F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only](https://www.w3.org/TR/WCAG20-TECHS/F81.html)
    * [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/TR/WCAG20-TECHS/G96.html)
    * [F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location](https://www.w3.org/TR/WCAG20-TECHS/F14.html)
    * [F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information](https://www.w3.org/TR/WCAG20-TECHS/F26.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](06Images.md) | [Next Baseline](08Contrast.md)
