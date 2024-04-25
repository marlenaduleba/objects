const assert = require('assert');
const { bankAccount } = require('../gettersSetters');

describe('bankAccount', () => {
  beforeEach(() => {
    bankAccount.balance = 1000; // Przywracamy wartość początkową przed każdym testem
  });

  it('should update balance and formattedBalance', () => {
    bankAccount.balance = 2000;
    assert.strictEqual(bankAccount.balance, 2000);
    assert.strictEqual(bankAccount.formattedBalance, '$2000');
  });

  it('should transfer funds correctly', () => {
    const targetAccount = { balance: 0 };
    bankAccount.transfer(targetAccount, 500);
    assert.strictEqual(bankAccount.balance, 500);
    assert.strictEqual(targetAccount.balance, 500);
  });

  it('should not transfer funds if insufficient balance', () => {
    const targetAccount = { balance: 0 };
    bankAccount.transfer(targetAccount, 1500);
    assert.strictEqual(bankAccount.balance, 1000);
    assert.strictEqual(targetAccount.balance, 0);
  });

  it('should log insufficient funds message', () => {
    const targetAccount = { balance: 0 };
    const consoleSpy = jest.spyOn(console, 'log');
    bankAccount.transfer(targetAccount, 1500);
    expect(consoleSpy).toHaveBeenCalledWith('Insufficient funds. Transfer cannot be completed.');
    consoleSpy.mockRestore();
  });

  it('should correctly format currency', () => {
    bankAccount.balance = 1500;
    assert.strictEqual(bankAccount.formattedBalance, '$1500');
  });
});
