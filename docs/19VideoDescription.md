# 19. Video Descriptions
## Requirement

## Rationale
### Test Rationale

### Test Method Rationale

## Tools Necessary

## Test Rules

### Video Descriptions - B19.1-video-description
#### Rule Description 
Video-only content must be accompanied by descriptions.
#### Accessibility Requirements
Except when the Video-only content is a media alternative for text and is clearly labeled as such,
* SC 1.2.1: Video-only (Prerecorded): Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.
* SC 1.2.3 Media Alternative (Prerecorded): An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media.
* Technique G159: Providing an alternative for time-based media for video-only content 

#### Limitations, Assumptions or Exceptions
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* A text equivalent is not required for audio that is provided as an equivalent for video with no audio information. For example, it is not required to caption video description that is provided as an alternative to a silent movie
* The audio description is not required to by

#### Accessibility Support
* Requires an accessible video player

#### Test Subject Types 
Rendered video

#### Test Procedure
##### Selector: Find Required Technique 
1. Find interface components that play video-only or animated content when activated.
2. Visually determine if the video is a media alternative to text.

##### Test Cases
###### Test Case Mode
Manual inspection 

###### Test Case Step (SC 1.2.3)
1)	If the video is a media alternative to text, visually determine if it is clearly labeled as a text alternative

###### Output (SC 1.2.3)
a)	Pass: True
b)	Fail: False 
c)	DNA: Video is not a media alternative to text  

##### Test Case Step (SC 1.2.1)
1)	Manually check that the information conveyed through animation or video is also available in accessible screen text 
2)	Manually check that the information conveyed through animation or video is also available through audio description

###### Output (SC 1.2.1)
1)	The information  conveyed through animation or video is also available in accessible screen text 
2)	Manually check that the information conveyed through animation or video is also available through audio description

#### Outcome (SC #)
1.	Pass: True (meets criteria for either test case 1 or 2 )
2.	Fail: False (does not meet either criteria) 
3.	DNA: 

#### Baseline Outcome
* 1.2.1 passes 
    * Pass Baseline Requirement #19
    * Fail Baseline Requirement # 19
* 1.2.3 pass – 
    * Pass Baseline Requirement #19
    * Fail Baseline Requirement # 19
