/*Importamos lo que necesitamos*/
const express = require('express');
/*rutas de nuestros componentes */
const message = require('../message/network');
const alertas = require('../alertas/alertas');

const router = function (server) {
    server.use('/message', message);//maneja solo de mesajes
    server.use('/alertas', alertas);//maneja solo de alertas
}

module.exports = router;