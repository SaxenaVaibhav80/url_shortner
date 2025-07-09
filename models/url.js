const mongoose=require("mongoose")

const url= new mongoose.Schema({
    Original:{
        type:String
    },
    shortCode:{
        type:String,
        unique: true,
        require:true
    },
    Timestamp:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Url", url);



