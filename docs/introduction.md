# Introduction
## Baseline tests
This document contains accessibility design requirements and validation tests for software and Web accessibility. These tests are for measuring compliance with Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. 794d) .

This publication contains baseline tests that have been agreed upon and adopted by representatives of federal agencies as part of an effort to harmonize their testing processes for Section 508.

These baseline tests establish the minimum steps required to determine whether an application passes or fails applicable Section 508 technical and functional performance requirements. Federal agencies are encouraged to adopt the baseline to establish a consistent, shared, government-wide test approach.

Federal agencies and other groups are at liberty to develop their own test processes, incorporating the baseline tests and any additional test criteria specific to their needs. Although agencies may add some unique tests in their processes, all agency test processes will include the baseline test elements. A unified approach for 508 testing will provide consistency across government and confidence in test results shared between agencies.

## Background
When Section 508 came into effect in 2001, it was up to individual federal agencies to develop their own responses to the requirements (interpretations of standards, development of test and governance processes, etc.). Some agencies do not test as part of their compliance efforts, lacking resources and/or expertise. Instead, they may rely on vendor claims of conformance with the Section 508 standards. A number of agencies do test, however, and have developed their own processes for evaluating Commercial-Off-The-Shelf (COTS) products, and internally developed software applications and Web sites. Because each agency developed its own test processes independently, there are inevitable differences in testing approaches and associated compliance determinations. Such differences have resulted in different testing outcomes for the same products: agency "a" would test COTS product "x", finding it 508 compliant, then agency "b" would find product "x" non-compliant. Without consistent testing, vendors receive mixed or conflicting messages from different federal agencies on the compliance of their products and services, and multiple agencies tend to test the same products due to a lack of trust with one another's test results.

In an effort to improve Section 508 testing across government, the "Harmonized Testing Process for Section 508 Compliance: Baseline Tests for Software and Web Accessibility" was developed as part of a collaborative project between accessibility teams at the US Department of Homeland Security (DHS) and the US Social Security Administration (SSA).

Prior to this project, SSA and DHS evaluated software and Web accessibility against Section 508 requirements using very different approaches. DHS evaluated against the requirements using code inspection tools to examine source code without the use of Assistive Technology (AT). SSA, on the other hand, used an AT-intensive approach, testing Web sites with assistive technologies most commonly used by SSA employees with disabilities. While the two approaches were radically different, they both had one thing in common: each strived to accurately evaluate software and Web accessibility for Section 508 compliance. Consolidating and harmonizing the two approaches was not easy, but for many reasons DHS and SSA felt it was necessary.

The result of this project is an agreed upon, harmonized core or 'baseline' set of tests that agencies can use to develop their own test processes. Test processes should incorporate the baseline as the minimum, and agencies have the option to streamline/enhance their testing processes to include more than the baseline if needed (Figure 1).

The baseline tests in this document have been developed to cover Section 508 technical requirements for Software, Web, and Functional Performance Criteria (FPC) that apply to all Electronic and Information Technology (E&IT).  The government's Section 508 standards are, at the time of writing, under a revision process. While not definite, it is likely that the revised Section 508 standards will follow closely the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.0 (WCAG 2.0).  It was therefore decided to develop the 508 baseline tests to include, or at least align with  most of the WCAG 2.0 success criteria, in preparation for the upcoming Section 508 refresh. A cross reference to show how the baseline tests map to Section 508 and to WCAG 2.0 in Attachment A. 

Given the trend for technologies to converge, WCAG 2.0 requirements were developed to accommodate inevitable future technology changes, and the language used in those guidelines is necessarily at a high level. The experiences testers at both SSA and DHS had, following WCAG 2.0 to the letter, were problematic. Some tests led to inconclusive results, and some were considered too subjective in nature. The development of the new baseline tests is the result of an attempt to reduce ambiguity, increase consistency of results, and emphasize the methods and techniques that can reliably meet the Section 508 requirements, given the current state and compatibility of underlying technologies. 

