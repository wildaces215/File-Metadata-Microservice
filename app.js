const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app = express();
app.use(fileUpload());
app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});
app.post("/api/decode", (req, res) => {
  console.log(req.files.upfile);

  res.json({
    name: req.files.upfile.name,
    type: req.files.upfile.mimetype,
    size: req.file.upfile.size
  });
});
app.listen(4000, () => {
  console.log("running of 4k");
});
