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


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissor";
      break;
  }
}
const input = prompt("Rock, Paper or Scissor?");

const playerSelection = input;

console.log(playerSelection);

const computerSelection = getComputerChoice();

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection){
  return ("It's a Tie!");
}
else if (playerSelection === "Rock") {
  if (computerSelection === "Scissor") {
    return ("You Win! Rock beats Scissor");
  }
  else 
    return ("You Lose! Paper beats Rock");
  }
else if (playerSelection === "Paper") {
  if (computerSelection === "Rock") {
    return ("You Win! Paper beats Rock");
  }
  else 
    return ("You Lose! Scissor beats Paper");
}
else if (playerSelection === "Scissor") {
  if (computerSelection === "Paper") {
    return ("You Win! Scissor beats Paper");
  }
  else 
    return ("You Lose! Rock beats Scissor");
}
}

console.log(playRound(playerSelection, computerSelection));