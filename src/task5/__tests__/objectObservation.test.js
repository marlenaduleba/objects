const assert = require("assert");
const { observeObject, callback } = require("../objectObservation");
const { person } = require("../../task1/objectPropertyManipulation");

describe("observeObject", () => {
  it("should create a proxy object that observes property access and modification", () => {
    const observedObj = observeObject(person, callback);

    let logs = [];

    const originalConsoleLog = console.log;
    console.log = (message) => {
      logs.push(message);
    };

    // Test getting a property
    observedObj.firstName;
    assert.strictEqual(logs[0], "Getting property firstName");

    // Test setting a writable property
    observedObj.firstName = "Jane";
    assert.strictEqual(
      logs[1],
      "Cannot set property firstName because it is non-writable."
    );

    // Test attempting to set a non-writable property
    observedObj.lastName = "Smith";
    assert.strictEqual(
      logs[2],
      "Cannot set property lastName because it is non-writable."
    );

    // Test attempting to set a non-existent property
    observedObj.address = "123 Main St";
    assert.strictEqual(logs[3], "Setting property address to 123 Main St");

    // Restore console.log to its original state
    console.log = originalConsoleLog;
  });
});
