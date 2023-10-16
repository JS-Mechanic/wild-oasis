describe("Bookings section", async () => {
	it("checks that bookings are successfully fetched", () => {
		cy.visit("/");
		cy.url().should("include", "/dashboard");
		cy.contains("span", "Bookings")
			.click()
			.then(async () => {
				cy.url().should("contain", "/bookings");
				cy.contains("h1", "All bookings");
				cy.get(".row", {timeout: 10000}).should("have.lengthOf.lte", 10);
			});
	});

	it("should test next button functionality", () => {
		cy.visit("/bookings");
		cy.contains("button", "Next")
			.click()
			.then(async () => {
				cy.url().should("contain", "/bookings?page=2");
				cy.get(".row", {timeout: 10000}).should("have.lengthOf.lte", 10);
			});
	});
});
