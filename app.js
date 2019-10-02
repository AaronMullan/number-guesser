import numberComparisons from '../numberComparisons.js';

const guessButton = document.getElementById('guess-button');
const userNumber = document.getElementById('user-number');
let attempts = 4;
const correctNumber = 13;
guessButton.addEventListener('click', () => {
    attempts = attempts - 1;

    let userGuess = userNumber.value;
    console.log (userGuess);

    const correctness = numberComparisons(userGuess, correctNumber);
    console.log(correctness);

    let messageToYou = ' ';

    if (correctness === 0) {
        messageToYou = 'You are correct!';
    }
    if (correctness === 1) {
        messageToYou = 'Your guess is too high.';
    }
    if (correctness === -1) {
        messageToYou = 'Your guess is too low.';
    }
    console.log(messageToYou);
    const interaction = document.getElementById('interaction');
    interaction.textContent = messageToYou + 'You have ' + attempts + ' more guesses.';
});