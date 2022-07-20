/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    // cy.get("#contact-us ").click({ force: true });
    //cy.get(".info_links_footer > :nth-child(5) > a").click();
    //cy.xpath("a[contains(@href,'contact')]").click();
    cy.get("a[href$='contact']")
      .click()
      .then(function (itemHeaderText) {
        cy.log("Selected the followig items " + itemHeaderText.text());
      });
    cy.get("#ContactUsFrm_first_name").type("Vladimir");
    cy.get("#ContactUsFrm_email").type("vladimir@gmail.com");
    // cy.get("#ContactUsFrm_email")
    //   .should("have.attr", "name", "email")
    cy.get("#ContactUsFrm_enquiry").type("some random text ");
    //cy.get(".col-md-6 > .btn").click();
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("test has completed");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {});
});
