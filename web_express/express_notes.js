//1. create express server
const express = require('express') //require express library
const app = express() //create an app to setup entire server

app.listen(3000) //run the server

//it will show cannot GET /
// the slash forward "/" is routes, in short creating directory and path of our web app

// //common HTTP Method
// GET: Retrieve and read data from server.
// PUT: Update and replace data on the server.
// POST: Creating data and submitting it to the server.
// PATCH: Update and modify data on the server.
// DELETE: Remove data from server.

// 2. Basic Routing
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log('Here')
    res.send("Hi") //is only for testing purposes
})

app.listen(3000) //run the server

const express = require("express")
const app = express()

//3. sending data using res
app.get('/', (req, res) => {
    console.log("Here")
    // res.sendStatus(500) //internal server error
    // res.status(500).send("haha") //send string
    // res.status(500).json({message: "Error"})  //send json
    res.download("server.js") //download data from server
    
})

app.listen(3000)

//4. Rendering HTML
const express = require("express")
const app = express()

//Rendering HTML
// crate views folder and index.html file

app.set("view engine", "ejs") //setup view engine

app.get('/', (req, res) => {
    console.log("Here")
    res.render("index",{text: "World"})//text refer to index.html file
    
})

app.listen(3000)

//Routers
const express = require("express")
const req = require("express/lib/request")
const app = express()

//Routers

app.set("view engine", "ejs") 

app.get('/', (req, res) => {
    console.log("Here")
    res.render("index",{text: "World"})
    
})

//create folder caleed routes and move it to users.js
app.get("/users", (req, res) => {
    res.send("User List")
})

app.get("/users/new", (req, res) => {
    res.send("User New Form")
})

app.listen(3000)