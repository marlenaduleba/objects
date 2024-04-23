const getFullName = require("../getFullName");

describe("getFullName", () => {
  test('should return full name in the format "FirstName LastName"', () => {
    const person = { firstName: "John", lastName: "Doe" };
    const fullName = getFullName(person);
    expect(fullName).toBe("John Doe");
  });

  test("should handle empty firstName and lastName properties", () => {
    const person = { firstName: "", lastName: "" };
    const fullName = getFullName(person);
    expect(fullName).toBe("");
  });

  test("should handle missing firstName property", () => {
    const person = { lastName: "Doe" };
    const fullName = getFullName(person);
    expect(fullName).toBe("Doe");
  });

  test("should handle missing lastName property", () => {
    const person = { firstName: "John" };
    const fullName = getFullName(person);
    expect(fullName).toBe("John");
  });
});
