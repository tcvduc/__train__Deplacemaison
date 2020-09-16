let log = console.log;

const express = require("express");
const theeyeRouter = express.Router();

// get
theeyeRouter.get("/product/rivolita", (req, res) => {
  let rivolita = {
    id: 0,
    name: "rivolita",
    price: "€ 100 EUR",
    made_in: "ITALY ©",
    out_of_stock: "doh! this product is out of stock!",
    front:
      "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5d1c720b4cf9cbe9645ab6b1_rivolta-black__macro.jpg",
    back:
      "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5d1c72074cf9cbe7955ab696_rivolta-black_back.jpg",
  };
  res.send(rivolita);
});

module.exports = theeyeRouter;
