const express = require('express')
const app = express()

app.set('view engine', 'ejs') // you can also use pug besides ejs

app.get('/', (req, res) => {
    
    console.log('Here')
    res.render("index", {text: "World"})
    // res.download('./server.js')
    // res.status(500).json({
    //     message: "error"
    // })

})
app.listen(3000)