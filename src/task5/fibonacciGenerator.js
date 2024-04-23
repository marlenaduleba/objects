function fibonacciGenerator() {
  let [a, b] = [0, 1];
  return {
    next: function () {
      let temp = a;
      [a, b] = [b, a + b];
      return { value: temp, done: false };
    },
  };
}

module.exports = fibonacciGenerator;
