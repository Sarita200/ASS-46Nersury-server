import express from "express";
import dotenv from "dotenv";

import { getHealth } from "./controllers/health.js";
import { postPlant,getPlant,getPlantID,putPlantID,deletePlantID } from "./controllers/plants.js";

dotenv.config()
const app = express();
app.use(express.json());


const plants = [{
    "id":1 ,
    "name":"bamboo",
    "category":"indoor",
    "image":"https://www.kokedamaindia.com/wp-content/uploads/2020/08/lucky-bamboo-new1-550x669.jpg",
    "price":150,
    "description":"Lucky Bamboo Plant Kokedama"
},
{
    "id": 2,
    "name": "pink rose",
    "category": "outdoor",
    "image": "https://m.media-amazon.com/images/I/41aTQhHbg4L._SX300_SY300_QL70_FMwebp_.jpg",
    "price": 210,
    "description": "Royal Paradise Garden American Pink Rose Flower Plant Home Garden Plant 1 Grafted Rose Live Plant"
},
{
    "id": 3,
    "name": "rose",
    "category": "outdoor",
    "image": "https://cdn2.stylecraze.com/wp-content/uploads/2013/08/1404-Top-25-Most-Beautiful-Red-Roses.jpg.webp",
    "price": 300,
    "description": "Top 27 Most Beautiful Red Roses"
}
]



app.get("/health",getHealth)

app.post("/plant", postPlant)

app.get("/plants",getPlant)

app.get("/plant/:id",getPlantID)

app.put("/plant/:id",putPlantID)

app.delete("/plant/:id",deletePlantID)

app.use("*",(req,res)=>{
    res.send(`<div>
        <h1 style="text-align:center">404 Not Found</h1>`)
})
const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
