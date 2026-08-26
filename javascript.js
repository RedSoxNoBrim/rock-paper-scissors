let humanScore = 0
let computerScore = 0



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice() {
    let answer = getRandomInt(3);
    if (answer === 0) {
        console.log("Rock")
        return "Rock";
    } else if (answer === 1) {
        console.log("Paper")
        return "Paper";
    } else {
        console.log("Scissors")
        return "Scissors";
    }
}

getComputerChoice();

function getHumanChoice() {
    let answer = prompt("Choose rock, paper, or scissors. ")
    answer = answer.toLowerCase();
    console.log(answer)
    return answer;
}




function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "Paper") {
        return "You lose!";
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        return "You lose!";
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        return "You lose!";
    } else if (humanChoice === "rock" && computerChoice === "Scissors") {
        return "You win!";
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
        return "You win!";
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        return "You win!";
    } else if (humanChoice === "rock" && computerChoice === "Rock") {
        return "It's a tie!";
    } else if (humanChoice === "paper" && computerChoice === "Paper") {
        return "It's a tie!";
    } else if (humanChoice === "scissors" && computerChoice === "Scissors") {
        return "It's a tie!";
    }
}





function playGame() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice());

        

        if (result === "You win!") {
            humanScore++
        } else if (result === "You lose!") {
            computerScore++
        }

        console.log("Human score:", humanScore)
        console.log("Computer score:", computerScore)
    }
       if (humanScore > computerScore) {
        alert("You Win!");
       } else if (humanScore < computerScore) {
        alert("You lose!");
       } else {
        alert("It's a tie!");
       }
    


}

playGame();

