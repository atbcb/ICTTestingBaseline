<<KE: combine 20 captions and 21 audio desc into this one baseline for sync'd media>>

# 20. Synchronized media 
## Rationale


A prime consideration for synchronized media is that some users will not be able to hear the content well or hear it at all. Therefore there needs to be another mode to provide the audio information. This usually means captions (text showing what is being said, and other relevant sounds).  For example, users who need captions can switch them on with a control (usually a 'CC' button for Closed Captions). If there is no means of switching modes, then the default mode must be accessible (i.e., Open Captions).

Because captions must be time-synchronized, separate transcripts will not meet this requirement on their own.
Captions are provided for all audio content (dialogue and important sounds) in synchronized media.

## Accessibility Requirements
* [WCAG SC 1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
* [WCAG SC 1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html) -- An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such. 
* [WCAG SC 1.2.4 Captions (Live)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html) -- Captions are provided for all live audio content in synchronized media.
 * [WCAG SC 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html) -- Audio description is provided for all prerecorded video content in synchronized media.
 
## Limitations, Assumptions, or Exceptions
* Synchronized media is a presentation consisting of time-synchronized video and audio. Synchronized media includes public information films, Web casts, press conferences, and online training presentations.
* Captions and audio descriptions need to be available, but do not need to be turned on by default.
* Multimedia player must support captions and audio description for this test.
* Exception: Two-way multimedia calls between two or more individuals through web apps are not included in this test.

### Selector (Identify Content)
Pre-recorded synchronized multimedia (typically visual and audible content)

### Test Instructions
#### Tests for SC 1.2.2 and 1.2.4
1.	Check that captions are provided either through the closed or open technique.
    1. Play the synchronized media.
    2. (G93) Open captions are always visible.
    3. (G87) Closed captions are typically not visible by default. Enable the media player’s closed captions function if captions aren’t immediately visible when audible content is begins.
2.	Check that captions include all dialogue and important sounds.
    1. Listen to the audio of the entire synchronized media.
    2. Compare the audio to the captions for accuracy and equivalence.
    3. Lower accuracy of captions for live broadcasts is acceptable due limitations of real-time captioning techniques.

##### Test Results for 1.2.2 and 1.2.4
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* Testing synchronized media is different to testing audio-only content (test #18).
* Testing synchronized captions AND synchronized descriptions at the same time may be more time effective, so long as both are given equal weight.
* It is preferable to have the media on the main page for all users captioned and audio described, as current technology permits this. It is acceptable to have separate files for captioned and/or audio described versions.
* Testing of synchronized media players is usually a software test of the plug-in.

### Sufficient Techniques
* Technique G93: Providing open (always visible) captions
* Technique G87: Providing closed captions
* Technique G9: Creating captions for live synchronized media
* G78: providing a second, user-selectable, audio track that includes audio descriptions
* G8: Providing a movie with extended audio descriptions
