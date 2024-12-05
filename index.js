const app = require("./app.js")
const {PORT} = process.env



app.listen(PORT, ()=>{
    console.log(`SERVER is running in PORT ${PORT}`)
});