const express = require('express')
const app = express()

app.set('view engine', 'ejs') // you can also use pug besides ejs

//basic routing is using app.**something**
app.get('/', (req, res) => {
    
    console.log('Here')
    res.render("index", {text: "World"})
    

    // sending data to the client
    // res.download('./server.js')
    // res.status(500).json({
    //     message: "error"
    // })

})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)