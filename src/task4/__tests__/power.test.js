const power = require("../power");

describe("power", () => {
  test("should return 1 when exponent is 0", () => {
    expect(power(5, 0)).toEqual(1);
    expect(power(10, 0)).toEqual(1);
    expect(power(2, 0)).toEqual(1);
  });

  test("should return the correct value when exponent is positive", () => {
    expect(power(2, 3)).toEqual(8);
    expect(power(3, 4)).toEqual(81);
    expect(power(5, 2)).toEqual(25);
  });

  test("should return 1 when base is 1", () => {
    expect(power(1, 10)).toEqual(1);
    expect(power(1, 5)).toEqual(1);
  });

  test("should return 0 when base is 0 and exponent is positive", () => {
    expect(power(0, 3)).toEqual(0);
    expect(power(0, 5)).toEqual(0);
  });

  test("should return the correct value when base is negative and exponent is even", () => {
    expect(power(-2, 4)).toEqual(16);
    expect(power(-3, 2)).toEqual(9);
  });

  test("should return the correct value when base is negative and exponent is odd", () => {
    expect(power(-2, 3)).toEqual(-8);
    expect(power(-3, 5)).toEqual(-243);
  });
});
