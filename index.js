const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');

const app = express();
const port = 8080;
const router = require('./src/routes');

app.use(cors()); // Habilitar CORS para todas las rutas

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.get('/', async (req, res) => {
  res.send("Proyecto Post Office.");
});

app.listen(port, () => {
  console.log("Iniciado");
});