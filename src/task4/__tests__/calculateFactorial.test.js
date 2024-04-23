const calculateFactorial = require("../calculateFactorial");

describe("calculateFactorial", () => {
  test("should return 1 when n is 0", () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  test("should return the factorial of a positive integer", () => {
    expect(calculateFactorial(5)).toBe(120);
  });

  test("should return 1 when n is 1", () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  test("should return 1 when n is negative", () => {
    expect(calculateFactorial(-5)).toBe(1);
  });
});
