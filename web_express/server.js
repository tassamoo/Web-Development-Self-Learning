const express = require("express")
const req = require("express/lib/request")
const app = express()

app.use(logger)//put it at the top if you want to use the logger everywhere 

//Routers
app.set("view engine", "ejs")


app.get('/', (req, res) => {
    console.log("Here")
    res.render("index",{text: "World"})
    
})

const userRouter = require("./routes/users")
// const postRouter = require("./routes/posts")

app.use("/users", userRouter)
// app.use("/posts", postRouter)

//middleware function 
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)