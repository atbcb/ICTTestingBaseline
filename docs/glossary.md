# Glossary


Accessibility object model (AOM)
: a JavaScript API to allow developers to interact with the accessibility tree associated with web content (More details at [AOM Explainer](https://wicg.github.io/aom/explainer.html))

Accessibility tree
: Tree of accessible objects that represents the structure of the user interface (UI). Each node in the accessibility tree represents an element in the UI as exposed through the accessibility API; for example, a push button, a check box, or container. (Source [W3C Core Accessibility API Mappings 1.1 - accessibility tree](https://www.w3.org/TR/core-aam-1.1/#dfn-accessibility-tree))

Accessible description
: An accessible description provides additional information, related to an interface element, that complements the accessible name. The accessible description might or might not be visually perceivable. (Source [W3C Accessible Name and Description Computation 1.1 - accessible description](https://www.w3.org/TR/accname-1.1/#dfn-accessible-description))

Accessible name
: The accessible name is the name of a user interface element. Each platform accessibility API provides the accessible name property. The value of the accessible name may be derived from a visible (e.g., the visible text on a button) or invisible (e.g., the text alternative that describes an icon) property of the user interface element. (Source [W3C Accessible Name and Description Computation 1.1 - accessible name](https://www.w3.org/TR/accname-1.1/#dfn-accessible-name)

Accessible name and accessible description computation
: The accessible name and description computation is used to generate both the accessible name and accessible description. There are different rules provided for several different types of elements, nodes, and combinations of markup. Text alternatives are built up, when appropriate, from all the relevant content contained within an element. This is accomplished via steps 2B and 2F, which are recursive, using the full set of rules to retrieve text from its own children or nodes it references.

: The purpose of the computation is to create a perceivable label or description for alternative presentations, in the form of a flat string of space separated textual tokens.

: (Source [W3C Accessible Name and Description Computation 1.1 - Name and Description](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd))

ARIA
: WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies. (Source [W3C WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/))

Aria-live (property)
: Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
: The values of this attribute are expressed in degrees of importance. When regions are specified as polite, assistive technologies will notify users of updates but generally do not interrupt the current task, and updates take low priority. When regions are specified as assertive, assistive technologies will immediately notify the user, and could potentially clear the speech queue of previous updates. When regions are specified as off, this ndicates that updates to the region should not be presented to the user unless the user is currently focused on that region.
: (Source [W3C Accessible Rich Internet Applications (WAI-ARIA) 1.1 - aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live))

Changes of context
: major changes in the content of the Web page that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously

: Changes in context include changes of: 1) user agent; 2) viewport; 3) focus; 4) content that changes the meaning of the Web page.

  >Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

  >Example: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

  (Source [WCAG 2.0 Glossary - change of context](https://www.w3.org/TR/WCAG20/#context-changedef))

Decorative image
: an [image](#image) that is pure decoration or is used only for visual formatting

ICT Testing Baseline Portfolio
: a suite of Testing Baselines that identify all requirements for Section 508 conformance testing of [ICT](#ict)

ICT Baseline Test Cases
: Code examples that pass, fail, or are inapplicable for each Baseline Test

Changes in presented content: driven and automatic
: updates made to content that are within a page, i.e., a new page is not loaded.

Change of state
: update to an element's state property. Examples include checked/unchecked, expanded/collapsed.

Equivalent description
: a text alternative that provides the same information conveyed by non-text content

Form components
: any interactive control that functions to accept user data
: includes, but not limited to, `<input>`, `<select>`, `<textarea>`, `<button>`, `<fieldset>`, `<legend>`, `<option>`, `<optgroup>`.

Form component instructions and cues
: guide a user to complete a form component

<a id="image">Image</a>
: non-text content available in file formats that include JPEG, GIF, TIFF, and SVG.  

<a id="ict">Information and Communication Technology (ICT)</a>
: Information technology and other equipment, systems, technologies, or processes, for which the principal function is the creation, manipulation, storage, display, receipt, or transmission of electronic data and information, as well as any associated content. Examples of ICT include, but are not limited to: computers and peripheral equipment; information kiosks and transaction machines; telecommunications equipment; customer premises equipment; multifunction office machines; software; applications; Web sites; videos; and, electronic documents. (*link will be updated,* Source [Section 508 Definitions](https://beta.access-board.gov/ict/ch1e/#E103-Definitions))

Input element
: an interactive control that functions to accept data from the user.
: Examples of `<input>` types include button, date, password, radio, checkbox.

Label
: Text, or a component with a text alternative, that is presented to a user to identify content. A label is presented to all users, whereas a name may be hidden and only exposed by assistive technology. In many cases, the name and the label are the same. (*Link will be updated,* Source [Section 508 Definitions](https://beta.access-board.gov/ict/ch1e/#E103-Definitions))

Meaningful image
: an [image](#image) that conveys information

Name
: Text by which software can identify a component to the user. A name may be hidden and only exposed by assistive technology, whereas a label is presented to all users. In many cases, the label and the name are the same. Name is unrelated to the name attribute in HTML. (*Link will be updated,* Source [Section 508 Definitions](https://beta.access-board.gov/ict/ch1e/#E103-Definitions))

Non-text content
: any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language

  >Note: This includes ASCII Art (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

  (Source [WCAG 2.0 Glossary - non-text content](https://www.w3.org/TR/WCAG20/#non-text-contentdef))

Programmatically Determinable
: Ability to be determined by software from author-supplied data that is provided in a way that different user agents, including assistive technologies, can extract and present the information to users in different modalities. (*Link will be updated,* Source [Section 508 Definitions](https://beta.access-board.gov/ict/ch1e/#E103-Definitions))

Revised 508 Standards
: The standards for ICT developed, procured, maintained, or used by agencies subject to Section 508 of the Rehabilitation Act as set forth in 508 Chapters 1 and 2 (36 CFR part 1194, Appendix A), and Chapters 3 through 7 (36 CFR part 1194, Appendix C). (*Link will be updated,* Source [Section 508 Definitions](https://beta.access-board.gov/ict/ch1e/#E103-Definitions))

Same relative order
: same position relative to other items

  >Note: Items are considered to be in the same relative order even if other items are inserted or removed from the original order. For example, expanding navigation menus may insert an additional level of detail or a secondary navigation section may be inserted into the reading order.

    (Source [WCAG 2.0 Glossary - same relative order](https://www.w3.org/TR/WCAG20/#samerelorderdef))

Standard keyboard navigation
: Entails using one or more of the following - Tab key, Shift+Tab, Arrow keys, Esc key, Enter key, Space key. (Source [ACT Rules Glossary - standard keyboard navigation](https://act-rules.github.io/glossary/#standard-keyboard-navigation))

Text alternative
  : Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content. (Source [WCAG 2.0 Glossary - text alternative](https://www.w3.org/TR/WCAG20/#text-altdef))

User interface component
: a part of the content that is perceived by users as a single control for a distinct function

  >Note 1: Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

  >Note 2: User interface components include form elements and links as well as components generated by scripts.

  (Source [WCAG 2.0 Glossary - user interface component](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html#user-interface-componentdef))

Web Content Accessibility Guidelines (WCAG) 2.0
: web accessibility guidelines published in 2008 by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C), the main international standards organization for the Internet.
: Incorporated by reference in Revised Section 508 Standards (2017), Level A and AA


----------------------------------------------------------------
[Home/Table of Contents](index.md) | [Previous Section (Appendix C - References)](references.md)
