console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if (count < 0) {
        for (let i = 1; i <= -count; i++) {        
            if (i % 2 != 0) {
                console.log(-i);
            }       
        }
    }
    for (let i = 1; i <= count; i++) {        
        if (i % 2 != 0) {
            console.log(i);
        }       
    }
}
console.log(printOdds(-33));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if (age > 15) {
        console.log(`Congrats ${userName}, you can drive!`);
    }
    else{
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`)
    }
}
console.log(checkAge("Kael", 15));
console.log(checkAge("Jacob", 36));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y){
    if (x == 0 && y == 0) {
        console.log(`(${x}, ${y}) is on the Origin`)
    }
    else if (x == 0) {
        console.log(`(${x}, ${y}) is on the y axis`)
    }
    else if (y == 0) {
        console.log(`(${x}, ${y}) is on the x axis`)
    }
    else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1`)
    }
    else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2`)
    }
    else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3`)
    }
    else{
        console.log(`(${x}, ${y}) is in Quadrant 4`)
    }
}
console.log(whichQuadrant(0,0)); // Origin
console.log(whichQuadrant(0,10)); // y axis
console.log(whichQuadrant(10,0)); // x axis
console.log(whichQuadrant(10,10)); // Quadrant 1
console.log(whichQuadrant(-10,10)); // Quadrant 2
console.log(whichQuadrant(-10,-10)); // Quadrant 3
console.log(whichQuadrant(10,-10)); // Quadrant 4

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function typeOfTriangle(x, y, z){
    if (x + y > z && x + z > y && y + z > x) {
        if (x == y && x == z) {
            console.log(`Sides ${x}, ${y}, ${z} make an Equilateral Triangle`);
        } else if (x == y || x == z || y == z) {
            console.log(`Sides ${x}, ${y}, ${z} make an Isosceles Triangle`);
        } else{
            console.log(`Sides ${x}, ${y}, ${z} make a Scalene Triangle`);
        }
    } else{
        console.log(`Sides ${x}, ${y}, ${z} will not make a triangle`)
    }  
}
console.log(typeOfTriangle(10, 10, 10)); // equilateral
console.log(typeOfTriangle(10, 10, 19)); // isosceles
console.log(typeOfTriangle(10, 10, 20)); // no triangle
console.log(typeOfTriangle(10, 15, 12)); // scalene

// Bonus Exercise 5 Section
console.log("BONUS EXERCISE 5:\n==========\n");

function planUseInformation(planLimit, day, usage){
    // days used = day
    let daysRemaining = 30 - day;
    let planAverageDailyUse = (planLimit/30).toFixed(2);
    let usersAverageDailyUse = (usage/day).toFixed(2);
    let dataDifferenceAmount = (usersAverageDailyUse * 30 - planLimit).toFixed(2);
    let adjustedDataAmount = ((planLimit-usage)/daysRemaining).toFixed(2);
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Plan's average daily use: ${planAverageDailyUse} GB/day`);
    if (usersAverageDailyUse > planAverageDailyUse) {
        console.log(`You are EXCEEDING your plan's average daily use: (${usersAverageDailyUse} GB/day).`);
        console.log(`Continuing this high usage, you'll exceed your data plan by ${dataDifferenceAmount} GB.`);
        console.log(`To stay below your data plan, use no more than ${adjustedDataAmount} GB/day.`);
    } else if (usersAverageDailyUse < planAverageDailyUse) {
        console.log(`You are BELOW your plan's average daily use: (${usersAverageDailyUse} GB/day).`);
        console.log(`Continuing this usage, you'll have ${-dataDifferenceAmount} GB left on your data plan.`);
        console.log(`To stay current with your data plan, you may increase your usage up to ${adjustedDataAmount} GB/day.`);
    } else{
        console.log(`You are MATCHING your plan's average daily use: (${usersAverageDailyUse} GB/day).`);
        console.log("You are on track to end with 0 GB at the end of the period.");
    }
}
console.log("Exceeding Usage Example\n==========\n");
console.log(planUseInformation(100, 15, 56)); // Exceeding to match the class example
console.log("Below Usage Example\n==========\n");
console.log(planUseInformation(100, 20, 49)); // Below
console.log("Matching Usage Example\n==========\n");
console.log(planUseInformation(99, 10, 33)); // Matching