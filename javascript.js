let humanScore = 0
let computerScore = 0



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice() {
    let answer = getRandomInt(3);
    if (answer === 0) {
        console.log("Rock")
        return "rock";
    } else if (answer === 1) {
        console.log("Paper")
        return "paper";
    } else {
        console.log("Scissors")
        return "scissors";
    }
}



function getHumanChoice() {
    let answer = prompt("Choose rock, paper, or scissors. ")
    answer = answer.toLowerCase();
    console.log(answer)
    return answer;
}




function determineWinner(humanChoice, computerChoice) {

    const choices = ["rock", "paper", "scissors"];
    const winningchoices = [2, 0, 1];

    let humanIndex = choices.indexOf(humanChoice);
    let computerIndex = choices.indexOf(computerChoice);

    if (humanIndex === computerIndex) {
        console.log("It's a tie!")
        return "It's a tie!"; 
    }

    

    const winningchoice = winningchoices[humanIndex]

    if (computerIndex === winningchoice) {
        console.log("You win!")
        return "You win!"
    }

    console.log("You lose!")
    return "You lose!";

    
}





function playGame() {
    for (let i = 0; i < 5; i++) {
        let result = determineWinner(getHumanChoice(), getComputerChoice());

        

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