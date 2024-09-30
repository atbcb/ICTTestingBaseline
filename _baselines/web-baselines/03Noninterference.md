---
title: "3. Non-Interference (Web)"
order-number: 4
toc-group: baseline-web
banner-title: "Baseline for Web"
---
## 3. Non-Interference

### Accessibility Requirements

-   [WCAG Conformance Requirement 5: Non-Interference](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conf-req5) -- The following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:
    -   1.4.2 - Audio Control,
    -   2.1.2 - No Keyboard Trap,
    -   2.3.1 - Three Flashes or Below Threshold, and
    -   2.2.2 - Pause, Stop, Hide.

### Test Method Rationale

The test results for SC's 1.4.2 (Baseline Test 21.D-AudioControl), 2.1.2 (1.B-NoKeyboardTrap), 2.3.1 (9.A-Flashes), and 2.2.2 (21.B-MovingInfo and 21.C-AutoUpdate) determine the result of this baseline test.

### Limitations, Assumptions, or Exceptions

None.

### 3.A Test Procedure for Non-Interference

**Baseline Test ID:** 3.A-NonInterference
#### Identify Content
<p id="3aIC">Results for Baseline Tests <a href="{{site.baseurl}}/web-baselines/21TimedEvents/#21d-test-procedure-for-audio-control">21.D-AudioControl</a>, <a href="{{site.baseurl}}/web-baselines/01Keyboard/#1b-test-procedure-for-no-keyboard-trap">1.B-NoKeyboardTrap</a>, <a href="{{site.baseurl}}/web-baselines/09Flashing/#9a-test-procedure-for-three-flashes-or-below-threshold">9.A-Flashes</a>, <a href="{{site.baseurl}}/web-baselines/21TimedEvents/#21b-test-procedure-for-moving-information">21.B-MovingInfo</a> and <a href="{{site.baseurl}}/web-baselines/21TimedEvents/#21c-test-procedure-for-auto-updating-information">21.C-AutoUpdate</a>.</p>

#### Test Instructions
<ol id="3aTI">
    <li id="3aTI-1">Check that all of the test results are pass.[CR5]</li>
</ol>

#### Test Results
<p id="3aTR">If any of the above checks fail, then Baseline Requirement 3.A-NonInterference fails.</p>

### Advisory: Tips for streamlined test processes

-   This test result is a logical AND of the identified SC's. All must pass for this test result to pass.
-   A reporting tool may be utilized to generate the result for Conformance Requirement 5.

### WCAG 2.2 Techniques

Not Applicable.
