import './commands';
import addCarSteps from '../support/steps/addCarSteps';

describe("Request check", () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
    });

      it('intercept add car request', () => {
        const carBrandId = 1;
        const carModelId = 3;
        const mileage = 2000;

        cy.intercept('POST', '/api/cars', (req) => {
            expect(req.body.carBrandId).to.eql(carBrandId);
            expect(req.body.carModelId).to.eql(carModelId);
            expect(req.body.mileage).to.eql(mileage);
            req.reply(); 
        }).as('addCarRequest');

        addCarSteps.addCarToGarage();

    });
});