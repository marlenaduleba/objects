const assert = require("assert");
const { deepCloneObject } = require("../deepCloneObject");
const { objToClone } = require("../../data/testData");

describe("deepCloneObject", () => {
  it("should create a deep clone of the provided object", () => {
    const clonedObj = deepCloneObject(objToClone);

    // Test if cloned object is not the same reference as the original object
    assert.notStrictEqual(clonedObj, objToClone);

    // Test if cloned object has the same properties as the original object
    assert.deepStrictEqual(clonedObj, objToClone);

    // Test if changing properties in the original object does not affect the cloned object
    objToClone.name = "Jane";
    objToClone.address.city = "Los Angeles";
    objToClone.hobbies.push("gardening");
    objToClone.friends.add("Diana");
    objToClone.preferences.set("drink", "Coffee");

    assert.strictEqual(clonedObj.name, "John");
    assert.strictEqual(clonedObj.address.city, "New York");
    assert.strictEqual(clonedObj.hobbies.length, 3);
    assert.strictEqual(clonedObj.friends.has("Diana"), false);
    assert.strictEqual(clonedObj.preferences.has("drink"), false);
  });
});
