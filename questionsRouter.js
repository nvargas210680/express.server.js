import express from "express";
import { questionModel } from "./models.js";

export const questionRouter = express.Router()
0
questionRouter.get("/", async (req, res)=>{

    
const questions = await questionModel.find() 
    console.log("questions");

    console.log(questions[0].text)

    try{
        res.send(questions);
    
    
    }catch(error){
        res.status(500).send(error)
    }

})
