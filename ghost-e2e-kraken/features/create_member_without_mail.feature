Feature: create_member_without_mail

@user1 @web
Scenario: Login platform Ghost
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter Email address "p.diazp@uniandes.edu.co"
  And I wait for 1 seconds
  When I enter Password "123456789="
  And I wait for 1 seconds
  When I click Sign in
  And I wait for 1 seconds
  When I click Members
  And I wait for 1 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 1 seconds
  When I click New member
  And I wait for 1 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/members/new"
  And I wait for 1 seconds
  When I enter Name "Juan camilo"
  When I enter Note "Prueba creación de miembro sin correo electrónico."
  When I click Save
  And I wait for 2 seconds
  When I enter Email in new member "juan.andres@hotmail.com"
  When I click Save
  And I wait for 4 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/members/655093e16fd69e0e702a2332"
  When I enter to edit the email "javier.juan@hotmail.com"
  When I click Save
  When I enter Name "Javier juan"
  When I click Save
  And I wait for 2 seconds
  When I click Setting delete
  When I click Setting cancel
  And I wait for 2 seconds
  When I click Setting delete
  When I click delete

  