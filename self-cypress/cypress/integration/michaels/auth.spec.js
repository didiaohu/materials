/// <reference types="cypress" />

context("Auth", () => {
  context("Login And Logout", () => {
    it("should login success when submit a valid login form", () => {
      cy.visit("/signin?returnUrl=/");

      cy.get("input#email").type("301085344@qq.com");
      cy.get("input#password").type("Hubojun123456");

      cy.get('[type="submit"]').click();

      cy.url().should("match", /\/$/);
    });

    it("xxxx", () => {
      cy.visit("/cart");
    });
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  console.log("Jerry errors!");
  return false;
});
