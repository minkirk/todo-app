import express from "express";
import userRouter from "./routes/userRoutes.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/userRoutes.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

//connected config file to app
config({
    path:"./data/config.env"
})

//creating server
export const app = express();

const router = express.Router();



//using middle to access json data send from postman
app.use(express.json());

//exported userROuter from router and using in app
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);



//using middleware 
app.use(cookieParser())

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}))

//default url
app.get("/",(req,res)=>{
    res.send("Nicely working!!")
})

//using error middleware
app.use(errorMiddleware);


