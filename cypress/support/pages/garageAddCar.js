
class AddCar {

addCarBtn = ".panel-page_heading > .btn" 
addCarBrand ="#addCarBrand"
addCarModel ="#addCarModel"
addCarMileage ="#addCarMileage"
addModalBtn =".modal-footer > .btn-primary"
carLastAddedName = ":nth-child(1) > app-car > .car > .car-heading > .car_base > .car-group > .car_name"
	
getAddCarBtn() {
		return cy.get(this.addCarBtn)
	
}
getAddCarBrand() {
    return cy.get(this.addCarBrand)

}
getAddCarModel() {
    return cy.get(this.addCarModel)

}
getAddCarMileage() {
    return cy.get(this.addCarMileage)

}
getAddModalBtn() {
    return cy.get(this.addModalBtn)

}
getLastAddedCar(){
    return cy.get(this.carLastAddedName)
}
}

const addCar = new AddCar();
export default addCar;