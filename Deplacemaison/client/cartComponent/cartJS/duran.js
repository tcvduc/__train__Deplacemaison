let log = console.log;

async function getData(url) {
  // function: get data from server
  // input: url
  // output: data - promise
  let response = await fetch(url);
  return response.json();
}

function glueyNameSection(data) {
  // function: to sticky the data to browser
  // input: data

  let name = document.getElementsByClassName("pic-nname-name")[0];
  let price = document.getElementsByClassName("pic-price")[0];
  let pd_img = document.getElementsByClassName("pd-img")[0];
  let description = document.getElementsByClassName("pic-n-ct")[0];

  // name
  name.textContent = data.name;
  // price
  price.textContent = data.price;
  // img
  pd_img.setAttribute("src", `${data.pure}`);
  // description
  description.textContent = data.description;
}

function glueyFrontSection(data) {
  // function: handle front section part
  // input: data
  // output: Gluey it into web
  let made_in = document.getElementsByClassName("where")[0];
  let sex = document.querySelector(".sex img");
  let pd_img = document.querySelector(".pd-img img");

  // made in
  made_in.textContent = data.made_in;
  // sex
  sex.setAttribute("src", `${data.sex}`);
  // img
  pd_img.setAttribute("src", `${data.front}`);
}

function glueyBackSection(data) {
  // function: handle back section part
  // input: data
  // output: Gluey it into web
  let made_in = document.getElementsByClassName("where")[0];
  let sex = document.querySelector("#pic-view-2 .sex img");
  let pd_img = document.querySelector("#pic-view-2 .pd-img img");

  // made in
  made_in.textContent = data.made_in;
  // sex
  sex.setAttribute("src", `${data.sex}`);
  // img
  pd_img.setAttribute("src", `${data.back}`);
}

function handleDragProducts(data) {
  log(data);
}

function duran() {
  // function: get product that name is duran

  let dev_url = "http://localhost:1212/product/duran";
  let pro_url = "https://server-deplacemaison.herokuapp.com/product/duran";

  // get data
  getData(dev_url)
    .then((data) => {
      // log(data);

      // To gluey those data to browser

      // name
      glueyNameSection(data);

      // view - front
      glueyFrontSection(data);

      // view - back
      glueyBackSection(data);
    })

    .catch((e) => {
      log(e);
    });

  // get data you may also love
  const dev_also_love_url = "http://localhost:1212/api/products";
  getData(dev_also_love_url)
    .then((data) => {
      // products drag section
      handleDragProducts(data);
    })
    .catch((e) => {
      log(e);
    });
}

duran();
