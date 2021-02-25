# 20. Synchronized media (captions)
## Rationale
Synchronized media is a presentation consisting of time-synchronized video and audio. Synchronized media includes public information films, Web casts, press conferences, and online training presentations.

A prime consideration for synchronized media is that some users will not be able to hear the content well or hear it at all. Therefore there needs to be another mode to provide the audio information. This usually means captions (text showing what is being said, and other relevant sounds). Captions need to be available, but do not necessarily need to be turned on by default. For example, users who need captions can switch them on with a control (usually a 'CC' button for Closed Captions). If there is no means of switching modes, then the default mode must be accessible (i.e., Open Captions).

Because captions must be time-synchronized, separate transcripts will not meet this requirement on their own.
Captions are provided for all audio content (dialogue and important sounds) in synchronized media.

## Accessibility Requirements
* WCAG SC 1.2.2 Captions (Prerecorded) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
  * Technique G93: Providing open (always visible) captions
  * Technique G87: Providing closed captions
* WCAG SC 1.2.4 Captions (Live) -- Captions are provided for all live audio content in synchronized media.
  * Technique G9: Creating captions for live synchronized media

## Tools Necessary
None -- tests require manual inspection

## Limitations, Assumptions, or Exceptions
**Exceptions**: This is not intended to require that two-way multimedia calls between two or more individuals through web apps must be captioned regardless of the needs of users.

## Test Procedure
### Selector (Identify Content)
Identify synchronized multimedia (typically visual and audible content), both live and pre-recorded.

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
If any of the tests for 1.2.2 and 1.2.4 fail, then the content is not conformant to SC 1.2.1 and 1.2.4

## Baseline Requirement Outcome
If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* Testing synchronized media is different to testing audio-only content (test #18).
* Testing synchronized captions AND synchronized descriptions at the same time may be more time effective, so long as both are given equal weight.
* It is preferable to have the media on the main page for all users captioned and audio described, as current technology permits this. It is acceptable to have separate files for captioned and/or audio described versions.
* Testing of synchronized media players is usually a software test of the plug-in.
