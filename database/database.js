const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected !");
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err.message);
    });
};

module.exports = connectDatabase;
