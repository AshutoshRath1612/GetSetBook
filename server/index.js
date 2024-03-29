import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routes/hotels.js";
import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

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

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

app.use((err,req,res,next) => {
    const errorstatus = err.status || 500;
    const errormessage = err.message || "Something went wrong";
    res.status(errorstatus).json({
        success: false,
        status:errorstatus,
        message:errormessage,
        stack:err.stack,
    })
})

app.listen(8800 , ()=>{
    console.log("Listening at 8800")
});