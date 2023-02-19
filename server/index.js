import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth";

const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnect");
})

// mongoose.connection.on("connected",()=>{
//     console.log("mongoDB connected");
// })

app.use("/auth", authRoute)



app.listen(8800 , ()=>{
    console.log("Listening at 8800")
});