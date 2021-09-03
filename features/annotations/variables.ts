let apples = 5; //=> Type 'number' was inferred after assigning numeric value of 5
apples = 10;
// apples = 'a'; //=> cannot set Type 'number' to Type 'string'

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3,4];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = { // semicolon (;) separates value type declarations
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i) => { // use void for when the function does not return a value
  console.log(i)
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{ "x": 10, "y": 20 }'
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i]
}