const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// const pepsi = [ 'brown', true, 40 ]; // => this is inferred as an array (string | bool | number)[]
// pepsi[0] = 40;
// pepsi[2] = 'brown';

// Type alias
type Drink = [string, boolean, number]

const pepsi: [string, boolean, number] = [ 'brown', true, 40 ]; // => this annotation signifies a tuple
const sprite: Drink = [ 'clear', true, 40 ]; // => this annotation signifies a tuple
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354]

const carStats = {
  horsepower: 400,
  weight: 3354
};