const { Temperament } = require("../db");
const axios = require('axios');
const {API_KEY} = process.env;




async function getTemp(req, res, next){
    try {
        let apiInfo = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
        
        let temperament = apiInfo.map(e=>{
            return {
              temperament: e.temperament
            }
        })
 
        temperament = await Promise.all(temperament.map(e=> Temperament.findOrCreate({
            where:e,   
            
        })));

        let tempe = await Temperament.findAll()
        res.json(tempe)

    } catch (error) {
        next(error)
    }
}



module.exports = {
    getTemp,
}