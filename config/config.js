const mongoose= require("mongoose")
require("dotenv").config();

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));