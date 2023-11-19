Feature: publish a new page.

@user1 @web
Scenario: Publicar una nueva página - Scenario PE008
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE008
  And I wait
  When I click on the Pages tab - Scenario PE008
  And I wait
  And I click on the New Page button
  And I fill out a new page contents with title "<PAGE_TITLE>"
  And I wait
  And I click publish the page without scheduling
  And I wait
  Then I navigate to page "http://localhost:3001/ghost/#/pages?type=published"
  And I should see the new page published called "<PAGE_TITLE>"
  And I wait