/// <reference types="cypress" />

describe("Interact with drop down list  via webdriver uni", () => {
  it("Select specific values via select drop dow list ", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdown-menu-1").select("c#");
    cy.get("#dropdown-menu-2")
      .seledt("testing")
      .should("have.value", "testing");
    cy.get("#dropdown-menu-3").select("jquery").contains("JQuery");
  });
});
