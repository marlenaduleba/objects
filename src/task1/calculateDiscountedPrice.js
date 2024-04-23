function calculateDiscountedPrice(products, discount) {
  return products.map((product) => ({
    ...product,
    price: product.price - (product.price * discount) / 100,
  }));
}

module.exports = calculateDiscountedPrice;
