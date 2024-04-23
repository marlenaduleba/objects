function power(base, exponent, accumulator = 1) {
  if (exponent === 0) return accumulator;
  return power(base, exponent - 1, base * accumulator);
}

module.exports = power;
