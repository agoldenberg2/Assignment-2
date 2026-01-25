const fs = require("fs");

function getNumbers(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  return text.trim().split("\n").map(Number);
}

// Sum of all numbers
function sumNumbers(filePath) {
  const numbers = getNumbers(filePath);
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Find min and max
function findMinMax(filePath) {
  const numbers = getNumbers(filePath);
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}

// Calculate average
function averageNumbers(filePath) {
  const numbers = getNumbers(filePath);
  return sumNumbers(filePath) / numbers.length;
}

// Manual test (required)
console.log(sumNumbers("data/sample-numbers.txt"));
console.log(findMinMax("data/sample-numbers.txt"));
console.log(averageNumbers("data/sample-numbers.txt"));

module.exports = {
  sumNumbers,
  findMinMax,
  averageNumbers,
};
