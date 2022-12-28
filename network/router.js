/*Importamos lo que necesitamos*/
const express = require('express');
const message = require('../components/message/network');


const router = function (server) {
    server.use('/message', message);//maneja solo de mesajes
}
module.exports = router;