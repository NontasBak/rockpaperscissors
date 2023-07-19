const gameChoices = {
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors",
};

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber)
    {
        case 0:
            return gameChoices.Rock;
        case 1:
            return gameChoices.Paper;
        case 2:
            return gameChoices.Scissors;
        default:
            console.error("Invalid random number");
    }
}

for(let i = 0; i < 10; i++)
{
    console.log(getComputerChoice());
}