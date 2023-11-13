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
  And I wait for 1 seconds
  When I push click in menu tags
  And I wait for 1 seconds
  When I push click in new tag button
  And I wait for 1 seconds
  When I enter the name of tag "Nuevo Tag 14"
  And I wait for 1 seconds
  When I enter the color of tag "2eb24b"
  And I wait for 1 seconds
  When I enter the description of tag "Descripcion de ejemplo..."
  And I wait for 1 seconds
  When I push de button save
  And I wait for 1 seconds
  When I go to tags list
  And I wait for 5 seconds

