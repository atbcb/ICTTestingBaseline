# 19. Video Descriptions

## Rationale
### Test Rationale
Information conveyed by prerecorded video-only content must be available to all users. Some users will not be able to see the video. Therefore, there needs to be a text only version of what is being displayed, and/or a description of the relevant visual content.

### Test Method Rationale
The only method available to determine the sufficiency of the text or audio alternative is through manual verification.  

## Accessibility Requirements
WCAG SC 1.2.1 Video-Only (Prerecorded) - For prerecorded video-only media, the following is true (except when the video is a media alternative for text and is clearly labeled as such): Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

## Limitations, Assumptions or Exceptions 
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* A text equivalent is not required for audio that is provided as an equivalent for video-only content. For example, it is not required to transcribe audio that is provided as an alternative to a silent movie.
* Videos must be tested using an accessible video player.
* If the video has meaningful sound, then use the synchronization test instead: Baseline test 20. Synchronized Media (Captions) and/or 21. Synchronized Media (Descriptions)

## Test Procedure

### Selector (Identify elements to Test) 
1. Find interface components that play video-only or animated content when activated.
2. Visually determine if the video is a media alternative to text. 

### Test Instructions
#### Tests for SC 1.2.1
1. Manually check that the video is provided as a media alternative to text and is clearly labeled as such.
2. Manually check that information provided in the animation or video is also accurately conveyed through either: 
    1. audio description
    1. accessible screen text 

#### Test Results for SC 1.2.1
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
If no SC fails, then the content passes the Baseline Requirement.

