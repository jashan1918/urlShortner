import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import connectDB from "./config/db.js"


dotenv.config();

const app = express();
app.use(express.json()) 


connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`The server is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("the server is not running", error.message)
})