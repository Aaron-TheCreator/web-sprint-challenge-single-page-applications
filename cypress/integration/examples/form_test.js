describe("test our form inputs", () => {

    beforeEach( () => {
        cy.visit("http://localhost:3000/pizza");
    })
    it("adds text to inputs and submits form", () => {
        cy.get("[data-cy=name]")
            .type("Daddy")
            .should("have.value", "Daddy")
        cy.get("[data-cy=size]")
            .select("Extra-Large")
            .should("have.value", "Extra-Large")
        cy.get("[data-cy=pepperoni]")
            .check()
            .should("be.checked")
        cy.get("[data-cy=sausage]")
            .check()
            .should("be.checked")
        cy.get("[data-cy=bellpepper]")
            .check()
            .should("be.checked")
        cy.get("[data-cy=olive]")
            .check()
            .should("be.checked")
        cy.get("[data-cy=instructions]")
            .type("Extra Sausages and Extra Cheese, Please!")
            .should("have.value", "Extra Sausages and Extra Cheese, Please!")
        cy.get("[data-cy=submit]")
            .click()
    });
});