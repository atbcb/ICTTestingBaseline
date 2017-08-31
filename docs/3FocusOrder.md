# 3. Focus (order)
## Requirement
WCAG SC 2.4.3. If [content] can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

WCAG SC 3.2.3. Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

## Rationale
### Test Rationale
Logical order and groupings of interface components in the design of software applications and Web content are used to aid visual appeal and improve usability. This logic needs to be available for users with no vision, low vision and who rely on AT.

### Test Method Rationale
Focus/TAB order must follow the logical order to prevent instances where users become confused, make errors, or not be provided with the contextual meaning of components.. Changes to the relative order of repeated components can also cause confusion..

## Test Rules
To validate that content conforms to this requirement, execute the following test rules.

### Focus (order) – B3.1-focus-order
#### Rule Description
Focus order is the sequence in which a user accesses elements on your website. Some users can’t use a mouse and will ‘tab’ through your website – they must access elements in an order that makes sense. 

#### Accessibility Requirements
WCAG SC 2.4.3.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

##### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard

Use the keyboard to navigate through interface components and content (including any hidden content). 

##### Test Cases
1. If the order of content presented visually affects understanding or function of the content, then check that the focus order when using a keyboard matches the same logical order as the order presented visually. 
2. Check that focus order DOES NOT affect understanding or function of the content. 

##### Output for 2.4.3
* Passed: if either test cases passes
* Failed: if no test case passes

### Consistent Navigation – B3.2-consistent-navigation
#### Rule Description
Focus order is the sequence in which a user accesses elements on your website. Some users can’t use a mouse and will ‘tab’ through your website – they must access elements in an order that makes sense. 

#### Accessibility Requirements
WCAG SC 3.2.3.

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) that repeat over multiple linked pages or screens.

###### Test Mode
Manual inspection

##### Test Tools Necessary / Test Tool Instructions
Physical system keyboard

Use the keyboard to navigate through interface components and content (including any hidden content). Identify content elements that repeat over multiple linked pages or screens.

##### Test Cases
For those content elements that repeat over multiple linked pages or screens:
1. Check that the relative order of keyboard and/or visual focus is the same across pages.
2. Check that the user initiated a change in the content order.

##### Output 3.2.3
* Passed: if either test case passes
* Failed: if no test case passed

## Baseline Test Outcome
* Passed: if all outputs of B9.1 and B9.2 pass
* Failed: if any output of B9.1 and B9.2 fail

## Advisory: Tips for streamlined test processes
* This test is for interactive interface components, excluding forms which are covered by the forms test.
* To get to all components, it may require more than simply TABbing between items. For example, it may be necessary to tab to a set of components then use the arrow keys to get focus on individual components.
* Tab order may be application specific—reflecting business logic—so it may be helpful to ask developers whether a seemingly non-logical order was intentional. It may be useful to verify order discrepancies using the Tab Index attribute, if it is present (Although a Tab Index is not required). It is also possible to Tab through components to see if there is a visual focus on static text.
* For web content that is in layout tables, it is possible to produce a linearized representation that may be useful in determining whether a logical order is used. To linearize table content, use WAT (Tables - Linearize).
