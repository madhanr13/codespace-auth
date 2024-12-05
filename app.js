require("dotenv").config()
require("./database/database.js").connect()
const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req, res)=> {
    res.send("<h1>Server is working successfully</h1>")
})

app.post("/register", async (req,res)=> {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = app