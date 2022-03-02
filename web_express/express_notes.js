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
    res.send("Hi")
})

app.listen(3000) //run the server