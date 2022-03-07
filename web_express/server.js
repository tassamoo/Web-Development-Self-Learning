const express = require("express")
const req = require("express/lib/request")
const app = express()

app.use(logger)//put it at the top if you want to use the logger everywhere 

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Routers
app.set("view engine", "ejs")



//this code if you want to use dynamic routing

// app.get('/', (req, res) => {
//     console.log("Here")
//     res.render("index",{text: "World"})
    
// })

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