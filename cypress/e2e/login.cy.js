describe("login test", () => {
  it("login", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".sc-dcJsrY > span").should("be.visible").contains("recipe");
  });
});
