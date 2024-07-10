console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
    for(let i = 0; i < count; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }
}

printOdds(20);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age)
{
    let aboveSixteen = `Congrats, ${name}, you can drive!`;
    let belowSixteen = `Sorry, ${name}, but you need to wait until you're 16`;

    if(age >=16)
    {
        console.log(aboveSixteen);
    }
    else
    {
        console.log(belowSixteen);
    }
}

checkAge("Aaron", 21);
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y)
{
    if(x == 0 && y == 0)
    {
        console.log("You are on the origin");
    }
    else if(x > 0 && y > 0)
    {
        console.log("Quadrant 1");
    }
    else if(x < 0 && y > 0)
    {
        console.log("Quadrant 2");
    }
    else if(x < 0 && y < 0)
    {
        console.log("Quadrant 3");
    }
    else
    {
        console.log("Quadrant 4");
    }
}

whichQuadrant(5, -3);
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function whatTriangle(x, y, z)
{
    if(x + y != z || x + z != y || y + z != x)
    {
        console.log("Invalid Triangle. The sum of any two sides should always be greater than the third side.");
    }
    else if(x == y && y == z)
    {
        console.log("Equilateral Triangle");
    }
    else if(x == y || y == z || z == a)
    {
        console.log("Isosceles Triangle");
    }
    else
    {
        console.log("Scalene Triangle");
    }
}

whatTriangle(4, 4, 4);