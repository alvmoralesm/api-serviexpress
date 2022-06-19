const { Router } = require("express");
const router = Router();
const BD = require("../config/dbConfig");

//READ
router.get("/servicios", async (req, res) => {
  sql = "select * from servicio";

  let result = await BD.Open(sql, [], false);
  Servicios = [];

  result.rows.map((servicio) => {
    let servicioSchema = {
      id: servicio[0],
      descripcion: servicio[1],
      habilitado: servicio[2],
      valor: servicio[3],
      tiempo: servicio[4],
      comentario: servicio[5],
    };

    Servicios.push(servicioSchema);
  });

  res.json(Servicios);
});

router.get("/", (req, res) => {
  res.status(200).json({ msj: "all gucci" });
});

module.exports = router;
