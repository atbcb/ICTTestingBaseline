# 21. Synchronized Media (Descriptions)
## Rationale
Synchronized media must have audio descriptions that are time-synchronized with the video.

### Test Rationale

### Test Method Rationale

## Accessibility Requirements
* WCAG2: 1.2.3 Audio Description or Media Alternative (Prerecorded)

* WCAG2: 1.2.5 Audio Description (Prerecorded)
    * Technique ...
    * Technique ...

## Tools Necessary
* Visual and audio inspection
    
## Limitations, Assumptions, or Exceptions
* Limitation: tester must be able to see and hear video
* Exception: content in a test that requires video without audio descriptions

## Test Procedure
### Selector (Identify Content)
View the video and determine where audio descriptions of relevant information are needed.

### Test Instructions

#### Tests for SC 1.2.3
1. For each video segment that requires audio description, check that there is audio description provided.
2. Sync'd, descriptive
##### Test Results SC 1.2.3
* If the test for SC 1.2.3 fails, then the content is not conformant to SC 1.2.3

#### Tests for SC 1.2.5
...
##### Tests for SC 1.2.5
1. ..................Review the markup inserted on the page.
   1. Check that each element marked as a programmatic heading is a visual heading.
   1. For each visual heading, check that each heading is determined programmatically AND that heading levels are logical and in sequential order. 
      1. The most important heading should have the level of 1, and the least important heading should have a level of 6. 
      1. Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section. 
      1. Either of these techniques is acceptable for each heading:
            * H42: each heading is marked with `<h1>` to `<h6>`.
            * ARIA12: each heading is marked with `role=”heading”`. If all headings on the page are at the same level, the additional `aria-level=”#”` is not required. For multiple heading levels, 'aria-level' must be specified.
###### Test Results for SC 1.2.5
* If any test for SC 1.2.5 fails, then the content is not conformant to SC 1.2.5

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
