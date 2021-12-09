// let boxBtn = document.getElementById("box-btn")

// boxBtn.addEventListener("click", function() {
//     console.log("I want to open the box!")
// });

// //practice 01
// const playerName = "Moo"
// let credits = 45


// credits -= 10

// console.log(`${playerName} has ${credits} credits`)

// //practice let const

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 Days"

// shippingCost = 15
// shippingTime = "7-14 Days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost:" + fullPrice + ". It will arrive in" + shippingTime)


// //practice 02 - using innerHTML
// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

// //template strings/literals

// const recipient = "Tas"
// const sender = "Moo"
// const shippingTime = "5-12 Days"

// //Refactor the email string to use template strings
// const email = "Hey " + recipient + ", your order has been shipped!"
// const email2 = `Hey ${recipient}, your order has been shipped by ${sender} !`
// console.log(email)
// console.log(email2)

// //template strings on multiple lines
// const message = `
// Hey ${recipient}, 

// your order has been shipped by ${sender}!  rrive in ${shippingTime}
// `
// console.log(message)

//notes:
// // chrome://extensions/

// let myLeads = [];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
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


// //Truthy and Falsy Values

// const credits = 0

// if (credits > 0){
//     console.log("You have enough credits")
// } else {
//     console.log("You don't have enough credits")
// }

// const credits = 0

// if (credits > 0) {
//     console.log("You have enough credits")
// } else {
//     console.log("You don't have enough credits")
// }


// //falsy value in JS
// false
// 0 
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalize emptiness
// NaN

// let currentViewers = null

// currentViewers = ["Jane", "John", "Moo"]

// currentViewers = null

// if (currentViewers) {
//     console.log("We have viewers!")
// }

let trueOrFalse = Boolean("hello")

console.log(Boolean("")     ) //false
console.log(Boolean("0")    ) //true
console.log(Boolean("100")  ) //true
console.log(Boolean(null)   ) //false
console.log(Boolean([0])    ) //true
console.log(Boolean(-0)     ) //false
