//Converting from for loop to do-while loop
var sum = 0;
for (var i = 0; i <= 1000; i++)
{
    sum = sum + i;
}
console.log(sum);

let sum2 = 0;
let j = 0

do
{
    sum2 +=  j;
    j++
}
while (j <= 1000)
{
    console.log(sum2);
}

//Nested for-loops

for (var x = 0; x < 2; x++)
{
    console.log("*");
    for (var y = 3; y > 1; y--)
    {
        console.log(x + y);
    }
    console.log("*");
}