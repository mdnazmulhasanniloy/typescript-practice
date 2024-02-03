// primitive

// 1.strimg
const Name: string = "Niloy";
console.log(Name);

// 2.number
const Roll: number = 2;
console.log(Roll);

// 3.boolean
const isNumber: boolean = false;
console.log(isNumber);

// 4.null
const result: null = null;
console.log(result);

// 5.undefined
const rsl: undefined = undefined;
console.log(rsl);

// nonde primitive

// .1 array

const string_array: string[] = ["a", "b", "c", "d", "e"];
const number_array: number[] = [1, 2, 3, 4];

//tuple array
const user: [number, string, number, string] = [1, "Nazmul", 3, "Niloy"];

//2. object

const users: {
  readonly id: number;
  name: string;
  age?: number;
} = {
  id: 1,
  name: "Nazmul",
  age: 3,
};

// function ts

// .1 normal function

// if use any type then go to tsconfig.json file and noImplicitAny option it will true
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 2));

//2. arrow function

const userName = (firstName: string, lastName: string) =>
  `${firstName} ${lastName}`;

console.log(userName("Nazmul", "Hasan"));

const person: {
  name: string;
  balance: number;
  // when a function don't return then function type is void
  addBalance(mony: number): void;
} = {
  name: "Niloy",
  balance: 5,
  addBalance(mony: number) {
    console.log(`new balance is ${this.balance + mony}`);
  },
};
person.addBalance(50);

//alwase a function default parameters use to second parameter. ts can't accept first parameters set default
function division(a: number, b: number = 2): number {
  return a / b;
}
console.log(division(20));
// console.log(person);

// spread operator

const friends: string[] = ["Jahid", "Torik"];
const myFriends: string[] = ["Nasir", "Shamim"];

const newFriends: string[] = [...friends, ...myFriends];
console.log(newFriends);

//rest poerator
const getFriends = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};

getFriends(...newFriends);

// array and object destracuring
