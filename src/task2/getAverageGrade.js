const compose = require("../utils/compose");

const getAverage = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

const mapGradesToAverages = (students) =>
  students.map((student) => getAverage(student.grades));

const getAverageGrade = compose(getAverage, mapGradesToAverages);

module.exports = getAverageGrade;
