const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = 8080;
const router = require("./src/routes");

app.use(cors()); // Habilitar CORS para todas las rutas

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar el proxy inverso
const apiProxy = createProxyMiddleware("/get", {
  target: "https://hammerhead-app-bc22e.ondigitalocean.app",
  changeOrigin: true,
});

app.use("/get", apiProxy);

app.use(router);

app.get("/", async (req, res) => {
  res.send("Proyecto Post Office.");
});

app.listen(port, () => {
  console.log("Iniciado");
});
