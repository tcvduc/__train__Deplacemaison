let log = console.log;

const express = require("express");
const thecodeRouter = express.Router();

// get
thecodeRouter.get("/product/thecode", (req, res) => {
  let thecode = {
    id: 0,
    name: "thecode",
    price: "€ 144 EUR",
    made_in: "ITALY ©",
    colors: {
      black:
        "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ed0cf7411a8b0b111096fd5_tc-black-side.jpg",
      army:
        "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ed0cfa93eeb3000e440a093_tc-army-side.jpg",
      lightsky:
        "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ed0cfdd47988a03385d77bb_tc-sky-side.jpg",
    },
    back: {
      black:
        "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0cf7a58516c7835c52367_tc-black-back.jpg",
      army:
        "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0cfb047988aeb355d7762_tc-army-back.jpg",
      lightsky:
        "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0cfe452bc187d5af21bda_tc-sky-back.jpg",
    },
    front: {
      black:
        "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0cf7a592a1fa5e5b462e9_tc-black-front.jpg",
      army:
        "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0cfb0f1ff84f8da44e70f_tc-army-front.jpg",
      lightsky:
        "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ed0cfe467f0ba85bc1cacb8_tc-sky-front.jpg",
    },
  };
  res.send(thecode);
});

module.exports = thecodeRouter;
