# 18. Synchronized Media 
## Accessibility Requirements
* [WCAG SC 1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
* [WCAG SC 1.2.4 Captions (Live)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html) -- Captions are provided for all live audio content in synchronized media.
* [WCAG SC 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html) -- Audio description is provided for all prerecorded video content in synchronized media.

## Test Method Rationale
Evaluation of captions and audio descriptions to assess its equivalence to synchronized media content generally involves a manual, congnitive comparison of the original content with its alternative(s).

## Limitations, Assumptions, or Exceptions
* [Synchronized media](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html#synchronizedmediadef) is audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such. Synchronized media includes, but is not limited to Web casts, press conferences, and online training presentations.
* [Captions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html#captionsdef) are synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content.
    * "Captions...convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location" (https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html).
    * "Captions should not obscure or obstruct relevant information in the video" (https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html).
* [Audio descriptions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html#audiodescdef) are narration added to or combined with the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone.
* Captions and audio descriptions need to be available but do not need to be turned on by default.
* Captions and audio descriptions can be provided in separate media files, i.e., an audio described and captioned versions are different files.
* Media players must support captions and audio description for this test.
* Transcripts and non-synchronized alternatives alone will not meet this requirement. 
* Exception: Two-way multimedia calls between two or more individuals through web apps are not included in this test.
* Level A Success Criterion 1.2.3 requires either an audio description or a full text alternative. Level AA Success Criterion 1.2.5 requires audio description. Revised Section 508 is WCAG 2.0 Level AA so SC 1.2.5 is the applicable requirement in this test.
* Video-only content may present moving, blinking, scrolling, or auto-updating information; however, other methods may be used to present similar content. In either case, whether presented via video-only or some other method, the content must provide the ability to pause, stop, or hide the content. The check for this requirement is performed under 6. Changing Content.

## Test Procedure for SC 1.2.2 Captions (Prerecorded)
### Select/Identify Content
Identify and select pre-recorded synchronized multimedia

### Test Instructions
1. Enable captions through multimedia player functions and play the media. If a separate media file with captions is provided, test that one.
1. Check that captions are accurate and include all dialogue and equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.
    1. Listen to the audio of the entire synchronized media.
    1. Compare the audio to the captions for accuracy, time-synchronization, and equivalence.
1. Check that the captions do not obscure or obstruct relevant information in the video.

### Test Results
* If any of the above checks fail, SC 1.2.2 and Baseline 20 fail.

## Test Procedure for SC 1.2.5 Audio Description (Prerecorded)
### Test Instructions
1. Enable audio descriptions through multimedia player functions and play the media. If a separate media file with audio descriptions is provided, test that one.
1. Check that the soundtrack (narration and audio descriptions) adequately describes important visual content in the media, including information about actions, characters, scene changes, on-screen text, and other visual content..

### Test Results
If any of the above checks fail, SC 1.2.5 and Baseline 20 fail.

## Test Procedure for SC 1.2.4 Captions (Live)
### Select/Identify Content)
Identify and select live synchronized multimedia

### Test Instructions
1. Enable captions through multimedia player functions and play the media.
1. Check that provided captions include dialogue and important sounds.
    1. Listen to the audio of the entire synchronized media.
    1. Compare the audio to the captions for accuracy, time-synchronization, and equivalence. Lower accuracy of captions for live broadcasts may be acceptable due to limitations of real-time caption capabilities.
1. Check that the captions do not obscure or obstruct relevant information in the video.

### Test Results
* If any of the above checks fail, SC 1.2.4 and this baseline fail

## Advisory: Tips for streamlined test processes
* Testing synchronized media is different to testing audio-only content (test #18) and video-only content (test #19).
* Synchronized media players may be software or HTML.

### Sufficient Techniques
* Technique G93: Providing open (always visible) captions
* Technique G87: Providing closed captions
* Technique G9: Creating captions for live synchronized media
* G78: providing a second, user-selectable, audio track that includes audio descriptions
* G8: Providing a movie with extended audio descriptions

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](17AudioVideo.md) | [Next Baseline](19Stylesheet.md)
