const express= require("express")
const app = express()
const crypto = require("crypto")
const urlModel = require("./models/url.js")
const db = require("./config/config.js")
const dotenv = require("dotenv")
const PORT = process.env.PORT
dotenv.config()
app.use(express.json());

app.post("/shorten",async(req,res)=>{
    const url = req.body.url
    const geturl = await urlModel.findOne({ Original: url })

    if(geturl){
        const shortcode= geturl.shortCode
        return res.status(200).json({shortcode})
    }


    const short_code = crypto.randomBytes(6).toString('hex');
    const new_data= await urlModel.create({
       Original:url,
       shortCode:short_code
    })

    const code=new_data.shortCode
    return res.status(200).json({shortCode:code})


})

app.get("/:code",async(req,res)=>
{
    const code = req.params.code

    
    const isShortcode= await urlModel.findOne({shortCode:code})
    
    if(isShortcode){
        return res.redirect(isShortcode.Original)
    }
    return  res.status(400).json({message:"Please send existed URL or correct url"})
})


app.listen(PORT)