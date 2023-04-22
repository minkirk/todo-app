import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const register = async (req,res)=>{

   try {
     const {name,email,password} = req.body;
     
     let user = await User.findOne({email});
     if(user) 
         return res.status(404).json({
             success:true,
             message:"User Already Exist!!!"
         })
     
     if(!user) return next(new ErrorHandler("user already exist",400))
 
 
     const hashedPassword = await bcrypt.hash(password,10);    
      user = await User.create({name,email,password:hashedPassword});
     
      sendCookie(user,res,"Registered Successfully",201);
   } catch (error) {
    next(error)
   }
         
}
export const login = async (req,res,next)=>{

try {
    
        const {email,password} = req.body;
    
        const user = await User.findOne({email}).select("+password");
    
        if(!user) return next(new ErrorHandler("Invalid email or password",400))
        
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch)
        {
         return res.status(404).json({
            success:true,
            message:"Invalid Email and Password"
         })   
        }
    
        sendCookie(user,res,`welcome back, ${user.name}`,200);
} catch (error) {
    next(error)
}
}

export const getAllUsers = async (req,res)=>{


}


export const getMyProfile =  (req,res)=>{

 res.status(200).json({
    success:true,
    user:req.user
 })
};

export const logout = (req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now())
    }).json({
        success:true,
        user:req.user
    })
}