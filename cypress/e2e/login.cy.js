describe("Login Test", () => {
  it("should login successfully", () => {
    cy.loginSauceDemo();
    cy.url().should("include", "inventory");
  });
});
