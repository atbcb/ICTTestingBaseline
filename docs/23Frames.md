# 23. Frames
## Rationale
Frames are a means of separating out sections of a Web page into different navigable regions. To mouse users, the separation of a Web page into sections means that they can scroll the information in one frame without affecting another frame. Keyboard only users who are able to see can navigate between frames (F6 key is the browser default for this function).

Non-visual users can also use the keyboard to navigate between frames, but if there is no programmatic name for the frames, the user has to read through the content of each frame in an attempt to discern where the information they need might be. This can take a long time, and can lead nonvisual users to make errors. For this reason, it is necessary for each frame to include a descriptive name. The name should make sense when spoken in isolation as the user navigates between frames.

## Accessibility Requirements
**SC 4.1.2**: Name, Role, Value - **Technique H64**: Using the title attribute of the frame and iframe elements

## Tools Necessary
Web Accessibility Favelets (WAF) - Frames

## Limitations, Assumptions, Exceptions
Testing Tool accuracy limitation, if one is used.
Exception: In HTML5 the frame element is marked as obsolete. The iframe element remains part of the HTML5 specification.

## Test Procedure
### Selector (Identify Content)
Find all Frames and iframes in the page

### Tests for SC 4.1.2
1. Run WAF - Frames
1. Check if each frame or iframe has a title that describes its content 

#### Test Results for SC 4.1.2
* If the test for SC 4.1.2 fails, then the content is not conformant to SC 4.1.2

#### Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement
