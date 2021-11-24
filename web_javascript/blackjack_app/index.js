let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el")

// if (sum < 21){
//     console.log("Do you want to draw a a new card?")
// }   else if (sum === 21){
//     console.log("Woohoo! You've got BlackJack!")
// }   else { //you can also use else if(sum > 21)
//     console.log("You're out of the game!")
// }

function startGame(){
    renderGame()
}

function renderGame(){
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if (sum <= 20){
        message = "Do you want to draw a a new card?"
    }   else if (sum === 21){
        message = "Woohoo! You've got BlackJack!"
        hasBlackJack = true
    }   else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    
}

function newCard(){
let card = 7
sum += card
renderGame()
}


// CASH OUT!
console.log(message)
