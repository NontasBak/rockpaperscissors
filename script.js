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
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.error("Invalid random number");
    }
}

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

    return point;
}

function convertSelectionToInt(selection) {
    switch(selection)
    {
        case "Rock":
            return 0;
        case "Paper":
            return 1;
        case "Scissors":
            return 2;
        default:
            console.error("Error in convertSelectionToInt");
            return -1;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() 
{
    let playerPoints = 0, computerPoints = 0;

    for(let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Choose Rock, Paper or Scissors.");
        playerSelection = capitalizeFirstLetter(playerSelection);
        computerSelection = getComputerChoice()

        point = playRound(playerSelection, computerSelection);

        switch(point)
        {
            case 0:
                console.log(`It's a tie! Both chose ${playerSelection}.`);
                break;
            case 1:
                console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
                playerPoints++;
                break;
            case -1:
                console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
                computerPoints++;
                break;
            default:
                console.error("Error in playRound() (invalid result)");
        }

        console.log(`The score is ${playerPoints} - ${computerPoints}`);
    }
}

game();
