# 19. Video Descriptions

## Accessibility Requirements
* [WCAG SC 1.2.1 Video-Only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) - For prerecorded video-only media, the following is true (except when the video is a media alternative for text and is clearly labeled as such): Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.
* [WCAG SC 1.3.3 Sensory Characteristics](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.
* [WCAG SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html) For moving, blinking, scrolling, or auto-updating information, all of the following are true:
   * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and
   * Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

## Test Method Rationale
View the content of the visual information and compare to alternatives for equivalence.

## Limitations, Assumptions or Exceptions 
* In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc. 
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* Video-only content may be delivered as a downloadable file, streamed, or other means.
* Videos must be tested using an accessible video player. <<KE comment: I don't think so, not for a transcript check>>
* If the video also has meaningful sound, it is not video-only. Test for Multimedia (B20 and B21) requirements.
* Per Conformance Requirement 5, SC 2.2.2 applies to all moving, blinking, scrolling, or auto-updating content that meets the criteria.

## Selector (Identify elements to Test) 
Pre-recorded video-only content

### Test Instructions
#### Tests for SC 1.2.1
1. Check that the page provides the video-only content information through either
   a. audio track
   b. an alternative for time-based media (audio descriptions?)
1. Check that information provided in the animation or video is also accurately conveyed through either: 
   a. audio description
   b. accessible screen text 

from audio edit:
Check that the page provides transcript(s) for audio-only content.
Check that the transcript is accessible screen text (i.e., an image of a transcript with no ALT-text would not be sufficient to pass this test).
Play the audio-only content entirely.
Check that the information in the transcript is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, indentification of speakers in dialogue, etc.


#### Test Results for SC 1.2.1
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
If no content fails, then the content passes for video descripton (baseline requirement 19).

## Advisory: tips for streamlined test processes
No tips at this time.
