---
title: "17. Synchronized Media"
order-number: 18
---
## 17. Synchronized Media

### Accessibility Requirements

-   [WCAG SC 1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
-   [WCAG SC 1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) -- An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
-   [WCAG SC 1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) -- Captions are provided for all live audio content in synchronized media.
-   [WCAG SC 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) -- Audio description is provided for all prerecorded video content in synchronized media.
-   [Section 508 503.4 User Controls for Captions and Audio Description](https://www.federalregister.gov/d/2017-00395/p-630) -- Where ICT displays video with synchronized audio, ICT shall provide user controls for closed captions and audio descriptions conforming to 503.4.
-   [Section 508 503.4.1 Caption Controls](https://www.federalregister.gov/d/2017-00395/p-631) -- Where user controls are provided for volume adjustment, ICT shall provide user controls for the selection of captions at the same menu level as the user controls for volume or program selection.
-   [Section 508 503.4.2 Audio Description Controls](https://www.federalregister.gov/d/2017-00395/p-632) -- Where user controls are provided for program selection, ICT shall provide user controls for the selection of audio descriptions at the same menu level as the user controls for volume or program selection.

### Test Method Rationale

Evaluation of captions and audio descriptions to assess its equivalence to synchronized media content generally involves a manual, cognitive comparison of the original content with its alternative(s). Media that are clearly labeled as a media alternative for text are tested to assess equivalence to the text and if not equivalent, the tests for captions and audio descriptions are to be performed.

### Limitations, Assumptions, or Exceptions

-   [Synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media) is audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such. Synchronized media includes, but is not limited to Web casts, press conferences, and online training presentations.
-   [Media alternative for text](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text) is media that presents no more information than is already presented in text (directly or via text alternatives). Note: A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.
-   [Captions](https://www.w3.org/TR/WCAG22/#dfn-captions) are synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content. Additional notes from definition:
    -   Note 1: Captions...convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.
    -   Note 4: Captions should not obscure or obstruct relevant information in the video.
-   [Audio descriptions](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions) are narration added to or combined with the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone.
-   Captions and audio descriptions need to be available but do not need to be enabled by default.
-   Captions and audio descriptions can be provided in separate media files, i.e., audio described version and captioned version are different files.
-   Transcripts and non-synchronized alternatives alone will not meet this requirement.
-   Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page.
-   Live captions Exception: Two-way multimedia calls between two or more individuals through web apps are not included in this test; it is only intended for broadcast of synchronized media.
-   From [Understanding SC 1.2.5](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded), if all of the information in the video track is already provided in the audio track, no audio description is necessary.
-   For this Section 508 baseline, synchronized media is tested for SC 1.2.5; (Level A) SC 1.2.3 is not tested. At the higher conformance level AA, SC 1.2.5 requires audio descriptions and is more strict than SC 1.2.3.

### 17.A Test Procedure for Media Player Controls

**Baseline Test ID:** 17.A-MediaPlayerCCADControls
#### Identify Content
<p id="17aIC">Media player that displays video with synchronized audio.</p>

#### Test Instructions
<ol id="17aTI">
    <li id="17aTI-1">Check that user control for the selection of captions is provided. [Section 508 503.4]</li>
    <li id="17aTI-2">Check that user control for the selection of audio descriptions is provided. [Section 508 503.4]</li>
</ol>

#### Test Results
<p id="17aTR">If any of the above checks fail, then Baseline Requirement 17.A-MediaPlayerCCADControls fails.</p>

### 17.B Test Procedure for Media Player Caption Control Level

**Baseline Test ID:** 17.B-MediaPlayerCCLevel
#### Identify Content
<p id="17bIC">Media player that displays video with synchronized audio and has volume adjustment controls.</p>

#### Test Instructions
<ol id="17bTI">
    <li id="17bTI-1">Check that user controls for the selection of captions are at the same menu level as the user controls for volume adjustment or program selection. [Section 508 503.4.1]</li>
</ol>

#### Test Results
<p id="17bTR">If any of the above checks fail, then Baseline Test 17.B-MediaPlayerCCLevel fails.</p>

### 17.C Test Procedure for Media Player Audio Description Control Level

**Baseline Test ID:** 17.C-MediaPlayerADLevel
#### Identify Content
<p id="17cIC">Media player that displays video with synchronized audio and has program selection controls.</p>

#### Test Instructions
<ol id="17cTI">
    <li id="17cTI-1">Check that user controls for the selection of audio descriptions are at the same menu level as the user controls for volume or program selection. [Section 508 503.4.2]</li>
</ol>

#### Test Results
<p id="17cTR">If any of the above checks fail, then Baseline Test 17.C-MediaPlayerADLevel fails.</p>

### 17.D Test Procedure for Captions (Prerecorded)

**Baseline Test ID:** 17.D-CaptionsPrerecorded
#### Identify Content
<p id="17dIC">Pre-recorded synchronized multimedia. Do not include media that is clearly labeled as a media alternative for text.</p>

#### Test Instructions
<ol id="17dTI">
    <li id="17dTI-1">Enable captions through multimedia player functions and play the media. If a separate media file with captions is provided, test that file.</li>
    <li id="17dTI-2">Check that captions are provided.</li>
    <li id="17dTI-3">Check that captions are accurate and include all dialogue and equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location. [SC 1.2.2]
        <ol>
        <li id="17dTI-3i">Listen to the audio of the entire synchronized media.</li>
        <li id="17dTI-3ii">Compare the audio to the captions for accuracy, time-synchronization, and equivalence.</li>
        </ol></li>
    <li id="17dTI-4">Check that the captions do not obscure or obstruct relevant information in the video. [SC 1.2.2]</li>
</ol>

#### Test Results
<p id="17dTR">If any of the above checks fail, then Baseline 17.D-CaptionsPrerecorded fails.</p>

### 17.E Test Procedure for Audio Description (Prerecorded)

**Baseline Test ID:** 17.E-ADPrerecorded

#### Identify Content
<p id="17eIC">Pre-recorded synchronized multimedia. . Do not include media that is clearly labeled as a media alternative for text.</p>

#### Test Instructions
<ol id="17eTI">
    <li id="17eTI-1">Enable audio descriptions through multimedia player functions and play the media. If a separate media file with audio descriptions is provided, test that file.</li>
    <li id="17eTI-2">Check that the audio (with audio descriptions enabled) adequately describes important visual content in the media, including information about actions, characters, scene changes, on-screen text, and other visual content. [SC 1.2.5]</li>
</ol>

#### Test Results
<p id="17eTR">If any of the above checks fail, then Baseline 17.E-ADPrerecorded fails.</p>

### 17.F Test Procedure for Captions (Live)

**Baseline Test ID:** 17.F-CaptionsLive
#### Identify Content
<p id="17fIC">Live synchronized multimedia.</p>

#### Test Instructions
<ol id="17fTI">
    <li id="17fTI-1">Enable captions through multimedia player functions and start the live session.</li>
    <li id="17fTI-2">Check that captions are provided</li>
    <li id="17fTI-3">Check that provided captions include dialogue and important sounds. [SC 1.2.4]
        <ol>
        <li id="17fTI-3i">Listen to the audio of the entire synchronized media.</li>
        <li id="17fTI-4ii">Compare the audio to the captions for accuracy, time-synchronization, and equivalence. Lower accuracy of captions for live broadcasts may be acceptable due to limitations of real-time caption capabilities.</li>
        </ol></li>
</ol>

#### Test Results
<p id="17fTR">If any of the above checks fail, then Baseline Requirement 17.F-CaptionsLive fails.</p>

### 17.G Test Procedure for Sync Media Alternative (Prerecorded)

**Baseline Test ID:** 17.G-SyncMediaAlternative
#### Identify Content
<p id="17gIC">Pre-recorded synchronized multimedia that is clearly labeled as a media alternative for text.</p>

#### Test Instructions
<ol id="17gTI">
    <li id="17gTI-1">Identify the text for which the media is an alternative.</li>
    <li id="17gTI-2">Play the media that is labeled as an equivalent alternative for the text.</li>
    <li id="17gTI-3">Check that the meaningful audible information of the media is available in the text.</li>
    <li id="17gTI-4">Check that the meaningful visual information of the media is available in the text.</li>  
</ol>

#### Test Results
<p id="17gTR">If any of the above checks fail, then the multimedia is not a media alternative for text. Perform Baseline Tests <a href="#17d-test-procedure-for-captions-prerecorded">17.D Test Procedure for Captions (Prerecorded)</a> and <a href="#17e-test-procedure-for-audio-description-prerecorded">17.E Test Procedure for Audio Description (Prerecorded)</a> on the pre-recorded synchronized multimedia. </p>

### Advisory: Tips for streamlined test processes

-   Testing synchronized media is different from testing Baseline [16. Audio-Only and Video-Only content](../16AudioVideo).
-   Synchronized media players may be software or HTML.
-   At Level AA, SC 1.2.5 applies to synchronized media. The related Level A requirement, SC 1.2.3, should be marked as ‘Not Applicable’ in the test report. It is permissible for test processes to add a test for SC 1.2.3 (evaluate a full text alternative for equivalence). Adding such a test would exceed baseline test requirements and would not affect Baseline 17’s outcome.
-   All synchronized multimedia should be tested. If the pre-recorded multimedia is labeled as an media alternative for text, confirm that it provides equivalent information as text. If it does not, then it is not a media alternative for text. Test the multimedia for captions and audio descriptions. It may make sense to perform Test 17.G before testing for captions and audio descriptions.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-   [F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects](https://www.w3.org/WAI/WCAG21/Techniques/failures/F8.html)
-   [G9: Creating captions for live synchronized media](https://www.w3.org/WAI/WCAG22/Techniques/general/G9)
-   [G78: providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
-   [G87: Providing closed captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G87)
-   [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G93)
