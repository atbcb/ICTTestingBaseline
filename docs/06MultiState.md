# 6. Multi-state components
## Rationale
Components that can change their state must reveal their current state and function to Assistive Technology. States include such things
as closed/open, sorted in ascending-order/descending-order, collapsed/expanded, and dynamic values that are shown on components (e.g., "34 characters remaining", "Alert Priority 5"). *live regions?*

## Accessibility Requirements
* WCAG2 SC 1.3.1 Info and relationships    
   * Technique ... 
* WCAG2 SC 3.2.1 On Focus
* WCAG2 SC 3.2.2 On Input
* WCAG2 SC 4.1.1 Parsing     
* WCAG2 SC 4.1.2 Name, Role, Value

## Limitations, Assumptions, or Exceptions

## Test Procedure for SC ...

### Selector (Identify Content)
Identify components that indicate status or can change their state. Examples include images, navigation trees, data table sort
controls, etc. Note: It may be necessary to use the mouse to determine whether state changes occur on hover, or on click. 

### Test Instructions
1. Determine the information that is conveyed visually by the component about its current state.
1. Check that the accessible name, role and state, when considered together, provide this same information about its current state.
1. Change the state of the component and repeat steps 1 and 2 for each possible state.
   1. Depending on the component, a change of state may be triggered by various actions, such as activation, toggling a function, entering data in the current component, entering data in or activating a related component (e.g. character count), mouseover, etc.

* Note: If the number of possible states is too large or infinite, a sampling approach may be used.

#### Test Results
* If step 2 fails, this SC fails

## Test Procedure for SC ...


## Baseline Requirement Outcome
* If any SC fails, this baseline fails.
