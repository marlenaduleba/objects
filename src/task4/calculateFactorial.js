function calculateFactorial(n, accumulator = 1) {
  if (n < 0) return 1;
  if (n === 0) return accumulator;
  return calculateFactorial(n - 1, n * accumulator);
}

module.exports = calculateFactorial;
