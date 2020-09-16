let log = console.log;

const express = require("express");
const duranRouter = express.Router();

// get
duranRouter.get("/product/duran", (req, res) => {
  log("get it");

  let duran = {
    id: 0,
    name: "duran",
    price: "€ 92 EUR",
    made_in: "ITALY ©",
    out_of_stock: "doh! this product is out of stock!",
    back:
      "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5d1c6e938da842ed4095cb02_duran__man-white_back.jpg",

    front:
      "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5d1c6e914cf9cbbf085a9dc6_duran__man-white_side.jpg",
  };

  res.send(duran);
});

module.exports = duranRouter;
