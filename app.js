const guessButton = document.getElementById('guess-button');

let guess = getElementById.getValue('number-guess')

guessButton.addEventListener('click', () => {
    guessNumber = guessNumber + 1;

console.log(guess);

const correctNumber = 13;

function compareNumbers(guess) {
     if (guess > correctNumber){
        return 1;
}   else if (guess < correctNumber)  {
        return -1;
}   else {
        return  0;
}
}