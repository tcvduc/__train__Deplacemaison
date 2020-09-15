let log = console.log;

const express = require("express");
const duranRouter = express.Router();

// get
duranRouter.get("/product/duran", (req, res) => {
  log("get it");

  let duran = [
    {
      id: 0,
      name: "duran",
      price: "€ 92 EUR",
      made_in: "ITALY ©",
      out_of_stock: "doh! this product is out of stock!",
    },
  ];
});

module.exports = duranRouter;
