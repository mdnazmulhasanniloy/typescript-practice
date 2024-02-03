//super class
class PersonClass {
  name: string;
  age: number;
  address: string;

  //constructor
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // method
  mackSlip(hours: number): string {
    return `this ${this.name} will slip for ${hours} ${
      hours > 1 ? "hours" : "hour"
    }`;
  }
}

// sub class
class Student extends PersonClass {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

// sub class
class Teacher extends PersonClass {
  designation: string;

  //constructor
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  // method1
  mackSlip(hours: number): string {
    return `this ${this.name} will slip for ${hours} ${
      hours > 1 ? "hours" : "hour"
    }`;
  }

  //method2
  makeClass(NumberOfClass: number): string {
    return `this ${this.name} will take  ${NumberOfClass} ${
      NumberOfClass > 1 ? "classes" : "class"
    }`;
  }
}

const student1 = new Student("Nasir", 20, "Dhaka");
const teacher1 = new Teacher("Niloy", 20, "Cumilla", "teacher");

console.log(student1?.mackSlip(8));
console.log(teacher1.makeClass(1));
