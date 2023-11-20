import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { StaffPage } from "../pages/staffPage.cy";

describe("Scenario-17 Invite new Staff ", () => {
  // Given I navigate to page "http://localhost:3001/ghost/#/signin"
  // And I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  // And I wait
  // When I click on the Staff tab
  // And I wait
  // And  I click on the Invite people botton
  // And I wait
  // And selected Email addres with "<Email_Address>"
  // And I wait
  // And  I click on the Send invitation now botton
  // Then I navigate to page "http://localhost:3001/ghost/#/staff"
  // And I wait
  // And I should see the invited User

  it("Invite new Staff", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let staff = new StaffPage();
    staff.inviteNewPeople(config.email_new_staff);
    takeCypressScreenshot("Invite new Staff");
  });
});
