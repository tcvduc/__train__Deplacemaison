const scrape = require("website-scraper");
const options = {
  urls: ["https://deplacemaison.webflow.io/product/duran"],
  directory: "ScapperCartData",
};

// with promise
scrape(options).then((result) => {
  console.log(result);
});
