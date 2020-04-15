const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 5000;
let log = console.log;

// direction
const publicDirectory = path.join(__dirname, "../public");

// set view engine
app.set("view engine", "hbs");

// middle ware - client gửi request có hàm xử lý rồi server mới response
const publicLink = express.static(publicDirectory);
app.use(publicLink);

// route
// home - /
app.get("/", (req, res) => {
  res.render("index", {
    name: "Ca heo",
    content: "Web nay animation nhieu qua   ",
  });
});

app.get("*", (req, res) => {
  res.send("404 error!");
});

app.listen(port, () => {
  log("SERVER IS UP " + port);
});
