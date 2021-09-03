const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
}; 

function divide (a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log('msg:', message);
  // return null; // => returning null is still considered acceptable when you claim "void"
  // return undefined;  // => returning undefined is still considered acceptable when you claim "void"
}

const throwError = (message: string): never => { // only use "never" if the function will never end. default to void
  throw new Error(message);
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

let logWeather = (forecast: { date: Date, weather: string} ): void => {
  console.log(`The forecast for ${forecast.date} is ${forecast.weather}`)
}

// Destructuring
let logWeather2 = ({ date, weather}: { date: Date, weather: string} ): void => {
  console.log(`The forecast for ${date} is ${weather}`)
}
