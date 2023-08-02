const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default : "user"
    }
})
userSchema.set('timestamps',true)
module.exports = mongoose.model("user",userSchema);
