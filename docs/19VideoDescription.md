# 19. Video-only

## Accessibility Requirements
* [WCAG SC 1.2.1 Video-Only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) - For prerecorded video-only media, the following is true (except when the video is a media alternative for text and is clearly labeled as such): Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.
* [WCAG SC 1.3.3 Sensory Characteristics](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) -- Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.
* [WCAG SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html) For moving, blinking, scrolling, or auto-updating information, all of the following are true:
   * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential.
   

## Test Method Rationale
View the content of the visual information and compare to alternatives for equivalence.

## Limitations, Assumptions or Exceptions 
* In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc.
* A series of pictures displayed as a slide show or carousel, lasting more than 5 seconds, and where a user cannot control the rate of display are considered video-only and must meet this baseline's success criteria. 
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* Video-only content may be delivered as a downloadable file, streamed, or other means.
* If the video is accompanied by timed sounds or meaningful dialog, it is not video-only. Test for Multimedia (B20 and B21) requirements.
* Per Conformance Requirement 5, SC 2.2.2 applies to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page.
* An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.

## Selector for SC 1.2.1
Pre-recorded video-only content and carousel/slide shows

### Tests for SC 1.2.1
1. Check that video-only content information is also available through an alternative method.
   a. audible alternative (e.g., audio track)
   b. accessible text alternative (e.g., transcript document)
1. View the video-only content while referring to the alternative.
1. Check that the information in the alternative includes the same information that is in the video-only presentation. If the video includes multiple characters or meaningful text, the alternative must identify which character is associated with each action described and the text.

#### Test Results for SC 1.2.1
* If any of the above checks fail, SC 1.2.1 and this baseline fail

## Selector for 2.2.2
Video-only content and carousel/slide shows that is not essential AND (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content

### Tests for 2.2.2
Check that there is a mechanism for the user to pause, stop, or hide the video-only content.

#### Test Results for SC 2.2.2
If any of the above checks fail, SC 2.2.2 and this baseline fail.

## Selector for 1.3.3
Instructions provided for understanding and operating content. 

### Tests for SC 1.3.3
Check that instructions do not rely soley on video-only content, e.g., view a video and then answer the knowledge checks.

#### Test Results for SC 1.3.3
If any of the above checks fail, SC 1.3.3 and this baseline fail.

## Advisory: tips for streamlined test processes
* A failure of SC 2.2.2 would also fail Conformance Requirement 5: Non-Interference and should be highlighted in test reports to indicate the severe impact on accessibility.
