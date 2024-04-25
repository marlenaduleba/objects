const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperties(product, {
  price: { enumerable: false },
  quantity: { enumerable: false },
});

function getTotalPrice(product) {
  const price = Object.getOwnPropertyDescriptor(product, "price").value;
  const quantity = Object.getOwnPropertyDescriptor(product, "quantity").value;
  return price * quantity;
}

function deleteNonConfigurable(obj, property) {
  if (!Object.getOwnPropertyDescriptor(obj, property).configurable) {
    throw new Error(`Cannot delete non-configurable property: ${property}`);
  }
  delete obj[property];
}

module.exports = { product, getTotalPrice, deleteNonConfigurable };
