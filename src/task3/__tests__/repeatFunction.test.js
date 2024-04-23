const repeatFunction = require("../repeatFunction");

describe("repeatFunction", () => {
  // Test for positive number of repetitions
  test("should invoke the function specified number of times", () => {
    const mockFunc = jest.fn();
    const repeatedFunc = repeatFunction(mockFunc, 3);
    repeatedFunc();
    expect(mockFunc).toHaveBeenCalledTimes(3);
  });

  // Test for negative number of repetitions with limited iterations
  test("should invoke the function indefinitely until stopped by maxIterations", () => {
    const mockFunc = jest.fn();
    const repeatedFunc = repeatFunction(mockFunc, -1, 5);
    repeatedFunc();
    expect(mockFunc).toHaveBeenCalledTimes(5);
  });

  // Test for negative number of repetitions without maxIterations
  test("should invoke the function indefinitely without maxIterations", () => {
    const mockFunc = jest.fn();
    const repeatedFunc = repeatFunction(mockFunc, -1);
    repeatedFunc();
    expect(mockFunc).toHaveBeenCalled(); // Just to ensure it doesn't throw an error
  });

  // Test for maxIterations limiting infinite loop
  test("should stop indefinitely repeating function after maxIterations", () => {
    const mockFunc = jest.fn();
    const repeatedFunc = repeatFunction(mockFunc, -1, 10);
    repeatedFunc();
    expect(mockFunc).toHaveBeenCalledTimes(10);
  });
});
