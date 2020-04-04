let log = console.log;

// img drag bug
$("img").on("dragstart", (event) => {
  event.preventDefault();
});

// nav bug - khi lăn đến footer thì phải biến mất

let offsetFooter = $("footer").offset();
let takeSomeSpace = (20 * offsetFooter.top) / 100;
log(offsetFooter.top);

const listUp = $(".shop-link").children().children();

const listVisible = $(".shop-link").children().children().children();

// log(listVisible);

document.addEventListener("scroll", () => {
  var docTop = $(document).scrollTop();
  if (docTop >= offsetFooter.top - takeSomeSpace) {
    listUp.addClass("nav-bug-li");
    listVisible.click((event) => {});
  } else {
    listUp.removeClass("nav-bug-li");
    listVisible.click((event) => {});
  }
});

// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

// rolling section
$("#rolling-section .row .owl-carousel").owlCarousel({
  items: 4,
  loop: true,
  margin: 0,
  width: 0,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 3000,
  slideTransition: "linear",
  autoplayHoverPause: false,
  mouseDrag: false,
  nav: false,
  responsive: {
    300: {
      item: 3,
      loop: true,
      margin: 0,
      width: 0,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",
      autoplayHoverPause: false,
      mouseDrag: false,
      nav: false,
    },
    576: {
      item: 4,
      loop: true,
      margin: 0,
      width: 0,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",
      autoplayHoverPause: false,
      mouseDrag: false,
      nav: false,
    },
  },
});

// background rolling
const rolling_pure_css = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1vw",
  backgroundColor: "#fbc355",
  border: "3px solid black",
  overflow: "hidden",
};
$("#rolling-section .owl-stage").css(rolling_pure_css);
const not_scroll_text = {
  textTransform: "uppercase",
};
$(".not-scroll").css(not_scroll_text);

// product section
// const product_Hover_CSS = {
//   cursor: "pointer",
// };
const product = $(".product");

product
  .mouseenter(() => {
    product.css("cursor", "pointer");
  })
  .click(() => {});
// log(product);
/*  hash product section */
const product_index = $(".product").length - 5;
$("#product-section .row .owl-carousel").owlCarousel({
  items: 3,
  loop: false,
  center: true,
  margin: 0,

  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: product_index,
  dots: false,
  autoplay: false,
  autoplayTimeout: 1,
  autoplaySpeed: 1,
  slideTransition: "linear",

  nav: false,
  responsive: {
    300: {
      items: 2,
      loop: false,
      center: true,
      margin: 0,
      left: 0,

      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: product_index,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",

      nav: false,
    },
    400: {
      items: 2,
      loop: false,
      center: true,

      left: 100,

      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: product_index,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",

      nav: false,
    },
    500: {
      items: 2,
      loop: false,
      center: true,
      margin: 150,
      left: 100,

      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: product_index,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",

      nav: false,
    },
    576: {
      items: 3,
      loop: false,
      center: true,
      margin: 250,
      left: 100,

      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: product_index,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",

      nav: false,
    },
    768: {
      items: 3,
      loop: false,
      center: true,
      margin: 350,
      left: 100,

      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: product_index,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",

      nav: false,
    },
    992: {
      items: 3,
      loop: false,
      center: true,
      margin: 350,
      left: 100,

      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: product_index,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",

      nav: false,
    },

    1200: {
      items: 4,
      loop: false,
      center: true,
      margin: 200,
      left: 100,

      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: product_index,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      slideTransition: "linear",

      nav: false,
    },
  },
});

// special hover up dowm some element

// nav top
// my cart
const cart_father = $(".card-no-icon");
const cart_children = cart_father.children();
const cart_firstchild = $(".card-no-icon a:first-child");
const cart_secondchild = $(".card-no-icon a:nth-child(2)");

cart_father.addClass("father");
cart_children.addClass("children");
cart_firstchild.addClass("child-1");
cart_secondchild.addClass("child-2");

// nav left
const nl_father = $(".shop-link ul").children();
const nl_children = nl_father.children();
const nl_firstchild = $(".shop-link ul div li:first-child");
const nl_secondchild = $(".shop-link ul div li:nth-child(2)");

nl_father.addClass("father");
nl_children.addClass("children");
nl_firstchild.addClass("child-1");
nl_secondchild.addClass("child-2");

// shop name
const sn_father = $(".shop-name-wrap");
const sn_children = sn_father.children();
const sn_firstchild = $(".shop-name-wrap svg:first-child");
const sn_secondchild = $(".shop-name-wrap svg:nth-child(2)");

