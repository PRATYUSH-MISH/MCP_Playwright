# Playwright Agents + MCP + GitHub Copilot Automation Framework

## Project Overview

This project demonstrates end-to-end web test automation using
**Playwright Agents**, **GitHub Copilot**, and **MCP (Model Context
Protocol)** with a maintainable **Page Object Model (POM)** and
**Cucumber-based hybrid framework**.

The target application is [ScriptedQA](https://www.scriptedqa.com/).

### Key capabilities

-   AI-assisted test planning with the **Planner agent**
-   Test code generation with the **Generator agent**
-   Test execution using Playwright and Cucumber
-   Page Object Model with reusable page-specific actions and locators
-   Data-driven test design
-   Sanity and regression tagging
-   Parallel execution
-   HTML and Cucumber JSON reporting
-   Test failure investigation and repair with the **Healer agent**

> Agent-generated tests and repairs must be reviewed. A healing agent
> should not simply change assertions or application behavior to make a
> test pass; verify that the repair preserves the intended requirement.

------------------------------------------------------------------------

## 1. Prerequisites

Install the following before setting up the project:

-   Node.js (use a supported current LTS release)
-   npm
-   Visual Studio Code
-   GitHub Copilot access in VS Code
-   Google Chrome
-   A project folder opened in VS Code

You should also have the Playwright and Cucumber dependencies required
by your framework.

------------------------------------------------------------------------

## 2. Install Playwright

Create a Node.js project if you do not already have one:

``` bash
npm init -y
```

Install Playwright Test:

``` bash
npm init playwright@latest
```

Follow the prompts to select TypeScript and install the browsers. If
your existing project already has Playwright configured, do not
initialize it again.

------------------------------------------------------------------------

## 3. Install and Configure Playwright Agents

From the root directory of your project, run:

``` bash
npx playwright init-agents --loop=vscode
```

### What does `--loop=vscode` mean?

The `init-agents` command initializes the Playwright agent setup in your
repository. The `--loop=vscode` option selects the **VS Code agent-loop
configuration**.

In practical terms, it prepares the project for an iterative workflow in
which you can use the configured agents through your VS Code
coding-agent environment:

1.  **Plan** --- inspect the application and produce a test plan.
2.  **Generate** --- turn the approved scenarios into Playwright
    automation.
3.  **Execute** --- run the tests and inspect the results.
4.  **Heal** --- investigate failures and propose or apply appropriate
    test-code repairs.
5.  **Repeat** --- run the relevant tests again and review the result.

The word **loop** refers to this iterative agent-assisted workflow. It
does not mean that Playwright will automatically run tests forever, nor
does the command itself create your complete POM/Cucumber framework,
configure parallel execution, or guarantee that failing tests will be
fixed. Those capabilities must be configured in your project and agent
instructions.

The `vscode` value identifies the environment/configuration being
initialized. It is not a test name, browser name, or Cucumber tag.

After initialization:

-   Review the files and instructions created by the command.
-   Keep the generated agent configuration in version control when
    appropriate.
-   Open the repository in VS Code and use GitHub Copilot Chat/agent
    mode with the generated instructions.
-   Follow the prompts and review changes before accepting them.

------------------------------------------------------------------------

## 4. Application Under Test

-   Main site: <https://www.scriptedqa.com/>
-   Home page: <https://www.scriptedqa.com/home>
-   Shopping page: <https://www.scriptedqa.com/shopping>
-   Cart page: <https://www.scriptedqa.com/cart>

Check that the application is reachable and that the test account or
test data required by the login scenarios is available. Do not commit
passwords, tokens, or other secrets to the repository.

------------------------------------------------------------------------

## 5. AI-Assisted Test Planning Prompts

Use the following prompts with the Planner agent. Review the generated
scenarios and save the approved test plan in your project before asking
the Generator agent to implement it.

### Prompt 1 --- Login test plan

``` text
Explore https://www.scriptedqa.com/ and create a test plan covering
five major core functionalities of the login page.

Include positive, negative, validation, and relevant navigation scenarios.
For each scenario, provide a clear title, preconditions, test data,
steps, and expected results.
```

### Prompt 2 --- Home-to-shopping navigation

``` text
Explore https://www.scriptedqa.com/home and create test cases to verify
that the Shopping tab is visible.

Verify that clicking the Shopping tab navigates to the shopping page.
Include meaningful assertions for visibility and destination URL/page content.
```

### Prompt 3 --- Shopping page

``` text
Explore https://www.scriptedqa.com/shopping and create four major
functional test scenarios covering:

1. Shopping page and product visibility
2. Product filters and their behavior
3. Product details or product selection
4. Add-to-cart behavior

Use observable expected results and realistic test data.
```

### Prompt 4 --- Cart page

``` text
Explore https://www.scriptedqa.com/cart and create four major
functional test scenarios for the cart page.

Cover cart contents, quantity or item updates where supported,
item removal, and relevant totals or empty-cart behavior.
Use only functionality that actually exists in the application.
```

------------------------------------------------------------------------

## 6. Generate Automation with POM + Cucumber + Hybrid Framework

After reviewing the test plan, ask the Generator agent to implement the
approved scenarios.

### Prompt 5 --- Framework implementation

``` text
Implement the approved test cases using Playwright with TypeScript,
Cucumber, Page Object Model, and a hybrid/data-driven approach.

Before changing anything, inspect the existing project structure and
follow its conventions. Reuse existing Page Objects, utilities, fixtures,
and configuration wherever possible. Do not create duplicate components.

Architecture requirements:

- Put business-readable scenarios in the features folder.
- Put Cucumber step definitions in a separate step-definitions folder.
- Create or update the Cucumber runner/configuration as required.
- Put all page-specific locators and actions in the pages folder.
- Never place raw page locators directly in feature files or step definitions.
- Put reusable generic methods in the utils folder.
- Put reusable Playwright fixtures in the fixtures folder.
- Use data-driven test data where it improves maintainability.
- Prefer getByRole, getByLabel, getByTestId, and other resilient locators.
- Use auto-waiting and web-first assertions.
- Avoid unnecessary waitForTimeout calls.
- Use clean async/await and independent test scenarios.
- Configure the required browser project to launch Google Chrome.
- Generate Cucumber JSON and HTML reports in the reports folder.

Implement the approved scenarios end-to-end. Do not invent selectors or
application behavior: inspect the application and validate locators.
```

**Important:** Playwright's bundled test runner and Cucumber are
separate test-running approaches. If this project uses Cucumber, make
sure the Cucumber runner is the actual command used to execute the
`.feature` scenarios, and that the Playwright browser/page lifecycle is
correctly managed by your support code or fixtures.

------------------------------------------------------------------------

## 7. Add Sanity and Regression Tags

Use Cucumber tags to categorize scenarios.

### Prompt 6 --- Add tags

``` text
Review the feature files and add @sanity to the critical smoke scenarios
and @regression to the broader regression scenarios.

Do not change scenario behavior or duplicate scenarios. Ensure the
package scripts support running each tag independently.
```

Example commands (use the script names configured in your
`package.json`):

``` bash
npm run test:cart -- --tags "@sanity"
npm run test:cart -- --tags "@regression"
```

A tag filter only works if the Cucumber runner receives the tag
expression. Confirm the syntax supported by your installed Cucumber
version and npm script.

------------------------------------------------------------------------

## 8. Enable Parallel Execution

### Prompt 7 --- Parallel execution

``` text
Configure Cucumber parallel execution for this framework.

Use two workers initially. Ensure scenarios do not share mutable browser
pages, sessions, or test data in a way that causes race conditions.
Keep reports valid when scenarios run in parallel.
Document how to change the worker count.
```

Example:

``` bash
CUCUMBER_PARALLEL=2 npm run test:cart -- --headed
```

This command assumes your project reads `CUCUMBER_PARALLEL` and maps it
to the Cucumber parallel-worker setting. On Windows,
environment-variable syntax differs in Command Prompt and PowerShell;
use the syntax supported by your shell or a cross-platform
environment-variable package.

------------------------------------------------------------------------

## 9. Configure HTML Reporting

### Prompt 8 --- Reporting

``` text
Configure Cucumber JSON and standalone HTML reporting.

Generate reports after the test run has completed, including when scenarios
fail. Save report artifacts in the reports folder. Include scenario status,
steps, duration, and failure details where supported.

Make sure parallel execution does not cause report files to overwrite
or become corrupted.
```

For the Shopping Navigation suite, the expected report paths are:

-   `reports/home-shopping-navigation.json`
-   `reports/home-shopping-navigation.html`

------------------------------------------------------------------------

## 10. Failure Investigation and Healing

### Prompt 9 --- Heal failing tests

``` text
Run the failing test scenarios and investigate each failure.

Identify whether the cause is an application defect, test-data issue,
environment issue, timing problem, or incorrect automation.

If the automation is wrong, propose the smallest safe repair while
preserving the original test intent and expected behavior. Do not weaken
assertions, skip tests, or change expected results merely to obtain a pass.

Re-run the affected scenario after the repair and report:
- Original failure and root cause
- Files changed
- Repair made
- Re-run result
- Any unresolved issue
```

**Healing guidance:** A test passing after a code change is not
sufficient proof that the repair is correct. Review the diff and confirm
that the original business requirement is still being tested.

------------------------------------------------------------------------

## 11. Shopping Navigation Automation

The Shopping Navigation suite is organized as follows:

  ------------------------------------------------------------------------------------------------
  Component                           Location
  ----------------------------------- ------------------------------------------------------------
  Feature file                        `features/home-shopping-navigation.feature`

  Step definitions                    `tests/step-definitions/home-shopping-navigation.steps.ts`

  Page objects                        `tests/pages/`

  JSON report                         `reports/home-shopping-navigation.json`

  HTML report                         `reports/home-shopping-navigation.html`
  ------------------------------------------------------------------------------------------------

Run the suite with:

``` bash
npm run test:home-shopping-navigation
```

The runner should launch Google Chrome and generate the Cucumber JSON
and standalone HTML reports at the paths listed above.

------------------------------------------------------------------------

## 12. Suggested End-to-End Workflow

``` text
Explore application
       |
       v
Planner agent creates test plan
       |
       v
Review and approve scenarios
       |
       v
Generator agent creates automation
       |
       v
Review POM, steps, data, and configuration
       |
       v
Run tests in Google Chrome
       |
       v
Review Cucumber/HTML reports
       |
       v
Investigate failures with Healer agent
       |
       v
Review repair and re-run tests
       |
       v
Confirm final results
```

------------------------------------------------------------------------

## 13. Useful Commands

  -----------------------------------------------------------------------------------------
  Purpose                             Command
  ----------------------------------- -----------------------------------------------------
  Initialize Playwright               `npm init playwright@latest`

  Initialize VS Code agent loop       `npx playwright init-agents --loop=vscode`

  Run Shopping Navigation suite       `npm run test:home-shopping-navigation`

  Run cart sanity tests               `npm run test:cart -- --tags "@sanity"`

  Run cart regression tests           `npm run test:cart -- --tags "@regression"`

  Run cart tests with two workers     `CUCUMBER_PARALLEL=2 npm run test:cart -- --headed`
  -----------------------------------------------------------------------------------------

> Commands are examples based on the scripts described in this document.
> Confirm that each script exists in `package.json` and that the runner
> supports the options shown.

------------------------------------------------------------------------

## 14. Final Notes

-   Keep test scenarios independent and deterministic.
-   Use dedicated test data and avoid hard-coded credentials.
-   Prefer stable, user-facing locators.
-   Keep locators and page-specific behavior inside Page Objects.
-   Review AI-generated code and healing changes.
-   Save reports and relevant failure artifacts for debugging.
-   Update this README whenever commands, folders, or report locations
    change.
