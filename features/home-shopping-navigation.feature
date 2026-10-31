@sanity @regression
Feature: Shopping navigation from the home page
  As an authenticated user
  I want to open the Shopping page from the home page
  So that I can browse products

  Scenario Outline: Open Shopping from the home page
    Given I open the protected home path "<homePath>"
    Then I am redirected to the sign-in page
    When I sign in with username "<username>" and password "<password>"
    Then I am on the home page
    And the Shopping tab is visible
    When I open the Shopping tab
    Then I am on the Shopping page at "<shoppingPath>"
    And the Products heading is visible

    Examples:
      | homePath | username | password | shoppingPath |
      | /home    | admin    | Pass@9211 | /shopping    |
