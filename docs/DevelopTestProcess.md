# Developing a streamlined test process from this baseline—a primer
The baseline test tables in this document are not intended to be followed in a linear fashion, and should be enhanced to form streamlined test processes for given audiences (see also Figure 1, page 5). The following notes give a primer on issues to consider while developing a streamlined testing process.

## Examine example test processes first
Other federal groups have developed streamlined test processes. The work you are planning may already have been done. Agencies publishing their test processes usually allow other agencies to adopt and use them. 

## Examine the advisory notes on each baseline test
Each baseline test table in this document has a row entitled "Advisory: Tips for streamlined test processes". These are tips on how tests may be combined, how tests might easily be enhanced, and so forth. These notes should always be consulted when creating a test process, although they are advisory in nature.

## Target audiences, requirement and test instruction wording
The baseline tests have been produced with the assumption that testers have training / skills in accessibility, and have a basic understanding of HTML and the construction of Web pages. Testers must also have knowledge of the content or application that they are testing, or they must be able to follow an informed test plan.

It is also assumed that testers have necessary skills to evaluate subjective information in context (e.g., the suitability of alternate text for images). Any agency adopting the baseline tests and producing their own streamlined process (or adopting a published process) must ensure that testers are given proper documentation, test plans, demonstrations, and access to developers for clarifications and explanations, as appropriate. Any test process incorporating these baseline tests must therefore be tailored to the specific needs of its developers and/or testers.

The baseline tests could be written for an audience of developers, an audience of testers, or an audience of both. The requirements in each of the baseline tables have been presented in a neutral tone that is component-specific (e.g., "Links and/or user controls must have meaningful names"). It may be desirable to reword the requirements and instructions targeting developers (e.g., "Provide meaningful names for all links and/or user controls"). Alternatively, it may be that the process will be used only by testers, and so the language might be changed to reflect that (e.g., "Check that links and/or user controls have meaningful names").

## Test Process requirements
The test process contains all instructions that a tester needs to follow the process completely to test a product and report on the product’s test results. Test processes derived from the baseline tests should include a mapping to each baseline test and each Section 508 requirement. Test processes should include the following:
1. Testing Tools
    1. Where to obtain testing tools
    2. How to set up of tools to ensure consistent test results between testers
    3. How to use the tools
    4. Non-baseline tools must be identified and results from these tools are not to be used to determine baseline test results.
