# 5. Repetitive Content
## Rationale
### Test Rationale
A method must be provided to skip blocks of repeated content or links on pages, allowing a user to move directly to page-specific content.

Groups of navigation links are usually provided along the top and/or left of multiple pages to provide quick navigation to other areas of a Web site. In addition, some groups of pages may repeat blocks of content (other than navigational controls).

For users who can see and use a mouse, skipping over navigation links and other blocks of content is simply a mouse movement followed by a click. However, for users who cannot use a mouse, repetitive links can be a serious impediment to productivity. For example, for screen reader users, if they must read content that is repeated on each page and cannot skip past it, their experience on the page can be very frustrating. 

A common method used to bypass repetitive content is internal (same page) links, but other methods are acceptable.

**Note:**
Like other controls, the skip-navigation link must be keyboard navigable and receive visible focus per SC 2.1.1 and 2.4.7.

### Test Method Rationale
To enable equitable use by keyboard-only users, there must be a keyboard-accessible method to skip past repetitive content. 

## Accessibility Requirement
WCAG SC 2.4.1 Bypass Blocks - A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.

### Related Standards
WCAG SC 2.1.1 Keyboard
WCAG SC 2.4.7 Focus Visible
WCAG SC 2.4.3 Focus Order
WCAG SC 3.2.3 Consistent Navigation

## Tools Necessary
Physical system keyboard

## Limitations, Assumptions, or Exceptions
Access must be via a physical keyboard. Specifically excluded from this test is the use of an on-screen keyboard, or using the Mouse-Keys feature in Windows.
At this time the baseline tests herein cover use of software and Web sites on PCs (i.e., desktops and laptops) that have a keyboard as a primary input device. Tablet PCs and software running on other portable devices are not addressed in the baseline tests.

## Test Procedure
### Selector (Identify Content)
Look for blocks of repeated content, such as navigation links, that should provide a method to skip past them.
* Small repeated sections such as individual words, phrases or single links are not considered blocks for the purposes of this provision.
* Most web browsers provide keyboard shortcuts to move the user focus to the top of the page, so if a set of navigation links is provided at the bottom of a web page providing a "skip" link may be unnecessary. 
* Repeated content that is contained in its own separate frame is not included in this test.

### Tests for SC 2.4.1
1.	Use the keyboard to navigate toward repetitive blocks of content. (See Selector section for exceptions.)
2.	Check that a method is provided to skip past repetitive content.
    * Note: Some skip methods may not be visible until they receive focus.
    * The following methods are also acceptable:
      * H69: Providing heading elements at the beginning of each section of content. 
      * SCR28: Using an expandable and collapsible menu to bypass block of content.
      * ARIA11: Using ARIA landmarks to identify regions of a page. 
      * SL29: Using Silverlight "List" Controls to Define Blocks that can be Bypassed.
3.	Use the keyboard to verify the functionality of the skip function. 
    * Activate the skip function.
    * Check that the focus is shifted to after the repetitive content.

### Results for SC 2.4.1 
Selected blocks of repetitive content will either have a functioning method to skip that content or not.
* If the test for SC 2.4.1 fails, then the content is not conformant to SC 2.4.1

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* If Skip-navigation methods are present but cannot be activated by keyboard, this is also a failure of the Keyboard test (#1).
* If Skip-navigation methods are present but are not visible when focused, this is a failure of the Focus (visible) test (#2). 
* If there is a need for multiple skip links on a page, each skip link must describe its purpose to comply with the links requirement (#16). For example, a page with repetitive links should have a skip link to jump past these links. If there is also repetitive content, this should have a separate skip link.
