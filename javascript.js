
//this one generates the computer's answer
const getComputerChoice = () => ["Rock","Paper","Scissor"][Math.floor(Math.random()*3)];

//this one I found online and I am too afraid to delete because it may come in handy
//function getPlayerSelection(){
//  return window.prompt("Enter your choice:").toLowerCase()
//}

let playerScore = 0
let computerScore = 0


//this one generates the Winner and Loser 
function playRound() {
//this one inputs the player's answer
let input = prompt("Rock, Paper or Scissor?");
let playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
console.log(playerSelection);
//this one shows the Computer's answer
let computerSelection = getComputerChoice();
console.log(computerSelection);
if (playerSelection === computerSelection){
  return ("It's a Tie!" + " Player: " + (playerScore) + " Computer: " + computerScore) ;
}
else if ((playerSelection == "Rock" && computerSelection == "Scissor") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissor" && computerSelection == "Paper"))

        return ("You Win! " + playerSelection + " beats " + computerSelection + ". Player: " + (playerScore += 1) + " Computer: " + computerScore) 
        
        
else 
  return ("You Lose! " + computerSelection + " beats " + playerSelection + ". Player: " + playerScore + " Computer: " + (computerScore +=1) )
}

//this loop shows the You Win or You Lose in the console after someone got 5 points
function game() {
  while (computerScore !== 5 || playerScore !==5) {
  console.log(playRound())
    if (computerScore ===5) {
     return console.log("You lost the game! To replay the game refresh the page!")
     }
   else if (playerScore ===5){
     return console.log("You won the game! To replay the game refresh the page!")
   }
   }
}

game();

//This is the previous code I used for the game() function. This one allows only 5 rounds and the winner is whoever had the most points.
//function game() {
//  for (let i = 0; i < 5; i++) {
//  console.log(playRound())}
//  if (computerScore === playerScore) {
//    return console.log("You have the same score! It's a tie! To replay the game refresh the page!")
//     }
//   else if (computerScore > playerScore) {
//     return console.log("You lost the game! To replay the game refresh the page!")
//     }
//   else 
//     return console.log("You won the game! To replay the game refresh the page!")   
//}