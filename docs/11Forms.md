# 11. Forms
## Rationale
### Test Rationale

### Test Method Rationale

## Accessibility Requirements
* WCAG SC 2.4.3. If [content] can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
* WCAG SC 3.2.3. Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

## Test Procedure

### Selector (Identify Content)
...

### Test Instructions
#### Tests for SC 2.4.3.
1. Use the keyboard to navigate through interface components and content (including any hidden content). 
1. If the order of content presented visually affects understanding or function of the content, then check that the focus order when using a keyboard matches the same logical order as the order presented visually. 

##### Test Results for SC 2.4.3
* If any of the above checks fail, then the content fails this SC

#### Tests for SC 3.2.3
1. Use the keyboard to navigate through interface components and content (including any hidden content). Identify content elements that repeat over multiple linked pages or screens.
    1. Check that the relative order of keyboard and/or visual focus is the same across pages.
    1. Check that any change in the content order is only the result of a user-initiated change 

##### Test Results for 3.2.3
* If any of the above checks fail, then the content fails this SC

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
* This test is for interactive interface components, excluding forms which are covered by the forms test.
* To get to all components, it may require more than simply TABbing between items. For example, it may be necessary to tab to a set of components then use the arrow keys to get focus on individual components.
* Tab order may be application specific—reflecting business logic—so it may be helpful to ask developers whether a seemingly non-logical order was intentional. It may be useful to verify order discrepancies using the Tab Index attribute, if it is present (Although a Tab Index is not required). It is also possible to Tab through components to see if there is a visual focus on static text.
* For web content that is in layout tables, it is possible to produce a linearized representation that may be useful in determining whether a logical order is used. To linearize table content, use WAT (Tables - Linearize).
