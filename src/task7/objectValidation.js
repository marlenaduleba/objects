function validateObject(obj, schema) {
  for (let key in schema) {
    if (!obj.hasOwnProperty(key) || typeof obj[key] !== schema[key].type) {
      return false;
    }
    if (
      schema[key].hasOwnProperty("validator") &&
      !schema[key].validator(obj[key])
    ) {
      return false;
    }
  }
  return true;
}

const schema = {
  name: { type: "string" },
  age: { type: "number", validator: (value) => value >= 18 },
};

module.exports = { validateObject, schema };
