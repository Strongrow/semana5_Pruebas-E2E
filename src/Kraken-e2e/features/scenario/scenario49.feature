Feature: change publication Language

@user1 @web
Scenario: Log in with correct credentials - Scenario 49
  Given I navigate to page "http://35.244.81.193/ghost"
  And I wait
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario 49
  And I wait
  When I click on settings Tab - Scenario 49
  And I wait
  And I click on settings Publication Language - Scenario 49
  And I click on card settings Publication Language - Scenario 49
  And I wait 
  And I change the site Language - Scenario 49
  And I wait
  Then I should see that site Language saved - Scenario 49
  And I wait
