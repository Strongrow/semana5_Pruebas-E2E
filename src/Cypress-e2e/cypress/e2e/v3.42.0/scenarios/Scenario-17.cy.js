import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { StaffPage } from "../pages/staffPage.cy";


describe("Scenario-17 Invite new Staff ", () => {
  it("Invite new Staff", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let staff = new StaffPage();
    staff.inviteNewPeople(config.email_new_staff);
    takeCypressScreenshot("Invite new Staff");

  });
});
