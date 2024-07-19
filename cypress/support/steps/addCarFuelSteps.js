import addFuel from "../pages/garageAddFuel";
import { car } from "../../fixtures/carData"

const addFuelExpencesSteps = {
    addExpencesToCar () {

cy.wrap(car)
        addFuel.getAddFuelBtn().click()
        addFuel.getupdateMileage().type(car.updatedMileage)
        addFuel.getAddLiters().type(car.liters)
        addFuel.getAddTotalCost().type(car.totalCost)
        addFuel.getAddModalBtn().contains('Add').click()
        
                    },

    // verifyCarExists () {
    //     addCar.getLastAddedCar().contains('Audi TT')
    // }
}   

    export default addFuelExpencesSteps