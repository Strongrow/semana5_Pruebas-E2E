Feature: Create a post with multiple tags - Scenario 7

@user1 @web
Scenario: Create a post with multiple tags - Scenario PE007
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE007
  And I wait
  When I click on the Posts tab - Scenario PE007
  And I wait
  And I create a new post - Scenario PE007
  And I wait
  And I fill post with name "Post with multiple tags"
  And I wait
  And I click on the post settings button - Scenario PE007
  And I assign multiple tags to the post
  And I click on close post settings - Scenario PE007
  And I wait
  And I click update the post - Scenario PE007
  And I wait
  Then I navigate to page "http://localhost:3001/ghost/#/posts?tag=tag1"
  And I wait
  And the post should be updated with the tag slug "tag1" - Scenario PE007
  And I navigate to page "http://localhost:3001/ghost/#/posts?tag=tag2"
  And I wait
  And the post should be updated with the tag slug "tag2" - Scenario PE007
  And I navigate to page "http://localhost:3001/ghost/#/posts?tag=tag3"
  And I wait
  And the post should be updated with the tag slug "tag3" - Scenario PE007