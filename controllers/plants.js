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

const postPlant = (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description 
    } = req.body

        if(!name ){
            return res.json({
                success :false,
                data :null,
                message :"Name is required......"
            })
        }
        if(!category){
            return res.json({
                success :false,
                data :null,
                message :"category is required......"
            })
        }
        if(!image){
            return res.json({
                success :false,
                data :null,
                message :"image is required......"
            })
        }
        if(!price){
            return res.json({
                success :false,
                data :null,
                message :"price is required......"
            })
        }
        if(!description){
            return res.json({
                success :false,
                data :null,
                message :"description is required......"
            })
        }

    const randomId = Math.round(Math.random() * 10000)

    const newPlant = {
        id: randomId,
        name: name ,
        category: category,
        image: image,
        price: price,
        description: description
    }

    plants.push(newPlant)

    res.json({
        succes: true,
        data: newPlant,
        message: "New plant Added succesfully",
    })
}

const getPlant =(req,res) =>{
    res.json({
        success :true,
        data :plants,
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