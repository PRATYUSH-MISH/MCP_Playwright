# Project Documentation
## Overview
Project With Playwright Agents + Buidin MCP and GitHubCopilot
Website Link- [ScriptedQA.com](https://www.scriptedqa.com/)
Framework- POM and Hybrid Framework, CuCumber
Test case creation using planner agent
Code generation using Generator agent
Sanity and Regression tags
Parallel execution
Test reporting
Test healing agent

## Installation
1. Github Copilot
2. Playwright
3. Playwright Agents
## Comands For Installation
npm init playwright@latest
npx playwright init-agents --loop=vscode
## Commands For Installation
Go through Website
## Prompt 1 - Create Test Cases
Explore Web application - https://www.scriptedqa.com/ And Create test plan
covering 5 major core functionality of login Page.
## Prompt 2 - Create Test Cases
Explore Web application - https://www.scriptedqa.com/home And Create test case
covering 1 major core functionality of home page to Verify whether home page has
Shopping tab or not. Shopping tab should be visible and on clicking on it , it
should take us to shopping page.
## Prompt 3 - Create Test Cases
Explore Web application - https://www.scriptedqa.com/shopping And Create test case
covering 4 major core functionality of Shopping page to Verify whether Shopping
page has Working filters, Products, Add to cart button and other things.

## Prompt 4 - Create Test Cases

Explore Web application - https://www.scriptedqa.com/cart And Create test case
covering 4 major core functionality of cart page to Verify whether Cart page has
Working functionalities

## Prompt 5 - Write scripts for Test Cases in POM + Cucumber+Hybrid Framework
Generate Playwright automation for All the Test Cases in :
home-shopping-navigation-test-plan.md
Follow Page Object Model +Cucumber Framework + Hybrid Framework strictly:
Put test scenarios/steps in the Feature Files.
Put Code in Seperate Step definition folder.
Create A runner file.
Put ALL locators (XPath, CSS, Playwright locators, etc.) and page-specific
actions/methods in the pages folder.
NEVER write locators directly inside the test file.
Put reusable/generic methods in the utils folder.
Put custom/reusable Playwright fixtures in the fixtures folder.
Generate/store Playwright extent reports in the reports folder.
Reuse existing Page Objects, utilities, and fixtures wherever possible; don't
create duplicates.
Prefer Playwright recommended locators (getByRole, getByLabel, getByTestId, etc.)
over XPath/CSS whenever possible.
Follow Playwright best practices: auto-waiting, web-first assertions, no
unnecessary waitForTimeout, reliable locators, clean async/await, and independent
tests.
Keep the test file clean and business-readable; it should only call Page Object
methods and perform meaningful assertions.
Inspect the existing project structure and follow its conventions before
creating/modifying files.
Each Test cases should get launched in Chrome

Follow data-driven approaches 
Wright test cases in typescript language
Follow data-driven approches also.
Now implement the test case end-to-end.

## Prompt 6 - Add Tags
Add Sanity tags to sanity test cases and Regression Tags to regression test cases
npm run test:cart -- --tags @sanity
npm run test:cart -- --tags @regression

## Prompt 7 - create parallel running
Enable Parallel Execution
CUCUMBER_PARALLEL=2 npm run test:cart -- --headed

## Prompt 8 - Reporting
Add Html Extent Reporting in the framework . Reports should be generated after all
test cases are executed

## Prompt 9 - Healing
Heal mY failing test cases and keep on running the test case untill its fixed and
passed

## Shopping Navigation Automation
- Feature: `features/home-shopping-navigation.feature`
- Step definitions: `tests/step-definitions/home-shopping-navigation.steps.ts`
- Page objects: `tests/pages/`
- Run with `npm run test:home-shopping-navigation`
- The runner launches Google Chrome and writes Cucumber JSON and standalone HTML
  reports to `reports/home-shopping-navigation.json` and
  `reports/home-shopping-navigation.html`.