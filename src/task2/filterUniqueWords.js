const compose = require("../utils/compose");

const toLowerCaseAndSplit = (text) => text.toLowerCase().split(/\s+/);

const filterUnique = (array) =>
  array.filter(
    (value, index, array) => value !== "" && array.indexOf(value) === index
  );

const sortWords = (array) => array.sort();

const filterUniqueWords = compose(sortWords, filterUnique, toLowerCaseAndSplit);

module.exports = filterUniqueWords;
