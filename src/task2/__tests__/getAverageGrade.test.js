const getAverageGrade = require("../getAverageGrade");

describe("getAverageGrade", () => {
  test("should return average grade of all students", () => {
    const students = [
      { name: "Student 1", grades: [80, 90, 70] },
      { name: "Student 2", grades: [85, 95, 75] },
      { name: "Student 3", grades: [90, 85, 80] },
    ];

    const averageGrade = getAverageGrade(students);

    expect(averageGrade).toBeCloseTo(83.33, 2);
  });

  test("should return NaN if students array is empty", () => {
    const students = [];

    const averageGrade = getAverageGrade(students);

    expect(isNaN(averageGrade)).toBe(true);
  });

  test("should handle single student with single grade", () => {
    const students = [{ name: "Student", grades: [70] }];

    const averageGrade = getAverageGrade(students);

    expect(averageGrade).toBe(70);
  });

  test("should handle single student with multiple grades", () => {
    const students = [{ name: "Student", grades: [60, 70, 80, 90] }];

    const averageGrade = getAverageGrade(students);

    expect(averageGrade).toBe(75);
  });
});
