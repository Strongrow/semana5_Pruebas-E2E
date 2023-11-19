Feature: Create and leave a new post in draft

@user1 @web
Scenario: Create and publish a new post with a tag - Scenario PE006
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE006
  And I wait
  When I click on the Posts tab - Scenario PE006
  And I wait
  And I click on 'New Post' Button - Scenario PE006
  And I wait
  And I create a new post with "<POST_TITLE>" and "<POST_CONTENT>"
  And I wait
  Then I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait
  And I should see the new post edited called "<POST_TITLE>" and "Draft"
  And I wait