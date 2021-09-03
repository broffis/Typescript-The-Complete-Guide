/*
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};


const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}

printVehicle(oldCivic);
*/

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}


const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}

const whatAmI = (item: Reportable): void => {
  console.log(item.summary())
}

printVehicle(oldCivic);
whatAmI(oldCivic); //=> oldCivic satisfies the interface because it has a summary. Interfaces are a minimum requirement, not a max
whatAmI(drink); //=> drink has a summary function and therefor satisfies the Reportable interface