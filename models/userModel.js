import mongoose from "mongoose";

//creating schema for db
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        select:false,
        required:true


    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


//creating model using above defined schema
//model name "User" --- can be anything
export const User = mongoose.model("User",schema);

