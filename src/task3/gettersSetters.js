const bankAccount = {
  _balance: 1000,
  get balance() {
    return this._balance;
  },
  set balance(value) {
    this._balance = value;
  },
  get formattedBalance() {
    return `$${this._balance}`;
  },
  transfer(target, amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      target.balance += amount;
    } else {
      console.log("Insufficient funds. Transfer cannot be completed.");
    }
  },
};

const bankAccount1 = {
  _balance: 1000,
  get balance() {
    return this._balance;
  },
  set balance(value) {
    this._balance = value;
  },
  get formattedBalance() {
    return `$${this._balance}`;
  },
  transfer(target, amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      target.balance += amount;
    } else {
      console.log("Insufficient funds. Transfer cannot be completed.");
    }
  },
};

module.exports = { bankAccount };
