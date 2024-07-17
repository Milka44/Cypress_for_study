export let car = {
  brand: 'Audi',
  model: 'Q7',
  mileage: 2000,
  liters: 20,
  totalCost: 5,
  get updatedMileage() {
      return this.mileage + 10;
  }
};