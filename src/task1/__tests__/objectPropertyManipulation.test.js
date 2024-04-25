const assert = require("assert");
const { person } = require("../objectPropertyManipulation");

describe("updateInfo", () => {
  it("should update modifiable properties", () => {
    person.updateInfo({ address: "Random Street 1" });
    assert.strictEqual(person.address, "Random Street 1");
  });

  it("should not update read-only properties", () => {
    const originalEmail = person.email;
    person.updateInfo({ email: "jane.doe@example.com" });
    assert.strictEqual(person.email, originalEmail);
  });

  it("should generate warning when trying to update read-only properties", () => {
    const warnSpy = jest.spyOn(console, "warn").mockImplementation();
    person.updateInfo({ firstName: "Jane", age: 32 });
    expect(warnSpy).toHaveBeenCalledWith(
      "Cannot update firstName as it is read-only."
    );
    expect(warnSpy).toHaveBeenCalledWith(
      "Cannot update age as it is read-only."
    );
    expect(warnSpy).not.toHaveBeenCalledWith(
      "Cannot update email as it is read-only."
    );
    warnSpy.mockRestore();
  });
});
