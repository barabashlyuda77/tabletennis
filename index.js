const buttonServe = document.querySelector('.button-serve');
const buttonReset = document.querySelector('.button-reset');
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const scoreOne = document.querySelector('.score-one');
const scoreTwo = document.querySelector('.score-two');
const gameOver = document.querySelector('.game-over');

const PLAYER_ONE_NAME = 'Player 1';
const PLAYER_TWO_NAME = 'Player 2';
const MAX_GAME_SCORE = 11;
const SERVES_PER_PLAYER = 2;

let playerOneScore = 0;
let playerTwoScore = 0;
let serveCounter = 0;

function createRandomNum() {
    return Math.round(Math.random());
}

function resetServesAfterGameOver() {
    if (playerOne.classList.contains('active')) {
        playerOne.classList.remove('active')
    } else if (playerTwo.classList.contains('active')) {
        playerTwo.classList.remove('active');
    }
}

function playerOneWon() {
    return playerOneScore === MAX_GAME_SCORE;
}

function playerTwoWon() {
    return playerTwoScore === MAX_GAME_SCORE;
}

function somebodyWon() {
    return playerOneWon() || playerTwoWon();
}

function showGameMessage(playerName) {
    gameOver.innerHTML = 'Game over. Winner is ' + playerName;
}

function getNameOfWinner() {
    let playerName = '';
    if (playerOneWon()) {
        playerName = PLAYER_ONE_NAME;
    } else if (playerTwoWon()) {
        playerName = PLAYER_TWO_NAME;
    }
    return playerName;
}

function deactivateButtonServe() {
    buttonServe.removeEventListener('click', showResult);
}

function endGame() {
    resetServesAfterGameOver();
    showGameMessage(getNameOfWinner());
    deactivateButtonServe();
}

function changeServe() {
    playerOne.classList.toggle('active');
    playerTwo.classList.toggle('active');
}

function resetServeCounter() {
    serveCounter = 0;
}

function currentPlayerServedAllServes() {
    return serveCounter >= SERVES_PER_PLAYER;
}

function makeServe() {
    serveCounter += 1;
}

function incrementPlayerOneScore() {
    playerOneScore += 1;
}

function incrementPlayerTwoScore() {
    playerTwoScore += 1;
}

function displayPlayerTwoScore() {
    scoreTwo.innerHTML = playerTwoScore;
}

function displayPlayerOneScore() {
    scoreOne.innerHTML = playerOneScore;
}

function playerTwoWonServe() {
    return createRandomNum() === 0;
}

function showResult() {
    makeServe();
    if (currentPlayerServedAllServes()) {
        changeServe();
        resetServeCounter();
    }

    if (playerTwoWonServe()) {
        incrementPlayerTwoScore();
        displayPlayerTwoScore();
    } else {
        incrementPlayerOneScore();
        displayPlayerOneScore();
    }

    if (somebodyWon()) {
        endGame();
    }
}

function resetScore() {
    playerOneScore = 0;
    playerTwoScore = 0;
}

function hideGameMessage() {
    gameOver.innerHTML = '';
}

function activatePlayerOne() {
    if (playerTwo.classList.contains('active')) {
        playerTwo.classList.remove('active');
    }
    playerOne.classList.add('active');
}

function activateButtonServe() {
    buttonServe.addEventListener('click', showResult);
}

function resetGame() {
    resetScore();
    displayPlayerOneScore();
    displayPlayerTwoScore();
    hideGameMessage();
    activatePlayerOne();
    activateButtonServe();
}

activateButtonServe();
buttonReset.addEventListener('click', resetGame);
