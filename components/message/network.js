/*Importamos lo que necesitamos*/
const express = require('express');
const router = express.Router();

/*Configuramos las rutas */
router.get('/', (req, res) => {
    res.send('message get');
});

router.post('/', (req, res) => {
    res.send('message post');
});

module.exports = router;