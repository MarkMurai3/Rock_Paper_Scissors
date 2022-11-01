let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input');

const getComputerChoice = () => ["Rock","Paper","Scissors"][Math.floor(Math.random()*3)];

function disableButtons() {
  buttons.forEach(elem =>{
    elem.disabled = true
  })
}

function playRound(playerSelection) {
let computerSelection = getComputerChoice();
let result = "";
if (playerSelection === computerSelection){
  result = ("It's a Tie!" + "You both chose " + playerSelection + ". Player: " + (playerScore) + " Computer: " + computerScore);
}
else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        result = ("You Win! " + playerSelection + " beats " + computerSelection + ". Player: " + (playerScore+=1) + " Computer: " + computerScore)

        if (playerScore == 5) {
          result += "<br>You have won the game! Congratulations!"
          disableButtons();
        }
        }
        
        
        
else {
  result = ("You Lose! " + computerSelection + " beats " + playerSelection + ". Player: " + playerScore + " Computer: " + (computerScore +=1))
  if (computerScore == 5) {
    result += "<br>You have lost the game! Sucker!"
    disableButtons();
  }
}
document.getElementById('result').innerHTML = result
return
}



buttons.forEach(button =>{
  button.addEventListener('click', function(){
      playRound(button.value)
  })
})