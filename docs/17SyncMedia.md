# 17. Synchronized Media 
## Accessibility Requirements
* [WCAG SC 1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
* [WCAG SC 1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html) -- An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
* [WCAG SC 1.2.4 Captions (Live)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html) -- Captions are provided for all live audio content in synchronized media.
* [WCAG SC 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html) -- Audio description is provided for all prerecorded video content in synchronized media.
* [Section 508 503.4.1 Caption Controls](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#503-applications) -- Where user controls are provided for volume adjustment, ICT shall provide user controls for the selection of captions at the same menu level as the user controls for volume or program selection.
* [Section 508 503.4.2 Audio Description Controls](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#503-applications) -- Where user controls are provided for program selection, ICT shall provide user controls for the selection of audio descriptions at the same menu level as the user controls for volume or program selection.

## Test Method Rationale
Evaluation of captions and audio descriptions to assess its equivalence to synchronized media content generally involves a manual, cognitive comparison of the original content with its alternative(s).

## Limitations, Assumptions, or Exceptions
* [Synchronized media](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html#synchronizedmediadef) is audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such. Synchronized media includes, but is not limited to Web casts, press conferences, and online training presentations.
* [Captions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html#captionsdef) are synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content.
    * "Captions...convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location" (https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html).
    * "Captions should not obscure or obstruct relevant information in the video" (https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html).
* [Audio descriptions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html#audiodescdef) are narration added to or combined with the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone.
* Captions and audio descriptions need to be available but do not need to be enabled by default.
* Captions and audio descriptions can be provided in separate media files, i.e., audio described version and captioned version are different files.
* Transcripts and non-synchronized alternatives alone will not meet this requirement.
* Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page.
* Exception: Two-way multimedia calls between two or more individuals through web apps are not included in this test; it is only intended for broadcast of synchronized media.
* Note 2: 1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At the higher conformance level AA, SC 1.2.5 requires audio descriptions and is more restrictive than SC 1.2.3. For this Section 508 baseline, synchronized media is tested only for SC 1.2.5 and (Level A) SC 1.2.3 is not tested.
* Video-only content may present moving, blinking, scrolling, or auto-updating information; however, other methods may be used to present similar content. In either case, whether presented via video-only or some other method, the content must provide the ability to pause, stop, or hide the content. The check for this requirement is performed under 6. Changing Content.

## Test Procedure for Section 508 503.4.1
### Identify Content
Media player that displays video with synchronized audio.

### Test Instructions
1. Check that user controls for the selection of captions are at the same menu level as the user controls for volume or program selection. 

### Test Results
If any of the above checks fail, Section 508 503.4.1 and Baseline Requirement 17 fail.

## Test Procedure for Section 508 503.4.2
### Identify Content
Media player that displays video with synchronized audio.

### Test Instructions
1. Check that user controls for the selection of audio descriptions are at the same menu level as the user controls for volume or program selection.

### Test Results
If any of the above checks fail, Section 508 503.4.2 and Baseline Requirement 17 fail.

## Test Procedure for SC 1.2.2 Captions (Prerecorded)
### Identify Content
Pre-recorded synchronized multimedia.

### Test Instructions
1. Enable captions through multimedia player functions and play the media. If a separate media file with captions is provided, test that one.
2. Check that captions are accurate and include all dialogue and equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.
    1. Listen to the audio of the entire synchronized media.
    1. Compare the audio to the captions for accuracy, time-synchronization, and equivalence.
3. Check that the captions do not obscure or obstruct relevant information in the video.

### Test Results
If any of the above checks fail, SC 1.2.2 and Baseline 17 fail.

## Test Procedure for SC 1.2.5 Audio Description (Prerecorded)
### Test Instructions
1. Enable audio descriptions through multimedia player functions and play the media. If a separate media file with audio descriptions is provided, test that one.
2. Check that the soundtrack (narration and audio descriptions) adequately describes important visual content in the media, including information about actions, characters, scene changes, on-screen text, and other visual content.

### Test Results
If any of the above checks fail, SC 1.2.5 and Baseline 17 fail.

## Test Procedure for SC 1.2.4 Captions (Live)
### Identify Content
Live synchronized multimedia.

### Test Instructions
1. Enable captions through multimedia player functions and start the live session.
2. Check that provided captions include dialogue and important sounds.
    1. Listen to the audio of the entire synchronized media.
    1. Compare the audio to the captions for accuracy, time-synchronization, and equivalence. Lower accuracy of captions for live broadcasts may be acceptable due to limitations of real-time caption capabilities.

### Test Results
If any of the above checks fail, SC 1.2.4 and Baseline Requirement 17 fail.

## Advisory: Tips for streamlined test processes
* Testing synchronized media is different from testing 16. Audio-Only and Video-Only content.
* Synchronized media players may be software or HTML.
* At Level AA, SC 1.2.5 applies to synchronized media. The related Level A requirement, SC 1.2.3, should be marked as ‘Not Tested’ in the test report. It is permissible for test processes to add a test for SC 1.2.3 (evaluate a full text alternative for equivalence). Adding such a test would exceed baseline test requirements, and would not affect Baseline 18’s outcome.

### Sufficient Techniques
* [G93: Providing open (always visible) captions](http://www.w3.org/TR/WCAG20-TECHS/G93.html)
* [G87: Providing closed captions](http://www.w3.org/TR/WCAG20-TECHS/G87.html)
* [G9: Creating captions for live synchronized media](http://www.w3.org/TR/WCAG20-TECHS/G9.html)
* [G78: providing a second, user-selectable, audio track that includes audio descriptions](http://www.w3.org/TR/WCAG20-TECHS/G78.html)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](16AudioVideo.md) | [Next Baseline](18Stylesheet.md)
