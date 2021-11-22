// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains myName and myGreeting
// Render the welcome message using welcomeEl.innertext

let welcomeEl = document.getElementById("welcome-el")

let myName = "Tassamu Akhsan Nugroho"
let myGreeting = "Welcome back"

welcomeEl.innerText = myGreeting + " " + myName  

welcomeEl.innerText += "!"

