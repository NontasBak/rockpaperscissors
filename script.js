const gameChoices = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
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

// for(let i = 0; i < 10; i++)
// {
//     console.log(getComputerChoice());
// }

// +----------+-------+-------+--------+
// |          | Rock  | Paper |Scissors|
// +----------+-------+-------+--------+
// | Rock     |   0   |   1   |   -1   |
// | Paper    |  -1   |   0   |    1   |
// | Scissors |   1   |  -1   |    0   |
// +----------+-------+-------+--------+

const winnerTable = [[0 , 1 , -1],
                    [-1 , 0 , 1],
                    [1 , -1 , 0]];

function playRound(playerSelection, computerSelection)
{
    let playerSelectionIndex = convertSelectionToInt(playerSelection);
    let computerSelectionIndex = convertSelectionToInt(computerSelection);

    point = winnerTable[computerSelectionIndex][playerSelectionIndex];

    switch(point)
    {
        case 0:
            return `It's a tie! Both chose ${playerSelection}.`;
        case 1:
            return `You won! ${playerSelection} beats ${computerSelection}.`;
        case -1:
            return `You lost! ${computerSelection} beats ${playerSelection}.`;
        default:
            console.error("Error in playRound() (invalid result)");
    }
}

function convertSelectionToInt(selection) {
    if(selection === gameChoices.Rock)
        return 0;
    else if(selection === gameChoices.Paper)
        return 1;
    else if(selection === gameChoices.Scissors)
        return 2;
    else
    {
        console.error("Error in convertSelectionToInt");
        return -1;
    }
}

const playerSelection = gameChoices.Rock;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
