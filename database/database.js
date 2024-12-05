const mongoose = require("mongoose")

const MONGO_URL = process.env

exports.connect = () =>{
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("Database connected"))
    .catch((error)=> {
        console.log("Database connection failed", error.message)
        process.exit(1)
    })
}
