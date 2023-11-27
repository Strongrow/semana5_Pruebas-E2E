Feature: Save publication Language empty

@user1 @web
Scenario: Log in with correct credentials - Scenario 50
  Given I navigate to page "http://35.244.81.193/ghost"
  And I wait
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario 50
  And I wait
  When I click on settings Tab - Scenario 50
  And I wait
  And I click on settings Publication Language - Scenario 50
  And I click on card settings Publication Language - Scenario 50
  And I wait 
  And I change the site Language - Scenario 50
  And I wait
  Then I should see that site Language saved - Scenario 50
  And I wait
