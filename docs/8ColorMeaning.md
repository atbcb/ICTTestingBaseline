# 8. Color (meaning)
## Rationale
Color dependence is defined as using color as the sole means to convey information. For example, a single indicator that is green for 'on', orange for 'standby', and red for 'off' is color dependent.
When color is the only means to convey information, people who are color blind, and people who cannot see, do not have access to the same information that others have. The status or function that is being conveyed by color also needs to be available in a textual format that can be viewed by all, and can be read by screen reader software.

This requirement does not mean that color cannot be used; it means that color cannot be the only means of conveying the information.

## Accessibility Requirements
* WCAG SC 1.4.1 Use of Color -- Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

### Related Standards
* WCAG SC 1.3.3 Sensory Characteristics 

## Tools Necessary
* Web Accessibility Favelets (WAF) - *Greyscale*
    
## Limitations, Assumptions, or Exceptions
* Limitation: Testing tool capability to find HTML <H> and ARIA <role=heading> attribute(s) of the page
* Exception: A page with only one heading on the page does not have a heading level structure and would not be tested

## Test Procedure
### Selector (Identify Content)
Identify any instances where color conveys meaning, indicates an action, prompts a response, or identifies errors

### Tests for SC 1.4.1
1. After identifying instances where color conveys meaning, execute the *Greyscale* favelet
2. Check that for any instance where color is used to convey meaning one or more of the following is true:
    1.  The element using color to convey meaning also provides on-screen alternate text describing the color and/or the meaning conveyed by the color
    2.  The element using color to convey meaning also provides alternate visual differentiation (e.g., shape, position, size) with clear indication of meaning that the visual differentiation denotes

#### Test Results SC 1.4.1
* If the test for SC 1.4.1 fails, then the content is not conformant to SC 1.4.1

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* When color is used to communicate data sets (e.g., Geographic Information System application, or pie chart), additional guidance may be necessary on testing for equivalent facilitation. Related tests might include multi-state components, images, links, and Alternate pages. Data tables related to the charts may also be suggested means of augmenting the standard interface.
* For Web testing, the WAF Greyscale favelet may face limitations depending on the webpage in question. It may be necessary to conduct a manual inspection, e.g., printing a screen capture on a black and white printer.
