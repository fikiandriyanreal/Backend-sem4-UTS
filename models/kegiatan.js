let kegiatan = [
  {
    hari: "senin",
    nama: "Fiki",
    tugas: "menyapu",
    jam: "07:00",
    create: new Date(),
  },
  {
    hari: "selasa",
    nama: "Fiki",
    tugas: "membersihkan kamar",
    jam: "08:00",
    create: new Date(),
  },
  {
    hari: "rabu",
    nama: "Fiki",
    tugas: "belajar",
    jam: "09:00",
    create: new Date(),
  },
];

const cari = (arrData, tugas) => {
  ketemu = -1;
  indeks = 0;
  while (ketemu == -1 && indeks < arrData.length) {
    if (arrData[indeks].tugas == tugas) {
      ketemu = indeks;
      return indeks;
    }
    indeks++;
  }
  return -1;
};

module.exports = {
  getKegiatan: kegiatan,

  insert: (req) => {
    const newItem = {
      hari: req.body.hari,
      nama: req.body.nama,
      tugas: req.body.tugas,
      jam: req.body.jam,
    };
    kegiatan.push(newItem);
    return newItem;
  },
  getKegiatanByTugas: (req) => {
    tugas = req.params.tugas;
    indeks = cari(kegiatan, tugas);
    if (indeks != -1) {
      const dataKegiatan = {
        hari: kegiatan[indeks].hari,
        nama: kegiatan[indeks].nama,
        tugas: kegiatan[indeks].tugas,
        jam: kegiatan[indeks].jam,
      };
      return dataKegiatan;
    }
    return indeks;
  },
  update: (req) => {
    tugas = req.params.tugas;
    indeks = cari(kegiatan, tugas);
    if (indeks != -1) {
      kegiatan[indeks].tugas = tugas;
      kegiatan[indeks].nama = req.body.nama;
      kegiatan[indeks].tugas = req.body.hari;
      kegiatan[indeks].jam = req.body.jam;
      return kegiatan[indeks];
    }
    return -1;
  },

  delete: (req) => {
    tugas = req.params.tugas;
    indeks = cari(kegiatan, tugas);
    ket = "Kegiatan tidak ditemukan";
    if (indeks != -1) {
      kegiatan.splice(indeks, 1);
      ket = "Kegiatan" + tugas + "telah dihapus";
    }
    return ket;
  },
};
