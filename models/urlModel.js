import mongoose from "mongoose"
import { Schema } from "mongoose"


const urlSchema = new Schema({

    shortID : {
        type : String,
        required : true,
        unique : true
    },
    redirectURL : {
        type : String,
        required : true
    },
    visitHistory : [{timestamp: {type : Number}}]
})

const URL = mongoose.model("url", urlSchema);

export default URL;