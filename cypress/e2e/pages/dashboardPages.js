import { loginPage } from "./loginPages";

export class dashboardPage extends loginPage {
  constructor() {
    super() // All in __GlobalVariable Class
  }

  // ***** Actions ****
  visitDashboard() {
    cy.ftr("credentials").then((user) => {
      this.visitLogin();
      this.login(user.email[0], user.password[0]);
    });
  }

  // ***** Assertions
  assertDashboard() {
    cy.get(this.dashboardMenu).should("be.visible");
    cy.get(this.salesMenu).should("be.visible");
    cy.get(this.purchasesMenu).should("be.visible");
    cy.get(this.categoriesMenu).should("be.visible");
    cy.get(this.productsMenu).should("be.visible");
    cy.get(this.usersMenu).should("be.visible");
    cy.get(this.customersMenu).should("be.visible");
    cy.get(this.dashboardContainer).should("be.visible");
  }

}
