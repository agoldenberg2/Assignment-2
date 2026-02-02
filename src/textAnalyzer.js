const fs = require("fs");

// Count total number of words
function countWords(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const words = text.trim().split(/\s+/);
  return words.length;
}

// Find the longest word
function findLongestWord(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const words = text.trim().split(/\s+/);

  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Count number of lines
function countLines(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  return text.split("\n").length;
}

// Manual test 
console.log(countWords("data/quotes.txt"));
console.log(findLongestWord("data/quotes.txt"));
console.log(countLines("data/quotes.txt"));

module.exports = {
  countWords,
  findLongestWord,
  countLines,
};
