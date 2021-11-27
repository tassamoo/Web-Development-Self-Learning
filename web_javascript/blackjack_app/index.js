let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    isAlive = true
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomcard(){
    let card = Math.floor(Math.random() * 11) + 1

    if (card > 10){
        return 10
    } else if ( card === 1){
        return 11
    } else {
        return card
    }
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

