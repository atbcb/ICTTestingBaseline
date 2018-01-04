# 23. Frames
## Rationale
Frames are a means of separating sections of a Web page into different navigable regions. The separation of a Web page into frames means that content within the frame can scroll without affecting another frame. Keyboard only users can navigate between frames. (The F6 key is the browser default).

Non-visual users can also use the keyboard to navigate between frames, but if there is no programmatic name for the frames, the user has to read through the content of each frame in an attempt to discern where the information they need might be. This can take a long time, and can lead nonvisual users to make errors. For this reason, it is necessary for each frame to include a descriptive name. The name should make sense when announced in isolation as the user navigates between frames.

## Accessibility Requirements
* WCAG SC 4.1.2: Name, Role, Value 

## Limitations, Assumptions, Exceptions
Exception: In HTML5 the frame element is marked as obsolete. The iframe element remains part of the HTML5 specification.

## Test Procedure
### Selector (Identify Content)
Find all Frames and iframes in the page

### Tests for SC 4.1.2
1. Check that each frame has a title that describes its content 
1. CHeck that each iframe has a title that describes its content

#### Test Results for SC 4.1.2
* If any of the above checks fail, then the content fails this SC, and this baseline fails.

## Advisory
* Technique H64: Using the title attribute of the frame and iframe elements
*<<kathy comment: I'd be ok with combining this with page title but the baseline test should be renamed to Content containers, or similar. A name like that would include other containers, like pop up windows, which i don't think has a description requirement...>>*
