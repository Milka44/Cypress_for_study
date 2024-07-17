import wellcomePageSteps from "../support/steps/WellcomePageSteps";

describe("Check all header buttons are clickable", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Verify all header buttons are clickable and links are valid", () => {
		wellcomePageSteps.clickEveryHeaderButton();
	});
});