he result of the collaboration between SSA and DHS is reflected in the current document: a set of baseline tests that cover the current Section 508 standards, that align with applicable WCAG 2.0 Level AA success criteria, and that can be incorporated in separate, practical, systematic test processes for software application and Web accessibility.  Additional WCAG harmonization may be explored in the future as the Section 508 refresh process continues and testing tools and techniques mature.

## How the baseline tests are structured
The selection criteria for including requirements and baseline tests against those requirements was:
* **Standards based**: The requirement must be firmly rooted in standards (both current and emerging), or is there to address specific, documented, high-risk accessibility issue (complaints are documented in an area that the standards did not anticipate).
* **Validated**: Tests were validated by SSA and DHS, and are known to produce reliable and repeatable results. In future updates, validation tests must be conducted by more than one agency.
* **Usable**: Validated Baseline tests were adapted into a practical formal test process that was tested to verify usability.

The tests have been developed to contain sufficient information and instruction to make a consistent and unambiguous measurement of the accessibility of interface components, independently of the other tests. However, doing all of these tests in sequence is not recommended. Instead, testers should follow a streamlined, practical test process that incorporates these baseline tests (Figure 1).

### Platform, browser and tools
The baseline tests support the following browsers and operating systems.
* Microsoft Internet Explorer version 11
* Chrome (version 49.0.2623.87). 
* Firefox (version 45.0.2)
* Microsoft Windows versions 7, 8.1, and 10. (In Windows 8.1 and 10, testing is performed in Desktop mode.)

It is recognized that product updates may take place daily, weekly, or monthly, and specific versions noted above may quickly become outdated.  If a version update creates critical issues with usage within the baseline testing procedures, details will be provided and those versions shall be prohibited.

