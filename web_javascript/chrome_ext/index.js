// chrome://extensions/

let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from localStorage
// Store it in avariable, leadsFromLocalStorage
// Log out the variable

let leadsFromLocalStorage = JSON.parse (localStorage.getItem("leads"))


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        const element = myLeads[i]
        listItems += `
        <li>
            <a target='_blank' href='${element}'>
                ${element}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

