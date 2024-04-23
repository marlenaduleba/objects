const filterUniqueWords = require("../filterUniqueWords");

describe("filterUniqueWords", () => {
  test("should return unique sorted words from text", () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit";

    const uniqueWords = filterUniqueWords(text);

    expect(uniqueWords).toEqual([
      "adipiscing",
      "amet",
      "consectetur",
      "dolor",
      "elit",
      "ipsum",
      "lorem", 
      "sit",
    ]);
  });

  test("should handle repeated words and non-alphanumeric characters", () => {
    const text = "lorem ipsum ipsum dolor sit amet.";

    const uniqueWords = filterUniqueWords(text);

    expect(uniqueWords).toEqual(["amet.", "dolor", "ipsum", "lorem", "sit"]);
  });

  test("should handle empty string", () => {
    const text = "";

    const uniqueWords = filterUniqueWords(text);

    expect(uniqueWords).toEqual([]);
  });
});
