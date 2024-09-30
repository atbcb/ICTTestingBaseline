---
title: "ICT Testing Baseline for Electronic Documents"
order-number: 1
toc-group: baseline-docs
banner-title: "Baseline for Documents"
permalink: document-baselines/
---

## ICT Testing Baseline for Electronic Documents

### Introduction

The Section 508 definition of [Document](https://www.access-board.gov/ict/#defDocument):

> Logically distinct assembly of content (such as a file, set of files, or streamed media) that: functions as a single entity rather than a collection; is not part of software; and does not include its own software to retrieve and present content for users. Examples of documents include, but are not limited to, letters, email messages, spreadsheets, presentations, podcasts, images, and movies.

The Baseline for Electronic Documents covers all [non-web documents](https://www.access-board.gov/ict/#defNonWebDocument). (A non-web document, defined in Section 508, is a document that is not: a Web page, embedded in a Web page, or used in the rendering or functioning of Web pages.) Version 1.0 was released on September 30, 2024.

### Section 508 Requirements for Documents

The [Section 508 requirements for electronic content](https://www.access-board.gov/ict/#E205-content) are provided in this section.

#### E205 - Electronic Content

##### E205.2 Public Facing

Electronic content that is public facing shall conform to the accessibility requirements specified in [E205.4](#e205.4-accessibility-standard).

##### E205.3 Agency Official Communication

Electronic content that is not public facing shall conform to the accessibility requirements specified in [E205.4](#e205.4-accessibility-standard) when such content constitutes official business and is communicated by an agency through one or more of the following:

<ol type="A">
    <li>An emergency notification</li>
    <li>An initial or final decision adjudicating an administrative claim or proceeding.</li>
    <li>An internal or external program or policy announcement.</li>
    <li>A notice of benefits, program eligibility, employment opportunity, or personnel action.</li>
    <li>A formal acknowledgment of receipt.</li>
    <li>A survey questionnaire.</li>
    <li>A template or form.</li>
    <li>Educational or training materials; or</li>
    <li>Intranet content designed as a Web page.</li>
</ol>

##### E205.4 Accessibility Standard

Electronic content shall conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.2 (incorporated by reference, [see 702.10.1](https://www.access-board.gov/ict/#702.10.1)).

**EXCEPTION:** Non-Web documents shall not be required to conform to the following four WCAG 2.2 Success Criteria:

-   2.4.1 Bypass Blocks
-   2.4.5 Multiple Ways
-   3.2.3 Consistent Navigation, and
-   3.2.4 Consistent Identification.

###### E205.4.1 Word Substitution when Applying WCAG to Non-Web Documents

For non-Web documents, wherever the term "Web page" or "page" appears in WCAG 2.2 Level A and AA Success Criteria and Conformance Requirements, the term "document" shall be substituted for the terms "Web page" and "page". In addition, in Success Criterion in 1.4.2, the phrase "in a document" shall be substituted for the phrase "on a Web page".

### Document File Format and Testing Tools Agnostic
Like the ICT Testing Baseline for Web, the ICT Testing Baseline for Electronic Documents is agnostic regarding testing tools. Each baseline test identifies the accessibility requirement being tested, the document content subject to evaluation, and step-by-step instructions for determining test outcomes. Agencies can employ any tools that align with this baseline to ensure consistent and reliable testing outcomes.

### Baseline Authors

The Federal Accessible Electronic Documents Community of Practice (AED COP) and Baseline for Documents Technical Advisory Committee authored this Baseline. It utilizes the framework of the Baseline for Web, with the goal of improving accessibility compliance for electronic documents.

### Intended Audience
The Baseline for Documents is best utilized by developers of test methodologies. It is unlikely that a single test methodology can effectively test multiple file formats. For example, a test methodology for PDF may not be useful for Word or another file format. To ensure that the test methodology tests all Section 508 requirements, include each Baseline test in the test methodology. 
