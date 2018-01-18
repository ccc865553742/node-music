const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


// app.use("/api", require("./routes/qqmusic"));
// var app = express();

express()
  .use(express.static(path.join(__dirname, "public")))
  .use("/api", require("./routes/qqmusic"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
