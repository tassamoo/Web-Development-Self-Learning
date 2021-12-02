// function saveLead() {
//     console.log("buttonClicked");
// }

let myLeads = ["leads1", "leads2", "leads3"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    const element = myLeads[i];
    ulEl.innerHTML += "<li>" + element + "</li>"
}
