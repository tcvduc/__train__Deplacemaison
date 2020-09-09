function getProducts() {
  const products = [
    {
      id: 1,
      pd_name: "carnera",
      pd_sex:
        "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg",
      pd_price: "€ 300 EUR",
      pd_img: "./../images/carnera__man-black.jpg",
    },
    {
      id: 2,
      pd_name: "carnera",
      pd_sex:
        "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg",
      pd_price: "€ 300 EUR",
      pd_img: "./../images/carnera__man-black (2).jpg",
    },
    {
      id: 3,
      pd_name: "carnera",
      pd_sex:
        "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg",
      pd_price: "€ 300 EUR",
      pd_img: "./../images/carnera__wmns-black.jpg",
    },
    {
      id: 4,
      pd_name: "garcia",
      pd_sex:
        "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg",
      pd_price: "€ 250 EUR",
      pd_img: "./../images/garcia__wmns-white.jpg",
    },
    {
      id: 5,
      pd_name: "rivolta",
      pd_sex:
        "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg",
      pd_price: "€ 400 EUR",
      pd_img: "./../images/rivolta-black-p-1080.jpeg",
    },
    {
      id: 6,
      pd_name: "tunney",
      pd_sex:
        "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg",
      pd_price: "€ 450 EUR",
      pd_img: "./../images/tunney__wmns-white-p-1080.jpeg",
    },
  ];

  let product_elements = products.map((ele) => {
    return `   <div class="product">
  <div class="pd pd-img">
    <img
      src="${ele.pd_img}"
      alt="img"
    />
  </div>
  <div class="pd pd-sex">
    <img
      src="${ele.pd_sex}"
      alt="sex"
    />
  </div>
  <div class="pd pd-name">${ele.pd_name}</div>
  <div class="pd pd-price">${ele.pd_price}</div>
</div>`;
  });

  let pd_wrapper = document.querySelector("#products .row");

  pd_wrapper.innerHTML = product_elements;

  // bug text
  // log(pd_wrapper.childNodes);
  // so remove it
  for (let i = 0; i < 6; i++) {
    pd_wrapper.removeChild(pd_wrapper.childNodes[i]);
  }
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  log(elmnt.class + "header");
  if (!(elmnt.class + "header")) {
    // if present, the header is where you move the DIV from

    document.getElementById(elmnt.class).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    // pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    // pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    // pos4 = e.clientY;
    log(pos1, pos2, pos3, pos4);
    log(elmnt.offsetTop);
    log(elmnt.offsetLeft);
    // set the element's new position:
    // elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function productDragHandle() {
  // Make the DIV element draggable:
  let drag_ele = document.querySelector("#products .row:first-child");
  log(drag_ele);
  dragElement(drag_ele);
}

function owlCarouselDragHandle() {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 3,
      center: true,
      nav: false,
      margin: 300,
      responsive: {
        0: {
          items: 1,
          center: false,
          nav: false,
          stagePadding: 0,
        },
        576: {
          items: 2,
          center: false,
          nav: false,
          margin: 120,
          stagePadding: 0,
        },
        768: {
          items: 2,
          center: false,
          nav: false,

          margin: 60,
        },
        992: {
          items: 2,
          center: false,
          nav: false,
          margin: 0,
          stagePadding: 0,
        },
        1200: {
          items: 2,

          nav: false,
          margin: 100,
        },
        1333: {
          items: 3,
          center: true,
          nav: false,
          margin: 300,
        },
      },
    });
  });
}
function product() {
  // function: create product section

  // learning how to drag after
  // productDragHandle();

  // use owl carousel to handle this

  // get products from server
  getProducts();

  owlCarouselDragHandle();
}

product();

// log($(".row"));
