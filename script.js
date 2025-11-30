describe("Image tests", () => {

  it("checks image max-width", () => {
    cy.visit("http://localhost:3000");

    cy.get("main.cards img").each(($img) => {
      cy.wrap($img).should("have.css", "max-width", "250px");
    });
  });

});

