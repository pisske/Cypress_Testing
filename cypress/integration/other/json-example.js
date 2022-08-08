/// <reference types="cypress" />

describe("JSON Object Examples", () => {
  it("Json Object Examples", () => {
    const exampleObject = { key: "Tim", key1: "Jones" };
    cy.log(exampleObject["key"]);
    cy.log(exampleObject["key1"]);
  });
});
