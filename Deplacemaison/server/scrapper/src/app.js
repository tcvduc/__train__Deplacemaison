const scrape = require("website-scraper");
const options = {
  urls: ["https://deplacemaison.webflow.io/product/the-code"],
  directory: "ScapperCartData",
};

// with promise
scrape(options).then((result) => {
  console.log(result);
});
