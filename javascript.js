const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('.resetbutton');
const resultFields = document.querySelector('.resultFields');
const outputResult = document.querySelector('#outputResult');
const gameOutcome = document.querySelector('#gameOutcome');
const runningScore = document.querySelector('#runningScore');
const fireButton = document.querySelector('#fire');

var humanScore = 0;
var computerScore = 0;
var tieScore = 0;
var runningCount = 0;

      resetButton.addEventListener('click', resetGame);

      rockButton.addEventListener('click', () => {
        runningCount = runningCount + 1;
        

        if(runningCount <= 5){
            outputResult.textContent = '';
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log('computerChoice ' + randomNumber);
        console.log('runningCount ' + runningCount);
            
                if(randomNumber === 1) {
                
                    outputResult.append("Computer Chose Rock! It's a Tie!");
                    tieScore = tieScore + 1;

                }else if(randomNumber === 2) {

                    outputResult.append("Computer Chose Paper! You Lose!");
                    computerScore = computerScore + 1;

                }else if(randomNumber === 3){

                    outputResult.append("Computer Chose Scissors! You Win!");
                    humanScore = humanScore + 1;

                } 
                
            }
            if(runningCount === 5){
                gameResult(humanScore, computerScore);  
            }
            runningScore.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore + " Rounds Tied: " + tieScore;
      });

      paperButton.addEventListener('click', () => {
        runningCount = runningCount + 1;
        

        if(runningCount <= 5){
            outputResult.textContent = '';
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log('computerChoice ' + randomNumber);
        console.log('runningCount ' + runningCount);
            
                if(randomNumber === 1) {
                
                    outputResult.append("Computer Chose Rock! You Win!");
                    humanScore = humanScore + 1;

                }else if(randomNumber === 2) {

                    outputResult.append("Computer Chose Paper! It's a Tie!");
                    tieScore = tieScore + 1;

                }else if(randomNumber === 3){

                    outputResult.append("Computer Chose Scissors! You Lose!");
                    computerScore = computerScore + 1;

                } 
                
            } 
            if(runningCount === 5){
            
                gameResult(humanScore, computerScore);  
                
            }
            runningScore.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore + " Rounds Tied: " + tieScore; 
      });

      scissorsButton.addEventListener('click', () => {
        runningCount = runningCount + 1;
        

        if(runningCount <= 5){
            outputResult.textContent = '';
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log('computerChoice ' + randomNumber);
        console.log('runningCount ' + runningCount);
            
                if(randomNumber === 1) {
                
                    outputResult.append("Computer Chose Rock! You Lose!");
                    computerScore = computerScore + 1;

                }else if(randomNumber === 2) {

                    outputResult.append("Computer Chose Paper! You Win!");
                    humanScore = humanScore + 1;

                }else if(randomNumber === 3){

                    outputResult.append("Computer Chose Scissors! It's a Tie!");
                    tieScore = tieScore + 1;

                } 
                
            }
            if(runningCount === 5){
                gameResult(humanScore, computerScore);  
            }
            runningScore.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore + " Rounds Tied: " + tieScore;
      });

      fireButton.addEventListener('click', () => {
        alert("IT'S FUCKING FIRE!!!!!");
        gameOutcome.style.color = 'green';
        gameOutcome.textContent = "You chose to wave your fingers in an upward motion, to which the computer asked: 'what is that?' and you said... IT'S FUCKING FIRE!! ";
        runningCount = 5;
        humanScore = 9999999999
        runningScore.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore + " Rounds Tied: " + tieScore;
      });  

function gameResult(humanScore, computerScore){
    
    if(humanScore > computerScore){
        gameOutcome.style.color = 'green';
        gameOutcome.textContent = "You Win!";

    }else if(humanScore < computerScore){
        gameOutcome.style.color = 'red';
        gameOutcome.textContent = "YOU LOSE!"

    }else if(humanScore = computerScore){
        gameOutcome.style.color = 'blue';
        gameOutcome.textContent = "Its a Tie... Try Again."
    }
}




function resetGame(){
    humanScore = 0;
    computerScore = 0;
    runningCount = 0;
    tieScore = 0;
    gameOutcome.textContent = '';
    runningScore.textContent = '';
    outputResult.textContent = '';
}