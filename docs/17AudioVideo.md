# 17. Audio and Video-Only
## Accessibility Requirements
*	[WCAG SC 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) -- For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:
    * **Prerecorded Audio-only:** An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
    * **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.
* [WCAG SC 1.4.2 Audio Control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) --  If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
   * [WCAG Conformance Requirement 5: Non-interference](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) -- [... 1.4.2 - Audio Control] apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page [...].

## Test Method Rationale
Evaluation of alternative content to assess its equivalence to audio-only or video-only content generally involves a manual, congnitive comparison of the original content and its alternative(s). 

Evaluation to identify the existence of a mechanism to control audio (pause, stop, or control volume), also generally requires a congnitive evaluation, given the variety of techniques or mechanisms that could facilitate audio control.

## Limitations, Assumptions, or Exceptions
### Audio
* If audio is synchronized with video, slides, animations, or other time-based visual media, then use the synchronization test instead: Baseline test 20. Synchronized Media (Captions) and 21. Synchronized Media (Descriptions)
* A text equivalent is not required for audio that is provided as an equivalent for video-only content. For example, it is not required to transcribe audio that is provided as an alternative to a silent movie.
* Audio-only content may be stored in file formats typcially used for synchronized media. For example, a speech may be stored in a file where the video is simply a static graphic of the speaker's name and location. If the video component is static, and the information displayed in the video is also available as screen text, then treat the file as audio-only.
* Audio-only content may be delivered as a downloadable file, streamed, or other means.
* Short sounds used to notify the user, such as confirmation beeps and error notifications, are not included in this requirement.
* Per Conformance Requirement 5, SC 1.4.2 applies to all audio content that automatically plays for more than 3 seconds. 
* Some information and/or instructions may come in the form of audio-only content, in which case, the web page/site must provide equivalent programmatic and/or textual cues; the check for this requirement is performed under [Baseline 8. Sensory Characteristics](08Sensory.md).

### Video
* In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc.
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* Video-only content may be delivered as a downloadable file, streamed, or other means.
* If the video is accompanied by timed sounds or meaningful dialog, it is not video-only. Test for Multimedia (B20 and B21) requirements.
* Video-only content may present moving, blinking, scrolling, or auto-updating information; however, other methods may be used to present similar content. In either case, whether presented via video-only or some other method, the content must provide the ability to pause, stop, or hide the content. The check for this requirement is performed under [6. Changing Content](06Changing.md).

## Test Procedure for SC 1.2.1 Audio-only (Prerecorded)
### Select/Identify Content
Identify and select pre-recorded audio-only content. 

### Test Instructions
1. Check that the page provides transcript(s) for audio-only content.
1. Check that the transcript is accessible screen text (i.e., an image of a transcript with no ALT-text would not be sufficient to pass this test).
1. Play the audio-only content entirely.
1. Check that the information in the transcript is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, identification of speakers in dialogue, etc.

### Test Results
* If any of the above checks fail, then SC 1.2.1 and Baseline Requirement 17 fail.

## Test Procedure for SC 1.4.2 Audio Control
### Select/Identify Content
Identify and select audio that automatically plays for more than 3 seconds.

### Test Instructions
1. Check that either 
    1. a mechanism is available within the page content, browser, media player, or operating system to pause or stop the audio, **OR**
    1. a mechanism is available within the page content, browser, media player, or operating system to control audio volume independently from the overall system volume level.

### Test Results
* If the above check fails, then SC 1.4.2, WCAG Conformance Requirement 5: Non-interference, and Baseline Requirement 17 fail.

## Test Procedure for SC 1.2.1 Video-only (Prerecorded)
### Select/Identify Content
Identify and select pre-recorded video-only content

### Test Instructions
1. Check that video-only content information is also available through an alternative method:
    1. audible alternative (e.g., audio track)
    1. accessible text alternative (e.g., transcript document, which provides description of video content and actions)
1. View the video-only content while referring to the alternative and check that the information in the alternative includes the same information that the video-only presentation displays (e.g., if the video includes multiple characters, the alternative must identify which character is associated with each depicted action).

### Test Results
* If any of the above checks fail, then SC 1.2.1 and Baseline Requirement 17 fail.

## Advisory Tips
* A failure of SC 1.4.2 would also fail Conformance Requirement 5: Non-Interference and should be highlighted in test reports to indicate the severe impact on accessibility.

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/TR/WCAG20-TECHS/G158.html)
* [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/TR/WCAG20-TECHS/G159.html)
* [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/TR/WCAG20-TECHS/G166.html)
* [H96: Using the track element to provide audio descriptions](https://www.w3.org/TR/WCAG20-TECHS/H96.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](16Language.md) | [Next Baseline](18SyncMedia.md)
