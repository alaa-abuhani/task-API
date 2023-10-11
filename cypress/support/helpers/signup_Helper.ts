import { reject, resolve } from "cypress/types/bluebird";
import { ICreateEmpolyeeResponse } from "../API/response/userAPIResponse";
import userInit from "../Init/userInit";

const baseUrl = Cypress.config().baseUrl;
export const URLs = {
  users: `${baseUrl}/api/users`,
};

export default class addUser {
  static addNewUserViaAPI() {
    return new Cypress.Promise<ICreateEmpolyeeResponse>(
      (resolve: any, reject) => {
        cy.addNewUser(URLs.users, userInit.InitUser()).then(() => {
          resolve("done");
        });
      }
    );
  }
}
