var input = require('readline-sync');
var first = input.questionInt("Enter first base value: ");
var last = input.questionInt("Enter last base value: ");
var multiply = 0, space = "", loopy = 1, number = 1, first2 = 0, last2 = 0;
first2 = first;
last2 = last;

while(first <= last)
{
    space = space + first + "\t";
    first++;
}
console.log("n\t" + space);

/*while (loopy <= 5)
{
    number = 1;
    if (number <= last2)
    {
        for(var i = first2; i <= last2; i++)
        {
            multiply = first2 * loopy;
            space += "\t" + multiply;
        }      
        number++;
    }      
    console.log(loopy + space);
    loopy++;
}  */ 

space = "";

for(var i = first2; i < last2; i++)
{
    space += "\n";
    
    for(var j = number; j <= last2; j++)
    {
        //i = i * j;
        space += i + "\t";
    }
}

console.log(space);

 


/*do while loop to print column of last base value
console.log("first " + first2 + " no. " + number + " last " + last2 + " loopy " + loopy);
do
{
    //settle the first line
    space = space + first + "\t";
    number = first2;
    first++;
    //console.log("first " + first + "no. " + number);
}

while(first2 <= last2)
{
    console.log("first " + first2 + " no. " + number + " last " + last2 + " loopy " + loopy);
    //console.log("n\t" + space);
    while(loopy <= 5)
    {
        
        multiply = number * loopy;
        console.log("\t" + multiply + "\t");
        //first++;
        /*while (first2 < last2)
        {
            
        }
        console.log(loopy);
        loopy++;
    }
    first2++;
}*/
