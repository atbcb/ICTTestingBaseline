### Advisory: Tips for Streamlined Test Processes

-   The clarity of visible focus is subjective and the minimum level is the default display setting of the {% if page.source == "Web" %}browser{% elsif page.source == "Doc" %}application{% endif %} (or OS platform) for indicating focus. Browsers may also represent visual focus differently in specific situations.
-   This test may be performed simultaneously with [Baseline 1: Keyboard Access]({{site.baseurl}}/web-baselines/01Keyboard/).
-   No focus modifications should be enabled in the test environment during testing. Some testing tools will add a visible outline around elements that receive focus. While testing tools may help testers to track focus, any markup provided by a testing tool should not be used as an indicator of visible focus for meeting this requirement.
-   Given the variability in how {% if page.source == "Web" %}browser{% elsif page.source == "Doc" %}application{% endif %} may present visual focus in specific situations, test reports should include details about testing environment, including {% if page.source == "Web" %}browser{% elsif page.source == "Doc" %}application{% endif %} and version.
-   Tab order that initially appears illogical may still meet this requirement due to an application-specific business logic.
-   It may be useful to combine these tests with tests for keyboard navigation and visible focus.
-   It may be useful to provide instructions about what "modal dialog boxes" are and how they should behave.