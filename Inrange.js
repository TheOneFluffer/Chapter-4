var input = require('readline-sync');
var number = 0;

do
    {
        number = input.questionInt("Enter a number: ");
        if (number < 100 || number > 200)
        {
            console.log("Error! Please enter a number between 100 and 200.");
        }
    }

while (number < 100 || number > 200)
console.log("Input Accepted: End of Program!");