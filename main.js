#! /usr/bin/env node
// Importing inquirer
import inquirer from "inquirer";
//Welcome message
console.log("Code with Ayesha Word_Counter");
//prompt the user to enter a Sentnce
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
// Triming the sentences and splitting it into words baed on "spaces"
const words = answers.Sentence.trim().split(" ");
console.log(words);
//Analysis of user input sentence
console.log(`Your sentence word count is ${words.length}`);
