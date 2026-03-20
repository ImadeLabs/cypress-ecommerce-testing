describe("Invalid Login Test", () => {
  it("should show error for locked out user", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get('[data-test="error"]').should("be.visible");
  });
});
