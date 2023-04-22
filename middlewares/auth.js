import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async(req,res,next)=>{

    const { token } =  req.cookies;
    if(!token)
    {
      return res.status(400).json({
       success:true,
       message:"User not logged in."
      })
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);
  next();
}