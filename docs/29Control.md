# 29. Pause, Stop, Hide, Control
## Rationale
Users in general should be able to control whether certain content is presented and the rate at which content is presented. Audio content that plays automatically (whether audio-only or as part of other multi-media content) can make it difficult for screen reader users to understand the screen reader's speach output when other audio is playing at the same time.  Moving, blinking, scrolling, and auto updating information can create barriers to individuals who have trouble tracking moving objects or reading text quickly. The content can also create distractions for some people, including those with attention-deficit disorders, making it difficult to concentrate on, consume, and interpret other content on a page.  

## Accessibility Requirements
* **1.4.2 Audio Control.** If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
* **2.2.2 Pause, Stop, Hide.** For moving, blinking, scrolling, or auto-updating information, all of the following are true:
    * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and
    * Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

## Limitations, Assumptions, Exceptions
* Since any content that does not meet these success criteria can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet these success criteria. See Conformance Requirement 5: Non-Interference (from WCAG SC 1.4.2. and 2.2.2 Notes).
* Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so (from WCAG SC 2.2.2 Notes).
* An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken (from WCAG SC 2.2.2 Notes).

## Test Procedures for SC 1.4.2 Audio Control
### Selector (Identify Content)
Select any audio content that plays automatically for more than three (3) seconds (including audio-only content and any audio included within other video or multi-media content).

### Test Instructions for 1.4.2 Audio Control
For all audio content that plays automatically and plays for more than three seconds:
1. Check that the web page provides a mechanism to pause or stop the audio, **OR**
2. Check that the web page provides a mechanism to control the audio volume independently from the overall system volume level, including the ability to reduce the audio content volume to zero (0)

#### Test Results
* If any of the above tests fail, this SC fails

## Test Procedures for SC 2.2.2 Pause, Stop, Hide
### Selector (Identify Content)
* Select any moving, blinking, or scrolling information that is:
    * starts automatically,
    * lasts more than five (5) seconds,
    * is presented in parallel with other content, and
    * is not essential (if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform)
* Select any auto-updating infromation that:
    * starts automatically, 
    * is presented in parallel with other content, and 
    * is not essential (if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform)

### Test Intructions for 2.2.2 Pause, Stop, Hide
For moving, blinking, or scrolling information:
1. Check that the web page provides a mechanism to pause, stop, or hide the content

For auto-updating information:
1. Check that the web page provides a mechanism to pause, stop, or hide the content **OR**
2. Check that the web page provides a mechanism to control the frequency of the updates

#### Test Results
* If any of the above tests fail, this SC fails

## Baseline Requirement Outcome
* If any SC fails, this baseline fails.
