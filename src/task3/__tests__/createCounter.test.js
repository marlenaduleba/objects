const createCounter = require("../createCounter");

describe("createCounter", () => {
  test("should return a function", () => {
    const counter = createCounter();
    expect(typeof counter).toBe("function");
  });

  test("should return incremented count on each call", () => {
    const counter = createCounter();
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
  });

  test("should return unique counter for each call to createCounter", () => {
    const counter1 = createCounter();
    const counter2 = createCounter();
    expect(counter1()).toBe(1);
    expect(counter2()).toBe(1);
    expect(counter1()).toBe(2);
    expect(counter2()).toBe(2);
  });
});
