import addUser from "../../support/helpers/signup_Helper";

describe("Signup via API", { tags: "@smoke" }, () => {
  it("Signup: User should be able create new user ", () => {
    addUser.addNewUserViaAPI().then((resolve) => {
      cy.log(`${resolve}`);
    });
  });
});
