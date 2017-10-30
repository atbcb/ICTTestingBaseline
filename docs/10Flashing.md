# 10. Flashing

## Requirement Rationale
The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity. 

## Test Method Rationale
Flashing can be caused by the display, the computer rendering the image or by the content being rendered. As the author has no control of the first two, this test addresses the content itself. Furthermore, as there is no reliable, freely or widely available solution for determining the resulting flicker frequency, this test focuses on 
* determining the flicker rate from programmatically available information, and 
* determining if any flashing element is within the "small safe area" per *ST G176 - Keeping the flashing area small enough*.

## Accessibility Requirements
* WCAG2: 2.3.1 Three Flashes or Below Threshold
* WCAG2: 2.3.2 Three Flashes

## Tools Necessary
* Visual inspection
* The PITS (Pie in the Sky) Flash Area favelet (displays the "small safe area" for specified display sizes)
* The PITS Flashing favelet (marks up elements with flicker frequency information)
    
## Limitations, Assumptions, or Exceptions. 
* Limitations:
   * The Flash Area favelet allows evaluation of the "small safe area" for typical display size and distance.
   * The Flashing favelet test does not consider the actual flicker rate resulting from the computer or hardware.
* Exceptions: N/A

#### Accessibility Support
N/A

#### Test Subject Types 
Rendered web page

## Test Procedure
### Selector (Identify Content)
1. Visually identify interface components that flicker.

### Test Instructions

#### Tests for SC 2.3.1
1. For each element visually identified as flickering, run the PITS Flash Area favelet to display a "safe area" overlay based on the specified display size. Determine if the flashing element falls within that area. 
   * If so, this test passes and the element is conformant *for users who are not enlarging the area by using screen magnifiers.* 
   * If not, this test fails.
1. For each element visually identified as flickering, run the PITS Flashing favelet to identify elements that have frequency markup.
   1. If the favelet marks up the element to show its programmatic frequency, check whether it is conformant (below 3 Hz). 
      * If it is, this test passes and the element is *conformant for all users.*
      * If it is not, this test fails.
      * If the favelet does not mark up the element to show its programmatic frequency, the result of this test are indeterminate.

##### Test Results SC 2.3.1
* If both tests pass, then the content is conformant to SC 2.3.1.
* If test 2 passes, it is *conformant for all users.*
* If only test 1 passes, it is conformant *for users who are not enlarging the area by using screen magnifiers.*
* If test 1 and test 2 fail, the content is not conformant to 2.3.1.

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
