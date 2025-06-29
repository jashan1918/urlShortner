import URL from "../models/urlModel.js"
import { nanoid } from "nanoid"

const handleGenerateNewShortUrl =  async (req, res) => {

    const { url } = req.body;

    if(!url) {
        return res.status(400).json({
            error : "URL is required"
        })
    }

    const shortID = nanoid(8);

    await URL.create({
        shortId : shortID,
        redirectURL : url,
        visitHistory : []
    })
    
    return res.status(200).json({id : shortID})
    
}
