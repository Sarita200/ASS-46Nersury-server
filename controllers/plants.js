import Plant from "./../models/Plant.js"
const plants = []


const postPlant = async (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description 
    } = req.body

        const newPlant = new Plant({
            name :name,
            category :category,
            image :image,
            price :price,
            description :description 
        })

        const savePlant =await newPlant.save();

    res.json({
        succes: true,
        data: newPlant,
        message: "New plant Added succesfully",
    })
}

const getPlant =async (req,res) =>{

    const allPlants = await Plant.find()
    res.json({
        success :true,
        data :allPlants,
        message :"All plants fetch successfully"
    })
}

const getPlantID =  (req,res)=>{
    const {id} = req.params

    const plant = plants.find((p)=> p.id == id)

    res.json({
        success :plant ? true : false ,
        data :plant,
        message :plant ? "plant fetch successfully":" plant can not fetch "
    })
}

const putPlantID = (req,res) =>{
    const {
        name,
        category,
        image,
        price,
        description 
    } = req.body

     const {id}=req.params
     
     let index = -1
     plants.forEach((plant,i)=>{
         if(plant.id==id ){
            index = i
         }
     })

     
     const newObj ={
        id,
        name,
        category,
        image,
        price,
        description 

     }
     if(index == 1){
        return res.json({
            success :false,
            message :`Plant not found for id ${id}`,
            data :null
        })
     }
     else{
        plants[index] =newObj 

        return res.json({
            success :true,
            message : "Plant updated successfully",
            data :newObj
        })
     }

     
}

const deletePlantID =(req,res) =>{
    const {id} = req.params

    let index =-1

    plants.forEach((plant , i) =>{
        if(plant.id == id){
            index = i
        }
    })

    if(index == -1){
        return res.json({
            success : true,
            message :`plant not found with id ${id}` 
        })
    }

    plants.splice(index, 1)

    res.json({
        success : true,
        message :"plant deleted successfully",
        data :null
    })
}

export {
    postPlant,
    getPlant,
    getPlantID,
    putPlantID,
    deletePlantID
}