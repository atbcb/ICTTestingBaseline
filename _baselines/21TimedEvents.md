---
title: "21. Timed Events"
order-number: 22
---
## 21. Timed Events

### Accessibility Requirements

-   [WCAG SC 2.2.1 Timing Adjustable](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html) -- For each time limit that is set by the content, at least one of the following is true:
    -   **Turn off:** The user is allowed to turn off the time limit before encountering it.
    -   **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.
    -   **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times.
-   [WCAG SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html) -- For moving, blinking, scrolling, or auto-updating information, all of the following are true:
    -   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential.
    -   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.
-   [WCAG SC 1.4.2 Audio Control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html) -- If any audio on a page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
-   [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5) - The following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page: 1.4.2 - Audio Control, 2.1.2 - No Keyboard Trap, 2.3.1 - Three Flashes or Below Threshold, and 2.2.2 - Pause, Stop, Hide.

### Test Method Rationale

Determine how time limits, auto-play, and auto-update can be modified by a user and execute the modifications.

### Limitations, Assumptions, or Exceptions

-   Time limits set by the content that meet any of the following are not included in this test:
    -   **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
    -   **Essential Exception:** The time limit is essential and extending it would invalidate the activity; or
    -   **20 Hour Exception:** The time limit is longer than 20 hours.
-   Changing content is considered to be "in parallel" when it appears alongside other content. For example, a news flash updating across the bottom of a page would be considered changing content in parallel with other content when the page also presents a news video and text news articles (both examples of static content). A button allowing users to pause the changing content would not be considered other static content.
-   Moving, blinking, scrolling, and/or auto-updating is considered "essential" to an activity when, if removed, it would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform.
-   Notes from SC 2.2.2 Pause, Stop, Hide:
    -   Note 1: For requirements related to flickering or flashing content, refer to Guideline 2.3.
    -   Note 2: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.
    -   Note 3: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.
    -   Note 4: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.
-   Note from SC 1.4.2 Audio Control:
    -   Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

### 21.1 Test Procedure for Timing Adjustable

**Baseline Test ID:** 21.1-TimingAdjustable
#### Identify Content
<p id="1IC">Identify any instances of content time limits (excluding exceptions described above).</p>

#### Test Instructions
<p id="1TI">For each instance of an identified time limit for content:
    <ol>
		<li id="1TI-1">Check that at least one of the following is true before time expires [SC 2.2.1]:
			<ol>
			<li id="1TI-1i">The user has the ability to turn off the time limit.</li>
			<li id="1TI-1ii">The user has the ability to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.</li>
			<li id="1TI-1iii">The user is warned before time expires AND:
				<ol>
				<li id="1TI-1iiia">Given at least 20 seconds to extend the time limit with a simple action (e.g., “press the space bar”), AND</li>
				<li id="1TI-1iiib">Allowed to extend the time limit at least ten times.</li>
				</ol></li>
			</ol></li>
    </ol>
</p>

#### Test Results
<p id="1TR">If the above check fails, then Baseline Test 21.1-TimingAdjustable fails.</p>

### 21.2 Test Procedure for Moving Information

**Baseline Test ID:** 21.2-MovingInfo

#### Identify Content
<p id="2IC">Any moving, blinking, or scrolling information that meets ALL of the following:
    <ul>
    <li>Starts automatically, AND</li>
    <li>Lasts more than 5 seconds, AND</li>
    <li>Is presented in parallel with other content, AND</li>
    <li>Moving, blinking, scrolling is not essential</li>
    </ul>
</p>

#### Test Instructions
<ol id="2TI">
    <li id="2TI-1">Check that there is a mechanism for the user to pause, stop, or hide it [SC 2.2.2]</li>
</ol>

#### Test Results
<p id="2TR">If the above check fails, then Baseline Test 21.2-MovingInfo fails.</p>

### 21.3 Test Procedure for Auto-updating information
**Baseline Test ID:** 21.3-AutoUpdate
#### Identify Content
<p id="3IC">Any auto-updating information that meets ALL of the following:
    <ul>
		<li>Starts automatically, AND</li>
		<li>Is presented in parallel with other content, AND</li>
		<li>Is not part of an activity where it is essential</li>
    </ul>
</p>

#### Test Instructions
<ol id="3TI">
    <li id="3TI-1">Check that there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update [SC 2.2.2]</li>
</ol>

#### Test Results
<p id="3TR">If the above check fails, then Baseline Test 21.2-AutoUpdate fails.</p>

### 21.4 Test Procedure for Audio Control

**Baseline Test ID:** 21.4-AudioControl
#### Identify Content
<p id="4IC">Audio that automatically plays for more than 3 seconds.</p>

#### Test Instructions
<ol id="4TI">
    <li id="4TI-1">Check that either [SC 1.4.2]
        <ol>
        <li id="4TI-1i">a mechanism is available at the beginning of the page content or in platform accessibility features to pause or stop the audio, **OR**</li>
        <li id="4TI-1ii">a mechanism is available at the beginning of the page content or in platform accessibility features to control audio volume independently from the overall system volume level.</li>
        </ol></li>
</ol>

#### Test Results
<p id="4TR">If the above check fails, then Baseline Test 21.4-AudioControl fails.</p>

### Advisory: Tips for streamlined test processes

-   Remind testers that when the time-out occurs, visible focus should shift to the time-out alert to comply with success criteria for keyboard accessibility and focus order.
-   In some cases, it may be necessary to contact the application authors to clarify the conditions under which time-outs occur.
-   A failure of SC 1.4.2 or 2.2.2 would also fail Conformance Requirement 5: Non-Interference and should be highlighted in test reports to indicate the severe impact on accessibility.
-   Browsers must be configured to disable autoplay of audio prior to testing of content. Provide instructions for conformant browser mechanisms only. Test results may vary depending on browser.
-   Content that is found non-conformant with SC 2.2.2 may be marked for further review for a Section 508 exception if the auto-update is essential. However, an exception for SC 2.2.2 should be considered carefully as Conformance Requirement 5: Non Interference requires its conformance.

#### WCAG 2.0 Techniques
The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
-   [G198: Providing a way for the user to turn the time limit off](https://www.w3.org/TR/WCAG20-TECHS/G198.html)
-   [G180: Providing the user with a means to set the time limit to 10 times the default time limit](https://www.w3.org/TR/WCAG20-TECHS/G180.html)
-   [SCR16: Providing a script that warns the user a time limit is about to expire](https://www.w3.org/TR/WCAG20-TECHS/SCR16.html) AND [SCR1: Allowing the user to extend the default time limit](https://www.w3.org/TR/WCAG20-TECHS/SCR1.html)
-   [G4: Allowing the content to be paused and restarted from where it was paused](https://www.w3.org/TR/WCAG20-TECHS/G4.html)
-   [SCR33: Using script to scroll content, and providing a mechanism to pause it](https://www.w3.org/TR/WCAG20-TECHS/SCR33.html)
-   [SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area](https://www.w3.org/TR/WCAG20-TECHS/SCR36.html)
-   [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G170)
-   [G60: Playing a sound that turns off automatically within three seconds](https://www.w3.org/TR/WCAG20-TECHS/G60.html)
-   [G171: Playing sounds only on user request](https://www.w3.org/TR/WCAG20-TECHS/G171.html)
-   [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content](http://www.w3.org/TR/WCAG20-TECHS/G186)

----------------------------------------
[Home/Table of Contents](../) | [Previous Baseline](../20AlternateVersions) | [Next Baseline](../22Resize)
