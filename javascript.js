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
  result = ("It's a Tie!" + "You both chose " + playerSelection + "<br> Player: " + (playerScore) + " Computer: " + computerScore);
}
else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        result = ("You Win! " + "The computer chose " + computerSelection + " and " + playerSelection + " beats " + computerSelection + "<br> Player: " + (playerScore+=1) + " Computer: " + computerScore)

        if (playerScore == 5) {
          result += "<br>You have won the game! Congratulations!"
          disableButtons();
          alert("You have won the game. Reload the page to play again");
        }
        }
        
        
        
else {
  result = ("You Lose! " + 'The computer chose ' + computerSelection + " and " + computerSelection + " beats " + playerSelection + "<br> Player: " + playerScore + " Computer: " + (computerScore +=1))
  if (computerScore == 5) {
    result += "<br>You have lost the game! Sucker!"
    disableButtons();
    alert("You have lost the game. Reload the page to play again");
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