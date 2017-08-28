# 19. Video Descriptions
## Requirement
WCAG SC 1.2.1 Video-Only (Prerecorded) - Prerecorded video-only media, the following are true, except when the video is a media alternative for text and is clearly labeled as such: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

## Rationale
### Test Rationale
Information conveyed by prerecorded video-only content must be available to all users. AAlternatives for time-based media that are text based make information accessible because text can be rendered through any sensory modality to match the needs of the user.

### Test Method Rationale
The only mentod available to determine he sufficiency of the text or audio alternative is through manual verification.  

## Tools Necessary
No specific tools are necessary to perform this manual test. 

## Test Rules

### Video Descriptions - B19.2-Video-description
#### Rule Description 
Video-only content must be accompanied by accessible descriptions.

#### Accessibility Requirements
* SC 1.2.1: Video-only (Prerecorded): Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.
   * Technique G159: Providing an alternative for time-based media for video-only content 
   * Technique G166: Providing audio that describes the important video content and describing it as such
   
#### Limitations, Assumptions or Exceptions
* A description is not required for video intended as a media alternative for text and it is clearly labeled as such. 
* A text equivalent is not required for audio that is provided as an equivalent for video-only content. For example, it is not required to transcribe audio that is provided as an alternative to a silent movie.

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

### Video Descriptions - B19.1-Video-alternative

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
