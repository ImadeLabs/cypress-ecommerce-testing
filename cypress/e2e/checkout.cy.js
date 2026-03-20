describe("Checkout Test", () => {
  it("should complete checkout successfully", () => {
    cy.loginSauceDemo();

    cy.get(".inventory_item button").first().click();
    cy.get(".shopping_cart_link").click();

    cy.get("#checkout").click();

    cy.get("#first-name").type("Ewemade");
    cy.get("#last-name").type("Enabulele");
    cy.get("#postal-code").type("100001");

    cy.get("#continue").click();
    cy.get("#finish").click();

    cy.contains("Thank you for your order!").should("be.visible");
  });
});
