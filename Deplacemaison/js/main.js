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

$(window).ready(() => {
  $("#c-group path").css("animation", "write 1s forwards");
  setTimeout(() => {
    $("#o-group path").css("animation", "write 1s forwards");
  }, 250);
  setTimeout(() => {
    $("#l1-group path").css("animation", "write 1s forwards");
  }, 500);
  setTimeout(() => {
    $("#l2-group path").css("animation", "write 1s forwards");
  }, 750);
  setTimeout(() => {
    $("#point-group path").css("animation", "write 1s forwards");
  }, 1000);
  setTimeout(() => {
    $("#numb1-group path").css("animation", "write 1s forwards");
  }, 750);
  setTimeout(() => {
    $("#numb9-group path").css("animation", "write 1s forwards");
  }, 1000);
  setTimeout(() => {
    $("#slash-group path").css("animation", "write 1s forwards");
  }, 1250);
  setTimeout(() => {
    $("#numb2-group path").css("animation", "write 1s forwards");
  }, 1500);
  setTimeout(() => {
    $("#num0-group path").css("animation", "write 1s forwards");
  }, 1750);
});

//  this.CSS({ animation: "write 1s forwards" });
