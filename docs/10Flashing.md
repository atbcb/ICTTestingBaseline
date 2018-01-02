# 10. Flashing

## Requirement Rationale
The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity. 

## Test Method Rationale
Flashing can be caused by the display, the computer rendering the image or by the content being rendered. As the author has no control of the first two, this test addresses the content itself. 

## Accessibility Requirements
* WCAG2: 2.3.1 Three Flashes or Below Threshold
   
## Limitations, Assumptions, or Exceptions. 
None.

## Test Procedure
### Selector (Identify Content)
1. Visually identify interface components that flicker.

### Test Instructions

#### Tests for SC 2.3.1
1. Check if the flicker area is less than 21,824 sq pixels. <<KE: this is for older screen resolution. this will be hard to keep up>>
   1. If it is larger, check if the flicker rate is less than 3Hz.


##### Test Results SC 2.3.1
If either check fails, then this SC fails

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
