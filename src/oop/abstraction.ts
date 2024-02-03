//interface
// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle = {
//     name: "car",
//     model: "bmw"
// };

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("Im Starting Engine");
  }

  stopEngine(): void {
    console.log("Im Stopeing Engine");
  }
  move(): void {
    console.log("Im moving");
  }

  test() {
    console.log("I am for testing purpose");
  }
}

const vehicle1 = new Vehicle("car", "bmw", 200);
console.log(vehicle1);

//abstract class

abstract class Vehicle2 implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;

  abstract stopEngine(): void;
  move(): void {
    console.log("Im moving");
  }
}

class Car extends Vehicle2 {
  startEngine(): void {
    console.log("I'm Starting Engine");
  }

  stopEngine(): void {
    console.log("I'm Stopping Engine");
  }
}

const vehicle2 = new Car("car", "Hunda", 500);
console.log(vehicle2);
