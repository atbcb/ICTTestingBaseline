# 8. Color (meaning)
## Rationale
Color dependence is defined as using color as the sole means to convey information. For example, a list of flights that displays delayed flights in red font would be color dependent. When color is the only means to convey information, people who have difficulty distinguishing between colors (Color Vision Deficiency) do not have access to the same information that others have. The status or function that is being conveyed by color also needs to be available in a textual format that can be viewed onscreen, and can be read by screen reader software.

This requirement does not mean that color cannot be used; it means that color cannot be the only means of conveying the information.

## Accessibility Requirements
* WCAG SC 1.4.1 Use of Color -- Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

### Related Standards
* WCAG SC 1.3.3 Sensory Characteristics <<KE: deals with instructions, which aren't reviewed here. I would remove but if it stays, put in the full text of the SC.>>
  
## Limitations, Assumptions, or Exceptions


## Test Procedure
### Selector (Identify Content)
Identify any instances where color conveys meaning, indicates an action, prompts a response, or identifies errors

### Tests for SC 1.4.1
1. After identifying instances where color conveys meaning, employ a tool that displays in greyscale or run a greyscale copy of the page on a printer
2. Check that for any instance where color is used to convey meaning one or more of the following is true:
    1.  The element using color to convey meaning also provides on-screen alternate text describing the color and/or the meaning conveyed by the color
    2.  The element using color to convey meaning also provides alternate visual differentiation (e.g., shape, position, size, underline) with clear indication of meaning that the visual differentiation denotes

#### Test Results SC 1.4.1
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* When color is used to communicate data sets (e.g., Geographic Information System application, or pie chart), additional guidance may be necessary on testing for equivalent facilitation. 
* Related tests might include multi-state components, images, links, and Alternate pages. <<KE: the last 2?>>
* This is not a test of alternative text descriptions which require assistive technology access. Users with color deficiency do not typically use AT.
