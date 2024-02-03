class BankAccount {
  private id: number;
  public name: string;
  protected balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  getBalance(): void {
    console.log(`My Current Balance is : ${this.balance}`);
  }

  addDeposit(amount: number): number {
    return (this.balance += amount);
  }
}

const myAccount = new BankAccount(1001, "Niloy", 5000);

console.log(myAccount?.addDeposit(500));

class StudentAccount extends BankAccount {
  test() {
    this.balance = 0;
  }
}
