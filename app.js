import numberComparisons from '../numberComparisons.js';

const guessButton = document.getElementById('guess-button');
const userNumber = document.getElementById('user-number');
let attempts = 4;
//const correctNumber = 13;
const correctNumber = (Math.ceil(Math.random() * 20));
guessButton.addEventListener('click', () => {
    
    attempts = attempts - 1;
    if (attempts === 0) document.getElementById('guess-button').disabled = true;

    let userGuess = userNumber.value;
    console.log ('Userguess ' + userGuess);

    const correctness = numberComparisons(userGuess, correctNumber);
    

    let messageToYou = ' ';

    if (correctness === 0) {
        messageToYou = 'You are correct!';
        document.getElementById('guess-button').disabled = true;
    }
    if (correctness === 1) {
        messageToYou = 'Your guess is too high. You have ' + attempts + ' more guesses.';
    }
    if (correctness === -1) {
        messageToYou = 'Your guess is too low. You have ' + attempts + ' more guesses.';
    }
    if (correctness === 2) {
        messageToYou = 'You have entered invalid input.';
    }
    console.log('correctnumber' + correctNumber);
    const interaction = document.getElementById('interaction');
    interaction.textContent = messageToYou;
});