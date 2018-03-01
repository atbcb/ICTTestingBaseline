# 26. WCAG Conformance Requirements
## Accessibility Requirements
1. [Conformance Level](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conf-req1-head): One of the following levels of conformance is met in full.
    * Level A: For Level A conformance (the minimum level of conformance), the Web page satisfies all the Level A Success Criteria, or a conforming alternate version is provided.
    * Level AA: For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided.
    * Level AAA: For Level AAA conformance, the Web page satisfies all the Level A, Level AA and Level AAA Success Criteria, or a Level AAA conforming alternate version is provided.
2. [Full pages](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conf-req2-head): Conformance (and conformance level) is for full Web page(s) only, and cannot be achieved if part of a Web page is excluded.
3. [Complete processes](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conf-req3-head): When a Web page is one of a series of Web pages presenting a process (i.e., a sequence of steps that need to be completed in order to accomplish an activity), all Web pages in the process conform at the specified level or better. (Conformance is not possible at a particular level if any page in the process does not conform at that level or better.)
4. [Only Accessibility-Supported Ways of Using Technologies](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conf-req4-head): Only accessibility-supported ways of using technologies are relied upon to satisfy the success criteria. Any information or functionality that is provided in a way that is not accessibility supported is also available in a way that is accessibility supported.
5. [Non-Interference](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conf-req5-head): If technologies are used in a way that is not accessibility supported, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. In addition, the Web page as a whole continues to meet the conformance requirements under each of the following conditions:
    1. when any technology that is not relied upon is turned on in a user agent,
    1. when any technology that is not relied upon is turned off in a user agent, and
    1. when any technology that is not relied upon is not supported by a user agent
    * In addition, the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:
        * 1.4.2 - Audio Control,
        * 2.1.2 - No Keyboard Trap,
        * 2.3.1 - Three Flashes or Below Threshold, and
        * 2.2.2 - Pause, Stop, Hide.

## Conformance Validation Method Rationale

## Limitations, Assumptions, or Exceptions
* Web technologies can be used in ways that are not accessibility supported as long as they are not relied upon and the page as a whole meets the conformance requirements, including Conformance Requirement 4: Only Accessibility-Supported Ways of Using Technologies and Conformance Requirement 5: Non-Interference, are met. (https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-supported-definition-head)
* When a Web Technology is used in a way that is "accessibility supported," it does not imply that the entire technology or all uses of the technology are supported. Most technologies, including HTML, lack support for at least one feature or use. Pages conform to WCAG only if the uses of the technology that are accessibility supported can be relied upon to meet WCAG requirements. (https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-supported-definition-head)

## Validation Procedure for Conformance Requirement 1. Conformance Level
### Select/Identify Content
Entire Web page **OR** set of Web pages within a series of Web pages presenting a complete process

