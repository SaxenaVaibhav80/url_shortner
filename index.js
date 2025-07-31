const express= require("express")
const app = express()
const crypto = require("crypto")
const urlModel = require("./models/url.js")
const db = require("./config/config.js")
const dotenv = require("dotenv")
const path = require("path")
const validator = require("validator")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
const PORT = process.env.PORT
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

dotenv.config()
app.use(express.json());

app.post("/shorten",async(req,res)=>{
    const url = req.body.url

    try{
        if (!validator.isURL(url, { require_protocol: true })) {
            return res.status(400).json({ shortCode:"null" ,status: "Invalid URL format" });
        }
    }catch(err){
         res.status(400).send("issue in validator package")
    }
    


    const geturl = await urlModel.findOne({ Original: url })

    if(geturl){
        const shortcode= geturl.shortCode
        return res.status(200).json({shortCode:shortcode,status:200})
    }


    const short_code = crypto.randomBytes(2).toString('hex');

    const new_data= await urlModel.create({
       Original:url,
       shortCode:short_code
    })

    const code=new_data.shortCode
    return res.status(200).json({shortCode:code,status:200})
})

app.get("/red-web",async(req,res)=>
{
    const code = req.query.code

    const isShortcode= await urlModel.findOne({shortCode:code})
    
    if(isShortcode){
        return res.redirect(isShortcode.Original)
    }
    return  res.status(400).json({message:"Please send existed code or correct code"})
})


app.get("/",(req,res)=>{
    res.render("landing")
})

app.get("/generate-code",(req,res)=>
{
    res.render("generate")
})

app.get("/redirect",(req,res)=>
{
    res.render("usecode")
})

app.listen(PORT)