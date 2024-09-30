# Document Content Change Log
Note: Minor punctuation, formatting and spelling changes not included.

## Version 1.0.6, March 2015
First published version.

## Version 1.1, February 2016
| Location | Change |
|:---------|:-------|
| How the baseline tests are structured |	Added “In Windows 8.1, testing is performed in Desktop mode.” Added Inspect URL for Windows 8.1. Added 8.1 SDK information to footnote. |
| Section 11, Forms	| Added information about checking HTML version and ID naming in HTML5. |
| Section 13, Data Tables |	Added information about use of rowgroup and colgroup. Added information about checking HTML version and deprecation of TD SCOPE in HTML5. |
| Section 14, Data Tables	| Added information about use of rowgroup and colgroup. Added information about checking HTML version and deprecation of TD SCOPE in HTML5. Added information about ID naming in HTML 4.01 and HTML5. |
| Section 28, Built-in accessibility features	| Added “system” to “Set the system text size to 200%”. Added Windows 8.1 instructions. Specified using Windows Key + U to open Ease of Access center. Changed instructions accordingly. |

## Version 2.0, October 2016
| Location | Change |
|:---------|:-------|
| Agency issues beyond the test process	| Removed “use of Heading <H> tags for style instead of structure, and using both an ALT and a TITLE attribute on an image where the two clearly contradict each other” as example of coding error; Added last bullet starting with “The baseline test methodology does not include guidance on managing a testing program. …” |
| Platforms, Browsers and Tools	| Removed support for IE8; IE9, Added support for Windows 10; Added WAT 2015 to tools list;  Added information on WAF and Color Contrast Analyser. Added content on the use of WAF, Chrome, and Firefox. Added “Notes on Browsers Differences” and “Notes on WAF”. |
| Various Sections | Added “Note: In Chrome, Inspect does not reveal the correct information for Flash content” and the note “Interactive Flash and embedded Java content should be tested in IE to determine the accessibility of the coded content” |
| Section 5, Skip Links	| Rationale: Changed title to “Repetitive Content;” changed “To enable equitable use by keyboard only users, there must be a method to skip past repetitive content. This can be provided by adding internal links to bypass repetitive content. Similarly, for screen reader users, if they must read content that is repeated on each page and cannot skip past it, their experience on the page can be very frustrating” to “To enable equitable use by keyboard only users, there must be a method to skip past repetitive content. Similarly, for screen reader users, if they must read content that is repeated on each page and cannot skip past it, their experience on the page can be very frustrating. A common method used to bypass repetitive content is internal (same page) links.” Test Instruction 2: Added various instructions: location of skip target, testing if no skip links are marked, testing skip function, testing if no interactive target. |
| Section 7, Images	| Rationale: Added “If font-based graphics are used to provide information, equivalent information must be provided in an accessible format;” Test Instruction 1: Step a, added bullet: “Look for images that are rendered by using font-based graphics (e.g. up-arrows to indicate sort order, etc.).” |
| Section 8, Color (meaning) | Advisory: added bullet “WAF’s Greyscale test works in more cases than WAT’s, although there may be some sites where both work only partially or not at all.” |
| Section 9, Color (Contrast)	| Added “minimum” to “There must be contrasting colors/shades at a minimum ratio of 4.5:1 for discerning between background and foreground content.” |
| Section 11, Forms (associated instructions) | Test Instruction 2: Added “Forms with ARIA labels should be tested in Chrome or Firefox to determine the accessibility of the coded forms.” |
| Section 23, Frames | Advisory: Repeated content from “Notes on Using WAF” as relates to frames| 
| Section 28, Built-in accessibility features | Rationale: Added Windows 10; Test Instruction 1b: Added Windows 10; Test Instruction 2b: Replaced “Open any text editing application (e.g., MS Word). Attempt to close an edited 2.0file without saving it first. The Sound Sentry indicator should flash” with instructions for Notepad, since previous test did not work reliably in different environments. |
| Throughout | Removed some references to page numbers and replaced them with references to section names |

## Version 2.0.1, November 2016
| Location | Change |
|:---------|:-------|
| Various	Updated | URLs from www.section508testing.org to www.dhs.gov/dhs-section-508-compliance-testing-tools |

## Version 2.0.2, April 2017
| Location | Change |
|:---------|:-------|
| How the baseline tests are structured	| Changed “Notes on browser differences” to “Browser recommendation” to state a preference for testing in IE 11 as the most accessibility supported test environment when testing Flash and embedded Java; Moved “Configure Chrome for testing” earlier in the section to improve document flow |
| Section 6. Multi-state components, Advisory | Modified advisory to clarify the need to conduct further assessment when encountering multiple ARIA attributes for a single element rather than for only specific attributes. |
| Section 7. Images, Test Instruction | Clarified the use of the ARIA Markup favelet to identify image attributes |
| Section 11. Forms, Test Instruction | Clarified instructions for inspecting ARIA attributes and name, role, and state attributes for software; Moved content related to testing Flash and embedded Java in IE to the Notes section. |
| Various locations | Minor wording changes to clarify meaning |
| Section 1. Keyboard Navigation, Advisory and Section 11. Forms, Advisory | Added advisory regarding visible display of TITLE attribute information during keyboard navigation. |
| Section 13. Data Tables (headers), Test Instruction	| Added text to clarify appropriate methods for including header information in some software applications and related methods for verifying header information when testing |
| Document status, review comments, and feedback | Added contact information for questions and feedback |
| Section 7. Images	| Removed language related to finding and testing font-based graphics |
