# 20. Synchronized media (captions)
## Rationale
Synchronized media is a presentation consisting of time-synchronized video and audio. Synchronized media includes public information films, Web casts, press conferences, and online training presentations.

Some users will not be able to sufficiently hear synchronized media content. Therefore there needs to be another mode to provide the audio information. This usually means captions (text showing what is being said and describing other relevant sounds). 
*  Closed captioning may be used if there is a method for users to switch captioning on or off. Closed captions do not necessarily need to be active by default; users may need to use the control to activate captions (usually a 'CC' button for Closed Captions). 
*  Open captions, which are always visible, may be used. If there is no means of activating captions with the player, then open captions must be the default mode.

Because captions must be time-synchronized, separate transcripts alone will not meet this requirement.
Captions are provided for all audio content (dialogue and important sounds) in synchronized media.

## Accessibility Requirements
* WCAG SC 1.2.2 Captions (Prerecorded) -- Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
* WCAG SC 1.2.4 Captions (Live) -- Captions are provided for all live audio content in synchronized media.

## Limitations, Assumptions, or Exceptions
*  The player must have keyboard accessible controls to activate the controls: play, stop, volume control, and CC feature (if it is available). 

*  **Exceptions**: This is not intended to require that two-way multimedia calls between two or more individuals through web apps must be captioned regardless of the needs of users.

## Test Procedure
### Selector (Identify Content)
*  Identify synchronized multimedia (typically visual and audible content), both live and pre-recorded.
*  Play/listen to the synchornized multimedia. 

### Test Instructions
#### Tests for SC 1.2.2 and 1.2.4
1.	Check that captions are provided either through the closed or open technique.
    1. Open captions are always visible.
    2. Enable the media player’s closed captions function if captions are not immediately visible when audible content begins.
2.	Check that captions include all dialogue and important sounds throughout the entire mutimedia presentation.
    1. Compare the audio to the captions for accuracy and equivalence.
    2. Lower accuracy of captions for live broadcasts is acceptable due limitations of real-time captioning techniques.

##### Test Results for 1.2.2 and 1.2.4
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
If no SC fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* Testing synchronized media is different than testing audio-only content (Baseline 18).
* Testing synchronized captions (Baseline 20) AND synchronized descriptions (Baseline 21) at the same time may be more efficient.
* It is preferable to have all media on the main page captioned and audio described for all users. However, it is acceptable to provide a link to separate files for captioned and/or audio described versions.
* Testing of synchronized media players is usually a software test of the plug-in.
