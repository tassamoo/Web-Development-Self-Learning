const express = require("express")
const app = express()

//Rendering HTML
// crate views folder and index.html file

app.set("view engine", "ejs") //setup view engine

app.get('/', (req, res) => {
    console.log("Here")
    res.render("index",{text: "World"})
    
})

app.listen(3000)