import mongoose from "mongoose";

const  connectDB = async   () =>{
    mongoose.connect ("mongodb+srv://firozkhan74755_db_user:firozdb123@cluster0.gmn4no3.mongodb.net/InstaDB")
}

export default connectDB