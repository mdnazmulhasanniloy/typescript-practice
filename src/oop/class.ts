class Animal {
  //   name: string;
  //   species: string;
  //   sounds: string;

  constructor(
    public name: string,
    public species: string,
    public sounds: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sounds = sounds;
  }

  makeSound() {
    console.log(`the ${this.name} ${this.species} says ${this.sounds} `);
  }
}

const dog = new Animal(`jurman Shaper`, `dog`, `ghew ghew`);
const cat = new Animal(`pershiam`, `cat`, `mew mew`);

dog.makeSound();
cat.makeSound();
