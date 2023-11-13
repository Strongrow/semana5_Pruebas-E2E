Feature: create_tag

@user1 @web
Scenario: Login platform Ghost
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the email "p.diazp@uniandes.edu.co"
  And I wait for 1 seconds
  When I enter the password "123456789="
  And I wait for 1 seconds
  When I push click in sing in button
  And I wait for 3 seconds
  When I push click in menu post
  And I wait for 1 seconds
  When I click in edit button
  And I wait for 1 seconds
  When I add text to title "- Texto ejemplo..."
  And I wait for 1 seconds
  When I go to preview
  And I wait for 5 seconds
  