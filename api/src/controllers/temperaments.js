const { Temperament } = require("../db");
const axios = require('axios');

async function temps(){
    try {
        let temperament = (await axios.get("https://api.thedogapi.com/v1/breeds")).data.results
        
        temperament = temperament.map(e=>{
            return {
               name: e.name,
            }
        })
 
        temperament = await Promise.all(temperament.map(e=> Temperament.findOrCreate({where:e})))
 
 
      return "Se cargo exitosamente"
 
     } catch (error) {
        return "Ha ocurrido un error"
     }
}

async function getTemp(req, res, next){
    try {
       let tempe = await Temperament.findAll()
     res.json(tempe)

    } catch (error) {
        next(error)
    }
}



module.exports = {
    getTemp,
    temps,
}