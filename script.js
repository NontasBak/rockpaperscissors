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

function changeScore(point, roundText) {
    switch(point)
    {
        case 0:
            roundText.textContent = `It's a tie! Both chose ${playerSelection}.`;
            break;
        case 1:
            roundText.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
            playerPoints++;
            break;
        case -1:
            roundText.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
            computerPoints++;
            break;
        default:
            console.error("Error in playRound() (invalid result)");
    }
}

function endGame(parent, scoreText, roundText) {
    const divGameOver = document.createElement("div");
    const buttonPlayAgain = document.createElement("button");
    buttonPlayAgain.textContent = "Play again";

    if(playerPoints > computerPoints)
    {
        divGameOver.style.color = "blue";
        divGameOver.textContent = `You won against the computer!! Wanna play again?`;
    }
    else
    {
        divGameOver.style.color = "red";
        divGameOver.textContent = `The computer emerged victorious.. Wanna play again?`;
    }

    parent.appendChild(divGameOver);
    parent.appendChild(buttonPlayAgain);

    buttonPlayAgain.addEventListener("click", () => {
        playerPoints = 0;
        computerPoints = 0;

        parent.removeChild(divGameOver);
        parent.removeChild(buttonPlayAgain);
        gameOver = false;

        scoreText.textContent = `The score is: ${playerPoints} - ${computerPoints}`;
        roundText.textContent = "";
    })
}

function game() 
{
    const scoreText = document.createElement("div");
    const roundText = document.createElement("div");
    const body = document.querySelector("body");
    scoreText.textContent = `The score is: ${playerPoints} - ${computerPoints}`;
    body.appendChild(scoreText);
    body.appendChild(roundText);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if(gameOver)
                return;
            
            computerSelection = getComputerChoice();
            playerSelection = e.target.id;
            let point = playRound(playerSelection, computerSelection);

            changeScore(point, roundText);
        
            scoreText.textContent = `The score is: ${playerPoints} - ${computerPoints}`;
            console.log(`The score is ${playerPoints} - ${computerPoints}`);

            if(playerPoints >= 5 || computerPoints >= 5)
            { 
                gameOver = true;
                endGame(body, scoreText, roundText)
            }
        })
    });
}

gameOver = false;
let playerPoints = 0, computerPoints = 0;
game();
