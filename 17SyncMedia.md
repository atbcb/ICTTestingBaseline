# 17. Synchronized Media

Accessibility Requirements
--------------------------
-   [WCAG SC 1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
-   [WCAG SC 1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html) -- An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
-   [WCAG SC 1.2.4 Captions (Live)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html) -- Captions are provided for all live audio content in synchronized media.
-   [WCAG SC 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html) -- Audio description is provided for all prerecorded video content in synchronized media.
-   [Section 508 503.4 User Controls for Captions and Audio Description](https://www.federalregister.gov/d/2017-00395/p-630) -- Where ICT displays video with synchronized audio, ICT shall provide user controls for closed captions and audio descriptions conforming to 503.4.
-   [Section 508 503.4.1 Caption Controls](https://www.federalregister.gov/d/2017-00395/p-631) -- Where user controls are provided for volume adjustment, ICT shall provide user controls for the selection of captions at the same menu level as the user controls for volume or program selection.
-   [Section 508 503.4.2 Audio Description Controls](https://www.federalregister.gov/d/2017-00395/p-632) -- Where user controls are provided for program selection, ICT shall provide user controls for the selection of audio descriptions at the same menu level as the user controls for volume or program selection.

Test Method Rationale
---------------------
Evaluation of captions and audio descriptions to assess its equivalence to synchronized media content generally involves a manual, cognitive comparison of the original content with its alternative(s).

Limitations, Assumptions, or Exceptions
---------------------------------------
-   [Synchronized media](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html#synchronizedmediadef) is audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such. Synchronized media includes, but is not limited to Web casts, press conferences, and online training presentations.
-   [Captions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html#captionsdef) are synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content. Additional notes from definition:
    -   Note 1: Captions...convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.
    -   Note 4: Captions should not obscure or obstruct relevant information in the video.
-   [Audio descriptions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html#audiodescdef) are narration added to or combined with the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone.
-   Captions and audio descriptions need to be available but do not need to be enabled by default.
-   Captions and audio descriptions can be provided in separate media files, i.e., audio described version and captioned version are different files.
-   Transcripts and non-synchronized alternatives alone will not meet this requirement.
-   Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page.
-   Live captions Exception: Two-way multimedia calls between two or more individuals through web apps are not included in this test; it is only intended for broadcast of synchronized media.
-   Notes from [Understanding SC 1.2.5](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html):
    -   Note 1: For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.
    -   Note 2: 1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement.
-   For this Section 508 baseline, synchronized media is tested for SC 1.2.5; (Level A) SC 1.2.3 is not tested. At the higher conformance level AA, SC 1.2.5 requires audio descriptions and is more restrictive than SC 1.2.3.

17.1 Test Procedure for Media Player Controls
------------------------------------
**Baseline Test ID:** 17.1-MediaPlayerCCADControls
### Identify Content
Media player that displays video with synchronized audio.

### Test Instructions
1.  Check that user controls for the selection of captions and audio descriptions are provided. [Section 508 503.4]

### Test Results
If any of the above checks fail, then Baseline Requirement 17.1-MediaPlayerCCADControls fails.

17.2 Test Procedure for Media Player Caption Control Level
--------------------------------------
**Baseline Test ID:** 17.2-MediaPlayerCCLevel
### Identify Content
Media player that displays video with synchronized audio and has volume adjustment controls.

### Test Instructions
1.  Check that user controls for the selection of captions are at the same menu level as the user controls for volume adjustment or program selection. [Section 508 503.4.1]

### Test Results
If any of the above checks fail, then Baseline Test 17.2-MediaPlayerCCLevel fails.

17.3 Test Procedure for Media Player Audio Description Control Level
--------------------------------------
**Baseline Test ID:** 17.3-MediaPlayerADLevel
### Identify Content
Media player that displays video with synchronized audio and has program selection controls.

### Test Instructions
1.  Check that user controls for the selection of audio descriptions are at the same menu level as the user controls for volume or program selection. [Section 508 503.4.2]

### Test Results
If any of the above checks fail, then Baseline Test 17.3-MediaPlayerADLevel fails.

17.4 Test Procedure for SC 1.2.2 Captions (Prerecorded)
--------------------------------------------------
**Baseline Test ID:** 17.4-CaptionsPrerecorded
### Identify Content
Pre-recorded synchronized multimedia.

### Test Instructions
1.  Enable captions through multimedia player functions and play the media. If a separate media file with captions is provided, test that file.
2.  Check that captions are accurate and include all dialogue and equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location. [SC 1.2.2]
    1.  Listen to the audio of the entire synchronized media.
    2.  Compare the audio to the captions for accuracy, time-synchronization, and equivalence.
3.  Check that the captions do not obscure or obstruct relevant information in the video. [SC 1.2.2]

### Test Results
If any of the above checks fail, then Baseline 17.4-CaptionsPrerecorded fails.

17.5 Test Procedure for Audio Description (Prerecorded)
-----------------------------------------------------------
**Baseline Test ID:** 17.5-ADPrerecorded
### Test Instructions
1.  Enable audio descriptions through multimedia player functions and play the media. If a separate media file with audio descriptions is provided, test that file.
2.  Check that the audio (with audio descriptions enabled) adequately describes important visual content in the media, including information about actions, characters, scene changes, on-screen text, and other visual content. [SC 1.2.5]

### Test Results
If any of the above checks fail, then Baseline 17.5-ADPrerecorded fails.

17.6 Test Procedure for SC 1.2.4 Captions (Live)
-------------------------------------------
**Baseline Test ID:** 17.6-CaptionsLive
### Identify Content
Live synchronized multimedia.

### Test Instructions
1.  Enable captions through multimedia player functions and start the live session.
2.  Check that provided captions include dialogue and important sounds. [SC 1.2.4]
    1.  Listen to the audio of the entire synchronized media.
    2.  Compare the audio to the captions for accuracy, time-synchronization, and equivalence. Lower accuracy of captions for live broadcasts may be acceptable due to limitations of real-time caption capabilities.

### Test Results
If any of the above checks fail, then Baseline Requirement 17.6-CaptionsLive fails.

Advisory: Tips for streamlined test processes
---------------------------------------------
-   Testing synchronized media is different from testing Baseline [16. Audio-Only and Video-Only content](16AudioVideo.md).
-   Synchronized media players may be software or HTML.
-   At Level AA, SC 1.2.5 applies to synchronized media. The related Level A requirement, SC 1.2.3, should be marked as ‘Not Tested’ in the test report. It is permissible for test processes to add a test for SC 1.2.3 (evaluate a full text alternative for equivalence). Adding such a test would exceed baseline test requirements and would not affect Baseline 18’s outcome.

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G93: Providing open (always visible) captions](http://www.w3.org/TR/WCAG20-TECHS/G93.html)
-   [G87: Providing closed captions](http://www.w3.org/TR/WCAG20-TECHS/G87.html)
-   [G9: Creating captions for live synchronized media](http://www.w3.org/TR/WCAG20-TECHS/G9.html)
-   [G78: providing a second, user-selectable, audio track that includes audio descriptions](http://www.w3.org/TR/WCAG20-TECHS/G78.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](16AudioVideo.md) | [Next Baseline](18Stylesheet.md)
