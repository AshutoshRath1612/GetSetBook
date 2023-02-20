import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routes/hotels";
import authRoute from "./routes/auth";
import roomsRoute from "./routes/rooms";
import usersRoute from "./routes/ausers;

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

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);



app.listen(8800 , ()=>{
    console.log("Listening at 8800")
});