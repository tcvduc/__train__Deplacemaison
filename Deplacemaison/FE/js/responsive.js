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

function toggleHamMidChange() {
  const hammid = document.querySelector(".ham-mid");
  if (hammid.style.transform === "rotate(-45deg)") {
    hammid.style.transform = "rotate(0deg)  ";
  } else {
    hammid.style.transform = "rotate(-45deg)";
  }
}

function toggleHamTopChange() {
  const hamTop = $(".ham-top");
  if (hamTop.hasClass("ham-top-default")) {
    hamTop.removeClass("ham-top-default");
    hamTop.addClass("ham-top-change");
  } else if (hamTop.hasClass("ham-top-change")) {
    hamTop.removeClass("ham-top-change");
    hamTop.addClass("ham-top-default");
  }
}

function toggleHamBottomChange() {
  const hamBottom = $(".ham-bottom");
  if (hamBottom.hasClass("ham-bottom-default")) {
    hamBottom.removeClass("ham-bottom-default");
    hamBottom.addClass("ham-bottom-change");
  } else if (hamBottom.hasClass("ham-bottom-change")) {
    hamBottom.addClass("ham-bottom-default");
    hamBottom.removeClass("ham-bottom-change");
  }
}

function navMobile() {
  const navMobile = $(".nav-mobile");
  const hamTop = $(".ham-top");
  if (hamTop.hasClass("ham-top-change")) {
    navMobile.removeClass("d-none");
    navMobile.addClass("d-block").addClass("nav-mobile-animation-in");
  } else {
    navMobile.addClass("d-none");
    navMobile.removeClass("d-block");
  }
}

function hambergerMobileClick() {
  const hamMobileTop = $(".ham-mb-top");
  const hamMobileBottom = $(".ham-mb-bottom");

  const navMobile = $(".nav-mobile");

  if (
    hamMobileTop.hasClass("ham-top-change") ||
    hamMobileBottom.hasClass("ham-bottom-change")
  ) {
    hamMobileTop.removeClass("ham-top-change");
    hamMobileTop.addClass("ham-top-default");

    hamMobileBottom.removeClass("ham-bottom-change");
    hamMobileBottom.removeClass("ham-bottom-default");

    navMobile.removeClass("nav-mobile-animation-in");
    navMobile.addClass("nav-mobile-animation-out");
  } else {
    hamMobileTop.removeClass("ham-top-default");
    hamMobileTop.addClass("ham-top-change");

    hamMobileBottom.removeClass("ham-bottom-default");
    hamMobileBottom.addClass("ham-bottom-change");
  }
}
