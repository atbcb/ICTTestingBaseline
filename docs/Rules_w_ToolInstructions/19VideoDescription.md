# 19. Video Descriptions

## Rationale
### Test Rationale
Information conveyed by prerecorded video-only content must be available to all users. Alternatives for time-based media that are text based make information accessible because text can be rendered through any sensory modality to match the needs of the user.

### Test Method Rationale
The only method available to determine the sufficiency of the text or audio alternative is through manual verification.  

## Accessibility Requirements
WCAG SC 1.2.1 Video-Only (Prerecorded) - For prerecorded video-only media, the following is true (except when the video is a media alternative for text and is clearly labeled as such): Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

## Tools Necessary
No specific tools are necessary to perform this manual test. 

## Limitations, Assumptions or Exceptions 
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* A text equivalent is not required for audio that is provided as an equivalent for video-only content. For example, it is not required to transcribe audio that is provided as an alternative to a silent movie.
* Videos must be tested using an accessible video player.
* If the video has meaningful sound, test for Multimedia (B20 and B21)

## Test Procedure

### Selector (Identify elements to Test) 
1. Find interface components that play video-only or animated content when activated.
2. Visually determine if the video is a media alternative to text. 

### Test Instructions
#### Tests for SC 1.2.1
1. Manually determine if the video is provided as a media alternative to text and is clearly labeled as such.
2. Manually check information provided in the animation or video is also accurately conveyed through either: 
   a. audio description
   b. accessible screen text 

#### Test Results for SC 1.2.1
* C: Meets criteria for either step 1 or step 2
* NC: Fail criteria for either step 1 or step 2
* DNA: There is no video-only or animated content

## Baseline Requirement Outcome
If no content fails, then the content passes for video descripton (baseline requirement 19).

## Advisory: tips for streamlined test processes
No tips at this time.
