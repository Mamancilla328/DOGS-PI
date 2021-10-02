const { Router } = require('express');
const router = Router();
const { getDog, getDogById, addDog } = require('../controllers/breeds.js')

router.get("/", getDog)
router.get("/:id", getDogById)
router.post("/add", addDog)

//router.put("/updateCharacters",updateCharacters)

module.exports = router;