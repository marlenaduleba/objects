const { person } = require("../task1/objectPropertyManipulation");

function createImmutableObject(obj) {
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const isObject = typeof value === "object" && value !== null;
      Object.defineProperty(clone, key, {
        value: isObject ? createImmutableObject(value) : value,
        writable: false,
        configurable: false,
      });
    }
  }
  return clone;
}

const immutablePerson = createImmutableObject(person);
console.log(immutablePerson.firstName);

module.exports = createImmutableObject;