2.	Testing instructions
    1. All baseline tests must be included (including an agency method for Test #10 Flashing)
    2. Advisory tips for streamlined test processes may be incorporated.
    3. Agency-specific, non-baseline tests must be identified and not affect baseline test results
    4. Test instructions (methods and use of tools for testing)
    5. Define failure conditions
    6. Define the 508 standard(s) and Baseline Tests that are being tested

## Modifications to the baseline tests
Given the nature of the baseline tests, they are not intended to be used for testing 'as-is'. Creation of a streamlined test requires some amount of modification to the baseline. The following provides guidance on what to do, and what not to do when modifying the baseline content.

### Test order
Baseline tests included in this document are not intended to be used in a linear fashion. The order with which tests are conducted may be changed from the order herein (the numbers of each baseline test are for reference only). Tests may be combined for efficiency. For example, keyboard and focus tests can usually be done at the same time.

### Always include the baseline, enhance as needed
Agencies that adopt the baseline tests agree to always incorporate each baseline test listed herein in their streamlined test processes. "Modification" in this sense does not allow for dropping any of the baseline tests.

To adopt the baseline, the content in each of the following table cells of the baseline must be represented somewhere in the streamlined test process (as a minimum):
* Numbered Requirement
* Rationale
* Test Instruction 1 - Finding Applicable Components
* Test Instruction 2 - Inspecting/Using Components
* Test Instruction 3a - Section 508 Failure Conditions
* Test instruction 3c - Baseline Requirement Test Results

Additional agency-specific tests (see below) must be identified as agency-specific testing (for example, by means of a cross-reference table appended to the test process document).

### Wording changes, yes; Meaning changes, no
It may be desirable to change wording from the baseline. For example, it may be desirable to change passive voice to active voice. Wording changes to create a smooth-flowing, easy to read document are acceptable. However, care should be taken to ensure that the meaning remains the same even though the words used are different. A reviewer of any streamlined test should be able to compare the content to the baseline and conclude that the meaning and results that would come from a test remain the same. Any errors or suggested improvements to the baseline should be submitted to the address on page 1 of this document.

### Separating out seldom used information
Each baseline test contains a rationale and a list of the necessary tools. Testers need to learn this sort of information once, and then have it available for quick reference. It is perfectly acceptable to separate such seldom-used information into a separate section, but this information must stay with any published test process (or be available to access from any online streamlined test tool incorporating these baseline tests).

### Additional agency tests beyond the baseline
Agencies have the option to enhance their test processes to include more than the baseline if needed (see also Figure 1 on page 5). For example, there is a test in the baseline that headings, where used, are programmatically marked up so that they are accessible to screen reader users. Any agency may decide to create a policy that "reports and memos over 1500 words long must include headings, to enhance readability and enhance accessibility". In this case, the test becomes (a) whether headings exist to break up text over 1500 words long, and (b) whether existing headings programmatically marked. When it comes to creating such a streamlined test, and when it comes to sharing the results of such a test between agencies, the agency-specific test (a) should be omitted (or at least clearly marked as a non-baseline test); and the baseline test (b) should always be included in the same manner as for the other baseline results.

An agency may also create a streamlined process that includes guidance to their accessibility test teams and other personnel on when a given baseline test failure does not result in an agency compliance determination failure. As stated earlier (see Agency issues beyond the test process), test results are only one factor in making internal compliance determinations. An agency policy that accepts a certain baseline failure is the decision of that agency only. While the streamlined process may include such information and guidance for an agency's own internal use, results from it should similarly be separated out from reports when sharing baseline test results between agencies (in other words, report against the baseline; not against the compliance determination).

### Test tool instructions
Each baseline test lists the tool(s) used in that test. The test instructions provide the high-level instruction on which part of the tool to use (normally a menu choice). Instructions on how to use each testing tool are not included in this document, but should be provided to testers, either as part of a streamlined test process, or its accompanying documentation.

It may be useful to visually differentiate test results, HTML and other code in the streamlined process. For example:

In the Baseline:
> Use WAT (Tables – Show Data Tables). Each row and column header must have either a SCOPE="col/row"; or an ID="x". If ID is used, data cells must refer to the associated header cell's ID in order for the header to pass this test.

In a streamlined process:
>  WAT > Tables > Show Data Tables.
> * Each row and column header must have either
>     * SCOPE="col/row"; or
>     * ID="x".
> * If ID is used, data cells must refer to the associated header cell's ID in order for the header to pass this test.

## Reporting results
Each baseline test includes an instruction (#3) for test results. Results are presented in terms of a clause, followed by, (3a) failures of Section 508, (3b) Failures of WCAG 2.0, and (3c) failures or passes of the Baseline Requirements. The results of 3a and 3c must be reported, and 3b may optionally be reported.

The method used in the baseline is to give certain clauses and then the standard, guideline or requirement that is impacted by that clause. An agency developing a streamlined test process can present failures in a way that meets their testing needs. For example, a clause and failure is given in the baseline as:
> [Web only] The purpose and/or function of a non-decorative image is not properly conveyed in descriptive text (1194.22(a): Equivalent text descriptions)

This could be written in a streamlined process as:
> [W]	Purpose and/or function of non-decorative image not properly conveyed in descriptive text. Fail 22a

Failures must be explained in the report. Reports will generally include things like the type of failure, the location of the failure, and supporting screen captures with test tool results. Reports may also describe any peer review process used.

When sharing reports between agencies, a checklist should be included. Checklists for software-only, web-only, and software plus web combined, are included at the back of this document (Attachment C).

It is not required that the compliance determinations  that follow on from test results be included in any test reports that are shared between agencies. Including such information is not discouraged, however.
