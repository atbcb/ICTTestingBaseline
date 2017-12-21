# 10. Flashing

## Requirement Rationale
The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity. 

## Test Method Rationale
Flashing can be caused by the display, the computer rendering the image or by the content being rendered. As the author has no control of the first two, this test addresses the content itself. Furthermore, as there is no reliable, freely or widely available solution for determining the resulting flicker frequency, this test focuses on: 
* determining the flicker rate from programmatically available information, and 
* determining if any flashing element is within the "small safe area" -- smaller than a contiguous area of 21,824 sq pixels.

## Accessibility Requirements
* WCAG2: 2.3.1 Three Flashes or Below Threshold
* WCAG2: 2.3.2 Three Flashes
   
## Limitations, Assumptions, or Exceptions. 
* There is no reliable, widely available method to test the flicker rate resulting from the computer or hardware.
* Exceptions: N/A

## Test Procedure
### Selector (Identify Content)
1. Visually identify interface components that flicker.

### Test Instructions

#### Tests for SC 2.3.1
<ol>
<li> For each element visually identified as flickering, determine if the contiguous flicker area is less than the equivalent of 21,824 sq pixels at intended viewing distance.</li>
   <ul>
   <li> If so, proceed to the next text step. </li>
   <li> If not, this test fails. </li>
   </ul>
 <li> Determine if the flickering element has been programmatic set to a frequency below 3 Hz. </li>
    <ul>
    <li> If it is, this test passes and the element is *conformant for all users.*</li>
    <li> If it is not, this test fails. </li>
    </ul>
 </ol>

##### Test Results SC 2.3.1
* If both tests pass, then the content is conformant to SC 2.3.1.
* If test 2 passes, it is *conformant for all users.*
* If only test 1 passes, it is conformant *for users who are not enlarging the area by using screen magnifiers.*
* If test 1 and test 2 fail, the content is not conformant to 2.3.1.

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
