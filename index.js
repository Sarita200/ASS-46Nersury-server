import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { getHealth } from "./controllers/health.js";
import { postPlant,getPlant,getPlantID,putPlantID,deletePlantID } from "./controllers/plants.js";
import {handlePageNotFound} from "./controllers/errors.js"

dotenv.config()
const app = express();

const PORT = process.env.PORT ;
app.use(express.json());

(async()=>{
    const conn = await mongoose.connect("mongodb+srv://sarita1:phphatsdfg@cluster0.07emoys.mongodb.net/Nursery-server")

    if(conn){
        console.log(`MongoDB Connected 📦`)
    }
    else{
        console.log(`MongoDB Not Connected ❌`)
    }
}) ();


app.get("/health",getHealth)
app.post("/plant", postPlant)
app.get("/plants",getPlant)
app.get("/plant/:id",getPlantID)
app.put("/plant/:id",putPlantID)
app.delete("/plant/:id",deletePlantID)
app.use("*",handlePageNotFound)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
