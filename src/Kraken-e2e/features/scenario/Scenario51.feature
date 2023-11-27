Feature: Invite people y the Tab Staff

@user1 @web
Scenario: Log in with correct credentials - Scenario 51
  Given I navigate to page "http://35.244.81.193/ghost"
  And I wait
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario 51
  And I wait
  When I click on settings Tab - Scenario 51
  And I wait
  And I click on settings Staff - Scenario 51
  And I click on card settings Staff - Scenario 51
  And I wait 
  And I Invite new people with "<INVITE_EMAIL>" - Scenario 51
  And I wait
  Then I should see that person wasn't invited - Scenario 51
  And I wait