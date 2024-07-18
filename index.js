import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from  "cors"

import { getHealth } from "./controllers/health.js";
import { postPlant,getPlant,getPlantID,putPlantID,deletePlantID } from "./controllers/plants.js";
import {handlePageNotFound} from "./controllers/errors.js"

dotenv.config()
const app = express();

const PORT = process.env.PORT ;
app.use(cors())
app.use(express.json());

(async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL)

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
