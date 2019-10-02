
const guessButton = document.getElementById('guess-button');
const userNumber = document.getElementById('user-number');
let attempts = 4;
const correctNumber = 13;
guessButton.addEventListener('click', () => {
    attempts = attempts - 1;
   // const attemptsRemaining = attempts.textContent;
    let userGuess = userNumber.value;
    console.log ('hello');
    console.log(userGuess);
    //console.log(outcome);
    const interaction = document.getElementById('interaction');
    interaction.textContent = 'You have ' + attempts + ' more guesses.';
    
   
    
});


