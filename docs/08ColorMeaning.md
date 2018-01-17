# 8. Color and Sensory Characteristics
## Accessibility Requirements
* [WCAG SC 1.4.1 Use of Color](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html) -- Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
* [WCAG SC 1.3.3 Sensory Characteristics](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html) -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.

## Test Method Rationale
Users affected by this requirement are not limited to users of assistive technology (AT), such as those with Color Vision Deficiency. Others using AT may not have a way to determine shape, size, location, or perceive sound. Visual inspection is required to determine the adequacy of instructions or content to account for any limitations of sensory or color perceptions.

## Limitations, Assumptions, or Exceptions
* This requirement does not prohibit the use of color or sensory characteristics to provide information, directions, or cues. However, they must be used in conjunction with contextual, textual, and/or programmatic cues.

## Test Procedure for SC 1.4.1 Use of Color
### Select/Identify Content
Identify any instances where color conveys meaning, indicates an action, prompts a response, or identifies errors.
Note: This is not a test of alternative text descriptions which require assistive technology access. Users with color deficiency do not typically use AT.

### Test Instructions
1. After identifying instances where color conveys meaning, employ a tool that displays in greyscale or run a greyscale copy of the page on a printer
2. Check that for any instance where color is used to convey meaning one or more of the following is true:
    1.  The element using color to convey meaning also provides on-screen alternate text describing the color and/or the meaning conveyed by the color
    2.  The element using color to convey meaning also provides alternate visual differentiation (e.g., shape, position, size, underline) with clear indication of meaning that the visual differentiation denotes

### Test Results
If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Test Procedure for SC 1.3.3 Sensory Characteristics
### Select/Identify Content
Identify any instances where information or instructions rely on sensory information to be understood. This may include references to shape, size, visual location, orientation, or sound.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * 
### Test Instructions
1. Check that the reference contains additional information that allows the item to be located and identified without any knowledge of its shape, size, or relative position. For instance, 
    * To see your changes, select the round button labeled "Go".
    * The links on the right, with the heading "Resources", provide further information.
    * Select the lower-right [Cancel] button to close this session.
2. Check that any auditory cues also provide programmatically determinable visual and/or textual cues. For instance,  
    * At the sound of the beep and the appearance of the timer, begin the quiz.

### Test Results
If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Advisory: Tips for streamlined test processes
* When color is used to communicate data sets (e.g., Geographic Information System application, or pie chart), additional guidance may be necessary on testing for equivalent facilitation. 
* Related tests might include dynamic content, images, links, and alternate pages.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/TR/WCAG20-TECHS/G14.html)
    * [G205: Including a text cue for colored form control labels](https://www.w3.org/TR/WCAG20-TECHS/G205.html)
    * [G182: Ensuring that additional visual cues are available when text color differences are used to convey information](https://www.w3.org/TR/WCAG20-TECHS/G182.html)
    * [G111: Using color and pattern](https://www.w3.org/TR/WCAG20-TECHS/G111.html)
    * [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/TR/WCAG20-TECHS/G96.html)
    
