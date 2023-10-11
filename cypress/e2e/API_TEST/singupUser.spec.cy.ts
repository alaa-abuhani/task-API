import addUser from "../../support/helpers/signup_Helper";

describe("Signup via API", () => {
  it("Signup : User should be able create new user ", () => {
    addUser.addNewUserViaAPI();
  });
});
