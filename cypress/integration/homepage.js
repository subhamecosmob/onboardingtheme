describe("renders the home page", () => {
	it("renders correctly ", () => {
		cy.visit("/login");
		//		cy.get("#root").should("exist");
	});

	it("allows to write", () => {
		cy.visit("/login");

		cy.get(":nth-child(1) > input").type("mayur");
		cy.get(":nth-child(2) > input").type("12345");
		/* ==== Generated with Cypress Studio ==== */
		cy.get(".MuiButton-root").click();
		/* ==== End Cypress Studio ==== */

		cy.url().should("include", "/");
	});

	it("check delete button exist for write users", () => {
		cy.visit("/login");

		cy.get(":nth-child(1) > input").type("mayur");
		cy.get(":nth-child(2) > input").type("12345");
		cy.get(".MuiButton-root").click();
		cy.get(":nth-child(2) > .navLink > .navitem-container > span").click();
		cy.url().should("include", "Users");
		cy.get(".MuiButtonBase-root").should("exist");
		cy.get(
			'.MuiDataGrid-cell--withRenderer.MuiDataGrid-cell--textLeft > .MuiButtonBase-root > [data-testid="DeleteOutlinedIcon"]'
		).should("exist");
	});

	it("check delete button should not exist for write users", () => {
		cy.visit("/login");

		cy.get(":nth-child(1) > input").type("subham");
		cy.get(":nth-child(2) > input").type("12345");
		cy.get(".MuiButton-root").click();
		cy.get(":nth-child(2) > .navLink > .navitem-container > span").click();
		cy.url().should("include", "Users");
		cy.get(".MuiButtonBase-root").should("exist");
		cy.get(
			'.MuiDataGrid-cell--withRenderer.MuiDataGrid-cell--textLeft > .MuiButtonBase-root > [data-testid="DeleteOutlinedIcon"]'
		).should("not.exist");
		/* ==== Generated with Cypress Studio ==== */

		/* ==== End Cypress Studio ==== */
	});

	it("check logout button", () => {
		cy.visit("/login");

		cy.get(":nth-child(1) > input").type("subham");
		cy.get(":nth-child(2) > input").type("12345");
		cy.get(".MuiButton-root").click();
		cy.get(":nth-child(2) > .navLink > .navitem-container > span").click();

		cy.get('[data-testid="LogoutIcon"]').click();
		cy.url().should("eq", "http://localhost:3000/Login");
	});
});
