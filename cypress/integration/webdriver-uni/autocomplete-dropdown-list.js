/// <reference types="cypress" />

describe("Verify autocomplete drop down list via webdriveruni", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list>* ").each(($el, index, $list) => {
      const prod = $el.text();
      const productToSelect = "Avocado";

      if (prod === productToSelect) {
        $el.trigger("click");
        cy.get("#submit-button").click();
        cy.url().should("include", productToSelect);
      }
    });
  });
});
