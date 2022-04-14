const express = require("express");
const routerKegiatan = express.Router();

const controllerKegiatan = require("../controllers/kegiatan");

routerKegiatan
  .route("/kegiatan")
  .get(controllerKegiatan.getKegiatan)
  .post(controllerKegiatan.insert);

routerKegiatan
  .route("/kegiatan/:tugas")
  .get(controllerKegiatan.getKegiatanByTugas)
  .put(controllerKegiatan.update)
  .delete(controllerKegiatan.delete);

module.exports = routerKegiatan;
