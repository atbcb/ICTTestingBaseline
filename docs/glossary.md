# Glossary


Accessibility object model (AOM)
: a JavaScript API to allow developers to interact with the accessibility tree associated with web content (More details at [AOM Explainer](https://wicg.github.io/aom/explainer.html))

Accessibility tree
: Tree of accessible objects that represents the structure of the user interface (UI). Each node in the accessibility tree represents an element in the UI as exposed through the accessibility API; for example, a push button, a check box, or container. (Source [W3C Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/#dfn-accessibility-tree))

Accessible description
: An accessible description provides additional information, related to an interface element, that complements the accessible name. The accessible description might or might not be visually perceivable. (Source [W3C Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/#dfn-accessible-description))

Accessible name
: The accessible name is the name of a user interface element. Each platform accessibility API provides the accessible name property. The value of the accessible name may be derived from a visible (e.g., the visible text on a button) or invisible (e.g., the text alternative that describes an icon) property of the user interface element. (Source [W3C Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/#dfn-accessible-name)

Accessible name and accessible description computation
: The accessible name and description computation is used to generate both the accessible name and accessible description. There are different rules provided for several different types of elements, nodes, and combinations of markup. Text alternatives are built up, when appropriate, from all the relevant content contained within an element. This is accomplished via steps 2B and 2F, which are recursive, using the full set of rules to retrieve text from its own children or nodes it references.

: The purpose of the computation is to create a perceivable label or description for alternative presentations, in the form of a flat string of space separated textual tokens.(Source [W3C Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd))

ARIA
: WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies. (Source [W3C WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/))

Aria-live (property)
: Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.(Source [W3C Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#aria-live))
: The values of this attribute are expressed in degrees of importance. When regions are specified as polite, assistive technologies will notify users of updates but generally do not interrupt the current task, and updates take low priority. When regions are specified as assertive, assistive technologies will immediately notify the user, and could potentially clear the speech queue of previous updates. When regions are specified as off, this ndicates that updates to the region should not be presented to the user unless the user is currently focused on that region.

ICT Testing Baseline Portfolio
: tbd

ICT Baseline Tests
: tbd

* Changes in presented content: driven and automatic
* Change of state

* Equivalent description

* Form components (examples given in [TC10-001-fail](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-001-fail.html), [-008-dna](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-008-dna.html), and [-009-dna](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-009-dna.html))
* Form component instructions and cues (examples given in [TC10-001-fail](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-001-fail.html), [-008-dna](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-008-dna.html), and [-009-dna](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-009-dna.html))

Information and Communication Technology (ICT)
: Information technology and other equipment, systems, technologies, or processes, for which the principal function is the creation, manipulation, storage, display, receipt, or transmission of electronic data and information, as well as any associated content. Examples of ICT include, but are not limited to: computers and peripheral equipment; information kiosks and transaction machines; telecommunications equipment; customer premises equipment; multifunction office machines; software; applications; Web sites; videos; and, electronic documents. (*Update link!* Source [Section 508 Definitions](https://beta.access-board.gov/ict/ch1e/#E103-Definitions))

* Image ([TC06-001-fail](https://section508coordinators.github.io/BaselineTestPages/testcases/TC06-001-fail.html) and [TC06-002-pass](https://section508coordinators.github.io/BaselineTestPages/testcases/TC06-002-pass.html) have a list of examples)
  * Decorative image
  * Meaningful image
* Input element

* Programmatic, programmatically determined (when "behind the scenes" is insufficient, I find this harder to explain to average OPM employees than I thought it would be), programmatically set, programmatically associated... Examples of programmatic event notifications are given in [TC05-001-fail](https://section508coordinators.github.io/BaselineTestPages/testcases/TC05-001-fail.html)

Text alternative
  : Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content. (Source [WCAG 2.0 Glossary](https://www.w3.org/TR/WCAG20/#text-altdef))

* Test scenario

* User interface component (examples given in [TC10-001-fail](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-001-fail.html), [-008-dna](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-008-dna.html), and [-009-dna](https://section508coordinators.github.io/BaselineTestPages/testcases/TC10-009-dna.html))

* WCAG

# Additional Resources
- [Accessibility Conformance Testing glossary](https://act-rules.github.io/glossary/)

- *Update link!* [US Access Board Section 508 glossary](https://beta.access-board.gov/ict/ch1e/#E103.4)

- [WCAG 2.0 glossary](https://www.w3.org/TR/WCAG20/#glossary)