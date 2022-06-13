//DEPENDENCIES
require("dotenv").config()
const express = require("express")
const app = express()
const mongooose = require("mongoose")
mongoURI= process.env.MONGO_URI || "mongodb+srv://daxkjh:ILoveMongoDB@cluster0.ysvpp.mongodb.net/"


//CONFIG
port = process.env.PORT || 3000



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
