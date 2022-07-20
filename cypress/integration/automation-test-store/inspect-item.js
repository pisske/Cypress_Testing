/// <reference types="cypress" />

describe("inspect Automation Test Store items using chain of commnad ", () => {
  it("Clicking first Item using item header", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });
  it.only("Clicking first Item using item text", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemHeaderText) {
        console.log("Selected the followint items " + itemHeaderText.text());
      });
    console.log("test123");
  });
});
