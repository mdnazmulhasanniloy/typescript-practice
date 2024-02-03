//generic type

type genericType<x, y> = [x, y];
type personInfoGenericType<x, y> = { name: x; age: y };

const relation: genericType<string, string> = ["person", "kate winslet"];

const personInfo: personInfoGenericType<string, number> = {
  name: "John",
  age: 30,
};

// generic interface

interface genericInterface<x, y, z> {
  name: x;
  age: y;
  adult: z;
}

const genericInterfacePersonInfo: genericInterface<string, number, boolean> = {
  name: "John",
  age: 30,
  adult: false,
};

interface IGenericCrush<y> {
  name: string;
  husband: y;
}

const crush1: IGenericCrush<{ name: string; sealery: number }> = {
  name: "John",
  husband: {
    name: "Kate",
    sealery: 30,
  },
};

interface husband {
  name: string;
  sealery: number;
}

const crush2: IGenericCrush<husband> = {
  name: "John",
  husband: {
    name: "Kate",
    sealery: 30,
  },
};
