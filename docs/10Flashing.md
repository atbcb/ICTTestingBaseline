# 10. Flashing

## Requirement Rationale
The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity. 

## Test Method Rationale
Flashing can be caused by the display, the computer rendering the image or by the content being rendered. As the author has no control of the first two, this test addresses the content itself. Furthermore, as there is no reliable, freely or widely available solution for determining the resulting flicker frequency, this test focuses on 
* determining the flicker rate from programmatically available information, and 
* determining if any flashing element is within the "small safe area" per *ST G176 - Keeping the flashing area small enough*.

## Accessibility Requirements
* WCAG2: 2.3.1 Three Flashes or Below Threshold

## Tools Necessary
* Visual inspection
* The PITS (Pie in the Sky) Flash Area favelet (displays the "small safe area" for specified display sizes)
* The PITS Flashing favelet (marks up elements with flicker frequency information)
* The PITS Flashing Timer favelet (provides a timer with Start and Stop functions to calculate observed frequency)
    
## Limitations, Assumptions, or Exceptions. 
* Limitations:
   * The Flash Area favelet allows evaluation of the "small safe area" for typical display size and distance.
   * The Flashing favelet test does not consider the actual flicker rate resulting from the computer or hardware.
   * The Flashing Timer favelet test provides an estimated frequency based on visual observation and counting. It is intended to confirm conformance of elements that flash less than 3 Hz.
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
1. For each element visually identified as flickering, run the PITS Flash Area favelet to display a "safe area" overlay based on the specified display size. Determine if the flashing element falls within that area. If so, it is conformant *for users who are not enlarging the area by using screen magnifiers.*
1. For each element visually identified as flickering, run the PITS Flashing favelet to identify elements that have frequency markup.
   1. If the favelet marks up the element to show its programmatic frequency, check whether it is conformant (below 3 Hz). If it is, it is *conformant for all users.*
   1. If the favelet does not mark up the element to show its programmatic frequency, run the Flashing Timer favelet.
      1. Choose a flashing color at which to start the count. When this color appears, start the favelet timer.
      1. Count 10 subsequent transitions back to the chosen color. On the tenth, stop the timer.
      1. The favelet displays the calculated frequency based on the time elapsed. Check whether it is below 3 Hz. If it is, it is *conformant for all users.*

##### Test Results SC 2.3.1
* If all tests that are performed pass, then the content is conformant to SC 2.3.1.
* If only test 1 passes, it is conformant *for users who are not enlarging the area by using screen magnifiers.*
* If test 2 passes, it is *conformant for all users.*
* If neither test 1 or test 2 passes, the content is not conformant to 2.3.1.

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
