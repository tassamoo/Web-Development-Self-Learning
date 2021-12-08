// //Define variables in JavaScript

// document.getElementById('count-el').innerText = 5;

// let count = 0;
// console.log(count);

// let myAge = 22;
// console.log(myAge);

// // javascript move line by line from top to bottom


// //Basic Math Operations
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch * secondBatch
// console.log(count);

// // example of math operations
// // create two variables, myAge and humanDogRatio
// // multiply them together and store the result in myDogAge
// // log myDogAge to the console

//     let myAge = 22
//     let humanDogRatio = 7
//     let myDogAge = myAge * humanDogRatio
//     console.log(myDogAge)


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


// // Using functions to write less code

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// // setting up a race car game function
// countdown()

// // Go
// // Players are running the Race
// // race is finished

// // get ready for a new race
// countdown()


// // writing my first function

// // create a funtion (you decide the name) that logs out the number 42 to the console
// // call/invoke the function

// function myLogger(){
//     console.log(42)
// }

// myLogger()

// // challenge race game
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // create a funtion that logs out the sum of all the lap times

// function logLapTime(){
//     let totalTime = lap1 + lap2 + lap3

//     console.log(totalTime)
// }

// logLapTime()


// // write a function that increments

// let lapsCompleted = 0

// // create a function that increments the lapsCompleted variable with one
// // run it three times
// function incrementLaps(){
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLaps()
// incrementLaps()
// incrementLaps()

// console.log(lapsCompleted)


// // The OnClick event listener

// // initialize the count as 0
// // listen for clicks on the incremennt button
// // increment the count variable when the button is clicked
// // change the count-el in the index.html to reflect the new count

// let countEl = document.getElementById('count-el')
// let count = 0;

// console.log(countEl)

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
// }

// function reset() {
//     count = 0;
//     countEl.innerText = count;
// }

// function save() {
//     localStorage.setItem('count', count);
// }


// // Strings

// // create a variable, meessage, that stores the string: "You have three new notifications"
// // create a variable, messageToUser, that contains the message we have logged


// let username = "moo"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// // create two variables, name and greeting. Set the name variable to your name and the greeting variable to "Hi, my name is"
// // create a third variable, myGreeting taht concatenates the two strings
// // log myGreting to the console

// let name = "Tassamu Akhsan Nugroho"
// let greeting = "Hi, my name is 22"
// let myGreeting = greeting + " " + name

// console.log(myGreeting)

// //Strings vs numbers, 
// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints
// console.log(totalPoints)

// // strings is not operable on number data types
// console.log(4 + 5)
// console.log("2" + "4")
// console.log(5 + "1")
// console.log(100 + "100")


// // Arrays - ordered list of items - composite / complex data type

// //0 indexed
// let featuredPost = [
//     "checkout my netflix clone", 
//     "here's the code for my project", 
//     "I've just relaunched my portfolio"
// ]

// console.log (featuredPost[0])
// console.log (featuredPost.length)

// let skills = [
//     "data analysis",
//     "data visualization",
//     "data wrangling",
//     "data science",
//     "data engineering",
//     "data modeling",
//     "data mining",
// ]

// let example = [
//     "Tassamu Akhsan Nugroho",
//     22,
//     true
// ]

// // adding items to the end of it
// let cards = [7,4]

// cards.push(3)

// console.log(cards)

// //practice adding items to the end of an array
// let messages = ["I'm learning JavaScript", "It's challenging to learn JavaScript"]

// let newMessage = "I'm learning Array"

// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)

// // Blackjack app
// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard] //array - ordered list of items
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// // let sumEl = document.querySelector("#sum-el")

// // if (sum < 21){
// //     console.log("Do you want to draw a a new card?")
// // }   else if (sum === 21){
// //     console.log("Woohoo! You've got BlackJack!")
// // }   else { //you can also use else if(sum > 21)
// //     console.log("You're out of the game!")
// // }

// function startGame(){
//     renderGame()
// }

// function renderGame(){
//     // render out firstCard and secondCard
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

//     if (sum <= 20){
//         message = "Do you want to draw a a new card?"
//     }   else if (sum === 21){
//         message = "Woohoo! You've got BlackJack!"
//         hasBlackJack = true
//     }   else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
//     sumEl.textContent = "Sum: " + sum
    
// }

// function newCard(){
// let card = 7
// sum += card
// renderGame()
// }

// //for loops
// //how to count from 1 to 10 using a for loop

// for (let count = 10; count < 21; count += 1){
//     console.log(count)
// }

// for (let i = 0; i < 6; i += 1){
//     console.log(i)
// }

// for (let i = 10; i < 101; i += 10){
//     console.log(i)
// }

// // DRY - Don't Repeat Yourself

// let messages = [
//     "I'm learning JavaScript", 
//     "It's challenging to learn JavaScript",
//     "I want to graduate and get a real job",
//     "I hope that I can write my thesis fast enough",
//     "Help meeee"
// ]

// for (let i = 0; i < messages.length; i += 1){
//     console.log(messages[i])
// }

// //functions inside an objects is a method


// // const vs let vs var
// // const is a constant, it can't be changed
// // let is a variable, it can be changed
// // var is a variable, it can be changed

// //chrome_ext app
// // chrome://extensions/

// let myLeads = [];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLeads()
// })


// function renderLeads(){
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         const element = myLeads[i]
//         //listItems += "<li><a target='_blank' href=' " + element +"'>" + element + "</a></li>"
        
//         //Template String
//         listItems += `
//         <li>
//             <a target='_blank' href='${element}'>
//                 ${element}
//             </a>
//         </li>
//         `
    
//     }
//     ulEl.innerHTML = listItems
// }

// // method 2: using append to add to the end of the list

// function renderLeads(){
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         const element = myLeads[i]
//         //create element
//         const li = document.createElement("li")
//         //set text content
//         li.textContent = element
//         //append to ul
//         ulEl.append(li)
//     }
//     ulEl.innerHTML = listItems
// 

// //localStorage example
// let myLeads = []
// localStorage.setItem("myLeads", "www.google.com")
// localStorage.getItem("myLeads")
// localStorage.clear()

// // 1. Save a key/value pair to localStorage
// // 2. Refresh the page. Get the value and log it to the console.
// // 3. Clear the value from localStorage.

// localStorage.setItem("myName", "Tassamu Akhsan Nugroho")
// let name = localStorage.getItem("myName")
// console.log(name)
// localStorage.clear()

// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.stringify(myLeads)
// myLeads.push("www.awesomelead.com")

// example of how to use JSON.parse and JSON.stringify

// // 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// // 2. Push a new value into the array
// myLeads.push("www.awesomelead.com")
// // 3. Turn the array back into a string
// myLeads = JSON.stringify(myLeads)
// // 4. console.log the new string using typeof to verify it's a string
// console.log(typeof myLeads)


 

