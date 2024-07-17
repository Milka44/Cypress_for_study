import './commands'
import addFuelExpencesSteps from '../support/steps/addCarFuelSteps';
import addCarSteps from '../support/steps/addCarSteps';

describe("Login and add car", () => {
		beforeEach(() => {
		cy.login(Cypress.env('email'), Cypress.env('password'));
		addCarSteps.addCarToGarage()
	    addCarSteps.verifyCarExists()
	});
	
	it('Verify add fuel expences', ()=> {
	addFuelExpencesSteps.addExpencesToCar()
})
})