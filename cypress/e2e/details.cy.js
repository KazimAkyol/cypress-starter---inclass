describe("home test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });
  it("home", () => {
    cy.login();
    cy.home();
    cy.get("[data-test='contentHeader']").should("be.visible");
    cy.get("[data-test='contentParag']").should("be.visible");
    cy.get("[data-test='contentCal']").should("be.visible");
    cy.get("[data-test='contentImage']").should("be.visible");
    cy.get('[data-test="Fattest"]').should("be.visible").contains("Fat");
    cy.get('[data-test="Fattest"]').should("be.visible").contains("Fat"); // BURADAKİ Fat kısmı dinamik olarak item.labelden geliyor. detail sayfasını incele
    cy.get("[data-test='Carbstest']").should("be.visible").contains("Carbs"); // BURADAKİ Fat kısmı dinamik olarak item.labelden geliyor. detail sayfasını incele
  });
});
