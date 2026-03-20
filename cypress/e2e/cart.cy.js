describe("Cart Test", () => {
  it("should add product to cart", () => {
    cy.loginSauceDemo();
    cy.get(".inventory_item button").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });
});
