Feature: Create and publish a new post with a tag

@user1 @web
Scenario: Create and publish a new post with a tag - Scenario PE021
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE021
  And I wait
  When I click on the Posts tab - Scenario PE021
  And I wait
  And I click on 'New Post' Button
  And I wait
  And I create a new post with "<POST_TITLE>", "<POST_CONTENT>" and tag "<TAG_NAME>"
  And I wait
  Then I navigate to page "http://localhost:3001/ghost/#/posts"
  And I wait
  And I should see the new post edited called "<POST_TITLE>"
  And I wait