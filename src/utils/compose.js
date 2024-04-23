const compose = (...functions) => (arg) =>
  functions.reduceRight((result, fn) => fn(result), arg);

  module.exports = compose;