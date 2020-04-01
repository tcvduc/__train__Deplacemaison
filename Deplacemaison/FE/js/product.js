const products = [
  {
    id: 1,
    name: "Carnera",
    sex: "wmns",
    price: 1000,
    src: "./images/5d1c6f8d4cf9cb5e855aa1aa_carnera__wmns-black-p-1080.jpeg"
  },
  {
    id: 2,
    name: "Duran",
    sex: "man",
    price: 1000,
    src: "./images/5d1c6d608da84253fa95bd18_carnera__man-black-p-500.jpeg"
  },
  {
    id: 3,
    name: "Rivolta",
    sex: "",
    price: 1000,
    src: "./images/5d1c71fe2b2ad2131b466c86_rivolta-black.jpg"
  },
  {
    id: 4,
    name: "Garcia",
    sex: "wmns",
    price: 1000,
    src: "./images/5d1c718d8da84280f895e643_garcia__wmns-white-p-800.jpeg"
  },
  {
    id: 5,
    name: "Garcia",
    sex: "wmns",
    price: 1000,
    src: "./images/5d1c718d8da84280f895e643_garcia__wmns-white-p-800.jpeg"
  },
  {
    id: 6,
    name: "Garcia",
    sex: "wmns",
    price: 1000,
    src: "./images/5d1c718d8da84280f895e643_garcia__wmns-white-p-800.jpeg"
  }
];

/* <img
src="./images/5d1c6f8d4cf9cb5e855aa1aa_carnera__wmns-black-p-1080.jpeg"
alt=""
/> */
//log(products);

const productElements = products.map(product => {
  return `<div class="item">
    <div class="product">
      <div class="product-img">
        <img src=${product.src} />
      </div>
      <div class="product-infor" >
        <div class="product-sex"> ${product.sex} </div>
        <div class="product-name"> ${product.name} </div>
        <div class="product-price">${product.price}</div>
      </div>
    </div>
    </div>`;
});

//log(productElements);

// bugs không thể drag
const placeToPutProductDataIn = $("#product-section .owl-carousel ");
//placeToPutProductDataIn.append(productElements);
