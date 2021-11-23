let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

if (sum < 21){
    console.log("Do you want to draw a a new card?")
}   else if (sum === 21){
    console.log("Woohoo! You've got BlackJack!")
}   else if (sum > 21){
    console.log("You're out of the game!")
}