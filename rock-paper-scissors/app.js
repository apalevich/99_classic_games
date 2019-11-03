let userScore = 0;
let compScore = 0;
const USERSCORE_SPAN = document.getElementById('user-score');
const COMPSCORE_SPAN = document.getElementById('comp-score');
const SCOREBOARD_DIV = document.querySelector('.score-board');
const RESULT_P = document.querySelector('.result > p');
const ROCK_DIV = document.getElementById('r');
const PAPER_DIV = document.getElementById('p');
const SCISSORS_DIV = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function wins(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    USERSCORE_SPAN.innerHTML = userScore;
    COMPSCORE_SPAN.innerHTML = compScore;
    RESULT_P.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.<br>You win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    USERSCORE_SPAN.innerHTML = userScore;
    COMPSCORE_SPAN.innerHTML = compScore;
    RESULT_P.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}.<br>You lost...`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    RESULT_P.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}.<br>It'a draw.`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            wins(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    ROCK_DIV.addEventListener('click', () => game('r'));
    PAPER_DIV.addEventListener('click', () => game('p'));
    SCISSORS_DIV.addEventListener('click', () => game('s'));
}

main();