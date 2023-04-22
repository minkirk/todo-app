
import mongoose from "mongoose";

//creating schema for db
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       required:true 
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


//creating model using above defined schema
//model name "User" --- can be anything
export const Task = mongoose.model("Task",schema);

