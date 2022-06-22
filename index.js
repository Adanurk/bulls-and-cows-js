// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 
// let name = prompt('What is your name? ');
// console.log(`User's input is: ${name}`);

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something 

let randomNum = function () {
    let answer = Math.floor(Math.random() * (9876 - 1023 + 1)) + 1023;
    let myArr = answer.toString().split("");
    let uniqueCheck = function () {
        let counter = 0;
        for (let i = 0; i < myArr.length; i++) {
            for (let j = 0; j < myArr.length; j++) {
                if (myArr[i] === myArr[j]) {
                    counter += 1;
                }
            }
        }
        if (counter > myArr.length) {
            return false
        } else {
            return true
        }
    }
    if (uniqueCheck()) {
        return answer
    } else {
        return randomNum()
    }
}

let secretNum = randomNum();
console.log(secretNum);

let bullsAndCows = function () {
    let guessNum = prompt("Enter a guess number: ");
    let testArr = secretNum.toString().split("");
    let guessArr = guessNum.split("");


    let counterCows = 0;
    let counterBulls = 0;
    for (const item of guessArr) {
        for (const element of testArr) {
            if (item === element) {
                // counterCows += 1;
                if (guessArr.indexOf(item) === testArr.indexOf(element)) {
                    counterBulls += 1;
                    // counterCows -= 1;
                }else{
                    counterCows += 1;
                }
            }
        }
    }

    if (+guessNum === secretNum) {
        return `this is the right answer`
    } else {
        console.log(`Hint: ${counterBulls} bull and ${counterCows} cows`);
        return bullsAndCows();
    }
}

console.log(bullsAndCows());