# 5. Repetitive Content 

## Accessibility Requirements
* [WCAG SC 2.4.1 Bypass Blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html) -- A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.

### Test Method Rationale
To enable equitable use by keyboard-only users, there must be a keyboard-accessible method to bypass repetitive content. 



## Limitations, Assumptions, or Exceptions
* Small repeated sections such as individual words, phrases or single links are not considered blocks for the purposes of this provision.
* Most web browsers provide keyboard shortcuts to move the user focus to the top of the page, so if a set of navigation links is provided at the bottom of a web page providing a "skip" link may be unnecessary. 

## Test Procedure for SC 2.4.1 Bypass Blocks
### Select/Identify Content
Blocks of content that are repeated on multiple pages including navigation links, page headers and banners.

### Test Instructions
1.	Use the keyboard to navigate toward repetitive blocks of content. Some bypass functions may not be visible until they receive focus.
2.	Check that a keyboard-accessible method is provided to bypass repetitive content.
3.	Use the keyboard to verify the functionality of the bypass function.
    * Activate the bypass method. 
    * Check that the focus is shifted past the repetitive content. If there is only text/no interactive component to recieve the shift of focus, it may not be evident that a focus shift occurred.

### Test Results
If any of the above checks fail, then this SC fails and the Baseline Requirement fails.

## Advisory: Tips for streamlined test processes
* Some bypass methods may require a specific keyboard shortcut (i.e., the F6 key is the browser default for navigating between frames).
* If bypass method is provided but cannot be activated by keyboard, this is also a failure of the Keyboard test (#1).
* If bypass method is in the focus order but is not visible when it has keyboard focus, this is a failure of the Focus (visible) test (#2). 
* If there is a need for multiple bypass methods on a page, each method must describe its purpose to comply with the links requirement (#16). For example, a page with repetitive links should have a descritive bypass method. If there is also a block of repetitive content, this should have a separate descriptive bypass method.
* This baseline test covers bypass methods that are functional with just a keyboard. The following WCAG Sufficient Techniques require additional assistive tools to function as bypass methods:
    * [H69: Providing heading elements at the beginning of each section of content](http://www.w3.org/TR/WCAG20-TECHS/H69.html)
    * [ARIA11: Using ARIA landmarks to identify regions of a page. These may be included in test processes with test environments that support these techniques](http://www.w3.org/TR/WCAG20-TECHS/H69.html)
* The following technical and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G202: Ensuring keyboard control for all functionality](http://www.w3.org/TR/WCAG20-TECHS/G202.html)
    * [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/TR/WCAG20-TECHS/H70.html) AND [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/TR/WCAG20-TECHS/H64.html)
