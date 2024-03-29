---
title: "Appendix B - Change Log"
order-number: 101
---
## Appendix B - Change Log

Note: Minor punctuation, formatting and spelling changes not included.

### Next Version, Date

| Location of Change | Description of Change |
|--------------------|-----------------------|
| All Baseline Test Procedure IDs | Changed from a number to a letter to improve distinction from WCAG SCs. Ex: 1.A was 1.1, 1.B was 1.2, and so on. |
| All Baseline Tests | Changed links for W3C WCAG 2.0 (Understanding, Techniques, definitions, etc.) to WCAG 2.2 version; updated links to HTML Accessibility API Mapping Accesible Name and Description Computation sections. | 
| Multiple Baseline Tests | Test Instructions: corrected outline numbering, added missing requirement mappings. |
| 2. Focus | Accessibility Requirements: SC 3.2.1 replaced "component" with "user interface component" per [WCAG 2.0 Errata](https://www.w3.org/WAI/WCAG20/errata/) Editorial Errata 9. |
| 3.A Non-Interference | Identify Content: added links to Baseline Tests. |
| 5. User Controls | Was Changing Content. New test to cover SC 4.1.2 more accurately. |
| 5.B Control Role | New test |
| 5.C Control State | Identify Content: excluded state of visited/unvisited links. |
| 6. Images | Limitations, Assumptions, Exceptions: removed "Equivalent descriptions for an image within page text could allow an image to be considered decorative. However, this does not necessitate removal of any accessible text attributes from the image." |
| 6. Images | Test Method Rationale: added "The image tests evaluate the images as they were coded to indicate whether they are meaningful or decorative, leaving that determination to the author of the content. However, there are certain scenarios as described in the tests where the author's determination would be incorrect." |
| 6.A, 6.B | Test Procedures defer to author to determine meaningful or decorative images, W3C Image Tutorials added under WCAG Techniques section. |
| 7. Sensory Characteristics | Accessibility Requirements: SC 1.3.3 added "color" to the list of sensory characterstics per [WCAG 2.0 Errata](https://www.w3.org/WAI/WCAG20/errata/) Editorial Errata 12; clarifications added to Assumptions for both SCs; Updated Advisory to remove suggestion to combine tests  |
| 7.A Use of Color | Added test for use of color that have a contrast ratio of 3.A or greater; Identify Content: color of visited/unvisited links excluded. |
| 7.C Audible Cues | Added new test which maps to SC 1.1.1. |
| 8. Contrast | Accessibiilty Requirements: SC 1.4.3 removed "minimum" from Logotypes requirement per [WCAG 2.0 Errata](https://www.w3.org/WAI/WCAG20/errata/) Editorial Errata 3. | 
| 10.A Form Names | Instruction 2: separated to 2 test instructions, added SC 1.1.1. New instruction 2 maps to SC 1.1.1 and new instruction 3 maps to SC 4.1.2. |
| 10.A, 10.B, 10.E | Identify Content: Added "that do not have <code>visibility:hidden</code> or <code>display:none</code>" after "Find all form components". | 
| 10.E Form has a Label | Changed Test Procedure name to "Form has a Visible Label" and edited instruction 1 to include "has visible label(s) or instructions while the form component has focus."; Identify Content: narrowed to data entry form controls. |
| 10. Forms | Removed Test Procedure for Form Changes. |
| 12. Tables | Added Accessibility Requirement WCAG SC 4.1.2 |
| 12.A Data Tables Roles | Updated to test for SC 4.1.2 data table element roles |
| 12.B Data Table Header Association | New, separate test for SC 1.3.1 |
| 12.C Layout Tables | Was 12.B |
| 13. Content Structure | Limitations, Assumptions, Exceptions: added "A test for Visually Apparent Lists should not include navigation menus. While programmatic lists are often used to create navigation menus, menus may also be created using other techniques." |
| 13.D Visually Apparent Lists | Moved HTML code from Identify Content to Test Instructions, added description of visual list, added more detail to test instructions. |
| 14.A Link Purpose (in context) | Test instructions: specified context as in the same sentence, paragraph, list item, or table cell as the link, or in the table header cell for a link in a data table, because these are directly associated with the link itself. |
| 16.A Audio Only | Instruction 2: replaced image of text with an image-only PDF as a more real-world example. |
| 16.A and 16.B | Added "Do not include media that is clearly labeled as a media alternative for text." |
| 16.C and 16.D | Added new tests for media alternatives for text. |
| 17. Synchronized Media | Added definitions; changed Advisory tip for SC 1.2.3 result from "Not Tested" to "Not Applicable". |
| 17.D Captions (Prerecorded) and 17.E Audio Descriptions (Prerecorded) | Identify Content of both: added "Do not include media that is clearly labeled as a media alternative for text." |
| 17.G Media Alternative (Prerecorded) | Added new test for Sync media alternative (prerecorded). |
| 18. CSS Content and Positioning | Renamed to CSS Positioning; Accessibility Requirements: removed SC 1.1.1 and 1.3.1. |
| 18.A Meaningful Background Image | Removed; CSS background images are covered under 6.B Images with empty text alternative. |
| 19.A Frames | Instruction 1: separated to 2 test instructions. |
| 19.B iFrames | Instructions added for <code>role="presentation"</code>, <code>role="none"</code>, and <code>aria-hidden="true"</code>. |
| 20.A Conforming Alternate Version | Test instructions: added check that content indicates that a conforming alternate version is available. |
| 22. Resize Text | Test instructions: included methods from F94; Techniques: added F94. |
| 24. Parsing | Removed test instructions; per [WCAG 2.0 Errata](https://www.w3.org/WAI/WCAG20/errata/) Editorial Errata 13, the parsing test always passes. |
| Appendix A – Cross Reference Tables | Added Test Instructions with "check" and linked test instructions, sort function, links to Baselines and Test IDs. |
| Appendix C - References | Updated links for WCAG to 2.2 |
| Site home | Added single file of all Baseline Tests. | 

### Version 3.0.1, March 2021
All of the changes made in this version were made to the structure of the Baseline test pages to enable anchor references to a specific part of the tests.
  * Added IDs to Identify Content, Test Instructions, Test Results of all Tests
  * Improved consistency of outline numbers in the Tests
  * Added an Identify Content section to Baseline Test 17.E. No other content changes were made.

### Version 3.0, September 2020
Version 3.0 is a major change to the Section 508 ICT Testing Baseline and supporting content. This version contains significant changes to the ICT Testing Baseline to address the Section 508 Refresh and incorporation of the WCAG 2.0 Level A and Level AA Success Criteria. However, the document also includes a number of other changes to improve the organization and flow of the document, Baseline test logic, and readability of test steps. These changes include:
  * General alignment of Test Condition construction with the draft W3C Accessibility Conformance Testing (ACT) Task Force Test Rules Format.
  * Removed references to Failure Conditions and reconstructed as "Checks" in test instructions, with positive pass/fail construction to eliminate double negatives.
  * The revised Baseline test instructions include conditions to "identify content" to test. If those conditions are not met, the test does not apply.
  * Addition of unique Baseline Test IDs for easier reference and traceability.
Finally, the test instructions have entirely removed any reference to any testing tools. The revised ICT Testing Baseline is a tool-agnostic set of test instructions that describe what to test and what conditions web content must meet to be considered conformant, without prescribing specific procedures or tools. Federal agencies and other organizations may define their own test procedures, using their preferred test tools while still maintaining alignment with the ICT Testing Baseline. 
