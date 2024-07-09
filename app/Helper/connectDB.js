import mongoose from "mongoose";

export default async function getCon(){
    try {
        const con = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(con);
    } catch (error) {
        console.log(error);
    }
}