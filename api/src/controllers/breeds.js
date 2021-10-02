const { Breed, Temperament, Op} = require("../db");
const {API_KEY} = process.env
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");


async function getDog(req, res, next){
    try {
        
        let {name, order,page} = req.query
        let apiDog
        let dbDog
        let allDogs=[]
        page = page ? page : 1
        const charXPage = 5;
        
        //#region NAME
        if(name && name !== ""){
            apiDog = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&?api_key=${API_KEY}`)).data.results;
            dbDog = await Breed.findAll({
                where: {
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            allDogs = dbDog.concat(apiDog)
        }
        else {
            apiDog = (await axios.get("https://api.thedogapi.com/v1/breeds")).data.results
            dbDog = await Breed.findAll({include: Temperament})
            
            allDogs= dbDog.concat(apiDog)
        }
        //#endregion
        //#region ORDER
        if ( order === "asc" || !order){
            allDogs = allDogs.sort((a,b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }else{
            allDogs = allDogs.sort((a,b) => {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        //#endregion
        //#region PAGE
        let result = allDogs.slice((charXPage * (page - 1)), (charXPage * (page - 1)) + 1 )
        //#endregion
        
        return res.send({
            result: result,
            count: allDogs.length
        })
        
    } catch (error) {
        next(error)
    }
}

async function getDogById(req,res,next){
    try {
        const { id } = req.params
        let Dog;
        if(isNaN(id)){
            Dog = await Breed.findByPk(id)
        }else{
            Dog = await (axios.get(`https://api.thedogapi.com/v1/breeds/${id}&?api_key=${API_KEY}`)).data
        }
        
        return res.json(Dog)
    } catch (error) {
        next(error)
    }
}

const addDog = (req,res, next)=>{
    const { name, height, weight,life_span,image} = req.body;
    let breed= { name, height, weight,life_span, image };

    Breed.create(breed)
    .then(character=>{
        breed.addTemperament(temperament)
      res.json({...breed, temperament})
    })
    .catch((error)=> next(error))
   
}

module.exports={
   addDog,
   getDog, 
   getDogById,
}
