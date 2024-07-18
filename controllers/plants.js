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

const getPlantID =  async (req,res)=>{
    const {id} = req.params

    const plant = await Plant.findOne({_id :id})

    res.json({
        success :plant ? true : false ,
        data :plant,
        message :plant ? "plant fetch successfully":" plant can not fetch "
    })
}

const putPlantID = async (req,res) =>{
    const {
        name,
        category,
        image,
        price,
        description 
    } = req.body

     const {id}=req.params
     
     await Plant.updateOne({_id:id},
        {
            $set :{
                name :name,
                category:category,
                image:image,
                price :price,
                description:description
            }
        })

        const updatedPlant = await Plant.findById(id)

        res.json({
            success :true,
            message : "Plant updated Successfully",
            data :updatedPlant
        })
     
}

const deletePlantID =async (req,res) =>{
    const {id} = req.params

    await Plant.deleteOne({
        _id :id
    })

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