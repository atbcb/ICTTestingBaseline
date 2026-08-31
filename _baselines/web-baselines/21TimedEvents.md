---
title: "21. Timed Events (Web)"
order-number: 22
toc-group: baseline-web
banner-title: "Baseline for Web"
source: Web
---
## 21. Timed Events

<!-- ### Accessibility Requirements -->
{% include baseline-segments/acc-reqs/21-timedevents-acc-reqs.md %}

<!-- ### Test Method Rationale -->
{% include baseline-segments/test-method-rationales/21-timedevents-tmr.html %}

<!-- ### Limitations, Assumptions, or Exceptions -->
{% include baseline-segments/lim-assmpt-except/21-timedevents-lae.md %}

<!-- ### 21.A Test Procedure for Timing Adjustable -->
{% include baseline-segments/tests/21A-timingadjustable.html %}

<!-- ### 21.B Test Procedure for Moving Information -->
{% include baseline-segments/tests/21B-movinginfo.html %}

<!-- ### 21.C Test Procedure for Auto-updating information -->
{% include baseline-segments/tests/21C-autoupdate.html %}

<!-- ### 21.D Test Procedure for Audio Control -->
{% include baseline-segments/tests/21D-audiocontrol.html %}

<!-- ### Advisory: Tips for streamlined test processes -->
{% include baseline-segments/advisory/21-timedevents-adv.html %}

<!-- ### WCAG 2.2 Techniques -->
{% include baseline-segments/wcag-techs/21-timedevents-wcag.md %}
-   Per [WCAG 2.2 Understanding SC 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control), having control of the volume includes being able to reduce its volume to zero. Muting the system volume is not "pausing or stopping" the autoplay audio. Both the "pause or stop" and control of audio volume need to be independent of the overall system volume.

### 21.A Test Procedure for Timing Adjustable

**Baseline Test ID:** 21.A-TimingAdjustable
#### Identify Content
<p id="21aIC">Identify any instances of content time limits (excluding exceptions described above).</p>

#### Test Instructions
<p id="21aTI">For each instance of an identified time limit for content:
    <ol>
		<li id="21aTI-1">Check that at least one of the following is true before time expires [SC 2.2.1]:
			<ol>
			<li id="21aTI-1i">The user has the ability to turn off the time limit.</li>
			<li id="21aTI-1ii">The user has the ability to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.</li>
			<li id="21aTI-1iii">The user is warned before time expires <strong>AND</strong>:
				<ol>
				<li id="21aTI-1iiia">Given at least 20 seconds to extend the time limit with a simple action (e.g., “press the space bar”), <strong>AND</strong></li>
				<li id="21aTI-1iiib">Allowed to extend the time limit at least ten times.</li>
				</ol></li>
			</ol></li>
    </ol>
</p>

#### Test Results
<p id="21aTR">If the above check fails, then Baseline Test 21.A-TimingAdjustable fails.</p>

### 21.B Test Procedure for Moving Information

**Baseline Test ID:** 21.B-MovingInfo

#### Identify Content
<p id="21bIC">Any moving, blinking, or scrolling information that meets ALL of the following:
    <ul>
    <li>Starts automatically, <strong>AND</strong></li>
    <li>Lasts more than 5 seconds, <strong>AND</strong></li>
    <li>Is presented in parallel with other content, <strong>AND</strong></li>
    <li>Moving, blinking, scrolling is not essential</li>
    </ul>
</p>

#### Test Instructions
<ol id="21bTI">
    <li id="21bTI-1">Check that there is a mechanism for the user to pause, stop, or hide it [SC 2.2.2]</li>
</ol>

#### Test Results
<p id="21bTR">If the above check fails, then Baseline Test 21.B-MovingInfo fails.</p>

### 21.C Test Procedure for Auto-updating information
**Baseline Test ID:** 21.C-AutoUpdate
#### Identify Content
<p id="21cIC">Any auto-updating information that meets ALL of the following:
    <ul>
		<li>Starts automatically, <strong>AND</strong></li>
		<li>Is presented in parallel with other content, <strong>AND</strong></li>
		<li>Is not part of an activity where it is essential</li>
    </ul>
</p>

#### Test Instructions
<ol id="21cTI">
    <li id="21cTI-1">Check that there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update [SC 2.2.2]</li>
</ol>

#### Test Results
<p id="21cTR">If the above check fails, then Baseline Test 21.B-AutoUpdate fails.</p>

### 21.D Test Procedure for Audio Control

**Baseline Test ID:** 21.D-AudioControl
#### Identify Content
<p id="21dIC">Audio that automatically plays for more than 3 seconds.</p>

#### Test Instructions
<ol id="21dTI">
    <li id="21dTI-1">Check that either [SC 1.4.2]
        <ol>
        <li id="21dTI-1i">a mechanism is available at the beginning of the page content or in platform accessibility features to pause or stop the audio that is independent of the overall system volume, <strong>OR</strong></li>
        <li id="21dTI-1ii">a mechanism is available at the beginning of the page content or in platform accessibility features to control audio volume independently from the overall system volume level.</li>
        </ol></li>
</ol>

#### Test Results
<p id="21dTR">If the above check fails, then Baseline Test 21.D-AudioControl fails.</p>

### Advisory: Tips for streamlined test processes

-   Remind testers that when the time-out occurs, visible focus should shift to the time-out alert to comply with success criteria for keyboard accessibility and focus order.
-   In some cases, it may be necessary to contact the application authors to clarify the conditions under which time-outs occur.
-   A failure of SC 1.4.2 or 2.2.2 would also fail Conformance Requirement 5: Non-Interference and should be highlighted in test reports to indicate the severe impact on accessibility.
-   Browsers must be configured to disable autoplay of audio prior to testing of content. Provide instructions for conformant browser mechanisms only. Test results may vary depending on browser.
-   Content that is found non-conformant with SC 2.2.2 may be marked for further review for a Section 508 exception if the auto-update is essential. However, an exception for SC 2.2.2 should be considered carefully as Conformance Requirement 5: Non Interference requires its conformance.

### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

-    [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential](https://www.w3.org/WAI/WCAG21/Techniques/failures/F16.html) to the activity without also including a mechanism to pause and restart the content
-   [G4: Allowing the content to be paused and restarted from where it was paused](https://www.w3.org/WAI/WCAG22/Techniques/general/G4)
-   [G60: Playing a sound that turns off automatically within three seconds](https://www.w3.org/WAI/WCAG22/Techniques/general/G60)
-   [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](https://www.w3.org/WAI/WCAG22/Techniques/general/G170)
-   [G171: Playing sounds only on user request](https://www.w3.org/WAI/WCAG22/Techniques/general/G171)
-   [G180: Providing the user with a means to set the time limit to 10 times the default time limit](https://www.w3.org/WAI/WCAG22/Techniques/general/G180)
-   [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content](https://www.w3.org/WAI/WCAG22/Techniques/general/G186)
-   [G198: Providing a way for the user to turn the time limit off](https://www.w3.org/WAI/WCAG22/Techniques/general/G198)
-   [SCR16: Providing a script that warns the user a time limit is about to expire](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR16) **AND** [SCR1: Allowing the user to extend the default time limit](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR1)
-   [SCR33: Using script to scroll content, and providing a mechanism to pause it](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR33)
-   [SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR36)
