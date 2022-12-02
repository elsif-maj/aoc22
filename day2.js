
const fs = require("fs");

// This converts an AoC input-copy/paste textfile to an array of 2-element arrays of
// individual letter strings representing opponent moves ([0]) and my move ([1]). 
const inputFileText = fs.readFileSync("./day2input.txt").toString();
const subArrsOfStrings = inputFileText.split('\n').map(letters => letters.split(' '));

// This creates a game of Rock, Paper, Scissors that takes 'moves' represented by 
// the above format of input and possesses methods which calculate the scoring of 
// 'rounds'. 
let createGame = function(moves) {
  return {
    moves,
    // This returns a number reflecting total myScore based on adding up the scores 
    // of each round by the 'scoreOneRound' method, which creates a 'createThisRound'
    // object to process the scoring of the round.
    scoreAllRounds() {
      let totalScore = this.moves.reduce((accum, roundTuple) => {
        return accum += this.scoreOneRound(roundTuple);
      }, 0);
      return totalScore;
    },
    // Returns a number reflecting myScore for the round.
    scoreOneRound(roundTuple) {
      let opponentMove = roundTuple[0];
      let myMove = roundTuple[1];
      let thisRound = createThisRound(opponentMove, myMove);

      return thisRound.scoreRound();
      // return thisRound.scoreRound();
    },
  }
}

// X is a loss
// Y is a tie
// Z is a win

// This takes an opponentMove and myMove in the a,b,c and x,y,z input format,
// then can process the moves to the same format, and then can returns a score 
// for the round as a number.
let createThisRound = function(opponentMove, myMove) {
  const conversionKey = {
      A: 'Rock',
      B: 'Paper',
      C: 'Scissors',
      X: 'Loss',
      Y: 'Tie',
      Z: 'Win',
  }

  // const adverScore = {
  //   Rock: 1,
  //   Paper: 2,
  //   Scissors: 3,
  // }

  const adverScore = {
    Loss: 0,
    Tie: 3,
    Win: 6,
  }

  const opponentRock = {
    Tie: 1,
    Win: 2,
    Loss: 3,
  }

  const opponentPaper = {
    Loss: 1,
    Tie: 2,
    Win: 3,
  }

  const opponentScissors = {
    Win: 1,
    Loss: 2,
    Tie: 3,
  }
  
  opponentMove = conversionKey[opponentMove];
  myMove = conversionKey[myMove];

  return {
    myScore: 0,
    opponentMove,
    myMove,
    scoreRound() {
      // this.myScore += myChoiceScore[myMove];
      this.myScore += this.getAdversarialScore(this.opponentMove, this.myMove)
      return this.myScore;
    },
    // Takes an opponentMove and myMove and calculates score based on myMove.
    getAdversarialScore(opponentMove, myMove) {
      if (opponentMove === 'Rock') {
        return opponentRock[myMove] + adverScore[myMove];
      } else if (opponentMove === 'Paper') {
        return opponentPaper[myMove] + adverScore[myMove];
      } else if (opponentMove === 'Scissors') {
        return opponentScissors[myMove] + adverScore[myMove];
      }
    }
  }
}

// This instantiates a game object (called 'thisGame') featuring the actual 
// series of moves given by our input.
let thisGame = createGame(subArrsOfStrings);
console.log(thisGame.scoreAllRounds());


