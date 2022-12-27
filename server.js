/*const http=require('http');
//const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});*/

const express = require('express');
const port = 3000;
const app = express();
const bodyparser = require('body-parser');

app.get('/', (req, res) => {
    console.log(req);
    console.log();
    res.send('iniciado correctamente');
});
app.get('/api', (req, res) => {
    res.send('api correct');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});