### Validation Instructions
1. Determine the highest level at which the selected content meets **ALL** of the WCAG 2.0 Success Criteria for that level:
    * [Level A Success Criteria](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=324&currentsidebar=%23col_customize&levels=aa%2Caaa#ensure-compat-parses):
        * [1.1.1 Non-text Content](http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
        * [1.2.1 Audio-only and Video-only (Prerecorded)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
        * [1.2.2 Captions (Prerecorded)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)
        * [1.2.3 Audio Description or Media Alternative (Prerecorded)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html)
        * [1.3.1 Info and Relationships](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
        * [1.3.2 Meaningful Sequence](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)
        * [1.3.3 Sensory Characteristics](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html)
        * [1.4.1 Use of Color](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
        * [1.4.2 Audio Control](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html)
        * [2.1.1 Keyboard](http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)
        * [2.1.2 No Keyboard Trap](http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)
        * [2.2.1 Timing Adjustable](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        * [2.2.2 Pause, Stop, Hide](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)
        * [2.3.1 Three Flashes or Below Threshold](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)
        * [2.4.1 Bypass Blocks](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
        * [2.4.2 Page Titled](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)
        * [2.4.3 Focus Order](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
        * [2.4.4 Link Purpose (In Context)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)
        * [3.1.1 Language of Page](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html)
        * [3.2.1 On Focus](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html)
        * [3.2.2 On Input](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html)
        * [3.3.1 Error Identification](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
        * [3.3.2 Labels or Instructions](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
        * [4.1.1 Parsing](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html)
        * [4.1.2 Name, Role, Value](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)
    * [Level AA Success Criteria](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=324&currentsidebar=%23col_customize&levels=a%2Caaa#ensure-compat-parses); includes all of Level A Success Criteria, plus the following (minimum level required for conformance to Section 508 of the Rehabilitation Act):
        * [1.2.4 Captions (Live)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html)
        * [1.2.5 Audio Description (Prerecorded)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html)
        * [1.4.3 Contrast (Minimum)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
        * [1.4.4 Resize text](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
        * [1.4.5 Images of Text](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html)
        * [2.4.5 Multiple Ways](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html)
        * [2.4.6 Headings and Labels](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
        * [2.4.7 Focus Visible](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
        * [3.1.2 Language of Parts](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html)
        * [3.2.3 Consistent Navigation](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)
        * [3.2.4 Consistent Identification](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html)
        * [3.3.3 Error Suggestion](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html)
        * [3.3.4 Error Prevention (Legal, Financial, Data)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html)
    * [Level AAA Success Criteria](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=324&currentsidebar=%23col_customize&levels=a%2Caa#ensure-compat-parses) (not required for conformance to Section 508 of the Rehabilitation Act
      
### Validation Results
If any portion of the selected content fails **ANY** Level A or AA Success Criterion, the content fails Conformance Requirement 1 and Baseline Requirement 26.

If any portion of the selected content fails **ANY** Level A or AA Success Criterion, the content **IS NOT CONFORMANT** to 36 CFR 1194 and thereby **DOES NOT Conform** to Section 508 of the Rehabilitation Act

## Validation Procedure for Conformance Requirement 2. Full Pages
### Select/Identify Content
ENTIRE Web page.

### Validation Instructions
1. Check that **ALL** of the selected content meets **ALL** of the Level A and Level AA WCAG 2.0 Success Criteria.

### Validation Results
If any portion of the selected content fails **ANY** Level A or AA Success Criterion, the content fails Conformance Requirement 2 and Baseline Requirement 26.

If any portion of the selected content fails **ANY** Level A or AA Success Criterion, the content **IS NOT CONFORMANT** to 36 CFR 1194 and thereby **DOES NOT Conform** to Section 508 of the Rehabilitation Act.

## Validation Procedure for Conformance Requirement 3. Complete Processes
### Select/Identify Content
ENTIRE set of Web pages within a series of Web pages presenting a complete process.

### Validation Instructions
1. Check that **ALL** of the selected content meets **ALL** of the Level A and Level AA WCAG 2.0 Success Criteria.

### Validation Results
If any portion of the selected content fails **ANY** Level A or AA Success Criterion, the content fails Conformance Requirement 3 and Baseline Requirement 26.

If any portion of the selected content fails **ANY** Level A or AA Success Criterion, the content **IS NOT CONFORMANT** to 36 CFR 1194 and thereby **DOES NOT Conform** to Section 508 of the Rehabilitation Act.

## Validation Procedure for Conformance Requirement 4. Only Accessibility-Supported Ways of Using Technologies
### Select/Identify Content
Content that provides accessibility through assistive technologies or special accessibility features in mainstream user agents (i.e., content for which the WCAG Success Criteria require that the content make it possible for assistive technologies to successfully present the content's information to the user).

### Validation Instructions
1. Verify that selected content is designed in a way that user agents, including assistive technologies, can access all the information they need to present the content to the user.

### Validation Results
If the above check fails, then the content fails Conformance Requirment 4 and Baseline Requirement 26.

## Validation Procedure for Conformance Requirement 5. Non-Interference
### Select/Identify Content
Content that is not accessibility supported (see Conformance Requirement 4, above), or is used in a non-conforming way.

### Validation Instructions
1. Check that when the selected content is turned ON or accessed by a user agent (including assistive technologies), the content
    1. **DOES NOT** block the ability of users to access the rest of the page. 
    1. **DOES NOT** cause the Web page as a whole to fail any conformance requirements
1. Check that when the selected content is turned OFF or disabled by a user agent (including assistive technologies), the content
    1. **DOES NOT** block the ability of users to access the rest of the page. 
    1. **DOES NOT** cause the Web page as a whole to fail any conformance requirements
1. Check that if the selected content is not supported by a user agent (including assistive technologies), the content
    1. **DOES NOT** block the ability of users to access the rest of the page. 
    1. **DOES NOT** cause the Web page as a whole to fail any conformance requirements

### Validation Results
If any of the above checks fail, then the content fails Conformance Requirment 5 and Baseline Requirement 26.
