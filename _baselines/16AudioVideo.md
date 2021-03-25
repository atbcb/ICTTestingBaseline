---
title: "16. Audio-Only and Video-Only"
order-number: 17
---
## 16. Audio-Only and Video-Only

### Accessibility Requirements

-   [WCAG SC 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) -- For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:
    -   **Prerecorded Audio-only:** An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
    -   **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

### Test Method Rationale

Evaluation of alternative content to assess its equivalence to audio-only or video-only content generally involves a manual, cognitive comparison of the original content and its alternative(s).

### Limitations, Assumptions, or Exceptions

#### Audio-Only
-   If audio is synchronized with video, slides, animations, or other time-based visual media, then use the synchronization test instead: Baseline [17. Synchronized Media](../17SyncMedia).
-   Audio intended as a media alternative for text does not require additional description if it is clearly labeled as such.
-   Short sounds used to notify the user, such as confirmation beeps and error notifications, are not included in this requirement.
-   Information and/or instructions provided in the form of audio-only content must provide equivalent programmatic and/or textual cues; the check for this requirement is performed under Baseline [7. Sensory Characteristics](../07Sensory).

#### Video-Only
-   In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc.
-   Video intended as a media alternative for text does not require additional description if it is clearly labeled as such.
-   If the video is accompanied by timed sounds or meaningful dialog, it is not video-only. Test for Baseline [17. Synchronized Media](../17SyncMedia) requirements.
-   Video-only content may present moving, blinking, scrolling, or auto-updating information; however, other methods may be used to present similar content. In either case, whether presented via video-only or some other method, the content must provide the ability to pause, stop, or hide the content. The check for this requirement is performed under Baseline [21. Timed Events](../21TimedEvents).

### 16.1 Test Procedure for Audio-only (Prerecorded)

**Baseline Test ID:** 16.1-AudioOnlyTranscript
#### Identify Content
<p id="1IC">Pre-recorded audio-only content.</p>

#### Test Instructions
<ol id="1TI">
    <li id="1TI-1">Check that the content provides transcript(s) for audio-only content. [SC 1.2.1]</li>
    <li id="1TI-2">Check that the transcript is text (i.e., an image of a transcript would not be sufficient to pass this test). [SC 1.2.1]</li>
    <li id="1TI-3">Play the audio-only content entirely.</li>
    <li id="1TI-4">Check that the information in the transcript is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, identification of speakers in dialogue, etc. [SC 1.2.1]</li>
</ol>

#### Test Results
<p id="1TR">If any of the above checks fail, then Baseline Test 16.1-AudioOnlyTranscript fails.</p>

### 16.2 Test Procedure for SC 1.2.1 Video-only (Prerecorded)

**Baseline Test ID:** 16.2-VideoOnlyAlt
#### Identify Content
<p id="2IC">Pre-recorded video-only content.</p>

#### Test Instructions
<ol id="2TI">
    <li id="2TI-1">Check that all video-only content information is also available through a text alternative (e.g., text that provides description of video content and actions) or an audio track that describes the video content. [SC 1.2.1]</li>
    <li id="2TI-2">View the video-only content while referring to the alternative.</li>
    <li id="2TI-3">Check that the information in the alternative includes the same information that the video-only presentation displays (e.g., if the video includes multiple characters, the alternative must identify which character is associated with each depicted action). [SC 1.2.1]</li>
</ol>

#### Test Results
<p id="2TR">If any of the above checks fail, then Baseline Test 16.2-VideoOnlyAlt fail.</p>

### Advisory: Tips for streamlined test processes

#### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/TR/WCAG20-TECHS/G158.html)
-   [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/TR/WCAG20-TECHS/G159.html)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../15Language) | [Next Baseline](../17SyncMedia)
