const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 8080;
const router = require("./src/routes");

app.use(cors()); // Habilitar CORS para todas las rutas

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.get("/", async (req, res) => {
  res.send("Proyecto Post Office.");
});

app.get("/api", async (req, res) => {
  const url = "https://hammerhead-app-bc22e.ondigitalocean.app/get/mailbox/inbox/max123@maxmail.com";
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/${url}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos." });
  }
});

app.listen(port, () => {
  console.log("Iniciado");
});
