interface crushMind {
  name: string;
  age: number;
  sealery: number;
}
// constraints fores to do that
const addMeInMyCrushMind = <T extends crushMind>(myInfo: T) => {
  const crush = "kate winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

const myInfo = {
  name: "kate",
  age: 24,
  sealery: 100,
  other1: false,
  other2: null,
};

const result1 = addMeInMyCrushMind(myInfo);

// constraints use 2

type personType = {
  name: string;
  age: number;
  sealery: number;
  address: string;
};

type newType = "name" | "age" | "sealery" | "address"; //manually do

type newTypeUsingKeyOf = keyof personType;

const a: newType = "age";
const b: newTypeUsingKeyOf = "sealery";

function getProperty<x, y extends keyof x>(obj: x, key: y) {
  obj[key];
}

const result2 = getProperty({ name: "Mr.X", age: 100 }, "age");
