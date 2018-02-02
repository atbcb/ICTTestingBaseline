# 18. Audio-only media

## Accessibility Requirements
*	[WCAG SC 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) -- For prerecorded audio-only and prerecorded video-only media, the following [is] true, except when the audio or video is a media alternative for text and is clearly labeled as such:
    * Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
* [WCAG SC 1.3.3 Sensory Characteristics](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html) -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. 
* [WCAG SC 1.4.2 Audio Control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) --  If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
   * [WCAG Conformance Requirement 5: Non-interference](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) -- [...]the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page: 1.4.2 - Audio Control,

## Limitations, Assumptions, or Exceptions
* If audio is synchronized with video, slides, animations, or other time-based visual media, then use the synchronization test instead: Baseline test 20. Synchronized Media (Captions) and/or 21. Synchronized Media (Descriptions)
* The proximity of the audio content to any control to reveal the transcript is covered by the focus (order) test (i.e., whether there is a logical order for content).
* Audio-only content may be delivered as a file, as streamed file, or other means.
* Short sounds such as confirmation beeps and error notifications are not included in this requirement.

## Selector (Identify Content)
1. Find interface components that play audio-only content when activated.
1. Find other audio content that plays automatically or upon activation of a control.

### Tests for SC 1.2.1
1. Check that that the page provides transcript(s) for audio-only content; open the transcript and play the audio-only content.
2. Check that the transcript is accessible screen text (i.e., an image of a transcript with no ALT-text would not be sufficient to pass this test).
3. Check that the information in the transcript is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, indentification of speakers in dialogue, etc.

#### Test Results for SC 1.2.1
* If any of the above checks fail, SC 1.2.1 and this baseline fail.

