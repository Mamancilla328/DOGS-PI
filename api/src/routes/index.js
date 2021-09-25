const { Router } = require('express');
const breeds = require('./hbreeds')
const temperaments = require('./htemperaments')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/breeds", breeds )
router.use("/temperaments", temperaments )

module.exports = router;
