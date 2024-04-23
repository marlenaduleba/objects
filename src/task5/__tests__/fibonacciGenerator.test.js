const fibonacciGenerator = require("../fibonacciGenerator");

describe("fibonacciGenerator", () => {
  test("should generate Fibonacci sequence correctly", () => {
    const fibGen = fibonacciGenerator();
    expect(fibGen.next().value).toBe(0); // Fibonacci sequence: 0, 1, 1, 2, 3, ...
    expect(fibGen.next().value).toBe(1);
    expect(fibGen.next().value).toBe(1);
    expect(fibGen.next().value).toBe(2);
    expect(fibGen.next().value).toBe(3);
    expect(fibGen.next().value).toBe(5);
    expect(fibGen.next().value).toBe(8);
    expect(fibGen.next().value).toBe(13);
    expect(fibGen.next().value).toBe(21);
    expect(fibGen.next().value).toBe(34);
  });

  test("should return 'done: false' after generating a certain number of values", () => {
    const fibGen = fibonacciGenerator();
    for (let i = 0; i < 10; i++) {
      fibGen.next();
    }
    expect(fibGen.next()).toEqual({ value: 55, done: false });
  });
});
