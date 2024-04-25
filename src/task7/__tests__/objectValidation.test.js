const { validateObject, schema } = require("../objectValidation");

describe("validateObject", () => {
  it("should return true for a valid object", () => {
    const validObj = {
      name: "John",
      age: 25,
    };
    const isValid = validateObject(validObj, schema);
    expect(isValid).toBe(true);
  });

  it("should return false if a required property is missing", () => {
    const missingPropertyObj = {
      age: 25,
    };
    const isValid = validateObject(missingPropertyObj, schema);
    expect(isValid).toBe(false);
  });

  it("should return false if a property type doesn't match", () => {
    const wrongTypeObj = {
      name: 123,
      age: 25,
    };
    const isValid = validateObject(wrongTypeObj, schema);
    expect(isValid).toBe(false);
  });

  it("should return false if a property fails custom validation", () => {
    const invalidValueObj = {
      name: "John",
      age: 15,
    };
    const isValid = validateObject(invalidValueObj, schema);
    expect(isValid).toBe(false);
  });
});
