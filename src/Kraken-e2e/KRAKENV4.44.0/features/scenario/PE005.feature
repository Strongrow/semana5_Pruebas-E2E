Feature: Edit an existing post by updating its title

@user1 @web
Scenario: Edit an existing post by updating its title - Scenario PE005
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE005
  And I wait
  When I click on the Posts tab - Scenario PE005
  And I wait
  And I select a random post
  And I wait
  And I edit the selected post with title "<POST_CHANGE_TITLE>"
  And I wait
  Then I navigate to page "http://localhost:3002/ghost/#/posts"
  And I should see the new post edited called "<POST_CHANGE_TITLE>" - Scenario PE005
  And I wait