const assert = require("assert");
const createImmutableObject = require("../advancedPropertyDescriptors");
const { person } = require("../../task1/objectPropertyManipulation");
const { nestedObject } = require("../../data/testData");

describe("createImmutableObject", () => {
  it("should create an immutable clone of the provided object", () => {
    const immutableObject = createImmutableObject(person);

    // Test if newObject is not the same reference as person
    assert.notStrictEqual(immutableObject, person);

    // Check if properties of the immutable object match the original object
    assert.strictEqual(immutableObject.firstName, "John");
    assert.strictEqual(immutableObject.lastName, "Doe");
    assert.strictEqual(immutableObject.age, 30);
    assert.strictEqual(immutableObject.email, "john.doe@example.com");

    // Check if properties of the immutable object are not writable
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "firstName").writable,
      false
    );
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "lastName").writable,
      false
    );
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "age").writable,
      false
    );
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "email").writable,
      false
    );

    // Check if properties of the immutable object are not configurable
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "firstName")
        .configurable,
      false
    );
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "lastName").configurable,
      false
    );
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "age").configurable,
      false
    );
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(immutableObject, "email").configurable,
      false
    );
  });

  it("should should handle nested objects and arrays recursively", () => {
    const immutableObject = createImmutableObject(nestedObject);

    // Check nested objects
    assert.deepStrictEqual(
      immutableObject.address.street,
      nestedObject.address.street
    );

    // Check nested arrays
    assert.deepStrictEqual(immutableObject.hobbies[0], nestedObject.hobbies[0]);
  });
});
