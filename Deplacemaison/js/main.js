let log = console.log;
// owl carousel
$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

$("#rolling-section .row .owl-carousel").owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 3000,
  slideTransition: "linear",
  autoplayHoverPause: false,

  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

/*  hash product section */
$("#product-section .row .owl-carousel").owlCarousel({
  items: 4,
  loop: false,
  center: true,
  margin: 0,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: "URLHash",

  autoplay: false,
  autoplayTimeout: 2000,
  autoplaySpeed: 3000,
  slideTransition: "linear",
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

// anime js

$(".slide")
  .mouseenter(() => {
    anime({
      targets: ".slide-up",
      translateY: -10,
      opacity: 0,
      easing: "easeOutQuart"
    });
    anime({
      targets: ".slide-down",
      translateY: -10,
      opacity: 1,
      easing: "easeOutQuart"
    });
  })
  .mouseleave(() => {
    anime({
      targets: ".slide-up",
      translateY: 0,
      opacity: 1,
      easing: "easeOutQuart"
    });
    anime({
      targets: ".slide-down",
      translateY: 0,
      opacity: 0,
      easing: "easeOutQuart"
    });
  });

const svgPath = $("svg path");

const svgText = anime({
  targets: svgPath[0],
  loop: true,
  direction: "alternate",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 700,
  delay: (el, i) => {
    return i * 500;
  }
});

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

// explore animation
const explore_pure_css = {
  position: "absolute",
  top: "52%",
  left: "1%",
  transform: " scaleX(0)",
  height: "2px",
  width: "2px",
  backgroundColor: "black",
  transition: "transform 0.35s ease-out",
  transformOrigin: "bottom left"
};
const explore_on_mouseenter = {
  transform: "scaleX(50)"
};
const explore_on_mouseleave = {
  transformOrigin: "bottom right",
  transform: "scaleX(0)"
};

$(".explore p")
  .mouseenter(() => {
    $(".explore-under").css(explore_on_mouseenter);
  })
  .mouseleave(() => {
    $(".explore-under").css(explore_on_mouseleave);
  });
