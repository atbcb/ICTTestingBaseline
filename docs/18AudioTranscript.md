# 18. Audio-only
## Accessibility Requirements
*	[WCAG SC 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) -- For prerecorded audio-only and prerecorded video-only media, the following [is] true, except when the audio or video is a media alternative for text and is clearly labeled as such:
    * Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
* [WCAG SC 1.3.3 Sensory Characteristics](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html) -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. 
* [WCAG SC 1.4.2 Audio Control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) --  If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
   * [WCAG Conformance Requirement 5: Non-interference](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) -- [... 1.4.2 - Audio Control] apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page [...].

## Limitations, Assumptions, or Exceptions
* If audio is synchronized with video, slides, animations, or other time-based visual media, then use the synchronization test instead: Baseline test 20. Synchronized Media (Captions) and 21. Synchronized Media (Descriptions)
* A text equivalent is not required for audio that is provided as an equivalent for video-only content. For example, it is not required to transcribe audio that is provided as an alternative to a silent movie.
* Audio-only content may be delivered as a downloadable file, streamed, or other means.
* Short sounds used to notify the user, such as confirmation beeps and error notifications, are not included in this requirement.
* Per Conformance Requirement 5, SC 1.4.2 applies to all audio content that automatically plays for more than 3 seconds. 
* Some information and/or instructions may come in the form of audio-only content, in which case, the web page/site must provide equivalent programmatic and/or textual cues; the check for this requirement is performed under Baseline 8. Color and Sensory Characteristics.

## Test Procedure for SC 1.2.1 Audio-only and Video-only (Prerecorded)
### Select/Identify Content
Identify and select pre-recorded audio-only content. 

### Test Instructions
1. Check that the page provides transcript(s) for audio-only content.
1. Check that the transcript is accessible screen text (i.e., an image of a transcript with no ALT-text would not be sufficient to pass this test).
1. Play the audio-only content entirely.
1. Check that the information in the transcript is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, indentification of speakers in dialogue, etc.

### Test Results
* If any of the above checks fail, SC 1.2.1 and Baseline 18 fail.

## Test Procedure for SC 1.4.2 Audio Control
### Select/Identify Content
Identify and select audio that automatically plays for more than 3 seconds.

### Test Instructions
1. Check that either 
    1. a mechanism is available within the page content or media player to pause or stop the audio, **OR**
    1. a mechanism is available within the page content or media player to control audio volume independently from the overall system volume level.

### Test Results
* If the above check fails, SC 1.4.2, WCAG Conformance Requirement 5: Non-interference, and Baseline 18 fail.

## Advisory Tips
* A failure of SC 1.4.2 would also fail Conformance Requirement 5: Non-Interference and should be highlighted in test reports to indicate the severe impact on accessibility.
