function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return "rock"
    }else if (randomNumber === 1){
        return "scissor"
    } else {
        return "paper"
    }
}

function getHumanChoice(){
    const choice = prompt("rock scissor or paper?");

    if (choice.toLowerCase() === "rock") {
       return "rock"
    } else if (choice.toLowerCase() === "scissor") {
        return "scissor"
    } else if (choice.toLowerCase() === "paper") {
        return "paper"
    } else {
        getHumanChoice();
    }
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        console.log("Oh no! A draw!");
        return "draw"
    }else if(humanChoice === "rock" && computerChoice === "scissor" ||
         humanChoice === "scissor" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        return "human"
    }else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        return "computer"
    }

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i <  5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const winner = playRound(humanChoice, computerChoice);

        if(winner === "draw"){
            humanScore++
            computerScore++
        } else if(winner === "human"){
            humanScore++
        }else if(winner === "computer"){
            computerScore++
        }
    }
    if(computerScore > humanScore){
        console.log("Computer wins!")
    } else if(humanScore > computerScore){
        console.log("You win!")
    }else{
        console.log("DRAW :(")
    }
}

playGame();