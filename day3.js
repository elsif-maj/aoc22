//// Part 1 ////

const fs = require("fs");

const inputFileText = fs.readFileSync("./day3testInput.txt").toString();

// Array of arrays (rucksacks) of chars (items)
const arraysOfChars = inputFileText.split('\n').map(str => str.split(''));

// Splits arrays in half, finds the common char in both halves
function returnCommonItem(arrIn) {
  let firstHalf = arrIn.slice(0, arrIn.length / 2);
  let secondHalf = arrIn.slice(arrIn.length / 2);
  let firstHalfLetters = {};

  firstHalf.forEach(letter => firstHalfLetters[letter] = true);

  for (let i = 0; i < secondHalf.length; i += 1) {
    if (firstHalfLetters[secondHalf[i]]) {
      return secondHalf[i];
    }
  }
}

// Assigns priority score to individual char
function priorityScore(char) {
  const UPPER_UTF_OFFSET = 38;
  const LOWER_UTF_OFFSET = 96;

  if (char.match(/[A-Z]/)) {
    return char.charCodeAt(0) - UPPER_UTF_OFFSET;
  } else {
    return char.charCodeAt(0) - LOWER_UTF_OFFSET;
  }
}

let totalPriorityScore = arraysOfChars.map(subArr => returnCommonItem(subArr))
                                      .map(char => priorityScore(char))
                                      .reduce((accum, score) => accum + score);
console.log(totalPriorityScore);

//// Part 2 ////

const fs = require("fs");

const inputFileText = fs.readFileSync("./day3input.txt").toString();

const arrayOfStrings = inputFileText.split('\n');
let groupsOfThree = [];
let singleGroup = [];

arrayOfStrings.forEach((string, index) => {
  if ((index + 1) % 3 === 0) {
    singleGroup.push(string);
    groupsOfThree.push(singleGroup);
    singleGroup = [];
  } else {
    singleGroup.push(string);
  }
});

function returnCommonChar(str) {
  let first = {};
  let second = {};
  let third = {};

  let chars = str.map(str => str.split(''));
  chars[0].forEach(char => first[char] = true)
  chars[1].forEach(char => first[char] ? second[char] = true : null)
  chars[2].forEach(char => second[char] ? third.answer = char : null)

  return third.answer;
}

function priorityScore(char) {
  const UPPER_UTF_OFFSET = 38;
  const LOWER_UTF_OFFSET = 96;

  if (char.match(/[A-Z]/)) {
    return char.charCodeAt(0) - UPPER_UTF_OFFSET;
  } else {
    return char.charCodeAt(0) - LOWER_UTF_OFFSET;
  }
}

priorityScore = groupsOfThree.map(threeStrings => returnCommonChar(threeStrings))
                           .map(char => priorityScore(char))
                           .reduce((accum, score) => accum + score);

console.log(priorityScore);