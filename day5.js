const fs = require("fs");
const inputFileText = fs.readFileSync("./day5input.txt").toString();

const instructions = inputFileText.split('\n')

let spliceNum
for (spliceNum = 0; ; spliceNum += 1) {
  if (instructions[spliceNum] === '') break;
}

const diagram = instructions.splice(0,spliceNum);
instructions.splice(0,1);

let stacks = [];
let i = 1;
while (diagram[0][i] !== undefined) {
  thisStack = [];
  diagram.forEach(maybeCrate => {
    if (maybeCrate[i].match(/[A-Z]/)) thisStack.push(maybeCrate[i]);
  });
  stacks.push(thisStack);
  i += 4;
}

function moveCrates(quant, startNum, endNum) {
    let movingCrate = stacks[startNum - 1].splice(0, quant);
    stacks[endNum - 1] = movingCrate.concat(stacks[endNum - 1]);
}

orders = instructions.map(string => string.match(/\d+/g))
                     .map(arr => arr.map(str => Number(str)));
orders.forEach(order => moveCrates(order[0], order[1], order[2]));

let message = '';
stacks.forEach(stack => message += stack[0]);
console.log(message);