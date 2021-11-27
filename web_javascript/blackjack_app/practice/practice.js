// let age = 22

// if (age <= 21) {
//   console.log("You can't enter the club!")
// } else {
//   console.log("Welcome!")
// }

// let age = 100
// if (age < 100) {
//   console.log("Not eligible!")
// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!")
// }  else {
//   console.log("Not eligible, you have already gotten one")
// }

// // conditionals practice
// console.log( 4 === 3)   // false
// console.log( 5 > 2)     // true
// console.log( 12 > 12)   // false
// console.log( 3 < 0)     // false
// console.log( 3 >= 3)    // true
// console.log( 11 <= 11)  // true
// console.log(3 <= 2)     // false


// //arrays practice
// let cards = [7, 3, 9]

// for (let i =0; i < cards.length; i++) {
//   console.log(cards[i])
// }

// let sentence = ["Hello", "My", "Name", "Is", "Moo"]
// let greetingEl = document.getElementById("greeting")

// for (let i = 0; i < sentence.length; i++) {
//   console.log(sentence[i])
//   greetingEl.textContent += sentence[i] + " "
// }

// //learning return

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {  
//     return player1Time
//   } else if (player2Time < player1Time) {
//     return player2Time
//   } else {
//     return player1Time
//   }

// }

// // let fastestRace = getFastestRaceTime()
// // console.log(fastestRace)

// function totalRaceTime(){
//   return player1Time + player2Time
// }

// let totalTIme = totalRaceTime()
// console.log(totalTIme)

// Generate random numbers

// let randomNumber = Math.random()
// console.log(randomNumber)

// let randomNumber = Math.random() * 10
// console.log(randomNumber)

// let flooredNumber = Math.floor(randomNumber)
// console.log(flooredNumber)

//math.random() is a random number between 0 and 1
//math.floor() rounds down to the nearest whole number

// let randomNumber = Math.floor(Math.random() * 10) + 1  
// //so the result is not zero
// console.log(randomNumber)

// //create a function that generates a random number between 1 and 6 and returns it

// function rollDice() {
//   let randomNUmber = Math.floor(Math.random() * 6) + 1
//   return randomNUmber
// }

// console.log(rollDice())