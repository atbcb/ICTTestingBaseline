# 16. Audio-Only and Video-Only
## Accessibility Requirements
*	[WCAG SC 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) -- For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:
    * **Prerecorded Audio-only:** An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
    * **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
Evaluation of alternative content to assess its equivalence to audio-only or video-only content generally involves a manual, cognitive comparison of the original content and its alternative(s).

## Limitations, Assumptions, or Exceptions
### Audio-Only
* If audio is synchronized with video, slides, animations, or other time-based visual media, then use the synchronization test instead: Baseline test [17. Synchronized Media](17SyncMedia.md).
* Audio intended as a media alternative for text does not require additional description if it is clearly labeled as such.
* Media that present audio content with only static visual information for the duration of the entire media may be considered audio-only content. An example would be a media file that displays a speaker’s name and title while the speaker’s speech plays. If the video component is static, and the information displayed in the video is also available as screen text, then treat the file as audio-only.
* Short sounds used to notify the user, such as confirmation beeps and error notifications, are not included in this requirement.
* Information and/or instructions provided in the form of audio-only content must provide equivalent programmatic and/or textual cues; the check for this requirement is performed under Baseline [7. Sensory Characteristics](07Sensory.md).

### Video-Only
* In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc.
* Video intended as a media alternative for text does not require additional description if it is clearly labeled as such.
* Media that present video content accompanied by sounds that do not contribute meaning may be considered video-only content. An example would be a media file that provides a visual demonstration of how to fold a paper airplane with background music.
* If the video is accompanied by timed sounds or meaningful dialog, it is not video-only. Test for Synchronized Media ([Baseline 17](17SyncMedia.md)) requirements.
* Video-only content may present moving, blinking, scrolling, or auto-updating information; however, other methods may be used to present similar content. In either case, whether presented via video-only or some other method, the content must provide the ability to pause, stop, or hide the content. The check for this requirement is performed under [5. Changing Content](05Changing.md).

## Test Procedure for SC 1.2.1 Audio-only (Prerecorded)
### Identify Content
Pre-recorded audio-only content.

### Test Instructions
1. Check that the content provides transcript(s) for audio-only content.
2. Check that the transcript is text (i.e., an image of a transcript would not be sufficient to pass this test).
3. Play the audio-only content entirely.
4. Check that the information in the transcript is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, identification of speakers in dialogue, etc.

### Test Results
* If any of the above checks fail, then SC 1.2.1 and Baseline Requirement 16 fail.

## Test Procedure for SC 1.2.1 Video-only (Prerecorded)
### Identify Content
Pre-recorded video-only content.

### Test Instructions
1.	Check that video-only content information is also available through a text alternative (e.g., text that provides description of video content and actions). **Note**: An audio alternative may be provided, but is not sufficient alone to meet this requirement.
2.	View the video-only content while referring to the alternative. Check that the information in the alternative includes the same information that the video-only presentation displays (e.g., if the video includes multiple characters, the alternative must identify which character is associated with each depicted action).

### Test Results
* If any of the above checks fail, then SC 1.2.1 and Baseline Requirement 16 fail.

## Advisory: Tips for streamlined test processes
### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/TR/WCAG20-TECHS/G158.html)
* [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/TR/WCAG20-TECHS/G159.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](15Language.md) | [Next Baseline](17SyncMedia.md)
