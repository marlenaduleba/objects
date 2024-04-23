const calculateDiscountedPrice = require("../calculateDiscountedPrice");

describe("calculateDiscountedPrice", () => {
  test("should return array of products with discounted prices", () => {
    const products = [
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 200 },
    ];
    const discountPercentage = 20;

    const discountedProducts = calculateDiscountedPrice(
      products,
      discountPercentage
    );

    expect(discountedProducts).toEqual([
      { name: "Product 1", price: 80 },
      { name: "Product 2", price: 160 },
    ]);
  });

  test("should handle empty array", () => {
    const products = [];
    const discountPercentage = 10;

    const discountedProducts = calculateDiscountedPrice(
      products,
      discountPercentage
    );

    expect(discountedProducts).toEqual([]);
  });

  test("should handle zero discount", () => {
    const products = [
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 200 },
    ];
    const discountPercentage = 0;

    const discountedProducts = calculateDiscountedPrice(
      products,
      discountPercentage
    );

    expect(discountedProducts).toEqual(products);
  });
});
