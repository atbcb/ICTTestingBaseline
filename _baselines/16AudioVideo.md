---
title: "16. Audio-Only and Video-Only"
order-number: 17
---
## 16. Audio-Only and Video-Only

### Accessibility Requirements

-   [WCAG SC 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) -- For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:
    -   **Prerecorded Audio-only:** An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
    -   **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

### Test Method Rationale

Evaluation of alternative content to assess its equivalence to audio-only or video-only content generally involves a manual, cognitive comparison of the original content and its alternative(s).

### Limitations, Assumptions, or Exceptions

-   [Media alternative for text](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text) is media that presents no more information than is already presented in text (directly or via text alternatives). Note: A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

#### Audio-Only

-   [Audio-only](https://www.w3.org/TR/WCAG22/#dfn-audio-only) is a time-based presentation that contains only audio (no video and no interaction).
-   If audio is synchronized with video, slides, animations, or other time-based visual media, then use the synchronization test instead: Baseline [17. Synchronized Media](../17SyncMedia).
-   Audio labeled as a media alternative for text does not require additional description if it is indeed equivalent to the text.
-   A text equivalent is not required for audio that is provided as an equivalent for video with no audio information. For example, it is not required to caption video description that is provided as an alternative to a silent movie.
-   Short sounds used to notify the user, such as confirmation beeps and error notifications, are not included in this requirement.
-   Information and/or instructions provided in the form of audio-only content must provide equivalent programmatic and/or textual cues; the check for this requirement is performed under Baseline [7. Sensory Characteristics](../07Sensory).

#### Video-Only

-   [Video-only](https://www.w3.org/TR/WCAG22/#dfn-video-only) is a time-based presentation that contains only video (no audio and no interaction).
-   In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc.
-   Video labeled as a media alternative for text does not require additional description if it is indeed equivalent to the text.
-   If the video is accompanied by timed sounds or meaningful dialog, it is not video-only. Test for Baseline [17. Synchronized Media](../17SyncMedia) requirements.
-   Video-only content may present moving, blinking, scrolling, or auto-updating information; however, other methods may be used to present similar content. In either case, whether presented via video-only or some other method, the content must provide the ability to pause, stop, or hide the content. The check for this requirement is performed under Baseline [21. Timed Events](../21TimedEvents).

### 16.1 Test Procedure for Audio-only (Prerecorded)

**Baseline Test ID:** 16.1-AudioOnlyTranscript

#### Identify Content

<p id="1IC">Pre-recorded audio-only content. Do not include media that is clearly labeled as a media alternative for text.</p>

#### Test Instructions

<ol id="1TI">
    <li id="1TI-1">Check that the content provides transcript(s) for audio-only content. [SC 1.2.1]</li>
    <li id="1TI-2">Check that the transcript is text (e.g., an image-only PDF would not be sufficient to pass this test). [SC 1.2.1]</li>
    <li id="1TI-3">Play the audio-only content entirely while referring to the alternative.</li>
    <li id="1TI-4">Check that the information in the transcript is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, identification of speakers in dialogue, etc. [SC 1.2.1]</li>
</ol>

#### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 16.1-AudioOnlyTranscript fails.</p>

### 16.2 Test Procedure for Video-only (Prerecorded)

**Baseline Test ID:** 16.2-VideoOnlyAlt

#### Identify Content

<p id="2IC">Pre-recorded video-only content. Do not include media that is clearly labeled as a media alternative for text.</p>

#### Test Instructions

<ol id="2TI">
    <li id="2TI-1">Check that all video-only content information is also available through a text alternative (e.g., text that provides description of video content and actions) or an audio track that describes the video content. [SC 1.2.1]</li>
    <li id="2TI-2">View the video-only content while referring to the alternative.</li>
    <li id="2TI-3">Check that the information in the alternative includes the same information that the video-only presentation displays (e.g., if the video includes multiple characters, the alternative must identify which character is associated with each depicted action). [SC 1.2.1]</li>
</ol>

#### Test Results

<p id="2TR">If any of the above checks fail, then Baseline Test 16.2-VideoOnlyAlt fail.</p>

### 16.3 Test Procedure for Audio Media Alternative (Prerecorded)

**Baseline Test ID:** 16.3-AudioMediaAlternative
#### Identify Content
<p id="3IC">Pre-recorded audio-only that is clearly labeled as a media alternative for text.</p>

#### Test Instructions
<ol id="3TI">
    <li id="3TI-1">Identify the text for which the media is an alternative.</li>
    <li id="3TI-2">Play the media that is labeled as an equivalent alternative for the text.</li>   
    <li id="3TI-3">Check that the meaningful audible information of the media is available in the text.</li>  
</ol>

#### Test Results
<p id="3TR">If any of the above checks fail, then the audio-only is not a media alternative for text. Perform Baseline Tests <a href="#161-test-procedure-for-audio-only-prerecorded">16.1 Test Procedure for Audio-Only (Prerecorded)</a>. </p>

### 16.4 Test Procedure for Video Media Alternative (Prerecorded)

**Baseline Test ID:** 16.4-VideoMediaAlternative
#### Identify Content
<p id="4IC">Pre-recorded video-only that is clearly labeled as a media alternative for text.</p>

#### Test Instructions
<ol id="4TI">
    <li id="4TI-1">Identify the text for which the media is an alternative.</li>
    <li id="4TI-2">Play the media that is labeled as an equivalent alternative for the text.</li>   
    <li id="4TI-3">Check that the meaningful visual information of the media is available in the text.</li>  
</ol>

#### Test Results
<p id="4TR">If any of the above checks fail, then the video-only is not a media alternative for text. Perform Baseline Tests <a href="#162-test-procedure-for-video-only-prerecorded">16.2 Test Procedure for Video-only (Prerecorded)</a>. </p>

### Advisory: Tips for streamlined test processes
- Baseline Tests 16.1 and 16.3 are tests for Audio-only files. It may make sense to perform Test 16.3 before Test 16.1.
- Baseline Tests 16.2 and 16.4 are tests for Video-only files. It may make sense to perform Test 16.4 before Test 16.2.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G158)
-   [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G159)
