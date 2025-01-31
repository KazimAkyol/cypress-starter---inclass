describe("login test", () => {
  it("login", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="loginHeader"]').should("be.visible").contains("recipe");
  });
});
