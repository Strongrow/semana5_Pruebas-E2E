Feature: Correct Login

@user1 @web
Scenario: Log in with correct credentials - Scenario PE001
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE001
  And I wait
  Then I should be redirected to the user dashboard "<URL_HOME_PAGE>"