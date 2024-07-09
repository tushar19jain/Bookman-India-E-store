const { Schema, default: mongoose } = require("mongoose");

const AdminSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const Admin = mongoose.models.admin || mongoose.model("admin",AdminSchema);