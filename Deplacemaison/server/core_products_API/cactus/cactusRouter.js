let log = console.log;

const express = require("express");
const cactusRouter = express.Router();

// get
cactusRouter.get("/product/cactus", (req, res) => {
  log("get it");

  let cactus = [
    {
      id: 0,
      name: "cactus",
      price: "€ 180 EUR",
      made_in: "ITALY ©",
      colors: {
        army:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecf8747b314ba36a789e3c4_ct-army-side.jpg",
        black:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecfa320fd9cb266001fad56_ct-black-side.jpg",
        sand:
          "https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecfa3649540ca4f28f38823_ct-sand-side.jpg",
      },
      front: {
        army:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ecf87559d8fbe180fe0504d_ct-army-front.jpg",
        black:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ecf8a064752d372bae72cdd_ct-black-front.jpg",
        sand:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ecf8a349540cab8b8f2e946_ct-sand-front.jpg",
      },
      back: {
        army:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ecf875864d3010bee5fa29d_ct-army-back.jpg",
        black:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ecf8a05b314ba417889f3cf_ct-black-back.jpg",
        sand:
          "https://uploads-ssl.webflow.com/5d07507a85189203b7002a95/5ecf8a35ecf1c5935cb1ed76_ct-sand-back.jpg",
      },
    },
  ];
});

module.exports = cactusRouter;
