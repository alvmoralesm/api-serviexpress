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

//run server
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto: ${port}`);
});
