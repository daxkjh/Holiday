//DEPENDENCIES
require("dotenv").config()
const express = require("express")
const app = express()
const mongooose = require("mongoose")
mongoURI= process.env.MONGO_URI 
const path = require("path")


//CONFIG
port = process.env.PORT || 2000


//LISTENER
app.listen(port, ()=>{
    console.log("Listening to port", port)
})

//MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.static("./frontend/dist"))


// TEST ROUTE
app.get("/api/", (req, res)=>{
    res.send("HELLO WORLD")
})

app.get("/*", (req,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/dist/index.html"))
})
