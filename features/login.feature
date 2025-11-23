Feature: Login

  Scenario: Login as standard user
    Given I am on the login page
    When I login as a standard user
    Then I should see the products page
