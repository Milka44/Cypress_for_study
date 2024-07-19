
import './commands'
import addCarSteps from '../support/steps/addCarSteps';

describe("Login", () => {
	
	beforeEach(() => {
		cy.login(Cypress.env('email'), Cypress.env('password'));
	});
	
	it('Verify add car', ()=> {
	addCarSteps.addCarToGarage()
	addCarSteps.verifyCarExists()
})
})