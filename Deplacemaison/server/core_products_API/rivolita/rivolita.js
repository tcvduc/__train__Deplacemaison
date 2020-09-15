let log = console.log;

const express = require("express");
const theeyeRouter = express.Router();

// get
theeyeRouter.get("/product/theeye", (req, res) => {
  log("get it");

  let theeye = {
    id: 0,
    name: "the eye",
    price: "€ 144 EUR",
    made_in: "ITALY ©",
    out_of_stock: "doh! this product is out of stock!",
  };
});

module.exports = theeyeRouter;
