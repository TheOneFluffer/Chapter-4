var input = require('readline-sync');
var number = 0, remainder = 0;
 
do
    {
    //Now I need to put in a limiter inside the program
    number = input.questionInt("Enter any number or (0) to quit: ");
    if (number == 0)
    {
        console.log("Program Terminated…");
    }

    else if (number < 50 || number > 100)
    {
        console.log("Error: Out of range!");
    }

    else
    {
        if ( remainder = (number % 3 == 0 && number % 5 != 0))
        {
            console.log(number + " is divisible by 3 but not 5? " + Boolean(remainder));
        }

        else
        {
            console.log(number + " is divisible by 3 but not 5? " + Boolean(remainder));
        }
    }
}
    
 
while (number > 0)