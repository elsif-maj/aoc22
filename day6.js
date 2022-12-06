const fs = require("fs");
const stream = fs.readFileSync("./day6input.txt").toString();

function allUnique(chunk) {
  let ref = {}

  for (let i = 0; i < chunk.length; i += 1) {
    if (ref[chunk[i]]) {
      return false
    } else {
      ref[chunk[i]] = true;
    }
  }
  return true;
}

function getIndex(stream) {
  for (let i = 0; i < stream.length; i += 1) {
    let chunk = stream.slice(i, i + 14)

    if (allUnique(chunk)) {
      return (i + 14)
    }
  }
}

console.log(getIndex(stream));