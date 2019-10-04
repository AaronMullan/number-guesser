export default function numberComparisons(userGuess, correctNumber){
    if (userGuess > correctNumber && userGuess <= 20){
        return 1;
    }
    else if (userGuess < correctNumber && userGuess >= 1){
        return -1;
    }
    else if (userGuess === correctNumber){
        return 0;
    }
    else return 2; 
}