# 8. Color and Sensory Characteristics
## Rationale
### Requirement Rationale
Color dependence is defined as using color as the sole means to convey information. For example, a list of flights that displays delayed flights in red font would be color dependent. When color is the only means to convey information, people who have difficulty distinguishing colors (Color Vision Deficiency) do not have access to the same information that others have. The status or function that is being conveyed by color also needs to be available in a textual format that can be viewed onscreen, and can be read by screen reader software.

This requirement does not mean that color cannot be used; it means that color cannot be the only means of conveying the information.

In the same way, other sensosry characteristics can limit understanding. For example, users who rely on screen readers cannot determine what content is being referenced with directional cues, such as "at the bottom of the page" or "on the left"; reference to the shape of an object; or description of an object's color. Similarly, use of sound to indicate the correct answer was selected would also need a visual cue to allow users without hearing to receive the same information. Use of ***only*** a graphic symbol, shape, location, or sound makes content or instructions inaccessible to some users. 

### Test Method Rationale
Users affected by this requirement are not limited to users of assistive technology (AT), such as those with Color Vision Deficiency. Others using AT may not have a way to determine shape, size, location, or perceive sound. Visual inspection is required to determine the adequacy of instructions or content to account for any limitations of sensory or color perceptions.

## Accessibility Requirements
* WCAG SC 1.4.1 Use of Color -- Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
* WCAG SC 1.3.3 Sensory Characteristics -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.
  
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
If any of the above checks fail, then the content fails this SC

## Test Procedure for SC 1.3.3 Sensory Characteristics
### Select/Identify Content
Identify any instances where information or instructions rely on sensory information to be understood. This may include references to shape, size, visual location, orientation, or sound.

### Test Instructions
1. Check that the reference contains additional information that allows the item to be located and identified without any knowledge of its shape, size, or relative position. For instance, 
    * To see your changes, select the round button labeled "Go".
    * The links on the right, with the heading "Resources", provide further information.
    * Select the lower-right [Cancel] button to close this session.
2. Check that any auditory cues also provide programmatically determinable visual and/or textual cues. For instance,  
    * At the sound of the beep and the appearance of the timer, begin the quiz.

### Test Results
If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* When color is used to communicate data sets (e.g., Geographic Information System application, or pie chart), additional guidance may be necessary on testing for equivalent facilitation. 
* Related tests might include dynamic content, images, links, and alternate pages.
