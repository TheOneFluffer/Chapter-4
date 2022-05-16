//Create a program that keeps asking for user input until they type in the number between the range of 0 to 50
var input = require("readline-sync");
var children = 0;

do
    {
        children = input.questionInt("Please enter the number of children: ");
        if (children < 0 || children > 50)
        {
            children = input.questionInt("Invalid number of children! \nPlease enter in the range of 0 to 50: ");
        }
    }

while (children < 0 || children > 50)
console.log("Input Accepted! Program terminated...");