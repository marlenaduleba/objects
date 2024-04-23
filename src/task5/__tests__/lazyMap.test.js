const lazyMap = require("../lazyMap");

describe("lazyMap", () => {
  const array = [1, 2, 3, 4, 5];
  const mappingFunction = (x) => x * 2;

  test("should map array elements lazily", () => {
    const lazyMapper = lazyMap(array, mappingFunction);
    expect(lazyMapper.next()).toEqual({ value: 2, done: false });
    expect(lazyMapper.next()).toEqual({ value: 4, done: false });
    expect(lazyMapper.next()).toEqual({ value: 6, done: false });
    expect(lazyMapper.next()).toEqual({ value: 8, done: false });
    expect(lazyMapper.next()).toEqual({ value: 10, done: false });
    expect(lazyMapper.next()).toEqual({ done: true });
  });

  test("should handle empty array", () => {
    const emptyArray = [];
    const lazyMapper = lazyMap(emptyArray, mappingFunction);
    expect(lazyMapper.next()).toEqual({ done: true });
  });

  test("should handle mapping function returning undefined", () => {
    const array = [1, 2, 3];
    const mappingFunction = (x) => {
      if (x % 2 === 0) {
        return x * 2;
      } else {
        return undefined;
      }
    };
    const lazyMapper = lazyMap(array, mappingFunction);

    while (!lazyMapper.next().done) {}

    expect(lazyMapper.next().value).toBeUndefined();

    expect(lazyMapper.next()).toEqual({ done: true });
  });
});
