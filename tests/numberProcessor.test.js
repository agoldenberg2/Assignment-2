const {
  sumNumbers,
  findMinMax,
  averageNumbers,
} = require("../src/numberProcessor");

test("calculates sum", () => {
  expect(sumNumbers("data/sample-numbers.txt")).toBeGreaterThan(0);
});

test("finds min and max", () => {
  const result = findMinMax("data/sample-numbers.txt");
  expect(result.min).toBeLessThan(result.max);
});

test("calculates average", () => {
  expect(averageNumbers("data/sample-numbers.txt")).toBeGreaterThan(0);
});
