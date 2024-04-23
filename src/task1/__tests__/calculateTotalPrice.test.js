const { calculateTotalPrice } = require('../calculateTotalPrice');

describe('calculateTotalPrice', () => {
  test('should return total price of all products', () => {
    const products = [
      { name: 'Product 1', price: 100 },
      { name: 'Product 2', price: 200 },
      { name: 'Product 3', price: 300 },
    ];

    const totalPrice = calculateTotalPrice(products);

    expect(totalPrice).toEqual(600);
  });

  test('should return 0 for empty array', () => {
    const products = [];

    const totalPrice = calculateTotalPrice(products);

    expect(totalPrice).toEqual(0);
  });
});
