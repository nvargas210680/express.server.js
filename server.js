import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import { questionRouter } from "./questionsRouter.js";

const app = express();
dotenv.config()
const PORT = 4000;
app.use(express.json());


await mongoose.connect(process.env.MONGO_URL)
console.log("connected to mongodb;")

app.use("/questions", questionRouter)




app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});
