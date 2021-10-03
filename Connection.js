const { exception } = require("console");
const { Mongoose } = require("mongoose");
require('dotenv').config({path: __dirname + '/.env'})
const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.db)
        const db = mongoose.connection;
        
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Successfully connected to database..")
        });
        return db

    } catch (error) {
        console.log(error)
        return error.message
    }
}

module.exports = connectDB