const buttonServe = document.querySelector('.button-serve');
const buttonReset = document.querySelector('.button-reset');
let playerOne = document.querySelector('.player-one');
let playerTwo = document.querySelector('.player-two');
let scoreOne = document.querySelector('.score-one');
let scoreTwo = document.querySelector('.score-two');
let gameOver = document.querySelector('.game-over');


function createRandomNum() {
    return Math.round(Math.random());
}

let sumScoreOne = 0;
let sumScoreTwo = 0;

function endGame() {
    if (sumScoreOne === 11) {
        gameOver.innerHTML = 'Game over. Winner is Player 1';
        buttonServe.removeEventListener('click', showResult);
    } else if (sumScoreTwo === 11) {
        gameOver.innerHTML = 'Game over. Winner is Player 2';
        buttonServe.removeEventListener('click', showResult);
    }
}

function showResult() {
    let random = createRandomNum();
    console.log(random);
    if (random === 0) {
        sumScoreTwo += 1;
        scoreTwo.innerHTML = sumScoreTwo;
    } else {
        sumScoreOne += random;
        scoreOne.innerHTML = sumScoreOne;
    }
    endGame();
}

function resetGame() {
    scoreTwo.innerHTML = 0;
    scoreOne.innerHTML = 0;
    sumScoreOne = 0;
    sumScoreTwo = 0;
}

buttonServe.addEventListener('click', showResult);
buttonReset.addEventListener('click', resetGame);
