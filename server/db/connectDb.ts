import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL!}`);
        console.log(`MongoDB connected !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection error ", error);
        process.exit(1);
    }
}

export { connectDB };