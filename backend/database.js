const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bookStore")
        console.log("Database connected.")
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = connectToDB