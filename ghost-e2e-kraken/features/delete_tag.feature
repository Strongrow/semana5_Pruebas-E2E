Feature: delete_tag

@user1 @web
Scenario: Login platform Ghost
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When Enter the email "p.diazp@uniandes.edu.co"
  And I wait for 1 seconds
  When Enter the password "123456789="
  And I wait for 1 seconds
  When Push click in sing in button
  And I wait for 1 seconds
  When Push click in menu tags
  And I wait for 1 seconds
  When I push click in tag list
  And I wait for 1 seconds
  When I push click in delete button
  And I wait for 1 seconds
  When I click in confirm pop-up
  And I wait for 1 seconds
  When I go to the tags
  And I wait for 5 seconds

