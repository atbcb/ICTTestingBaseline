# 7. Images
## Rule Description (in plain language)
Images must have a text alternative that serves the equivalent purpose. Meaningful images should have a text alternative that describes the meaning or content that is displayed visually. Decorative images should be programmatically ignored by assistive technology.

## Accessibility Requirements
* WCAG2 SC: 1.1.1. Non-Text 
  * Technique [ARIA6](https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html): Using aria-label to provide labels for objects
  * Technique [ARIA10](https://www.w3.org/TR/WCAG20-TECHS/ARIA10.html): Using a text alternative on one item within a group of images that describes all items in the group-labelledby to provide a text alternative for non-text content
  * Technique [ARIA15](https://www.w3.org/TR/WCAG20-TECHS/ARIA15.html): Using aria-describedby to descriptions of images
  * ~~Technique [G196](https://www.w3.org/TR/WCAG20-TECHS/G196.html): Using a text alternative on one item within a group of images that describes all items in the group~~
  * ~~Technique [H2](https://www.w3.org/TR/WCAG20-TECHS/H2.html): Combining adjacent image and text links for the same resource~~
  * ~~Technique [H36](https://www.w3.org/TR/WCAG20-TECHS/H36.html): Using alt attributes on images used as submit buttons~~
  * Technique [H37](https://www.w3.org/TR/WCAG20-TECHS/H37.html): Using alt attributes on img elements
  * Technique [H67](https://www.w3.org/TR/WCAG20-TECHS/H67.html): Using null alt text and no title attribute on img elements for images that AT should ignore
  * Technique [H86](https://www.w3.org/TR/WCAG20-TECHS/H86.html): Providing text alternatives for ASCII art, emoticons, and leetspeak
  * Failure [F30](https://www.w3.org/TR/WCAG20-TECHS/F30.html): Failure of Success Criterion 1.1.1 ~~and 1.2.1~~ due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)
  * Failure [F38](https://www.w3.org/TR/WCAG20-TECHS/F38.html): Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them
  * Failure [F39](https://www.w3.org/TR/WCAG20-TECHS/F39.html): Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., `alt="spacer"` or `alt="image"`) for images that should be ignored by assistive technology
  * Failure [F13](https://www.w3.org/TR/WCAG20-TECHS/F13.html): Failure of Success Criterion 1.1.1 ~~and 1.4.1~~ due to having a text alternative that does not include information that is conveyed by color differences in the image
  * Failure [F65](https://www.w3.org/TR/WCAG20-TECHS/F65.html): Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on `img` elements, `area` elements, and `input` elements of `type = "image"`
  * Failure [F67](https://www.w3.org/TR/WCAG20-TECHS/F67.html): Failure of Success Criterion 1.1.1 ~~and 1.2.1~~ due to providing long descriptions for non-text content that does not serve the same purpose of does not present the same information
  * *(not really a Web image) Technique [H53](https://www.w3.org/TR/WCAG20-TECHS/H53.html): Using the body of the object element; refer to Software Baseline for testing the object contents; support for Flash is best in IE*
  * *(not really a Web image) Technique [H35](https://www.w3.org/TR/WCAG20-TECHS/H35.html): Providing text alternatives on applet elements; refer to Software Baseline for testing the applet contents; support for JAVA is best in IE*

* WCAG2 SC: 1.4.5 Images of Text
  * *(this failure should go under Contrast baseline) Failure [F83](https://www.w3.org/TR/WCAG20-TECHS/F83.html): Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)*
* WCAG2 SC: 4.1.2 Name, Role, Value
  * *(this failure should go under Links baseline) Failure [F89](https://www.w3.org/TR/WCAG20-TECHS/F89.html): Failure of Success Criteria ~~2.4.4, 2.4.9 and~~ 4.1.2 due to not providing an accessible name for an image which is the only content in a link*

## Limitations, Assumptions, Exceptions
 * Image formats include .jpg, .png, .svg, .gif, .tiff, .bmp.
 * Decoration, Formatting, Invisible: If image is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.
 * CAPTCHA: If the purpose of the image is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the image(s) are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. ([G143](https://www.w3.org/TR/WCAG20-TECHS/G143.html) and [G144](https://www.w3.org/TR/WCAG20-TECHS/G144.html) are specific to captchas.)  
 * Font icons are considered a form of ASCII art, graphics generated with text.
 * Images of text which are essential to the information being conveyed are exempt from SC 1.4.5.  Logotypes (text that is part of a logo or brand name) are considered essential.
 
## Test Procedures 
### Selector
Meaningful Images that convey information

### Test Instructions for 1.1.1
1. Review the accessible name and accessible description properties of the meaningful image.
   * Numerous attributes contribute to the computation of the accessible name and accessible description. 
   * [HTML Accessibility API Mappings 1.0 for img](https://www.w3.org/TR/2017/WD-html-aam-1.0-20171027/#img-element)
2. Check that the combination of accessible name and accessible description provide an equivalent description.

#### Test Results
* If any of the above checks fail, then this SC fails

### Test Instructions for 4.1.2
1. Review the role of the meaningful image.
1. Check that the role is image.

#### Test Results
* If any of the above checks fail, then this SC fails

## Test Procedures 
### Selector
Functional Images used to initiate actions This includes images that have content that is a control or accepts user input, such as links, buttons, and image maps.

### Test Instructions for 1.1.1
1. Review the accessible name and accessible description properties of the functional image.
   * Numerous attributes contribute to the computation of the accessible name and accessible description. 
   * [HTML Accessibility API Mappings 1.0 for img](https://www.w3.org/TR/2017/WD-html-aam-1.0-20171027/#img-element)
2. Check that the combination of accessible name and accessible description provide an equivalent description and/or purpose. The accessible name/description of the image should convey the action that will be initiated (the purpose of the image). 

#### Test Results
* If any of the above checks fail, then this SC fails

### Test Instructions for 4.2.1
1. Review the role of the functional image.
1. Check that the role describes its function.

### Test Instructions for 2.1.1
1. Check that each functional image can be accessed by keyboard only. If an image map, each functional region of the map must be keyboard accessible.

#### Test Results
* If any of the above checks fail, then this SC fails

### Selector
Decorative Images

### Test Instructions for 1.1.1
1. Review the accessible name and accessible description properties of the decorative image.
   * Numerous attributes contribute to the computation of the accessible name and accessible description. 
   * [HTML Accessibility API Mappings 1.0 for img](https://www.w3.org/TR/2017/WD-html-aam-1.0-20171027/#img-element)
2. Check that the combination of accessible name and accessible description are empty. An acceptable alternate method is for the role to be "presentation".

#### Test Results
* If any of the above checks fail, then this SC fails

### Test Instructions for 4.1.2
1. Review the role of the decorative image.
1. Check that the role is presentation. An acceptable alternate method is an empty accessible name/description.

#### Test Results
* If any of the above checks fail, then this SC fails

### Selector
Meaningful Icon Fonts (decorative but meaningful)

### Test Instructions for 1.1.1
1. Check that the icon font has aria-hidden set to true. <<Kathy question: does role="presentation" work here? I don't think so since it removes the description but double check.
2. Check that meaningful icon fonts have a text equivalent (accessible name/description).

#### Test Results
* If any of the above checks fail, then this SC fails

### Selector
Images of Text

### Test Instructions for 1.4.5
1. Do not test logos. Logos with text are exempt from this test.
2. Check that the image of text can be visually customized to a user's requirements. For example, a Web site allows users to specify font settings and all images of text on the site are then provided based on those settings.

#### Test Results
* If any of the above checks fail, then this SC fails

### Selector
Captcha; *sidenote: [recaptcha example](https://www.google.com/recaptcha/api2/demo?invisible=true)*

### Test Instructions for 1.1.1
1. Check that text alternatives identify and describe the purpose of the captcha
1. Check that alternative forms of captcha are provided for different types of sensory perception disabilities

#### Test Results
* If any of the above checks fail, then this SC fails

### Test Instructions for 2.1.1
1. Check that the captcha can be complated by keyboard only.

#### Test Results
* If any of the above checks fail, then this SC fails

### Selector
Images with Text

### Test Instructions for 1.4.5

1. Do not test logos. Logos with text are exempt from this test.</br>
Note: A Federal Agency's seal is not considered a logo. Text identifying the agency should be included in the description of the seal.
2. Check that the image description includes the text in the image.

#### Test Results
* If any of the above checks fail, then this SC fails

## Baseline Requirement Outcome
* If any SC fails, then this baseline fails
