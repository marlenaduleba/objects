function repeatFunction(func, num, maxIterations = 100) {
  return function () {
    if (num < 0 || maxIterations < 0) {
      let iterations = 0;
      while (true) {
        func();
        if (++iterations >= maxIterations) break;
      }
    } else {
      for (let i = 0; i < num; i++) {
        func();
      }
    }
  };
}

module.exports = repeatFunction;
