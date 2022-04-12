/// <reference types="cypress" />

context("Login And Logout", () => {
  it("login fail", () => {
    cy.visit("https://vue3-realworld-example-app-mutoe.vercel.app/#/login");
    cy.get("[type=email]").type("hu@qq.com");
    cy.get("[type=password]").type("23");
    cy.get("[type=submit]").click();

    cy.contains("email or password is invalid");
  });

  it("login success", () => {
    cy.visit("https://vue3-realworld-example-app-mutoe.vercel.app/#/login");

    cy.get("[type=email]").type("301085344@qq.com");
    cy.get("[type=password]").type("123456789qwe");
    cy.get("[type=submit]").click();

    cy.url().should("match", /\/\#\/$/);
  });

  it("logout", () => {
    cy.get(`[href="#/settings"]`).click();

    cy.get("button.btn-outline-danger").contains("logout").click();

    cy.get("ul.navbar-nav")
      .should("contain", "Sign in")
      .should("contain", "Sign up");
  });

  it("login user goto login page", () => {
    cy.visit("https://vue3-realworld-example-app-mutoe.vercel.app/#/settings", {
      onLoad: () => {
        cy.contains("Your Settings");
      },
    });
  });

  it("", () => {});
});
