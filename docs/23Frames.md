# 23. Frames
## Rationale
Frames are a means of separating sections of a Web page into navigable regions. Mouse users and sighted keyboard-only users can perceive the way frames separate a Web page into sections and can scroll the information in one frame without affecting another frame. (The F6 key is the browser default for navigating frames).

Non-visual keyboard-only users need a programmatic name for each frame to identify its contents without having to spend time reading through the content of each frame in an attempt to discern the information contained in it. The name should make sense when spoken in isolation as the user navigates between frames.

## Accessibility Requirements
**SC 4.1.2**: Name, Role, Value - **Technique H64**: Using the title attribute of the frame and iframe elements

## Limitations, Assumptions, Exceptions
Testing Tool accuracy limitation, if one is used.
Exception: In HTML5 the frame element is marked as obsolete. The iframe element remains part of the HTML5 specification.

## Test Procedure
### Selector (Identify Content)
Find all Frames and iframes in the page

### Tests for SC 4.1.2
1. Check that each frame or iframe has a title that describes its content
<<AN: An iframe may be assigned an ARIA role of application, document, or img, in which case it is acceptable to also apply aria-label, aria-labelledby, and/or aria-describedby. We will need to allow for these attributes, in addition to a title attribute for computation of [accessible name and description for an iframe element](https://www.w3.org/TR/html-aam-1.0/#iframe-element)

#### Test Results for SC 4.1.2
* If any of the above checks fail, then the content fails this SC and fails this Baseline Requirement

## Advisory Tips for a Streamlined Test Process
The following technical and/or common failures were considered when developing this test procedure for this baseline requirement:
* [H70: Using frame elements to group blocks of repeated material](http://www.w3.org/TR/WCAG20-TECHS/H70.html)
* [H64: Using the title attribute of the frame and iframe elements](http://www.w3.org/TR/WCAG20-TECHS/H64.html)

