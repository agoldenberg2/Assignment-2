const {
  countWords,
  findLongestWord,
  countLines,
} = require("../src/textAnalyzer");

test("counts words", () => {
  expect(countWords("data/sample-text.txt")).toBeGreaterThan(0);
});

test("finds longest word", () => {
  const word = findLongestWord("data/sample-text.txt");
  expect(typeof word).toBe("string");
});

test("counts lines", () => {
  expect(countLines("data/sample-text.txt")).toBeGreaterThan(0);
});
