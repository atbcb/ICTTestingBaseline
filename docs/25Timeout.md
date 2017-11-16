# 25. Time outs
## Rationale
People who use AT such as screen reader software or voice input software may require more time than other users to assimilate information and execute the controls on a Web page or software application. Because AT users may need more time, applications that have time limits for content must provide (a) prior notification/warning that a time out is about to occur, and (b) a means for the user to adjust, extend, or turn off the time limit.
For additional information/guidance, see also [WCAG 2.0, Understanding Guideline 2.2.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)

## Accessibility Requirements
WCAG2: 2.2.1 Timing Adjustable
For each time limit that is set by the content, at least one of the following is true:
* Turn off: The user is allowed to turn off the time limit before encountering it; or
* Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
* Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or
* Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
* Essential Exception: The time limit is essential and extending it would invalidate the activity; or
* 20 Hour Exception: The time limit is longer than 20 hours.

If any of your content is time-controlled, you risk losing users who need more time to read and understand the information on your website.

Time-controlled content is anything on your website that expires or becomes unusable by your users after a certain time. A common example is giving a user ten minutes to fill in and send a form. There are functional reasons to set time limits, but you must consider all of your users.

## Test Procedure
### Selector (Identify Content)
Observe system behavior and identify any instances of content time limits.

### Test Instructions
#### Tests for SC 2.2.1
For each instance of an identified time limit for content:
1.	Check that the user has the ability to turn off the time limit before encountering it.
2.	Check that the user has the ability to adjust the time limit before encountering it, with at least ten times the length of the default setting.
3.	Check that ALL of the following are true:
    * The web page or system provides a warning before time expires.
    * The user has at least 20 seconds to extend the the time limit with a simple action (e.g., “press the space bar”).
    * The user has the ability to extend the time limit at least ten times.
4.	Check that the time limit is part of a real-time event with no alternative to the time limit (e.g., a live auction).
5.	Check that the time limit is essential and extending it would invalidate the activity.
6.	Check that the time limit is longer than 20 hours.

##### Test Results for SC 2.2.1
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* Remind testers that when the time-out occurs, visible focus should shift to the time-out alert to comply with success criteria for keyboard accessibility and focus order.
* In some cases, it may be necessary to contact the application authors to clarify the conditions under which time-outs occur.
* Security policies at a given agency may require certain systems to time-out less than 20 seconds after the alert is first displayed. If security policies do override this requirement (via 'undue burden' tests, for example), the time should still be reasonable enough for the AT user to read through and navigate to their choice (e.g., 'continue' or 'exit'). Additional testing with AT (screen readers, speech recognition etc.) may be needed to determine whether the time is considered reasonable.
