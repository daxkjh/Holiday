//DEPENDENCIES
require("dotenv").config()
const express = require("express")
const app = express()
const mongooose = require("mongoose")
mongoURI= process.env.MONGO_URI 


//CONFIG
port = process.env.PORT || 2000


//LISTENER
app.listen(port, ()=>{
    console.log("Listening to port", port)
})

//MIDDLEWARE
app.use(express.urlencoded({extended:true}))


// TEST ROUTE
app.get("/", (req, res)=>{
    res.send("HELLO WORLD")
})

app.get("/test", (req,res)=>{
    res.send("TEST WORLD")
})
