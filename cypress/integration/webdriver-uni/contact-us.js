/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data= data
      globalThis.data = data;
    });
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    // cy.get("#contact-us ").click({ force: true });
    cy.get('[name="first_name"]').type(data.last_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("lakjflkjaslkdfj;lasdjf");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type("Vladimir");
    cy.get('[name="last_name"]').type("Jovic");
    cy.get('[name="email"]').type("vladimir@gmail.com");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
