// //concatenate two variables
// let firstName = 'John'
// let lastName = 'Doe'
// let fullName = firstName + ' ' + lastName

// console.log(fullName)


// //function practice
// let name = "John"
// let greeting = "Hi There"


// function greetPeople() {
//     console.log(greeting + ", " + name + "!")
// }
// greetPeople()


// // Increment and Decrement Functions    
// let myPoints = 3
// function add3Points() {
//     myPoints += 3
// }
// function remove1Points() {
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()
// console.log(myPoints)


// // Strings and Numbers
// console.log("2" + 2) //"22"
// console.log(11 + 7) //18
// console.log(6 + "5") //"65"
// console.log("My Points:" + 5 + 9) // "My Points:59"
// console.log(2 + 2) //4
// console.log("11" + "14") //1114

// Nike - Shoes error challenge
let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase(){
    console.log("You bought a pair of shoes!")
    errorParagraph.textContent = "Something went wrong, please try again"
}

