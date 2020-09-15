let log = console.log;

const express = require("express");
const tunneyRouter = express.Router();

// get
tunneyRouter.get("/product/tunney", (req, res) => {
  log("get it");

  let tunney = [
    {
      id: 0,
      name: "tunney",
      price: "€ 92 EUR",
      made_in: "ITALY ©",
      colors: {
        white:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5d1c6f6d8da84233fd95d366_tunney__man-white.jpg",

        black:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5d1c6f568da842056995d2f3_tunney__man-black.jpg",
      },
      back: {
        black:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5d1c6f5ddf18294946eda5cf_tunney__man-black_back.jpg",
      },
      front: {
        black:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5d1c6f5b1ded34ae99373f88_tunney__man-black_side.jpg",
      },
    },
  ];
});

module.exports = tunneyRouter;
