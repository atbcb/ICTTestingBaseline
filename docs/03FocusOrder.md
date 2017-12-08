# 3. Focus (order)
## Rationale
### Test Rationale
Logical order and groupings of interface components in the design of software applications and Web content are used to aid visual appeal and improve usability. This logic needs to be available for users with no vision, low vision and who rely on AT.

### Test Method Rationale
Focus/TAB order must follow the logical order to prevent instances where users become confused, make errors, or not be provided with the contextual meaning of components. Changes to the relative order of repeated components can also cause confusion..

## Accessibility Requirements
* WCAG SC 2.4.3. If [content] can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
* WCAG SC 3.2.3. Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

## Test Procedure
Focus order is the sequence in which a keyboard user accesses elements on your website. Some users can’t use a mouse and will ‘tab’ through your website – the order that they access elements must make sense.

### Selector (Identify Content)
Keyboard accessible interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

#### Tests for SC 2.4.3.
1. Use the keyboard to navigate through interface components and content (including any hidden content). 
1. If the order of content presented visually affects understanding or function of the content, then check that the focus order matches the same logical order as the order presented visually. 

##### Test Results for SC 2.4.3
* If any of the above checks fail, then the content fails this SC

### Selector (Identify Content)
Navigation components used on more than one Web page

#### Tests for SC 3.2.3
1. Use the keyboard to move the focus through navigation components (including any hidden ). 
    1. Check that the relative order of keyboard and/or visual focus is the same across pages.
    1. Check that any change in the content order is only the result of a user-initiated change 

##### Test Results for 3.2.3
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* To get to all components, it may require more than simply TABbing between items. For example, it may be necessary to tab to a set of components then use the arrow keys to get focus on individual components.
* Tab order may be application specific—reflecting business logic—so it may be helpful to ask developers whether a seemingly non-logical order was intentional. 
* It may be useful to verify order discrepancies using the tabindex attribute, if it is present (although a tabIndex is not required). 
* For web content that is in layout tables, it is possible to produce a linearized representation that may be useful in determining whether a logical order is used. 
