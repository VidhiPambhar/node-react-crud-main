const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
    email:{
        type:String,
        required:true,
        unique:[true]
    },
    phone:{
        type:Number,
        // max:10,
        required:true
    }
})

const User = new mongoose.model('User',userSchema);
module.exports=User;