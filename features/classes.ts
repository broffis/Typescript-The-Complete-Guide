class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color)



class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'pink')

// const car =  new Car();
// // car.drive(); //=> this throws an error as drive is now private on the Car class
// // car.honk();
car.startDrivingProcess();
console.log(car.color)