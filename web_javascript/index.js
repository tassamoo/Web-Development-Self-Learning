// Define variables in JavaScript

// // document.getElementById('count-el').innerText = 5;

// let count = 0;
// console.log(count);

// let myAge = 22;
// console.log(myAge);

// javascript move line by line from top to bottom

//Basic Math Operations
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch * secondBatch
// console.log(count);

// example of math operations
// create two variables, myAge and humanDogRatio
// multiply them together and store the result in myDogAge
// log myDogAge to the console

    // let myAge = 22
    // let humanDogRatio = 7
    // let myDogAge = myAge * humanDogRatio
    // console.log(myDogAge)

// // reassigning and incrementing variables

//     let count = 5
//     count = count + 1  //5 + 1 = 6
//     console.log(count)

// // create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// // Decreament it down to 25, and then finally increase it to 70.
// // Log the variable to the console.

//     let bonusPoints = 50

//     bonusPoints = bonusPoints + 50
//     console.log(bonusPoints)

//     bonusPoints = bonusPoints - 75
//     console.log(bonusPoints)

//     bonusPoints = bonusPoints + 45
//     console.log(bonusPoints)

//The OnClick event listener

// initialize the count as 0
// listen for clicks on the incremennt button
// increment the count variable when the button is clicked
// change the count-el in the index.html to reflect the new count

function increment() {
    let count = 0;
    count = count + 1;
    document.getElementById('count-el').innerText = count;
}