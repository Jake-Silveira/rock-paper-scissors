 
   
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
     
        if (randomNumber === 1){
            computer = 'Rock';
        } else if (randomNumber === 2){
            computer = 'Paper';
        } if (randomNumber === 3){
            computer = 'Scissors';
        } 
}

let rounds = 0
let computerScore = 0
let userScore = 0

function game(){
    /* get the computer's random choice*/
    getComputerChoice()

    /* get the user's choice*/
    let userinput = document.querySelector('.userinput');
    const userString = userinput.value;
    let user = userString.charAt(0).toUpperCase() + userString.slice(1).toLowerCase();
    
    /* declare variables for the result fields*/
    const result = document.querySelector('.result');
    const scoreCard = document.querySelector('.scoreCard');
    

    /* compare choices and display them in the result fields*/
    console.log(rounds)
    if (rounds <= 5)
            if (computer == user){
                rounds++
                result.textContent = 'Computer Chose ' + computer + "!" + " It's a Tie!";
            }else if (computer == 'Rock' && user == 'Scissors'){
                rounds++
                computerScore++
                result.textContent = 'Computer Chose ' + computer + "!" + " You Lose!";
                scoreCard.textContent = 'Your Score: ' + userScore + '  Computer Score: ' + computerScore;
            }else if (computer == 'Paper' && user == 'Rock'){
                rounds++
                computerScore++
                result.textContent = 'Computer Chose ' + computer + "!" + " You Lose!";
                scoreCard.textContent = 'Your Score: ' + userScore + '  Computer Score: ' + computerScore;
            }else if (computer == 'Scissors' && user == 'Paper'){
                rounds++
                computerScore++
                result.textContent = 'Computer Chose ' + computer + "!" + " You Lose!";
                scoreCard.textContent = 'Your Score: ' + userScore + '  Computer Score: ' + computerScore;
            }else if (computer == 'Scissors' && user == 'Rock'){
                rounds++
                userScore++
                result.textContent = 'Computer Chose ' + computer + "!" + " You Win!";
                scoreCard.textContent = 'Your Score: ' + userScore + '  Computer Score: ' + computerScore;
            }else if (computer == 'Paper' && user == 'Scissors'){
                rounds++
                userScore++
                result.textContent = 'Computer Chose ' + computer + "!" + " You Win!";
                scoreCard.textContent = 'Your Score: ' + userScore + '  Computer Score: ' + computerScore;
            }else if (computer == 'Rock' && user == 'Paper'){
                rounds++
                userScore++
                result.textContent = 'Computer Chose ' + computer + "!" + " You Win!";
                scoreCard.textContent = 'Your Score: ' + userScore + '  Computer Score: ' + computerScore;
            }else 
                result.textContent = 'Please Enter Rock, Paper, or Scissors.';
       
    if (rounds > 5){
        if (userScore > computerScore){
            result.textContent = 'Congratulations! You Beat The Computer!'
        }else if (userScore < computerScore){
            result.textContent = "I'm Sorry... But You Lost To The Computer..."
        }else
            result.textContent = "It's A Tie! Try Again!"
    
    }
}
function resetGame(){
    const result = document.querySelector('.result');
    const scoreCard = document.querySelector('.scoreCard');
    let userinput = document.querySelector('.userinput');

    userinput.value = "";
    result.textContent = "";
    scoreCard.textContent = "";

    rounds = 0
    userScore = 0
    computerScore = 0

}





