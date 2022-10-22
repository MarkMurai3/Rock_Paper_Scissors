//if I chose Rock (0):
    //if computer chose Rock(0): Tie
    //if computer chose Paper (1): I lose
    //if computer chose Scissor(2): I win
//if I chose Paper(1):
    //if computer chose Rock(0): I win
    //if computer chose Paper(1): Tie
    //if computer chose Scissor(2): I lose
//if I chose Scissor(2):
    //if computer chose Rock(0): I lose
    //if computer chose Paper(1): I win
    //if computer chose Scissor(2): Tie

//The user has to input an answer.
//Then the computer generates randomly an answer too. 
//The computer compares the 2 answers and gives the user a text based on that
//Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

let input = prompt("Rock, paper or scissor?");

let playerSelection = input;
console.log(input);

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

let computerSelection = getComputerChoice();

console.log(getComputerChoice());

function playRound (playerSelection, computerSelection) {
  
}