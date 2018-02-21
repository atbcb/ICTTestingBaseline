# 19. Video-only

## Accessibility Requirements
* [WCAG SC 1.2.1 Video-Only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) - For prerecorded video-only media, the following is true (except when the video is a media alternative for text and is clearly labeled as such): Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

## Test Method Rationale
View the content of the visual information and compare to alternatives for equivalence.

## Limitations, Assumptions or Exceptions 
* In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc.
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* Video-only content may be delivered as a downloadable file, streamed, or other means.
* If the video is accompanied by timed sounds or meaningful dialog, it is not video-only. Test for Multimedia (B20 and B21) requirements.
* Video-only content may present moving, blinking, scrolling, or auto-updating information; however, other methods may be used to present similar content. In either case, whether presented via video-only or some other method, the content must provide the ability to pause, stop, or hide the content. The check for this requirement is performed under 6. Changing Content.

## Test Procedure for SC 1.2.1 Video-Only (Prerecorded)
### Select/Identify Content
Pre-recorded video-only content

### Test Instructions
1. Check that video-only content information is also available through an alternative method:
    1. audible alternative (e.g., audio track)
    1. accessible text alternative (e.g., transcript document)
1. View the video-only content while referring to the alternative and check that the information in the alternative includes the same information that the video-only presentation displays (e.g., if the video includes multiple characters, the alternative must identify which character is associated with each depicted action).

### Test Results
* If any of the above checks fail, SC 1.2.1 and Baseline 19 fail.

## Advisory: tips for streamlined test processes
### WCAG Sufficient Techniques
* A failure of SC 2.2.2 would also fail Conformance Requirement 5: Non-Interference and should be highlighted in test reports to indicate the severe impact on accessibility.
