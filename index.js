const app = require("./app.js")
const {PORT} = process.env

app.get("/", ()=> {
    res.send("<h1>Server is working</h1>")
})

app.listen(PORT, ()=>{
    console.log(`SERVER is running in PORT ${PORT}`)
});