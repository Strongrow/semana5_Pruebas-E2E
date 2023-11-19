Feature: inCorrect Login

@user1 @web
Scenario: Log in with incorrect credentials - Scenario PE002
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I login with "incorrect" and "<USER_PASSWORD>" - Scenario PE002
  And I wait
  Then I should be genereted error in the email
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "incorrect" - Scenario PE002
  And I wait
  Then I should be genereted error in the email