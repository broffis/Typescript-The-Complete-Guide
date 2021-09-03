const carMakers = ['ford', 'toyota', 'chevy'];
const years: number[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camero']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // => cannot push in a number b/c carMakers is an array of strings

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10');
importantDates.push(new Date());
