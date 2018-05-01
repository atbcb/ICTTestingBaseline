# 26. User Preferences
## Accessibility Requirements
* [Section 508 503.2 User Preferences](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#503-applications) -- Applications shall permit user preferences from platform settings for color, contrast, font type, font size, and focus cursor.

## Test Method Rationale
This test involves modifying the operating system, browser, and/or platform accessibility settings for color, contrast, font type, font size, and focus cursor to verify that the application adopts changes.

## Limitations, Assumptions, or Exceptions
* **EXCEPTION:** Applications that are designed to be isolated from their underlying platform software, including Web applications, shall not be required to conform to 503.2.
* **EXCEPTION:** Where Web applications do not have access to platform accessibility services and do not include components that have access to platform accessibility services, they shall not be required to conform to 502 or 503 provided that they conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 

## Test Procedure for 503.2 
### Identify Content
All Web applications (except those identified as Exceptions above)

### Test Instructions
1. Make changes in the browser/platform and OS to modify each of the following settings:
    * Color: make changes to links, visited links, unvisited links, 
    * Contrast: select a high contrast option (note this may override the color settings)
    * Font type: select “Ariel Bold” or a different font style than the current setting
    * Font size: select “Large” or another size than the current setting
    * Focus cursor: select a wider width cursor appearance
2. Refresh content.
3. Check that the application adopts all of the changes made. 

### Test Results
* If any of the above checks fail, then 503.2 and Baseline Requirement 26 fail.

## Advisory: Tips for streamlined test processes
Reviewing the content after each change may be easier than after all changes have been made.
