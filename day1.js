// Part 1 Solution

// const fs = require("fs");

// let inputFile = fs.readFileSync("./day1input.txt").toString();
// let arrOfStrings = inputFile.split('\n\n').map(subarr => subarr.split('\n'));
// let individualCalCounts = arrOfStrings.map(individual => {
//   return individual.reduce((accum, count) => {
//     return accum += Number(count);
//   }, 0);
// });

// console.log(Math.max(...individualCalCounts));

// Part 2 Solution

const fs = require("fs");

let inputFile = fs.readFileSync("./day1input.txt").toString();
let arrOfStrings = inputFile.split('\n\n').map(subarr => subarr.split('\n'));
let individualCalCounts = arrOfStrings.map(individual => {
  return individual.reduce((accum, count) => {
    return accum += Number(count);
  }, 0);
});

individualCalCounts.sort((a, b) => b - a);
let top3 = individualCalCounts.slice(0,3);

console.log(top3.reduce((accum, num) => accum + num));
