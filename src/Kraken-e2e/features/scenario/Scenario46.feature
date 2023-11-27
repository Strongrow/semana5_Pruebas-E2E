Feature: change the general Title

@user1 @web
Scenario: Log in with correct credentials - Scenario PE001
  Given I navigate to page "http://35.244.81.193/ghost"
  And I wait
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE001
  And I wait
  When I click on settings Tab - Scenario PE001
  And I wait
  And I click on settings Title&description - Scenario PE001
  And I click on card settings Title&description - Scenario PE001
  And I wait
  And I change the Ghost Title with max 22 characters - Scenario PE001
  And I wait
  Then I should see that the fields are the same "<URL_HOME_PAGE>" - Scenario PE001
  And I wait