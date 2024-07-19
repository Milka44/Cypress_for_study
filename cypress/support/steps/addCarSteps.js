import addCar from "../pages/garageAddCar"

import { car } from "../../fixtures/carData"

const addCarSteps = {
    addCarToGarage () {

 
cy.wrap(car)
        addCar.getAddCarBtn().click()
        addCar.getAddCarBrand().select(car.brand)
        addCar.getAddCarModel().select(car.model)
        addCar.getAddCarMileage().type(car.mileage)
        cy.wait(1000)
        addCar.getAddModalBtn().contains('Add').click({ force: true })
                },

    verifyCarExists () {
        cy.wrap(car)
        addCar.getLastAddedCar().should('include.text', 'Audi Q7')
    }
}   

    export default addCarSteps