sn_father.addClass("shop-name-father");
sn_children.addClass("shop-name-children");
sn_firstchild.addClass("shop-name-child-1");
sn_secondchild.addClass("shop-name-child-2");

// footer
// f mean footer
const f_father = $("footer ul").children();
const f_children = f_father.children();
const f_firstchild = $("footer ul div li:first-child");
const f_secondchild = $("footer ul div li:nth-child(2)");

f_father.addClass("father");
f_children.addClass("children");
f_firstchild.addClass("child-1");
f_secondchild.addClass("child-2");
// xử lý loading animation

const load1 = $(".load-1");
const load2 = $(".load-2");
const load3 = $(".load-3");
const load4 = $(".load-4");

// window.addEventListener("load", () => {
//   anime({
//     targets: ".load-1",
//     translateY: -25,
//     opacity: 0,

//     easing: "easeOutQuart"
//   });

//   setTimeout(() => {
//     load2.css("display", "block");
//     anime({
//       targets: ".load-2",
//       translateY: -25,
//       opacity: 0,

//       easing: "easeOutQuart"
//     });
//   }, 350);

//   setTimeout(() => {
//     load3.css("display", "block");
//     anime({
//       targets: ".load-3",
//       translateY: -25,
//       opacity: 0,

//       easing: "easeOutQuart"
//     });
//   }, 700);

//   setTimeout(() => {
//     load4.css("display", "block");
//     anime({
//       targets: ".load-4",
//       translateY: -25,
//       opacity: 0,

//       easing: "easeOutQuart"
//     });
//   }, 1050);

//   setTimeout(() => {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden";
//     log(loader);
//   }, 2000);
// });

//xử lý write hand animation
$(window).ready(() => {
  setTimeout(() => {
    $("#c-group path").css("animation", "write 1s forwards");
  }, 2250);
  setTimeout(() => {
    $("#o-group path").css("animation", "write 1s forwards");
  }, 2500);
  setTimeout(() => {
    $("#l1-group path").css("animation", "write 1s forwards");
  }, 2750);
  setTimeout(() => {
    $("#l2-group path").css("animation", "write 1s forwards");
  }, 3000);
  setTimeout(() => {
    $("#point-group path").css("animation", "write 1s forwards");
  }, 3000);
  setTimeout(() => {
    $("#numb1-group path").css("animation", "write 1s forwards");
  }, 3000);
  setTimeout(() => {
    $("#numb9-group path").css("animation", "write 1s forwards");
  }, 3250);
  setTimeout(() => {
    $("#slash-group path").css("animation", "write 1s forwards");
  }, 3250);
  setTimeout(() => {
    $("#numb2-group path").css("animation", "write 1s forwards");
  }, 3500);
  setTimeout(() => {
    $("#num0-group path").css("animation", "write 1s forwards");
  }, 3750);
});

//  this.CSS({ animation: "write 1s forwards" });

// Xử lý hiệu ứng xoay tròn to ra
// button spin svg animation

// explore btn
$("#ex-btn-wrap").mouseenter((event) => {
  $("#circle_explore").addClass("bigger").removeClass("smaller");

  $("#arrow_explore").addClass("spin").removeClass("spinBack");
});

$("#ex-btn-wrap").mouseleave((event) => {
  $("#circle_explore").addClass("smaller").removeClass("bigger");

  $("#arrow_explore").addClass("spinBack").removeClass("spin");
});

// shop all btn

$("#sa-btn-wrap").mouseenter(() => {
  $("#circle_shop_all").addClass("bigger").removeClass("smaller");

  $("#arrow_shop_all").addClass("spin").removeClass("spinBack");
});

$("#sa-btn-wrap").mouseleave(() => {
  $("#circle_shop_all").addClass("smaller").removeClass("bigger");
  $("#arrow_shop_all").addClass("spinBack").removeClass("spin");
});

// footer btn up
$("#up-btn-wrap")
  .mouseenter(() => {
    $("#up-btn-circle").addClass("bigger").removeClass("smaller");

    $("#up-btn-arrow").addClass("supperSpin").removeClass("supperSpinBack");
  })
  .mouseleave(() => {
    $("#up-btn-circle").addClass("smaller").removeClass("bigger");

    $("#up-btn-arrow").addClass("supperSpinBack").removeClass("supperSpin");
  });

