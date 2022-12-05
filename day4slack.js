const fs = require("fs");

const inputFileText = fs.readFileSync("./day4input.txt").toString();

// Array of arrays of arrays
const arraysOfChars = inputFileText.split('\n')
                                   .map(str => str.split(','))
                                   .map(arr => {
                                      return [arr[0].split('-'), arr[1].split('-')];
                                   });

function overlappingRanges(arr) {
  let elf1 = arr[0].map(Number);
  let elf2 = arr[1].map(Number);
  
  if ((Math.max(...elf1) <= Math.max(...elf2) && Math.max(...elf1) >= Math.min(...elf2)) ||
      (Math.max(...elf2) <= Math.max(...elf1) && Math.max(...elf2) >= Math.min(...elf1))) {
        return true;
    } else if (Math.max(...elf2) >= Math.max(...elf1) &&
      Math.min(...elf2) <= Math.min(...elf1)) {
        return true;
    }  

  return false;
}

let overlapCounter = 0;

arraysOfChars.forEach(array => {
  if (overlappingRanges(array)) overlapCounter += 1;
});

console.log(overlapCounter);