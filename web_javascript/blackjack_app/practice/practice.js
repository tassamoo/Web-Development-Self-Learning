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

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
  if (player1Time < player2Time) {  
    return player1Time
  } else if (player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }

}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

function totalRaceTime(){
  return player1Time + player2Time
}

let totalTIme = totalRaceTime()
console.log(totalTIme)