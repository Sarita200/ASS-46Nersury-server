import express from "express";
import dotenv from "dotenv";

import { getHealth } from "./controllers/health.js";
import { postPlant,getPlant,getPlantID,putPlantID,deletePlantID } from "./controllers/plants.js";
import {handlePageNotFound} from "./controllers/errors.js"

dotenv.config()
const app = express();
app.use(express.json());


app.get("/health",getHealth)
app.post("/plant", postPlant)
app.get("/plants",getPlant)
app.get("/plant/:id",getPlantID)
app.put("/plant/:id",putPlantID)
app.delete("/plant/:id",deletePlantID)

app.use("*",handlePageNotFound)

const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
