#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a welcome message
console.log("\n\tWelcom to \'Mehak ishrat\' - CLI Number Guessing Game");


// Added functionality to generate a random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5 + 1)


// Asking Question from user through inquirer
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your Guess Number",
    },
]);

// conditional statement if else
if(answer.userGuessNumber === randomNumber){
    console.log("Congratulation! You guess a correct number.");
}
else{
    console.log("Sorry, You guess a wrong number.");
};
