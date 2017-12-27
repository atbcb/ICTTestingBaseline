# 32. Parsing

## Rationale

Ensure that user agents, including assistive technologies, can accurately interpret and parse content. If the content cannot be parsed into a data structure, then different user agents may present it differently or be completely unable to parse it. In markup languages, errors in element and attribute syntax and failure to provide properly nested start/end tags lead to errors that prevent user agents from parsing the content reliably. Therefore, the Success Criterion requires that the content can be parsed using only the rules of the formal grammar.

### Test Rationale

### Test Method Rationale

## Accessibility Requirements
* WCAG2 4.1.1 Parsing: In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

## Tests for SC 4.1.1
### Selector (Identify Content)
1. The entire web page

### Test Instructions
1. Check that (except where the specifications allow these features)
   1. elements have complete start and end tags, 
   1. elements are nested according to their specifications, 
   1. elements do not contain duplicate attributes, and 
   1. any IDs are unique.

##### Test Results for SC 4.1.1
* If any of the above checks fail, then the content fails this SC.

## Baseline Requirement Outcome
* If no content fails, then the content passes the Baseline Requirement

## Advisory: Tips for streamlined test processes
...

## Notes
...
