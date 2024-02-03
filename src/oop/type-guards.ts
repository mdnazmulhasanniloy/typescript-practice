// key of guard
type AlphaNumeric = string | number;
function add(param1: AlphaNumeric, param2: AlphaNumeric) {
  if (typeof param1 == "number" && typeof param2 == "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add("1", "2"));

// in guard

type normalUserType = {
  name: string;
};
type adminUserType = {
  name: string;
  role: "admin";
};

const user1: normalUserType = {
  name: "Nasir",
};

const user2: adminUserType = {
  name: "Niloy",
  role: "admin",
};

function getUser(user: normalUserType | adminUserType) {
  if ("role" in user) {
    return `I am Admin my Role is ${user.role}`;
  } else {
    return `I am normal user`;
  }
}

console.log(getUser(user2));

// instance of guards

class Animal1 {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`I am making sound`);
  }
}

class Dog extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I'm barking`);
  }
}

class Cat extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMew() {
    console.log(`I'm mewing`);
  }
}

function getAnimals(animals: Animal1) {
  if (animals instanceof Dog) {
    return animals.makeBark();
  } else if (animals instanceof Cat) {
    return animals.makeMew();
  } else {
    return animals.makeSound();
  }
}

const dog1 = new Dog("Jurman", "Dog"); //insolence dog
const cat1 = new Cat("daka", "Cat"); //insolence cat

console.log(getAnimals(dog1));
console.log(getAnimals(cat1));

// npx ts-node-dev --respawn ./src/oop/
