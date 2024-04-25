const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

Object.keys(person).forEach((key) => {
  Object.defineProperty(person, key, {
    writable: false,
    configurable: false,
  });
});

Object.defineProperty(person, "updateInfo", {
  value: function (newInfo) {
    for (let key in newInfo) {
      if (Object.getOwnPropertyDescriptor(this, key).writable === false) {
        console.warn(`Cannot update ${key} as it is read-only.`);
      } else {
        this[key] = newInfo[key];
      }
    }
  },
  writable: false,
  configurable: false,
});

Object.defineProperty(person, "address", {
  value: {},
  enumerable: false,
  writable: true,
  configurable: false,
});

module.exports = { person };

