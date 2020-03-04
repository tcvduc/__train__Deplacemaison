const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

let log = console.log;

log("server listening to port 3000");

// direction
const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../public/templates");
const partialsDirectory = path.join(__dirname, "../public/templates/partials");

// set up directory for views folder
app.set("views", viewsDirectory);

// set view engine
app.set("view engine", "hbs");

// middle ware - client gửi request có hàm xử lý rồi server mới response
const publicLink = express.static(publicDirectory);
app.use(publicLink);

// set up partials
hbs.registerPartials(partialsDirectory);

// route
// home - /
app.get("/", (req, res) => {
  res.render("index", {
    name: "Ca heo",
    content: "Web nay animation nhieu qua   "
  });
});

app.listen(3000);
