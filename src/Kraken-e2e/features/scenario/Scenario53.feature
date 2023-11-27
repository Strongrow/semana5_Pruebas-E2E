Feature: Create a post and add an image

@user1 @web
Scenario: Create a post and add an image - Scenario PE007
Given I navigate to page "http://35.244.81.193/ghost"
And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario PE007
And I wait
When I click on the Posts tab - Scenario PE007
And I wait
And I click on New Post Button
And I wait
And I create a post with "<POST_TITLE>" and "<POST_CONTENT>"
And I wait
And I add an image with path "<PAGE_IMAGE_PATH>"
And I wait
And I wait
And I wait
And I click update on the published post
Then the post should be updated with the image
And I wait