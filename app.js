import numberComparisons from '/numberComparisons.js';

const guessButton = document.getElementById('guess-button');
const replayButton = document.getElementById('play-again');
const userNumber = document.getElementById('user-number');
let attempts = 4;
const correctNumber = (Math.ceil(Math.random() * 20));
replayButton.addEventListener('click', () => {

});
guessButton.addEventListener('click', () => {
    
    let userGuess = userNumber.value;
    userGuess = parseInt(userGuess);
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
        messageToYou = '🤮 You have entered invalid input. 🤮 You have ' + attempts + ' more guesses';
    }
    attempts = attempts - 1;
    if (attempts < 0) {document.getElementById('guess-button').disabled = true;
        messageToYou = 'YOU LOSE. TRY AGAIN.';}
    
    const interaction = document.getElementById('interaction');
    
    interaction.textContent = messageToYou;
    if (attempts < 0 || correctness === 0) { 
        const remover = document.getElementById('play-again');
        remover.classList.remove('hidden');
    }
    console.log('correctnumber' + correctNumber);
    console.log('correctness= ', correctness);
});