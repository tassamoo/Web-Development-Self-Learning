// let boxBtn = document.getElementById("box-btn")

// boxBtn.addEventListener("click", function() {
//     console.log("I want to open the box!")
// });

// //practice 01
// const playerName = "Moo"
// let credits = 45


// credits -= 10

// console.log(`${playerName} has ${credits} credits`)

const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 Days"

shippingCost = 15
shippingTime = "7-14 Days"

const fullPrice = basePrice - discount + shippingCost

console.log("Total cost:" + fullPrice + ". It will arrive in" + shippingTime)
