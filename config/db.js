import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    
    try{
        console.log("🔍 MONGODB_URI from env:", process.env.MONGODB_URI);


    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongo db has been connected at ${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch(err) {
        console.log("MONGO DB failed to connect", err)
        process.exit(1);
    }
}

export default connectDB