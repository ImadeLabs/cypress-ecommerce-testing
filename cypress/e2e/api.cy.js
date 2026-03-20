describe("ReqRes API Test", () => {
  it("should return users successfully", () => {
    cy.request("https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("page");
      expect(response.body.data).to.be.an("array");
      expect(response.body.data.length).to.be.greaterThan(0);
    });
  });
});
