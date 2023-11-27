Feature: change the time zone

@user1 @web
Scenario: Log in with correct credentials - Scenario 48
  Given I navigate to page "http://35.244.81.193/ghost"
  And I wait
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario 48
  And I wait
  When I click on settings Tab - Scenario 48
  And I wait
  And I click on settings Site timezone - Scenario 48
  And I click on card settings Site timezone - Scenario 48
  And I Select de List time zone - Scenario 48
  Then I should see the time for the selected time zone - Scenario 48