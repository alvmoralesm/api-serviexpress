if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//npm imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//local imports
const serviciosRoutes = require("./src/routes/servicios");

//settings
const port = process.env.PORT || 3000;

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

//routes
app.use(serviciosRoutes);

//run server
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto: ${port}`);
});
