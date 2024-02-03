//type alias
type Person = {
  name: string;
  age: number;
};

//interface

interface IPerson {
  name: string;
  age: number;
}

const personWidthTypeAlias: Person = {
  name: "John",
  age: 30,
};

const personWidthTypeInterfaces: IPerson = {
  name: "John",
  age: 30,
};

// interface extends

interface IExtendPerson extends IPerson {
  role: string;
}

const extendPerson: IExtendPerson = {
  name: "John",
  age: 30,
  role: "Developer",
};

// type signature

type addNumberType = (num1: number, num2: number) => number;
interface IAddNumber {
  (num1: number, num2: number): number;
}
const addNumber: addNumberType = (num1, num2) => num1 + num2;

console.log(addNumber(20, 40));

//array

type rollNumberType = number[];

interface IRollNumber {
  [index: number]: number;
}
