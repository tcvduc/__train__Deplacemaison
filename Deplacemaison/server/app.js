let log = console.log;

const express = require("express");
const app = express();

// router
const duranRouter = require("./core_products_API/duran/duranRouter");
const cactusRouter = require("./core_products_API/cactus/cactusRouter");
const rivolitaRouter = require("./core_products_API/rivolita/rivolitaRouter");
const thecodeRouter = require("./core_products_API/thecode/thecodeRouter");
const theeyeRouter = require("./core_products_API/theeye/theeyeRouter");
const tunneyRouter = require("./core_products_API/tunney/tunneyRouter");

// Middle ware
app.use(duranRouter);
app.use(cactusRouter);
app.use(rivolitaRouter);
app.use(thecodeRouter);
app.use(theeyeRouter);
app.use(tunneyRouter);

// initial port
let port = 1212 || process.env.PORT;
// listen to it
app.listen(port, () => {
  log("Server is up at ", port);
});
