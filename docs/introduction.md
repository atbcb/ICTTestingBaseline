Introduction
============

ICT Testing Baseline for Web
---------------

This document contains baseline tests for conformance to Revised 508 Standards for Web, which incorporates by reference the [WCAG 2.0 Level A and AA Success Criteria](https://www.w3.org/TR/WCAG20/). The baseline tests establish the minimum tests and evaluation guidance that determine whether Web content meets Section 508 requirements. The ICT Testing Baseline is not intended to be a test process itself.

Federal agencies (and other groups) are at liberty to develop test processes that incorporate all the baseline tests and any additional test criteria specific to their needs. Agencies have the option to streamline and combine tests if needed. Although agencies may include non-baseline tests in their processes, all test processes that claim to align to this baseline must include all baseline tests and provide baseline test results. Test processes aligned to the baseline will produce the same baseline test results and will provide consistency across government and confidence in test results shared between agencies. Agency-specific non-baseline tests must be identified, and these results must be reported separately from the baseline results.

Use of the ICT Testing Baseline will harmonize testing processes for Section 508 conformance. Test processes that align with this Baseline will produce test results that followed known evaluation procedures.

Background
-----------

The first version of the harmonized baseline was developed in 2009 to establish consistency in Section 508 conformance testing within the US federal government. More details of that effort and outcome are available in the "[Harmonized Testing Process for Section 508 Compliance: Baseline Tests for Software and Web Accessibility](https://www.dhs.gov/sites/default/files/publications/Baseline_Tests_for_Software_and_Web_Accessibility_v2_0_2.pdf)". The Baseline was developed as part of a collaborative project between the accessibility teams at the US Department of Homeland Security (DHS) and the US Social Security Administration (SSA).

The result of this collaboration was an agreed upon, harmonized baseline tests from two agencies that tested for accessibility quite differently. DHS went on to use the Baseline to develop the Trusted Tester test process (version 3). Both the Baseline and DHS Trusted Tester test process were identified as best practices by the Federal Chief Information Officers Council Accessibility Community of Practice.

Updates in this Baseline
------------------------

The baseline tests were first developed to cover the original Section 508 technical requirements for both Web and Software. Version 3.0 is a major change to the Section 508 ICT Testing Baseline and supporting content. This version contains significant changes to address the Section 508 Refresh and incorporation of the WCAG 2.0 Level A and Level AA Success Criteria.

However, the document also includes a number of other changes to improve the organization and flow of the document, Baseline test logic, and readability of test steps. These changes include:
  * General alignment of Test Condition construction with the draft W3C Accessibility Conformance Testing (ACT) Task Force Test Rules Format.
  * Removed references to Failure Conditions and reconstructed as "Checks" in test instructions, with positive pass/fail construction to eliminate double negatives.
  * The revised instructions include conditions for identifying content to test. If those conditions are not met, the test does not apply.
  * Addition of unique Baseline Test IDs for easier reference and traceability.

### Revised 508 Standards

Federal agencies were required to comply with the Revised 508 Standards by January 2018, which incorporate by reference the WCAG 2.0 Level A and AA Success Criteria. The ICT Testing Baseline for Web applies the WCAG 2.0 Level A and AA Success Criteria and Revised Section 508 requirements for media players ([415.1](https://www.federalregister.gov/d/2017-00395/p-592), [415.1.1](https://www.federalregister.gov/d/2017-00395/p-594), [415.1.2](https://www.federalregister.gov/d/2017-00395/p-595)).

The W3C released WCAG 2.1 during the baseline development period and updated online links in some their resources to point to WCAG 2.1 references. Section 508 has not incorporated WCAG 2.1, and the ICT Testing Baseline is for conformance to Section 508. When using online resources, ensure the information pertains to WCAG 2.0. For this baseline, the W3C references are [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/) and [Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/).

### Tools Agnostic

The first version of the baseline included specific testing tools for each baseline test where the tool was used to help determine test outcomes. Each baseline test identified the accessibility requirement it will test, content to be tested, and instructions for determining a test outcome. This baseline includes all of that information, but no tool is identified to help perform the test. This tool-agnostic baseline enables test processes to be developed using the evaluation concepts but is open to use of any testing tools that can help produce consistent testing outcomes that align with the baseline.

### Accessible Name and Description

In testing conformance under the first version of the baseline, code-based evaluation required checking for all possible HTML techniques that could be used to provide accessibility properties of an element. When more than one technique was found, the tester made the determination of which technique(s) to use for evaluation of conformance. With the release of [W3C Accessible Name and Accessible Description computations](https://www.w3.org/TR/accname-1.1/), acceptable techniques and their precedence have been defined. This version of the Testing Baseline utilizes the accessible name and accessible description computation per the [HTML Accessibility API Mapping](https://www.w3.org/TR/html-aam-1.0/).

Developing a streamlined test process from this baseline – a primer
===================================================================

The baseline tests in this document are not intended to be followed in a linear fashion and should be enhanced to form streamlined test processes for given audiences. Test processes should be documented so that testers can produce repeatable, consistent, accurate test results. The following notes give a primer on issues to consider while developing a streamlined testing process.

Examine example test processes first
------------------------------------

Other federal groups have developed streamlined test processes. The work you are planning may already have been done. Agencies publishing their test processes usually allow other agencies to adopt and use them. Trusted Tester version 5 is a test process that is in alignment with this Web Baseline.

Examine the advisory notes on each baseline test
------------------------------------------------

Each baseline test in this document has a section entitled “Advisory: Tips for streamlined test processes”. These are tips on common pitfalls, how tests may be combined, how tests might easily be enhanced, and references to Sufficient Techniques cited in [Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html). These notes should always be consulted when creating a test process, although they are advisory in nature.

Target audiences, requirement and test instruction wording
----------------------------------------------------------

The baseline tests have been produced with the assumption that testers have training/skills in accessibility, and have a basic understanding of HTML and the construction of Web pages. Testers must also have knowledge of the content that they are testing, or they must be able to follow an informed test plan.

It is also assumed that testers have necessary skills to evaluate subjective information in context (e.g., the suitability of alternate text for images). Any agency adopting the ICT Testing Baseline and producing their own streamlined process (or adopting a published process) must ensure that testers are given proper documentation, test plans, demonstrations, and access to developers for clarifications and explanations, as appropriate. Any test process incorporating these baseline tests must therefore be tailored to the specific needs of its developers and/or testers.

The baseline tests could be written for an audience of developers, an audience of testers, or an audience of both. The requirements in each of the baseline tables have been presented in a neutral tone that is component-specific. It may be desirable to reword the requirements and instructions targeting developers or testers specifically.

Test Process requirements
-------------------------

The test process contains instructions that a tester needs to completely test a product and report on the product’s test results. Test processes derived from the ICT Testing Baseline should include a mapping to each baseline test and each Section 508 requirement. Test processes should include the following:

1.  Testing Tools

    a.  How to set up of tools to ensure consistent test results between testers

    b.  How to use the tools in the tests

2.  Testing instructions

    a.  All baseline tests must be included

    b.  Advisory tips for streamlined test processes from this Baseline may be incorporated

    c.  Agency-specific, non-baseline tests must be identified and not affect baseline test results

    d.  Test instructions (methods and use of tools for testing)

    e.  Define test conditions

    f.  Define the 508 standard(s) and baseline tests that are being tested

Modifications to the Baseline Tests
-----------------------------------

The baseline tests are not intended to be used for testing ‘as-is’. Creation of a streamlined test process requires some amount of modification to the baseline tests. The following provides guidance on what to do, and what not to do when developing test processes.

### Test order

Baseline tests included in this document are not intended to be used in a linear fashion. The order with which tests are conducted may be changed from the order herein (the numbers of each baseline test are for reference only). Tests may be combined for efficiency. For example, keyboard and focus tests can usually be performed at the same time.

### Always include the baseline, enhance as needed

Agencies that adopt the ICT Testing Baseline agree to always incorporate each baseline test listed herein in their streamlined test processes. “Modification” in this sense does not allow for dropping any of the baseline tests.

Additional agency-specific tests (see below) must be identified as agency-specific testing (for example, by means of a cross-reference table appended to the test process document).

### Wording changes, yes; Meaning changes, no

It may be desirable to change wording from the baseline tests. For example, it may be desirable to change passive voice to active voice. Wording changes to create a smooth-flowing, easy to read document are acceptable. However, care should be taken to ensure that the meaning remains the same even though the words used are different. A reviewer of any streamlined test should be able to compare the content to the ICT Testing Baseline and conclude that the meaning and results that would come from a test process remain the same. Any errors or suggested improvements to the baseline should be submitted to [the ICT Testing Baseline GitHub repository](https://github.com/Section508Coordinators/ICTTestingBaseline/) or emailed to ictbaseline@gsa.gov.

### Separating out seldom used information

Each baseline test contains a test method rationale and links to applicable accessibility requirements. Testers need to learn this sort of information once, and then have it available for quick reference. It is perfectly acceptable to separate such seldom-used information into a separate section, but this information must stay with any published test process (or be available to access from any online streamlined test tool incorporating these baseline tests).

### Additional agency tests beyond the baseline

Agencies have the option to enhance their test processes to include more than the baseline if needed. For example, there is a test in the baseline that headings, where used, are programmatically identified so that they are accessible to screen reader users. An agency may decide to create a policy that “reports and memos over 1500 words long must include headings, to enhance readability and enhance accessibility”. In this case, the test becomes (a) whether headings exist to break up text over 1500 words long, and (b) whether existing headings programmatically marked. When it comes to creating such a streamlined test, and when it comes to sharing the results of such a test between agencies, the agency-specific test (a) should be omitted (or at least clearly marked as a non-baseline test); and the baseline test (b) should always be included in the same manner as other baseline results.

An agency may also create a streamlined process that includes guidance for their accessibility test teams and other personnel on when a given baseline test failure does not result in an agency conformance determination failure. As stated earlier (see Agency issues beyond the test process), test results are only one factor in making internal conformance determinations. An agency policy that accepts a certain baseline failure is the decision of that agency only. While the streamlined process may include such information and guidance for an agency’s internal use, results from it should similarly be separated out from reports when sharing baseline test results between agencies (in other words, report the ICT Testing Baseline results; not the agency's conformance determination).


-------------------------------------------------
[Home/Table of Contents](index.md)    |    [Baseline Test 1. Keyboard Access](01Keyboard.md)
