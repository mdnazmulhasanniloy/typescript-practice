const arrayOfNumbers = [1, 2, 3, 4]; // convert to  ["1", "2", "3", "4"]

const arrayOfStrings = arrayOfNumbers?.map((number) => number.toString());
console.log(arrayOfStrings);

type areaNumber = {
  height: number;
  width: number;
};
//type properties access
type a = areaNumber["height"]; // look up types

type b = keyof areaNumber; //'height' | 'width'

// convert type area number

// type area = {
//   [key in keyof areaNumber]: boolean;
// };

type area<T> = {
  //   [key in keyof areaNumber]: areaNumber[key];
  readonly [key in keyof T]: T[key];
};

const area1: area<{ height: string }> = {
  height: "Hello",
};

// object properties access
// const obj = {
//   name: `Niloy`,
// };
// console.log(obj["name"]);
