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
* The PITS (Pie in the Sky) Flash Area favelet
* The PITS Flashing favelet
    
## Limitations, Assumptions, or Exceptions
* Limitations:  This test does not consider the actual flicker rate resulting from the computer or hardware.
* Exceptions: N/A

#### Accessibility Support
N/A

#### Test Subject Types 
Rendered web page

## Test Procedure
### Selector (Identify Content)
1. Find interface components that flicker.
2. Run the PITS Flashing favelet to identify elements that have 

### Test Instructions

#### Tests for SC 2.3.1
1. For each 

##### Test Results SC 2.3.1
* If both tests for SC 2.3.1 fail, then the content is not conformant to SC 2.3.1

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
