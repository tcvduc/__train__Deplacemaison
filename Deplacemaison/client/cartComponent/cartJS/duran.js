let log = console.log;

async function getData(url) {
  let response = await fetch(url);
  return response.json();
}

function duran() {
  // function: get product that name is duran
  let name = document.getElementsByClassName("pic-nname-name")[0];

  let dev_url = "http://localhost:1212/product/duran";
  getData(dev_url).then((data) => {
    log(data);
  });
}

duran();
