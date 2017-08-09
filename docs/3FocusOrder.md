# 3. Focus (order)
## Requirement
WCAG SC 2.4.3. If [content] can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
WCAG SC 3.2.3. Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

## Rationale
### Test Rationale
Logical order and groupings of interface components in the design of software applications and Web content are used to aid visual appeal and improve usability. This logic needs to be available for users with no vision, low vision and who rely on AT.

### Test Method Rationale
Focus/TAB order must follow the logical order to prevent instances where users become confused, make errors, or not be provided with the contextual meaning of components.. Changes to the relative order of repeated components can also cause confusion..

## Tools Necessary
Physical system keyboard

## Test Rules
To validate that content conforms to this requirement, execute the following test rules.

### Focus Order – B3.1
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
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

##### Test Cases
###### Test Case Mode
Manual inspection

###### Test Case Steps
1. Use the keyboard to navigate through all interface components and content (including any hidden content). If the order of content presented visually affects understading or function of the content, then  check that the focus order when using a keyboard matches the same logical order as the order presented visually.
    * Pass: if the keyboard focus order matches the visual order OR the order of keyboard focus does not affect understanding or function
    * Fail: if the keyboard focus order does not match the visual order AND the order of focus affects understanding or function of the content

###### Output
Each element tested will return a test result of pass or fail for eash test case as well as a description of any errors causing a failure result. 

#### Outcome
The overall test procedure (accumulating the results of the individual test cases) should return one of the following outcomes:
* Passed – the test target passed the test
* Failed – the test target failed the test
* Cannot tell: it is unclear whether or not the test target passes or fails the test

### Consistent Navigation – B3.2
#### Rule Description
Focus order is the sequence in which a user accesses elements on your website. Some users can’t use a mouse and will ‘tab’ through your website – they must access elements in an order that makes sense. 

#### Accessibility Requirements
TBD

#### Accessibility Support
TBD

#### Test Subject Type
Rendered Page

#### Test Procedure
##### Selector
Select visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) that repeat over multiple pages or screens.

##### Test Cases
###### Test Case Mode
Manual inspection

###### Test Case Steps
1. Use the keyboard to navigate through all interface components and content (including any hidden content). For those content elements that repeat over multiple pages or screens, check that the relative order of keyboard and/or visual focus is the same across pages.
    * Pass: if the relative keyboard focus order for repeated content is consistent across multiple pages or screens.
    * Fail: if the relative keyboard focus order for repeated content is NOT consistent across multiple pages or screens AND the user did not initiate a change in content order.
###### Output
Each element tested will return a test result of pass or fail for eash test case as well as a description of any errors causing a failure result. 

#### Outcome
The overall test procedure (accumulating the results of the individual test cases) should return one of the following outcomes:
* Passed – the test target passed the test
* Failed – the test target failed the test
* Cannot tell: it is unclear whether or not the test target passes or fails the test

## Advisory: Tips for streamlined test processes
* This test is for interactive interface components, excluding forms which are covered by the forms test.
* To get to all components, it may require more than simply TABbing between items. For example, it may be necessary to tab to a set of components then use the arrow keys to get focus on individual components.
* Tab order may be application specific—reflecting business logic—so it may be helpful to ask developers whether a seemingly non-logical order was intentional. It may be useful to verify order discrepancies using the Tab Index attribute, if it is present (Although a Tab Index is not required). It is also possible to Tab through components to see if there is a visual focus on static text.
* For web content that is in layout tables, it is possible to produce a linearized representation that may be useful in determining whether a logical order is used. To linearize table content, use WAT (Tables - Linearize).
