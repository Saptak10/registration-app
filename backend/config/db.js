const mongoose = require('mongoose')

const dbConnection = () => {
    
    const DB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/registrationapp';

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Connection error"));
    db.once("open", () => {
        console.log(`MongoDB connected at ${db.host}`);
    });
}

module.exports = dbConnection