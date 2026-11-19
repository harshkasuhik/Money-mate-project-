
const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE);

        console.log("MongoDB connected successfully");

    } catch (error) {
        console.log("MongoDB connection failed:", error);
        throw error;
    }
};

module.exports = { connectdb };