// explore css
const explore_pure_css = {
  position: "absolute",
  top: "52%",
  left: "1%",
  transform: " scaleX(0)",
  height: "2px",
  width: "2px",
  backgroundColor: "black",
  transition: "transform 0.35s ease-out",
  transformOrigin: "bottom left",
};
const explore_on_mouseenter = {
  transform: "scaleX(50)",
};
const explore_on_mouseleave = {
  transformOrigin: "bottom right",
  transform: "scaleX(0)",
};

// explore animation
// $(".explore p")
//   .mouseenter(() => {
//     $(".explore-under").css(explore_on_mouseenter);
//   })
//   .mouseleave(() => {
//     $(".explore-under").css(explore_on_mouseleave);
//   });

// explore btn click
$("#ex-btn-wrap").click(() => {
  window.location.href = "https://www.facebook.com/";
});

// who we are section

const wwa__h2__pure__css = {
  display: "inline",
  fontWeight: "lighter",
  fontSize: "3.7vw",
  color: "black",
  letterSpacing: "-0.1rem",
};

const wwa__h3__pure__css = {
  display: "inline",
  position: "relative",
  textTransform: "uppercase",
  fontSize: "1.5vw",
  color: "black",
};

$("#who-we-are-section h2").css(wwa__h2__pure__css);
$("#who-we-are-section h3").css(wwa__h3__pure__css);

// shop all pure css
const shop_all_pure_css = {
  position: "absolute",
  top: "52%",
  left: "1%",
  transform: " scaleX(0)",
  height: "2px",
  width: "2px",
  backgroundColor: "black",
  transition: "transform 0.35s ease-out",
  transformOrigin: "bottom left",
};
const shop_all_on_mouseenter = {
  transform: "scaleX(50)",
};
const shop_all_on_mouseleave = {
  transformOrigin: "bottom right",
  transform: "scaleX(0)",
};

// xử lý section review
const reviewNameWrap = $(".review-name-wrap");
const reviewerName = $(".rw-name");
const reviewer_1 = $(".review-name-wrap div:first-child");
const reviewer_2 = $(".review-name-wrap div:nth-child(2)");
const content_1 = $(".review-content-wrap div:first-child");
const content_2 = $(".review-content-wrap div:nth-child(2)");

const datas = [
  {
    name: "Ca Heo",
    content: "lorem 300 lorem 300 lorem 300 lorem 300 lorem 300 lorem 300",
  },
  {
    name: "Ca Map",
    content: "lorem 500 lorem 500 lorem 500 lorem 500 lorem 500 lorem 500",
  },
];

reviewer_1.text(datas[0].name);
reviewer_2.text(datas[1].name);

content_1.text(datas[0].content);
content_2.text(datas[1].content);

setInterval(() => {
  handleShowReviewer();
}, 3000);

function handleShowReviewer() {
  const reviewNameWrap = $(".review-name-wrap");
  const reviewerName = $(".rw-name");
  const reviewer_1 = $(".review-name-wrap div:first-child");
  const reviewer_2 = $(".review-name-wrap div:nth-child(2)");
  const content_1 = $(".review-content-wrap div:first-child");
  const content_2 = $(".review-content-wrap div:nth-child(2)");

  const datas = [
    {
      name: "Ca Heo",
      content: "lorem 300 lorem 300 lorem 300 lorem 300 lorem 300 lorem 300",
    },
    {
      name: "Ca Map",
      content: "lorem 500 lorem 500 lorem 500 lorem 500 lorem 500 lorem 500",
    },
  ];

  // const reviewContent = data.map(data => {
  //   return <div class="`review-content`"></div>;
  // });

  if (reviewer_1.hasClass("rw-name-1") && reviewer_2.hasClass("rw-name-2")) {
    reviewer_1.addClass("rw-name-1-up").removeClass("rw-name-1");
    reviewer_2.addClass("rw-name-2-up").removeClass("rw-name-2");

    content_1.addClass("rw-content-1-up").removeClass("rw-content-1");
    content_2.addClass("rw-content-2-up").removeClass("rw-content-2");
  } else if (
    reviewer_1.hasClass("rw-name-1-up") &&
    reviewer_2.hasClass("rw-name-2-up")
  ) {
    reviewer_1.addClass("rw-name-1").removeClass("rw-name-1-up");
    reviewer_2.addClass("rw-name-2").removeClass("rw-name-2-up");

    content_1.addClass("rw-content-1").removeClass("rw-content-1-up");
    content_2.addClass("rw-content-2").removeClass("rw-content-2-up");
  }
}

// footer

// to top
$(".btn-top").click(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
