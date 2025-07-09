const mongoose= require("mongoose")
require("dotenv").config();

mongoose.connect(process.env.URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));