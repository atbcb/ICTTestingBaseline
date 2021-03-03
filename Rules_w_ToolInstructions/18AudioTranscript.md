# 18. Audio (transcripts)
## Rationale
Audio-only content includes speeches, and other meaningful audio. Some users will not be able to hear the audio. Therefore, there needs to be a text only version of what is being said, and/or a description of the relevant sounds.

**Notes:**
* Audio-only content may be delivered as a file, as streamed file, or other means.
* Other short sounds such as confirmation beeps and error notifications are not included in this requirement.

## Accessibility Requirements
*	WCAG SC 1.2.1 Audio-only and Video-only (Prerecorded) -- For prerecorded audio-only and prerecorded video-only media, the following [is] true, except when the audio or video is a media alternative for text and is clearly labeled as such:
    * Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
* [G158](https://www.w3.org/TR/WCAG20-TECHS/G158.html): Providing an alternative for time-based media for audio-only content

### Related Requirements
* WCAG SC 1.1.1 Non-text Content -- All non-text content that is presented to the user has a text alternative that serves the equivalent purpose...

## Tools Necessary
* Tests require manual inspection
* The Web Accessibility Favelet (WAF) - **List Downloadable Files** can help identify audio files from a list of files available on a web page 

## Limitations, Assumptions, or Exceptions
An audio-only file may be stored in a synchronized media format. For example, a speech is stored in a file where the video is simply a static graphic of the speaker's name and location. If the video component is static, and the information displayed in the video is also available as screen text, then treat the file as audio-only.

## Test Procedure
### Selector (Identify Content)
1. Find interface components that play audio-only content when activated.
1. Find other audio content that plays automatically or upon activation of a control.

**Note**: The **List Downloadable Files** favelet can help identify audio files from a list of files available on a web page

### Test Instructions
#### Tests for SC 1.2.1
1. Check that that the page provides transcript(s) for audio-only content; open the transcript and play the audio-only content.
2. Check that the transcript is accessible screen text (i.e., an image of a transcript with no ALT-text would not be sufficient to pass this test).
3. Check that the information in the transcript is an accurate and complete representation of the audio-only content. Note the inclusion or absence of relevant items in addition to dialogue, such as doors banging, sirens wailing, indentification of speakers in dialogue, etc.
4. Check that the at least one of the following is true:
    1. The transcript itself can be programmatically determined from the text alternative for the audio-only content
    2. The transcript is referred to from the programmatically determined text alternative for the audio-only content
5. Check that if the transcript(s) are on a separate page, then the page that includes the audio-only content provides links or guidance on 

#### Test Results for SC 1.2.1
If the test for SC 1.2.1 fails, then the content is not conformant to SC 1.2.1

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* If audio is synchronized with video, slides, animations, or other time-based visual media, then use the synchronization test instead.
* The proximity of the audio content to any control to reveal the transcript is covered by the focus (order) test (i.e., whether there is a logical order for content).
