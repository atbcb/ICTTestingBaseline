# ICT Testing Baseline
The ICT Testing Baseline reduces ambiguity, increases consistency of test results, and emphasizes full coverage of the Section 508 ICT Accessibility requirements, given the current state and compatibility of underlying technologies.

The ICT Testing Baseline for Web specifies the Section 508 requirement for Web content and the properties of web content that need to be tested for Section 508 conformance results. The Baseline is not a test process; it is a tool- and method-agnostic foundation for a test process. In other words, the ICT Testing Baseline identifies the Section 508 requirements that are applicable to the specified technology and ***WHAT*** needs to be tested to determine results. A test process, on the other hand, would address the requirements of the Baseline by describing ***HOW*** to test, using specific testing tools, methods, and steps to evaluate the Baseline requirement.

This is the Section 508 ICT Testing Baseline ***for Web***, which determines conformance with the [Revised Section 508 of the Rehabilitation Act of 1973](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines), as amended (29 U.S.C. 794d).

 When a foundational document (Baseline) identifies ***WHAT*** to test, then all test processes that align to the Baseline will produce the same test results for all 508 requirements. Regardless of what tool is used in a Baseline-aligned test process, the results will be the same as another Baseline-aligned test process that uses a different tool. Incorporating automated tools into a test process is entirely possible. However, with automated tools only capable of evaluating a portion of the requirements, manual evaluation techniques must be included in a test process to ensure full coverage of the Baseline and Revised Section 508 requirements.

 The Baseline working group is building test cases and other resources to support test processes that want to demonstrate alignment. We want Baseline-aligned test process owners to document their processes so others can avoid recreating the wheel.


## Introduction
The mission of the ICT Testing Baseline Working Group (ITBWG) is to promote a unified foundation for Section 508 test processes. Federal agencies that already have a Section 508 test process can use the Baseline to determine how well their test process accurately tests for all Section 508 requirements. In January of 2017, the U.S. Access-Board released the final rule to revise the Section 508 standards. The Revised Section 508 Standards reference the World Wide Web Consortium's (W3C) Web Content Accessibility Guidelines (WCAG) 2.0, Level (A) and (AA) Success Criteria and conformance requirements as the “new” Section 508 standards for Web content. As part of the Federal Chief Information Officers Council, Accessibility Community of Practice (ACOP), the ITBWG is led by US federal government representatives from [General Services Administration (GSA) Government-wide IT Accessibility Program](https://www.section508.gov/) and the [US Access Board](https://www.access-board.gov/).

## Objectives
* The ITBWG will maintain the ICT Testing Baseline, which can be used to develop customized test processes for organization-specific use. The working group will incorporate as many procedures as are feasible (e.g., supported accessibility techniques). All Revised Section 508 Standards are included in the Baseline for covered technology.
* The ITBWG will identify testing processes that cover all requirements and can produce test results that align to the expected results for the Baseline test cases.
* The ITBWG will support federal agencies that wish to align their test processes to the Baseline.
* The ITBWG will update the Baseline document by committee. Agency representatives are encouraged to participate, suggest and review updates and modifications to the Baseline, and evaluate the impact of updates to the Baseline.
* The ITBWG will promote the use of the Baseline to encourage agencies to evaluate their test processes and improve Section 508 conformance testing accuracy.

### How you can contribute:
The working group will post proposed test processes to this [repository](https://github.com/Section508Coordinators/ICTTestingBaseline/) in GitHub as work progresses. The working group will post test cases to GitHub as well. The working group will update items as refinements are made and we move to final of test processes.

You are welcome to monitor group progress, create your own forks of the proposed test processes, propose changes (via pull requests) to improve them, and submit test content to help validate test processes and tools.

### What will the working group do with nonmember content?
The working group will do our best to review any suggestions from submitters and share results as progress is made.  

### How will the final evaluation processes be used?
The harmonized Baseline for web and non-web interfaces will be a foundation for creating organization-specific, Baseline-aligned test procedures. The DHS Trusted Tester process update will fully align with the harmonized Baseline update.

### How to contact the working group:
If you wish to contact the working group with suggestions, you can email ictbaseline@gsa.gov and include in the subject "ICT Baseline Update."  

**Note:** the working group makes no commitment to accept or use recommendations, but will do our best to review them and consider them as the update process is completed.

### What the working group is NOT doing at this time:
Currently the working group is **NOT** creating fully automated test procedures. This may be addressed in a subsequent update of the harmonized baseline document to facilitate continuous integration / continuous delivery and dev-ops environments, reduce level of effort to perform evaluations, and broaden the scope of evaluations for larger sets of electronic content.
