class People {
  takeNap(): void {
    console.log("I'm sleeping 8 hours");
  }
}

class Designer extends People {
  takeNap(): void {
    console.log("I'm sleeping 10 hours");
  }
}

class Programmer extends People {
  takeNap(): void {
    console.log("I'm sleeping 5 hours");
  }
}

function getNap(params: People) {
  params.takeNap();
}

const people1 = new People();
const people2 = new Designer();
const people3 = new Programmer();

getNap(people1);
getNap(people2);
getNap(people3);

// example 2

class Shape {
  getArea(): number {
    return 0;
  }
}

//area -> pi*r*r
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape): number {
  return param.getArea();
}

const circle = new Circle(10);
const rectangle = new Rectangle(12, 24);

console.log(getAreaOfShape(circle));

console.log(getAreaOfShape(rectangle));
