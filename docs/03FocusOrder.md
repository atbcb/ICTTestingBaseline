# 3. Focus (order)
## Accessibility Requirements
* [WCAG SC 2.4.3 Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) -- If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

## Test Method Rationale
Using the keyboard to navigate facilitates inspection of focus order. 

## Test Procedure for SC 2.4.3 Focus Order
### Select/Identify Content
Keyboard accessible interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.).

### Test Instructions
1. Use the keyboard to navigate through interface components and content (including any hidden content). 
1. If the order of content presented affects understanding or function of the content, then check that the focus order matches the same logical order as the order presented visually. 

### Test Results
If any of the above checks fail, then this SC fails, and the Baseline Requirement fails.

## Advisory: Tips for streamlined test processes
* Common keys used to move focus include the Tab, [Shift+Tab], Space bar, ALT, arrow keys, Enter, and directional arrow keys.
* Tab order that initially appears illogical may still meet this requirment due to an application specific business logic. 
* For web content that is in layout tables, it is possible to produce a linearized representation that may be useful in determining whether a logical order is used.

### WCAG 2.0 Techniques
* The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:
    * [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](http://www.w3.org/TR/WCAG20-TECHS/G59.html) 
    * [H4: Creating a logical tab order through links, form controls, and objects](http://www.w3.org/TR/WCAG20-TECHS/H4.html)
    * [F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability](http://www.w3.org/TR/WCAG20-TECHS/F44.html)
