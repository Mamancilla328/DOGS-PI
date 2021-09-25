const { Temperament } = require("../db");
const axios = require('axios');

async function temps(){
    try {
        let episodes = (await axios.get(/*TU API*/)).data.results
        
        episodes = episodes.map(e=>{
            return {
               name: e.name,
               episode: e.episode
            }
        })
 
      episodes = await Promise.all(episodes.map(e=> Episodes.findOrCreate({where:e})))
 
 
      return "Episodios cargados exitosamente"
 
     } catch (error) {
        return "No se pudo cargar los episodios"
     }
}

async function getTemp(req, res, next){
    try {
       let episodes = await Episodes.findAll()
     res.json(episodes)

    } catch (error) {
        next(error)
    }
}



module.exports = {
    getTemp,
    temps,
}