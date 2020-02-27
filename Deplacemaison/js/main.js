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
