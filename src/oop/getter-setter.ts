class BankAccount1 {
  private id: number;
  public name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  // getter
  get getBalance(): number {
    return this.balance;
  }

  // setter
  set deposit(amount: number) {
    this.balance += amount;
  }
}

const myAccount1 = new BankAccount1(1001, "Niloy", 5000);

console.log(myAccount1.getBalance);
myAccount1.deposit = 10;
console.log(myAccount1.getBalance);
