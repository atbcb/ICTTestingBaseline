<<KE: combine 20 captions and 21 audio desc into this one baseline for sync'd media>>

# 20. Synchronized media 

## Accessibility Requirements
* [WCAG SC 1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
* [WCAG SC 1.2.4 Captions (Live)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html) -- Captions are provided for all live audio content in synchronized media.
 * [WCAG SC 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html) -- Audio description is provided for all prerecorded video content in synchronized media.
 
## Limitations, Assumptions, or Exceptions
* Synchronized media is audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such. Synchronized media includes Web casts, press conferences, and online training presentations.
* Captions are synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content
* Audio descriptions are narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone
* Captions and audio descriptions need to be available but do not need to be turned on by default.
* Captions and audio descriptions can be provided in separate media files, i.e., an audio described and captioned versions are different files.
* Multimedia player must support captions and audio description for this test.
* Transcripts and non-synchronized alternatives will not meet this requirement. 
* Exception: Two-way multimedia calls between two or more individuals through web apps are not included in this test.
* Level A Success Criterion 1.2.3 requires either an audio description or a full text alternative. Level AA Success Criterion 1.2.5 requires audio description. Revised Section 508 is WCAG 2.0 Level AA so SC 1.2.5 is the applicable requirement in this test.

## Selector for 1.2.2 and 1.2.5
Pre-recorded synchronized multimedia

### Tests for SC 1.2.2
1. Enable captions through multimedia player functions and play the media.
2.	Check that captions are accurate and include all dialogue and important sounds.
    1. Listen to the audio of the entire synchronized media.
    2. Compare the audio to the captions for accuracy and equivalence. 

#### Test Results for 1.2.2
* If any of the above checks fail, SC 1.2.2 and this baseline fail.

### Tests for SC 1.2.5
1. Enable audio descriptions through multimedia player functions and play the media.
1. Check that the soundtrack (narration and audio descriptions) adequately describes visual content in the media.

#### Test Results SC 1.2.5
If any of the above checks fail, SC 1.2.5 and this baseline fail.

## Selector (Identify Content) for 1.2.4
Live synchronized multimedia

### Tests for SC 1.2.4
1. Enable captions through multimedia player functions and play the media.
2.	Check that provided captions include dialogue and important sounds.
    1. Listen to the audio of the entire synchronized media.
    2. Compare the audio to the captions for accuracy and equivalence. Lower accuracy of captions for live broadcasts is acceptable due limitations of real-time captioning techniques.

#### Test Results for 1.2.4
* If any of the above checks fail, SC 1.2.4 and this baseline fail

## Advisory: Tips for streamlined test processes
* Testing synchronized media is different to testing audio-only content (test #18).
* It is preferable to have the media on the main page for all users captioned and audio described, as current technology permits this. It is acceptable to have separate files for captioned and/or audio described versions.
* Synchronized media players may software or HTML.

### Sufficient Techniques
* Technique G93: Providing open (always visible) captions
* Technique G87: Providing closed captions
* Technique G9: Creating captions for live synchronized media
* G78: providing a second, user-selectable, audio track that includes audio descriptions
* G8: Providing a movie with extended audio descriptions
