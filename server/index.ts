import dotenv from 'dotenv';
import { app } from "./app";
import { connectDB } from './db/connectDb'

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`◎ Server is running on ${port}`);
        })
    })
    .catch((error: any) => {
        console.log("MongoDB connection Failed with", error);
    })
