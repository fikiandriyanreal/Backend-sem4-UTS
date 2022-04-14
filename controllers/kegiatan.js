const modelKegiatan = require("../models/kegiatan");

module.exports = {
  getKegiatan: (req, res) => {
    kegiatan = modelKegiatan.getKegiatan;
    res.json(kegiatan);
  },

  insert: (req, res) => {
    //Ambil data request dari frontend
    newItem = modelKegiatan.insert(req);
    res.status(201).json(newItem);
  },

  getKegiatanByTugas: (req, res) => {
    dataKegiatan = modelKegiatan.getKegiatanByTugas(req);
    if (dataKegiatan != -1) {
      res.json(dataKegiatan);
    } else {
      res.send("Tugas: " + req.params.tugas + "tidak ditemukan");
    }
  },

  update: (req, res) => {
    kegiatan = modelKegiatan.update(req);
    if (kegiatan != -1) {
      res.json(kegiatan);
    }
    res.send("Data tugas tidak ditemukan");
  },

  delete: (req, res) => {
    ket = modelKegiatan.delete(req);
    res.send(ket);
  },
};
