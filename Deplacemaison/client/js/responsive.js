$(window).resize(() => {
  let width = $(window).width();
  let height = $(window).height();

  const f_col_1 = $("#ft-col-1");
  const f_col_2 = $("#ft-col-2");
  const f_col_3 = $("#ft-col-3");

  const firstSection = $("first-section");

  const loader = $(".loader");
  // 576px
  if (width <= 576) {
    $("#nav-left").addClass("d-none-1");
    $("#nav-top").addClass("width-100");

    f_col_1.addClass("d-none").removeClass("d-flex");
    f_col_2.addClass("d-none").removeClass("d-flex");
    f_col_3.addClass("d-none").removeClass("d-flex");
  } else {
    $("#nav-left").removeClass("d-none-1");
    $("#nav-top").removeClass("width-100");

    f_col_1.removeClass("d-none").addClass("d-flex");
    f_col_2.removeClass("d-none").addClass("d-flex");
    f_col_3.removeClass("d-none").addClass("d-flex");
  }
});

// hamberger on click

function toggleHamMidChange() {
  const hammid = $(".ham-mid");
  if (hammid.hasClass("ham-mid-default")) {
    hammid.removeClass("ham-mid-default");
    hammid.addClass("ham-mid-change");
  } else if (hammid.hasClass("ham-mid-change")) {
    hammid.removeClass("ham-mid-change");
    hammid.addClass("ham-mid-default");
  }
}

function toggleHamTopChange() {
  const hamMobileTop = $(".ham-mb-top");
  const hamMobileBottom = $(".ham-mb-bottom");

  const navMobile = $(".nav-mobile");

  const hamTop = $(".ham-top");
  const hamBottom = $(".ham-bottom");
  if (hamTop.hasClass("ham-top-default")) {
    hamTop.removeClass("ham-top-default");
    hamTop.addClass("ham-top-change");

    // handle nav mobile
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
  const hammid = $(".ham-mid");
  const tab = $(".tab");
  const tabUnder = $(".tab-under");

  if (
    hamMobileBottom.hasClass("ham-bottom-default") &&
    hamMobileTop.hasClass("ham-top-default")
  ) {
    hamMobileTop.removeClass("ham-top-default");
    hamMobileBottom.removeClass("ham-bottom-default");

    hamMobileTop.addClass("ham-top-change");
    hamMobileBottom.addClass("ham-bottom-change");
  } else if (
    hamMobileBottom.hasClass("ham-bottom-change") &&
    hamMobileTop.hasClass("ham-top-change")
  ) {
    hamMobileTop.removeClass("ham-top-change");
    hamMobileBottom.removeClass("ham-bottom-change");

    hamMobileTop.addClass("ham-top-default");
    hamMobileBottom.addClass("ham-bottom-default");

    hamTop.removeClass("ham-top-change");
    hamBottom.removeClass("ham-bottom-change");

    hamTop.addClass("ham-top-default");
    hamBottom.addClass("ham-bottom-default");

    // nav mid
    hammid.removeClass("ham-mid-change");
    hammid.addClass("ham-mid-default");

    // handle tab

    // handle nav mobile animation

    navMobile.removeClass("d-block").removeClass("nav-mobile-animation-in");
    setTimeout(() => {
      navMobile.addClass("nav-mobile-animation-out");
    }, 2000);
  }
}

// try some ES6
navMobileMainHandle = () => {
  const tabChild = $(".tab .child-2");
  const tabUnder = $(".tab-under");
  const tabListContent = $(".tab-content .father").children();
  const lisdChildFooterNavMobile = $(".nav-mb-footer .father").children();
  // tab main
  // tab-under
  if (tabUnder.hasClass("tab-in")) {
    tabUnder.removeClass("tab-in");
    tabUnder.addClass("tab-out");

    tabChild.removeClass("tab-child-in");
    tabChild.addClass("tab-child-out");

    tabListContent.removeClass("tab-child-in");
    tabListContent.addClass("tab-child-out");

    lisdChildFooterNavMobile.removeClass("tab-child-in");
    lisdChildFooterNavMobile.addClass("tab-child-out");
  } else if (tabUnder.hasClass("tab-out")) {
    tabUnder.removeClass("tab-out");
    setTimeout(() => {
      tabUnder.addClass("tab-in");
    }, 1000);

    tabChild.removeClass("tab-child-out");
    tabListContent.removeClass("tab-child-out");
    lisdChildFooterNavMobile.removeClass("tab-child-out");
    setTimeout(() => {
      tabChild.addClass("tab-child-in");
    }, 1300);

    setTimeout(() => {
      tabListContent.addClass("tab-child-in");
    }, 1500);

    setTimeout(() => {
      lisdChildFooterNavMobile.addClass("tab-child-in");
    }, 1900);
  }
};
