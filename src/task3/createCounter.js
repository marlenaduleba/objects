function createCounter() {
  let count = 0;
  return () => ++count;
}

module.exports = createCounter;
