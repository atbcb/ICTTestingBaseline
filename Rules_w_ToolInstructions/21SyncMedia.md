# 21. Synchronized Media (Descriptions)

## Requirement Rationale
This Success Criterion may help some people who have difficulty watching video or other synchronized media content, including people who have difficulty perceiving or understanding moving images.

Synchronized media must have audio descriptions that are time-synchronized with the video. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.

If there is any interaction as part of the synchronized media presentation (e.g., "press now to answer the question") then the alternative for time-based media would provide hyperlinks or whatever is needed to provide the same functionality.

## Test Method Rationale
Video and audio description must be manually inspected to determine conformance.

## Accessibility Requirements
* WCAG2: 1.2.5 Audio Description (Prerecorded)

## Tools Necessary
* Visual and audio inspection
    
## Limitations, Assumptions, or Exceptions
* Limitations: N/A
* Exceptions: 
    * media that is a media alternative for text and is clearly labeled as such (1.2.3)

#### Accessibility Support
* Requires an accessible video player

#### Test Subject Types 
Rendered video

## Test Procedure
### Selector (Identify Content)
1. Find interface components that play video or other synchronized media content when activated.
2. Determine if the media is clearly labeled as a media alternative for text. If it is, do not apply this test.
3. Play the content. Determine video segments where audio descriptions of relevant information are needed.

### Test Instructions

#### Tests for SC 1.2.5
1. For each video segment that requires audio description, check that
   1. there is audio description provided. This may be on a user-selectable, audio track that includes audio descriptions, per *G78: providing a second, user-selectable, audio track that includes audio descriptions*
   1. the audio description is time-synchronized with the video
   1. the audio description provides sufficient information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track
1. If any of the above fails, check if there is an alternate version provided, per *G8: Providing a movie with extended audio descriptions*
   1. Check that the alternate version meets the criteria listed in Step 1.
   1. Check that 
      1. users are clearly informed about this alternate option using a conformant technique
      1. it can be easily accessed in a conformant manner
      1. a clearly labelled, conformant means is provided to easily return to the primary event flow

##### Test Results SC 1.2.5
* If both tests for SC 1.2.5 fail, then the content is not conformant to SC 1.2.5

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
