const assert = require('assert');
const { product, getTotalPrice, deleteNonConfigurable } = require('../propertyEnumerationDeletion');

describe('getTotalPrice', () => {
  it('should return total price of product', () => {
    assert.strictEqual(getTotalPrice(product), 5000);
  });
});

describe('deleteNonConfigurable', () => {
  it('should delete configurable property', () => {
    deleteNonConfigurable(product, 'name');
    assert.strictEqual(product.hasOwnProperty('name'), false);
  });
});
