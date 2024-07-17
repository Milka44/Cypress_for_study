class AddFuel {

    addFuelBtn = ":nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense" 
    updateMileage = "#addExpenseMileage"
    addLiters ="#addExpenseLiters"
    addTotalCost ="#addExpenseTotalCost"
    addModalBtn =".modal-footer > .btn-primary"
    
       
    getAddFuelBtn() {
            return cy.get(this.addFuelBtn)
        
    }
    getupdateMileage() {
        return cy.get(this.updateMileage).clear()
    
}   getAddLiters() {
    return cy.get(this.addLiters)

}
    getAddTotalCost() {
    return cy.get(this.addTotalCost)

}
    getAddModalBtn() {
    return cy.get(this.addModalBtn)

}
}

const addFuel = new AddFuel();
export default addFuel;