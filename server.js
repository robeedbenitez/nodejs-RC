/*Importamos lo que necesitamos*/
const express = require('express');
const bodyParser = require('body-parser');

/*Creamos el servidor*/
const port = 3000;
const app = express();

/*Creamos las rutas*/
//const routes = require('./components/message/network');
const routes = require('./network/router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(routes);
routes(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});