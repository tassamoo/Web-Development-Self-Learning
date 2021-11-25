let firstCard = getRandomcard()
let secondCard = getRandomcard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function getRandomcard(){
    return Math.floor(Math.random() * 11) + 1
}

function renderGame(){
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

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
    let card = getRandomcard()
    sum += card
    cards.push(card)
    renderGame()
}
