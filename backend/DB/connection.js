import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBURI);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
}

export default connectDB;
