const { Mongoose } = require("mongoose");

const mongoose = require('mongoose')
const uri = "mongodb+srv://dbUser:qMca3pI6E3y8rn8R@cluster0.f8ujp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async() => {
    await mongoose.connect(uri)
    console.log("connected successfully..")
}
connectDB()
.catch(err => console.log(err))
module.exports = connectDB