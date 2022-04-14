const express = require("express");
const routerKegiatan = require("./routers/kegiatan");
const app = express();
const port = 5000;

// untuk menerima req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerKegiatan);
app.listen(port, () => {
  console.log("server berjalan pada port" + port);
});
