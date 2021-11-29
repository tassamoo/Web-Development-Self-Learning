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

// //   START         FINISH        STEP SIZE
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

// // The logical AND operator

// // practice 01
// let hasCompletedCourse = true
// let giveCertificate = true

// if (hasCompletedCourse === true && giveCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate...")
// }


// // practice 02
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showHint()
// }
// function showHint() {
//     console.log("Here's a hint!")
// }

// // The logical OR operator
// // practice 01

// let likesDocumentaries = true
// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("You should watch this movie!")
// }

// //Objects - store data in-depth - composite / complex data type. In a nutshell, key-value pairs.

// let course = {
//     title: "Learn Javascript Objects",
//     lessons: 16,
//     creator: "Moo",
//     length: 160,
//     level: 2,
//     isFree: true,
//     tags: ["Javascript", "Objects", "Composite Data Type"]
// }

// //dotnotation
// console.log(course.title)

// //bracket notation
// console.log(course["title"])

// //test
// console.log(course.tags[1])


// //practice 01
// let listObject = {
//     name: "Moo",
//     age: 22,
//     hobbies: ["eating", "sleeping", "coding"],
// }

// console.log(listObject.hobbies[2])

// //object
// let player = {
//     name: "Moo",
//     chips: 145,
//     // you can add function to an object and it called methods
//     // sayHello: function(){
//     //     console.log("Hello, I'm " + this.name)
//     // }
// }


// //Object Practice
// let person = {
//     name: "Moo",
//     age: 22,
//     country: "Indonesia"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// // If else statements

// let age = 15

// if (age < 6){
//     console.log("Free")
// } else if (age < 18) {
//     console.log("Child Discount")
// } else if (age < 27) {
//     console.log("Student Discount")
// } else if (age < 67) {
//     console.log("Full Price")
// } else {
//     console.log("Senior Citizen Discount")
// }

// // Loops and Arrays
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// // push, pop, unshift, shift

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// // AND Operator Practice
// let dayOfMonth = 13
// let weekDay = "Friday"

// if (dayOfMonth ===  13 && weekDay === "Friday") {
//     console.log("That's Scary!")
// }


// //random function practice
// let hands = ["rock", "paper", "scissors"]

// function getHand(){
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log(getHand())

 