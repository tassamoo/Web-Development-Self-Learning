// chrome://extensions/

let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        const element = myLeads[i]
        //listItems += "<li><a target='_blank' href=' " + element +"'>" + element + "</a></li>"
        
        //Template String
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

