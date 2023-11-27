Feature: change the general Title with 350 characters

@user1 @web
Scenario: Log in with correct credentials - Scenario PE002
  Given I navigate to page "http://35.244.81.193/ghost"
  And I wait
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE002
  And I wait
  When I click on settings Tab - Scenario PE002
  And I wait
  And I click on settings Title&description - Scenario PE002
  And I click on card settings Title&description - Scenario PE002
  And I wait
  And I change the Ghost Title with max 350 characters - Scenario PE002
  And I wait
  Then I should see that the Title saved - Scenario PE002
  And I wait