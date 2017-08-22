## 20. Synchronized media (captions)

### Rule Description

Captions are provided for all audio content (dialogue and important sounds) in synchronized media.

### Accessibility Requirements

- WCAG2: 1.2.2 Captions (Prerecorded)
  - Technique G93: Providing open (always visible) captions
  - Technique G87: Providing closed captions
- WCAG2: 1.2.4 Captions (Live)
  - Technique G9: Creating captions for live synchronized media

### Limitations, Assumptions, or Exceptions

- Exceptions: This is not intended to require that two-way multimedia calls between two or more individuals through web apps must be captioned regardless of the needs of users.

### Accessibility Support

- Media players that support the display of captions

### Test Subject Type

Rendered media

### Test Procedure

#### Selector

1. Identify synchronized multimedia (typically visual and audible content), both live and pre-recorded.

#### Test Cases

##### Test Case Mode

Manual inspection

##### Test Case Step

1. Check that captions are provided either through the closed or open technique.
   1. Play the synchronized media.
   2. (G93) Open captions are always visible.
   3. (G87) Closed captions are typically not visible by default. Enable the media player's closed captions function if captions aren't immediately visible when audible content is begins.
2. Check that captions include all dialogue and important sounds.
   1. Listen to the audio of the entire synchronized media.
   2. Compare the audio to the captions for accuracy and equivalence.
   3. Lower accuracy of captions for live broadcasts is acceptable due limitations of real-time captioning techniques.

### Output

1. Captions for pre-recorded synchronized media include all dialogue and important sounds.

2. Captions for live synchronized media are provided.

  - Passed – either statement is true
  - Failed – both statements are false

Note: [Technique G9](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G9) for 1.2.4 is to check that a procedure and policy are in place to ensure that captions are delivered in real time. This baseline test does not check for policy.
