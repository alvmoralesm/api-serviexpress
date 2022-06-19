if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//npm imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//settings
const port = 3000;

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//allowing ionic app
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.IONIC_ROUTE);
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

//run server
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto: ${port}`);
});
