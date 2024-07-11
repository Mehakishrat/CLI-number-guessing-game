#! /usr/bin/env node
// import inquirer from "inquirer";
import inquirer from "inquirer";
console.log("\n\tWelcom to \'Mehak ishrat\' - CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your Guess Number",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation! You guess a correct number.");
}
else {
    console.log("Sorry, You guess a wrong number.");
}
;
