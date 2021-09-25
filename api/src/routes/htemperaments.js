const { Router } = require('express');
const { getTemp } = require("../controllers/temperaments.js")

const router = Router();

router.get("/", getTemp)

module.exports = router;