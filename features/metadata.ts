import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// // Reflect.defineMetadata('note', 'hi there', plane);
// // Reflect.defineMetadata('height', 10, plane);

// // // console.log(plane) // => 'note' does not show up, but is added as metadata

// // const note = Reflect.getMetadata('note', plane)
// // const height = Reflect.getMetadata('height', plane)
// // console.log(note)
// // console.log(height)

// Reflect.defineMetadata('note', 'hi there', plane, 'color'); //=> adds metadata to the color prop on the plane object
// const note = Reflect.getMetadata('note', plane, 'color')
// console.log(note);

@Controller
class Plane {
  color: string = 'red';

  @markFunction("Surely you can't be serious")
  fly(): void {
    console.log('vrrrrrr');
  }
}

// function markFunction(target: Plane, key: string) {
//   Reflect.defineMetadata('secret', 123, target, key)
// }

function markFunction(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log('secret', secret);

function Controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key); // => key is in reference to the functions. In this case "fly"
    console.log(key, path)
  }
}