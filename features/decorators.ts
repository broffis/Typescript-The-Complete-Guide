@classDecorator
class Boat {
  // @testDecorator
  color: string = 'red';
  
  // @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError("Oops, the boat was sunk in the ocean")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    // throw new Error();

    if (speed === 'fast') {
      console.log('swish')
    } else {
      console.log('nothing')
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)
}

function testDecorator(target: any, key: string) {
  console.log({target, key})
  // console.log(target[key])  //=> undefined
  // console.log(target.color) //=> undefined
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

// new Boat().pilot();