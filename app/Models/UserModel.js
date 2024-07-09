const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        require:[true]
    },
    password:{
        type:Number,
        require:[true]
    },
    type:{
        type:String,
        default:"USER"
    },
    cart:{
        type:[]
    }
})

export const User = mongoose.models.users || mongoose.model("users",userSchema); 