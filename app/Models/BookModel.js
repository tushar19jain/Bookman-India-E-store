const { Schema, default: mongoose } = require("mongoose");

const bookSchema = new Schema({
    bookName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    stripeURL:{
        type:String,
        required:true
    }
})

export const Book = mongoose.models.books || mongoose.model("books",bookSchema); 