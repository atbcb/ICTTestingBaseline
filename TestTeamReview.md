# Guidelines for Test Team Review
## Use GitHub to propose edits
1. Bookmark this link: https://github.com/Section508Coordinators/ICTTestingBaseline/tree/TestTeamReview; start here for any changes you might propose
2. Navigate to and open the file you want to reivew
3. Click the "Edit this file" button
4. Edit the text of the file to make your proposed changes
5. Under the "Commit changes" section (below the "Edit file" box where you made your changes), select the "Create a new branch for this commit and start a pull request" radio button option.
6. Enter a name for your branch, using the following format: [your user name]-[Baseline #]; for example "drewnielson-10"
7. On the "Open Pull Request" screen, under the "Reviewers" section on the right-hand side of the screen, click the gear button to edit reviewers and add Section508Coordinators/corereview (type "core" in the search box to jump to 
8. Add any comments, as appropriate, and click "Open Pull Request" at the bottom of the screen
9. Create a new branch and open a new pull request for each Baseline file that you edit (but not for every commit -- you can make numerous changes to the same document, with numerous commits or saves, and still keep it as part of the same branch; if you come back later to make another change to the same file, you would select the "Commit directly to the <code>[your user name]-[Baseline #]</code> branch" option when you commit the change.) 

Any change you make to a file will be visible and apparent during review, using the "Compare" feature and/or viewing the pull request you open, so no need to make any additional comments or otherwise point out your changes within the body of the text. If you have any comments to explain or justify your changes, however, please include those in the comments box on the "Open Pull Request" screen.

## Definition of done
To consider your review complete, all of the following should be true:
* Check the text of the Baseline for clarity, logic, grammar
    * Is it easy to understand?
    * Does it make sense?
* Compare the Baseline text Rationale against the referenced Success Criteria
    * Does the Rationale (or at least the scope as defined in the Rationale) align with the referenced SC(s)?
    * Is the Baseline aligned with the right SC(s)?
    * Are there other SC(s) missing that should be included in this set of tests?
* Compare the test procedures to the referenced WCAG Success Criteria
    * Would these test procedures be enough to evaluate conformance to the SC(s) (or at least for the scope of the SC(s) as defined in the Baseline Rationale)?
    * Would these test procedures validate the sufficient techniques referenced in the SC?
    * Would these test procedures catch the common failures referenced in the SC?
    * Would thes test procedures validate or catch other valid techniques or failures that I have seen commonly in my testing experience?
* Make and propose changes to improve clarity, logic, and/or correctness in properly evaluating conformance with the intended SCs
* Commit your changes to a new branch and open a pull request for each file you review
* Add comments to the pull request to describe or justify your changes

## Review Assignments
Generally two reviewers per baseline

| Baseline | Reviewer 1 | Reviewer 2 |
|----------|------------|------------|
| 1. Keyboard navigation | | |
| 2. Focus (visible) | | |
| 3. Focus (order) | | |
| 4. Focus (Revealing hidden content) | | |
| 5. Repetitive Content | | |
| 6. Multi-state components | | |
| 7. Images | | |
| 8. Color (meaning) | | |
| 9. Color (contrast) | | |
| 10. Flashing | | |
| 11. Forms (associated instructions) | | |
| 12. Page Titles | | |
| 13. Data Tables | | |
| 15. Headings | | |
| 16. Links and User controls | | |
| 17. Language | | |
| 18. Audio (transcripts) | | |
| 19. Video (descriptions) | | |
| 20. Synchronized media (captions) | | |
| 21. Synchronized media (descriptions) | | |
| 22. Style-sheet non-dependence | | |
| 23. Frames | | |
| 24. Alternate pages | | |
| 25. Time outs | | |
| 28. Built-in accessibility features | | |
| 29. PLACEHOLDER -- Pause, Stop, Hide, Control | | |
| 30. PLACEHOLDER -- Multiple Ways | | |
| 31. PLACEHOLDER -- Context Changes | | |
| 32. PLACEHOLDER -- Parsing | | |

Did you have a list for the ITTP group?
a.	How to assign? How many people reviewing each?
b.	What to look for?
i.	Any criteria missing or covered elsewhere?
ii.	CR form – anything useful from it? (training affected, etc.)
iii.	Testing tool?
iv.	Clarity
v.	Spelling, etc.? do directly, will be reviewed
c.	etc
