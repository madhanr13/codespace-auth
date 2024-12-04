const app = require("./app.js")
const {PORT} = process.env

app.get("/", (req, res)=> {
    res.send("<h1>Server is working successfully</h1>")
})

app.listen(PORT, ()=>{
    console.log(`SERVER is running in PORT ${PORT}`)
});