const { Breed, Temperament, Op} = require("../db");
const {API_KEY} = process.env
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");


async function getDog(req, res, next){
    try {
        
        let {name, order,page} = req.query
        let apiDog
        let dbDog=[]
        let allDogs=[]
        page = page ? page : 1
        const charXPage = 5;
        
        //#region NAME
        if(!name){

            apiDog =(await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;

            dbDog = await Breed.findAll({include: Temperament});
            
            allDogs = dbDog.concat(apiDog);
        
        }
        if( name && name !== ""){
            apiDog = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}?api_key=${API_KEY}`)).data
            apiDog = apiDog.map(e=>{
                return {
                    name: e.name,
                    heightMin: dog.height.metric.split('-')[0],
                    heightMax: dog.height.metric.split('-')[1],
                    weightMin: dog.weight.metric.split('-')[0],
                    weightMax: dog.weight.metric.split('-')[1],
                    life_span: dog.life_span,
                    image: dog.image.url,
                }
            })
            // console.log (apiDog);
            //     .then(res => res.data.map(dog => {
                //     return{
                //         id: dog.id,
                //         name: dog.name,
                //         heightMin: dog.height.metric.split('-')[0],
                //         heightMax: dog.height.metric.split('-')[1],
                //         weightMin: dog.weight.metric.split('-')[0],
                //         weightMax: dog.weight.metric.split('-')[1],
                //         life_span: dog.life_span,
                //         image: dog.image.url,
                //     }
                        
                // }));
            
            dbDog = await Breed.findAll({
                where: {
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                }
            });

           allDogs = apiDog.concat(dbDog)
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
        
        
        const result = allDogs.slice((charXPage * (page - 1)), (charXPage * (page - 1)) + 8 )
        
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
            Dog = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`)).data
        }
        return res.json(Dog)

    } catch (error) {
        next(error)
    }
}

async function addDog(req,res, next){

    // let { name, heightMin, heightMax,weightMin,weightMax,life_span,image,temperaments} = req.body;
    // let breedCreated = await Breed.create({name,heightMin, heightMax, weightMin, weightMax,life_span, image,});
    // let temperamentDB = await Temperament.findAll({
    //     where: {
    //         name: temperaments,
    //     }
    // });
    // breedCreated.addTemperament(temperamentDB);
    // res.status(200).send('🐕 Breed created successfully 🐶')

    let { name, heightMin,heightMax ,weightMin,weightMax,life_span,image,createdInDb,temperament } = req.body;
    let breed= { name, heightMin,heightMax ,weightMin,weightMax,life_span,image,createdInDb,temperament };

    Breed.create(breed)
    .then(breed=>{
        breed.addTemperament(temperament)
        res.json({...breed, temperament})
    })
    .catch((error)=> next(error))

    // router.post('/', async (req, res, next) => {
        // let {name, heightMin, heightMax,weightMin,weightMax,life_span,image,createdInDb,temperament} = req.body;
        
        // if (!name || !heightMin || !heightMax || !weightMin || !weightMax) {
        //         return res.status(400).send('Please, insert more info to continue!')
        //     }
        // try {
        //         let dogCreated = Dog.create({
        //         name,
        //         heightMin,
        //         heightMax,
        //         weightMin,
        //         weightMax,
        //         life_span: life_span || 0,
        //         image,
        //         createdInDb
        //         });
        //         temperament.map(async (temp) => {
        //             try {
        //                 const tempDb = await Temperament.findAll({where: {name: temp}});
        //                 dogCreated.addTemperaments(tempDb);
        //                 // ({...dogCreated, temperament})
        //         } catch(err) {
        //             next(err);
        //         }
        //     })
        //     return res.send('The dog was created successfully!')     
        //     } catch(err) {
        //         next(err);
        //     }  
        
   
}

module.exports={
   addDog,
   getDog, 
   getDogById,
}
