import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
import userRouter from "./routes/user.js";

const app = express();


config({path:"./config.env"});


//middleware
app.use(express.json());


app.use(userRouter);



//connection to database(MongoDb)

mongoose.connect(process.env.LINK)
.then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
});


app.listen(process.env.PORT,()=>{
    console.log("server connected");
});