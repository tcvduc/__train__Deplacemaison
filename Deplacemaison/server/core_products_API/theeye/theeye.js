let log = console.log;

const express = require("express");
const theeyeRouter = express.Router();

// get
theeyeRouter.get("/product/theeye", (req, res) => {
  log("get it");

  let theeye = [
    {
      id: 0,
      name: "the eye",
      price: "€ 144 EUR",
      made_in: "ITALY ©",
      colors: {
        sand:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ed0d5b0a20c8f34cdca447c_te-sand-side.jpg",
        army:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ed0d5e758516c550fc55aa2_te-army-side.jpg",
        black:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ed0d60011a8b043db099877_te-black-side.jpg",
      },
      back: {
        sand:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0d5b7a20c8f56b6ca4491_te-sand-back.jpg",
        army:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0d5ef11a8b0c64f09986a_te-army-bacl.jpg",
        black:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0d607411f1326c4fe7977_te-black-back.jpg",
      },
      front: {
        sand:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0d5b442f758c8935de7a8_te-sand-front.jpg",
        army:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0d5ef411f13be8afe7969_te-army-fronty.jpg",
        black:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0d60767f0baf8621cd0e8_te-black-front.jpg",
      },
    },
  ];
});

module.exports = theeyeRouter;
