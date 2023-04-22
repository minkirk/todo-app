import {app} from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();


//listening server on a specific port
app.listen(process.env.PORT,()=>{
    console.log("server is working")
});