### Configure Chrome for testing:
1.	Chrome accessibility mode: When testing in Chrome, ensure that accessibility mode is enabled by either:
    1. Navigating to chrome://accessibility and setting this globally or per tab, or
    1. Starting Chrome with the --force-renderer-accessibility flag. (See https://www.chromium.org/for-testers/command-line-flags for how to start Chrome with command-line flags.)

The tools used in the baseline tests have been chosen based on several factors including ease of use, ease of teaching, and accuracy of results. They are also free to use. Installation instructions for these tools are available at https://www.dhs.gov/dhs-section-508-compliance-testing-tools.

* “Inspect” from Microsoft Corporation. This tool reveals the accessibility properties (Name, Role, Value and State) of Windows software components. 
    * URL for Windows 7: http://www.microsoft.com/en-us/download/details.aspx?id=8279
    * URL for Windows 8.1: https://msdn.microsoft.com/en-us/windows/desktop/bg162891.aspx
    * URL for Windows 10: https://developer.microsoft.com/en-US/windows/downloads/windows-10-sdk 
* “Java Ferret” from Oracle Corporation. This tool reveals the accessibility properties (Name, Role, Value and State) of Java software components. 
    * URL: http://www.oracle.com/technetwork/java/javase/tech/index-jsp-136191.html
* “Web Accessibility Toolbar (WAT)” versions 2012 or 2015 for IE from the Web Accessibility Tools Consortium. This adds a toolbar to Internet Explorer to aid manual inspection of accessibility properties of components on web pages. Note: This toolbar is only compatible with IE. To test with Firefox or Chrome, install WAF instead (see below).
    * URL: https://www.dhs.gov/dhs-section-508-compliance-testing-tools 
* Bookmarklets/Favelets. These tools are JavaScript testing functions that are activated in the browser, and supplement WAT. (Note: These favelets are not necessary if using WAF.)
    * URL: https://www.dhs.gov/dhs-section-508-compliance-testing-tools
        * “ARIA Markup Favelet” reveals ARIA attributes on web pages.
        * “Named Anchors Bookmarklet” reveals anchor tags on web pages
        * “Frames Favelet” reveals frame and iframe properties on web pages
* “Web Accessibility Favelets (WAF)”. These favelets were developed as an alternative to WAT. They can be installed in IE, Firefox, and Chrome. WAF duplicates the functionality of WAT (except it includes the Bookmarklets/Favelets but not the Colour Contrast Analyzer) as much as possible within the limitations of the favelet security context. (See below for more details on known differences.) The Skip Link favelet from Jim Thatcher’s site is included.
    * URL: https://www.dhs.gov/dhs-section-508-compliance-testing-tools 
* “Colour Contrast Analyzer” from The Paciello Group. This tool is included with WAT. It can also be installed as a standalone executable (to supplement WAF).
    * URL: https://www.dhs.gov/dhs-section-508-compliance-testing-tools

While there are other platforms, browsers and tools available, those used herein have been technically validated for accurate and repeatable test results. Agencies that use other technologies are encouraged to verify that their results align with the results from the tools identified in this baseline. Contact the authors (see contact details at the front of this document) to verify use of other technologies. Once the testing outcomes are verified, agencies may develop an equivalent baseline process for their specific test environments. Agency-specific software installation and use guides should be included in streamlined test processes based on these tests.

### Browser Recommendation: Test in IE11

While this test process supports multiple browsers, it was found that IE11 is the most accessible test environment for Flash and embedded Java. Due to Chrome’s and Firefox’s diminishing levels of support for Flash and Java, these browsers may not fully reveal the coded accessibility properties for these content types. Testing may still be performed in Chrome and Firefox to determine results in that specific browser. However, to determine the compliance of the coded content, applications that contain Flash and Java components should be tested entirely in IE11. These caveats will be repeated in this document where relevant. If it is unknown at the start of testing whether an application contains Flash or Java, the general recommendation is to test in IE. Testing of applications that do not contain Flash or Java components can be performed in any of the approved test environments. 

### Notes on WAF
The baseline tests were originally developed using WAT, a browser plugin which is only compatible with IE. To include other browsers in the approved test environment and minimize changes to test instructions, WAF, a suite of JavaScript favelets, was developed to replicate WAT operation and functionality as closely as possible. Alternative instructions are not provided for WAF unless there is a significant difference from WAT in terms of testing or interpreting results.

WAF is a set of favelets that can be easily installed on various browsers. The functions of the WAF favelets were named according to their corresponding functions in WAT, minus the menu hierarchy, and the instructions for testing can be easily mapped between WAT and WAF. For example, where the WAT instruction is
> Use the **WAT (Doc Info - ShowTitles, Images - Show Images)** to examine …

If using WAF, interpret these instructions as
> Use the **WAF (Show Titles, Show Images)** to examine …

Once installed, the tester can organize the favelets by any preference (e.g. in alphabetical order, in subfolders, in testing order, etc.).

WAF nuances:
* Disabling CSS: Whereas **WAT (IE - Toggle CSS)** disables or enables CSS until this function is re-selected, **WAF (Toggle CSS)** only disables CSS for one page refresh. Additionally, **WAF (Toggle CSS)** may not re-enable CSS completely, in which case you a page refresh will be required.

These caveats will be repeated in this document where relevant.

### Baseline Tests
There are 28 separate requirements with associated tests, covering all relevant components for software applications and Web sites. Each test contains the following information:
* **Numbered Requirement**: In plain English, how the component(s) should function in order to meet the related standards. Note that the numbers are arbitrary, and do not infer a practical test sequence
* **Rationale**: In plain English, an explanation of why this the test is important to ensure access for users with disabilities, and why the test methods are appropriate, with particular regard to the type(s) of disability-related problems being addressed.
* **Related Standards**: Which of the Section 508 standards are addressed by this test. Also, which of the relevant WCAG 2.0 success criteria this test aligns with. A given 508 standard or WCAG criteria may be addressed by multiple baseline tests. 
* **Tools Necessary**: Testing technologies used in this test.
* **Test Instruction 1 - Finding Applicable Components**: How a tester would find the components that need to be tested.
* **Test Instruction 2 - Inspecting/Using Components**: How a tester would determine whether the components found in Instruction 1 meet the requirement. This is achieved using inspection tools, and using human judgment.
* **Test Instruction 3 - Failure conditions**: A list of possible outcomes from Instruction 2, along with what to mark on a test report for this particular test.
    * **3a - Section 508 Failure Conditions**: The technical requirements and/or functional performance criteria that should be marked as failures in test results. Only failure conditions are given for Section 508. 
    * **3b - WCAG2 Failure Conditions**: The A or AA criteria that should be marked as failures in test results.
    * **3c - Baseline Requirement Test Results**: This includes a complete list of conditions that must be fulfilled in order to pass the baseline requirement, and conditions under which the baseline requirement is not applicable. Note that any failure in 3a means that the baseline requirement fails. 

Appended to each test are an advisory notes entitled **"Tips for streamlined test processes."** These tips provide additional information, specific to the current test, that support the generic information provided in the primer section of this document.

## Use of the baseline tests by federal agencies and other groups
Federal agencies and other groups are encouraged to adopt these baseline tests, and either develop their own test processes, or follow a test process developed by another agency. 

When developing test processes, and reporting results from such test processes, agencies must take note of the following:
* Test **results for each baseline requirement must be reported**. As such, each baseline requirement must be incorporated into the test process to be considered an acceptable test process.
* Results of tests that **incorporate the baseline tests** are considered repeatable. A conclusion as the result of such a process can say that it is on the agreed-upon baseline.
* Test processes that **do not include all baseline requirements** are not considered to be following the baseline. Results of these test processes will not be accepted by agencies that have adopted the baseline tests.
* Results of tests that incorporate the baseline but also **go beyond the baseline** with additional test requirements (see also Figure 1), must clearly separate out in the report the results that refer to the baseline, and the results that refer to additional agency-specific tests.

## Agency issues beyond the test process
It should be noted that use of a test process that incorporates the baseline tests is affected by other contextual issues that accompany any Section 508 program in a federal agency. Some examples of related issues to consider are:
* This document does not address the policies or organizational disciplines necessary to develop a Section 508 program or outline the processes needed for acceptance of vendor deliverables.
* Our goal is to clearly document the accessibility of the evaluated content against the Section 508 technical and functional performance requirements that are applicable to software and web. While the baseline provides a more predictable and reliable way of evaluating content, the test results can be regarded as one factor that goes into making a Section 508 compliance determination (the choice of an agency to adopt an application or not). Other factors to consider in making compliance determinations include, but are not limited to legal issues related to acquisition , technical issues of compatibility with existing systems, and business needs. The output of a test process incorporating the baseline test will provide results that can assist in making compliance determinations and acceptance decisions of contract deliverables. The results may also be used to notify vendors and teams of defects, and plan for / prioritize ongoing test and remediation tasks.
* This document does not address how to handle coding mistakes. Problems may be found during testing that impact accessibility, but are simply coding errors. Included here would be things like links that lead to the wrong target website. A tester may be responsible for notifying a developer if that is agency good practice, but these issues are usually not considered Baseline test results.
* The baseline test methodology does not include tests with assistive technology. Agencies must decide the role assistive technology will play in their internal testing program and Section 508 compliance determinations. Compatibility and usability of content with assistive technology plays an important role in assuring people with disabilities have comparable access to technology, information, and systems.  Because AT testing can result in false-positives and false-negatives, defects must always be confirmed with the baseline methods herein. Additional testing with AT may reveal conclusive insights, but caution is urged: experience shows that such additional AT testing is proficient only with experienced, well-trained testers.
* Section 508 puts Federal Agencies and some entities that receive federal funds at both business and legal risk if they do not comply with the law. The developers of the baseline (at DHS and SSA) recognize that a well implemented Section 508 program manages risks and knowingly takes on some risks. For example, an agency may deem it acceptable to use this baseline to document minor deficiencies and allow content to be published and applications to be pushed to production. However, when evaluating COTS products, the severity of the impact of a given defect or set of defects should be up to the implementing agency (and not another agency or vendor). If results are generated outside of the implementing agency (e.g. another trusted agency or vendors), they should ignore any severity levels. In summary, agencies should not accept outside entities evaluating their exposure to risk. 
* The baseline test methodology does not include guidance on managing a testing program. Agencies must determine the rules and procedures that their testers will follow in performing testing to ensure adequate testing of applications. This includes when testing will be performed, at what level of coverage, and in which test environment. As noted in the Browser Differences section, the test environments may affect the test results of some applications. Agencies should consider these factors in determining standard operating procedures for their testing program.
