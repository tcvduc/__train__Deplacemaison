$(window).resize(() => {
  let width = $(window).width();
  let height = $(window).height();

  // 576px
  if (width <= 576) {
    $("#nav-left").addClass("d-none-1");
    $("#nav-top").addClass("width-100");
  } else {
    $("#nav-left").removeClass("d-none-1");
    $("#nav-top").removeClass("width-100");
  }
});

// hamberger on click

// function toggleHamMidChange() {
//   const hammid = document.querySelector(".ham-mid");
//   if (hammid.style.transform === "rotate(-45deg)") {
//     hammid.style.transform = "rotate(0deg)  ";
//   } else {
//     hammid.style.transform = "rotate(-45deg)";
//   }
// }

function toggleHamTopChange() {
  const hamMobileTop = $(".ham-mb-top");
  const hamMobileBottom = $(".ham-mb-bottom");

  const navMobile = $(".nav-mobile");

  const hamTop = $(".ham-top");
  const hamBottom = $(".ham-bottom");
  if (hamTop.hasClass("ham-top-default")) {
    hamTop.removeClass("ham-top-default");
    hamTop.addClass("ham-top-change");

    // handler nav mobile
    navMobile.removeClass("d-none").removeClass("nav-mobile-animation-out");
    navMobile.addClass("d-block").addClass("nav-mobile-animation-in");

    setTimeout(() => {
      hamMobileTop.removeClass("ham-top-default");
      hamMobileTop.addClass("ham-top-change");
    }, 300);
  } else if (hamTop.hasClass("ham-top-change")) {
    hamTop.removeClass("ham-top-change");
    hamTop.addClass("ham-top-default");

    setTimeout(() => {
      hamMobileTop.removeClass("ham-top-change");
      hamMobileTop.addClass("ham-top-default");
    }, 300);
  }
}

function toggleHamBottomChange() {
  const hamMobileBottom = $(".ham-mb-bottom");

  const navMobile = $(".nav-mobile");

  const hamBottom = $(".ham-bottom");

  if (hamBottom.hasClass("ham-bottom-default")) {
    hamBottom.removeClass("ham-bottom-default");
    hamBottom.addClass("ham-bottom-change");

    setTimeout(() => {
      hamMobileBottom.removeClass("ham-bottom-default");
      hamMobileBottom.addClass("ham-bottom-change");
    }, 300);
  } else if (hamBottom.hasClass("ham-bottom-change")) {
    hamBottom.addClass("ham-bottom-default");
    hamBottom.removeClass("ham-bottom-change");

    setTimeout(() => {
      hamMobileBottom.removeClass("ham-bottom-change");
      hamMobileBottom.addClass("ham-bottom-default");
    }, 300);
  }
}

function hambergerMobileClick() {
  const hamMobileTop = $(".ham-mb-top");
  const hamMobileBottom = $(".ham-mb-bottom");

  const navMobile = $(".nav-mobile");

  const hamTop = $(".ham-top");
  const hamBottom = $(".ham-bottom");

  if (
    hamMobileBottom.hasClass("ham-bottom-default") &&
    hamMobileTop.hasClass("ham-top-default")
  ) {
    hamMobileTop.removeClass("ham-top-default");
    hamMobileBottom.removeClass("ham-bottom-default");

    hamMobileTop.addClass("ham-top-change");
    hamMobileBottom.addClass("ham-bottom-change");
  } else {
    hamMobileTop.removeClass("ham-top-change");
    hamMobileBottom.removeClass("ham-bottom-change");

    hamMobileTop.addClass("ham-top-default");
    hamMobileBottom.addClass("ham-bottom-default");

    hamTop.removeClass("ham-top-change");
    hamBottom.removeClass("ham-bottom-change");

    hamTop.addClass("ham-top-default");
    hamBottom.addClass("ham-bottom-default");

    // handler nav mobile

    navMobile.removeClass("d-block").removeClass("nav-mobile-animation-in");
    navMobile.addClass("nav-mobile-animation-out");

    // fixed nav mobile bugs @_@ - hơi dơ
    setTimeout(() => {
      navMobile.addClass("d-none");
    }, 300);
  }
}
