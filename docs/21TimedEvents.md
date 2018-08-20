# 21. Timed Events
## Accessibility Requirements
* [WCAG SC 2.2.1 Timing Adjustable](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html) -- For each time limit that is set by the content, at least one of the following is true:
  * **Turn off:** The user is allowed to turn off the time limit before encountering it.
  * **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.
  * **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times.
* [WCAG SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html) -- For moving, blinking, scrolling, or auto-updating information, all of the following are true:
  * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential.
  * Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.
  * Note 2: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.
* [WCAG SC 1.4.2 Audio Control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) -- If any audio on a page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
  * Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

**This Baseline Requirement applies to both software and Web content.**

## Test Method Rationale
Content that may be distracting must include a mechanism to pause, stop, hide, or control the frequency of the update, unless it is part of an activity that is essential.

Determine how time limits can be modified by a user and execute the modifications. 

Evaluation to identify the existence of a mechanism to control audio (pause, stop, or control volume), generally requires a cognitive evaluation, given the variety of techniques or mechanisms that could facilitate audio control.

## Limitations, Assumptions, or Exceptions
* Per Conformance Requirement 5, all content (whether or not it is used to meet other success criteria) must meet SC 1.4.2 and SC 2.2.2
* Time limits set by the content that meet any of the following are not included in this test:
  * **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
  * **Essential Exception:** The time limit is essential and extending it would invalidate the activity; or
  * **20 Hour Exception:** The time limit is longer than 20 hours.
* Changing content is considered to be "in parallel" when it appears alongside other content. For example, a news flash updating across the bottom of a page would be considered changing content in parallel with other content when the page also presents a news video and text news articles (both examples of static content). A button allowing users to pause the changing content would not be considered other static content.
* Moving, blinking, scrolling, and/or auto-updating is considered "essential" to an activity when, if removed, it would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform.

## Test Procedure for SC 2.2.1 Timing Adjustable
### Identify Content
Identify any instances of content time limits (excluding exceptions described above).

### Test Instructions
For each instance of an identified time limit for content: 
1. Check that one of the following is true before time expires:
    1. The user has the ability to turn off the time limit.
    2. The user has the ability to adjust the time limit, with at least ten times the length of the default setting.
    3. The user is warned about the time limit AND:
        * Given at least 20 seconds to extend the time limit with a simple action (e.g., “press the space bar”), AND
        * Allowed to extend the time limit at least ten times.

### Test Results
If any of the above checks fail, then SC 2.2.1 and Baseline Requirement 21 fail.

## Test Procedure for SC 2.2.2 Pause, Stop, Hide
### Moving, blinking, or scrolling information
#### Identify Content
Any moving, blinking, or scrolling information that meets ALL of the following:
* Starts automatically, AND
* Lasts more than 5 seconds, AND
* Is presented in parallel with other content, AND
* Is not part of an activity where it is essential

#### Test Instructions
1. Check that there is a mechanism for the user to pause, stop, or hide it

#### Test Results
If any of the above checks fails, then SC 2.2.2, Conformance Requirement 5, and Baseline Requirement 21 fail.

### Auto-updating information
#### Identify Content
Any auto-updating information that meets ALL of the following:
* Starts automatically, AND
* Is presented in parallel with other content, AND
* Is not part of an activity where it is essential

#### Test Instructions
1. Check that there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update

#### Test Results
If any of the above checks fails, then SC 2.2.2, Conformance Requirement 5, and Baseline Requirement 21 fail.

## Test Procedure for SC 1.4.2 Audio Control
### Identify Content
Audio that automatically plays for more than 3 seconds.
### Test Instructions
1. Check that either
    1. a mechanism is available at the beginning of the page content or in platform accessibility features to pause or stop the audio, **OR**
    1. a mechanism is available at the beginning of the page content or in platform accessibility features to control audio volume independently from the overall system volume level.

### Test Results
If the above check fails, then SC 1.4.2, WCAG Conformance Requirement 5: Non-interference, and Baseline Requirement 21 fail.

## Advisory: Tips for streamlined test processes
* Remind testers that when the time-out occurs, visible focus should shift to the time-out alert to comply with success criteria for keyboard accessibility and focus order.
* In some cases, it may be necessary to contact the application authors to clarify the conditions under which time-outs occur.
* A failure of SC 1.4.2 or 2.2.2 would also fail Conformance Requirement 5: Non-Interference and should be highlighted in test reports to indicate the severe impact on accessibility.
* Browsers must be configured to disable autoplay of audio prior to testing of content. Provide instructions for conformant browser mechanisms only. Test results may vary depending on browser. 

### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
* [G198: Providing a way for the user to turn the time limit off](https://www.w3.org/TR/WCAG20-TECHS/G198.html)
* [G180: Providing the user with a means to set the time limit to 10 times the default time limit](https://www.w3.org/TR/WCAG20-TECHS/G180.html)
* [SCR16: Providing a script that warns the user a time limit is about to expire](https://www.w3.org/TR/WCAG20-TECHS/SCR16.html) AND [SCR1: Allowing the user to extend the default time limit](https://www.w3.org/TR/WCAG20-TECHS/SCR1.html)
* [G4: Allowing the content to be paused and restarted from where it was paused](https://www.w3.org/TR/WCAG20-TECHS/G4.html)
* [SCR33: Using script to scroll content, and providing a mechanism to pause it](https://www.w3.org/TR/WCAG20-TECHS/SCR33.html)
* [SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area](https://www.w3.org/TR/WCAG20-TECHS/SCR36.html)
* [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G170)
* [G60: Playing a sound that turns off automatically within three seconds](https://www.w3.org/TR/WCAG20-TECHS/G60.html)
* [G171: Playing sounds only on user request](https://www.w3.org/TR/WCAG20-TECHS/G171.html)
* [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content](http://www.w3.org/TR/WCAG20-TECHS/G186)

----------------------------------------
[Home/Table of Contents](index.md) | [Previous Baseline](20AlternateVersions.md) | [Next Baseline](22Resize.md)
