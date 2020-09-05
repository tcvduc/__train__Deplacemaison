function navTopHandleScroll(blackmode) {
  // function: handle animation of nav top when browser was scrolled
  // input: blackmode element
  // output: animation
  window.addEventListener("scroll", function () {
    let scrollY = this.scrollY;

    if (scrollY > 0) {
      // blackmode had gone
      blackmode.classList.add("blackmode-gone");
    } else {
      // blackmode had come
      blackmode.classList.remove("blackmode-gone");
    }
  });
}

function createLogoSVGNavMobile() {
  // function: because of the length of html - so create it by js
  // output: logo
  const logo__mobile__before__click = document.getElementsByClassName(
    "logo-mb"
  )[0];

  const logo__mobile__after__click = document.getElementsByClassName(
    "logo-mb"
  )[1];

  let html__string = `   <?xml version="1.0" encoding="utf-8"?>

  <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 222 77"
    style="enable-background: new 0 0 222 77"
    xml:space="preserve"
  >
    <g>
      <path
        style="fill: #141414"
        d="M3.4,14.6h5.7c5.3,0,9.3,4,9.3,28.3c0,24.3-4.1,28.3-9.3,28.3H3.4V14.6z M9.1,66.5
c2,0,3.6-1.6,3.6-23.5c0-21.9-1.6-23.5-3.6-23.5H8.7v47H9.1z"
      />
      <path
        style="fill: #141414"
        d="M21.2,14.6h12.1v4.9h-6.9v20.7h5.7V45h-5.7v21.5h6.9v4.9H21.2V14.6z M24,10.2l5.7-8.1h2.4v5.7
L25.7,11H24V10.2z"
      />
      <path
        style="fill: #141414"
        d="M35,14.6h5.3c4.9,0,8.9,4,8.9,17s-4,17-8.9,17v22.7H35V14.6z M40.7,43.8c1.2,0,2.8-1.6,2.8-12.1
s-1.6-12.1-2.8-12.1h-0.4v24.3H40.7z"
      />
      <path
        style="fill: #141414"
        d="M51.6,14.6h5.3v51.8h6.9v4.9H51.6V14.6z"
      />
      <path
        style="fill: #141414"
        d="M67,14.6h8.9l3.6,56.7h-5.3l-0.6-12.6h-4.5l-0.6,12.6h-5.3L67,14.6z M73.5,53.9l-1.6-32.8H71
l-1.6,32.8H73.5z"
      />
      <path
        style="fill: #141414"
        d="M94.9,48.6c0,0,1.2,3.2,1.2,9.3c0,10.9-3.2,14.2-6.9,14.2c-4.9,0-8.5-3.6-8.5-29.2
c0-25.5,3.6-29.2,8.5-29.2c3.6,0,6.9,3.2,6.9,14.2c0,6.1-1.2,9.3-1.2,9.3h-4.9c0,0,0.8-4.5,0.8-9.7c0-8.5-0.8-9.3-1.6-9.3
c-1.2,0-2.8,1.6-2.8,24.7c0,23.1,1.6,24.7,2.8,24.7c0.8,0,1.6-0.8,1.6-9.3c0-5.3-0.8-9.7-0.8-9.7H94.9z"
      />
      <path
        style="fill: #141414"
        d="M99,14.6h12.1v4.9h-6.9v20.7h5.7V45h-5.7v21.5h6.9v4.9H99V14.6z M101.8,10.2l5.7-8.1h2.4v5.7
l-6.5,3.2h-1.6V10.2z"
      />
      <path
        style="fill: #141414"
        d="M120.8,14.6h7.3l2.8,22.3h0.4l2.8-22.3h7.3v56.7h-5.7l2-48.6H137l-4,26.7h-3.6l-4-26.7h-0.8l2,48.6
h-5.7V14.6z"
      />
      <path
        style="fill: #141414"
        d="M146.8,14.6h8.9l3.6,56.7H154l-0.6-12.6h-4.5l-0.6,12.6h-5.3L146.8,14.6z M153.2,53.9l-1.6-32.8
h-0.8l-1.6,32.8H153.2z"
      />
      <path
        style="fill: #141414"
        d="M160.9,14.6h5.3v56.7h-5.3V14.6z"
      />
      <path
        style="fill: #141414"
        d="M174.3,51.9c0,0-0.4,3.2-0.4,6.5c0,8.1,1.2,9.3,2,9.3s2-1.2,2-7.7c0-13.4-9.3-19-9.3-33.2
c0-9.3,3.6-13,7.3-13s7.3,3.6,7.3,13c0,4-0.8,6.5-0.8,6.5h-4.9c0,0,0.4-2.4,0.4-5.7c0-8.1-1.2-9.3-2-9.3s-2,1.2-2,7.7
c0,13.4,9.3,19,9.3,33.2c0,9.3-3.6,13-7.3,13s-7.3-3.6-7.3-13c0-4,0.8-7.3,0.8-7.3H174.3z"
      />
      <path
        style="fill: #141414"
        d="M184.8,43c0-25.5,3.6-29.2,8.1-29.2c4.5,0,8.1,3.6,8.1,29.2c0,25.5-3.6,29.2-8.1,29.2
C188.5,72.1,184.8,68.5,184.8,43z M195.4,43c0-23.5-1.2-24.7-2.4-24.7s-2.4,1.2-2.4,24.7c0,23.5,1.2,24.7,2.4,24.7
S195.4,66.5,195.4,43z"
      />
      <path
        style="fill: #141414"
        d="M203.9,14.6h6.5l5.7,48.6h0.8L214,14.6h5.7v56.7h-6.5l-5.7-48.6h-0.8l2.8,48.6h-5.7V14.6z"
      />
    </g>
  </svg>`;
  let div = document.createElement("div");

  logo__mobile__before__click.innerHTML = html__string;
  logo__mobile__after__click.innerHTML = html__string;
}

function createLogoSVGNavDesktop() {
  // function: create a logo image for desktop nav
  // output: logo
  const logo__content = `  <?xml version="1.0" encoding="utf-8"?>

  <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 80 231.5"
    style="enable-background: new 0 0 80 231.5"
    xml:space="preserve"
  >
    <g>
      <path
        style="fill: #141414"
        d="M18,224.3v-5.7c0-5.3,4-9.3,28.3-9.3c24.3,0,28.3,4.1,28.3,9.3v5.7H18z M69.9,218.6
    c0-2-1.6-3.6-23.5-3.6c-21.9,0-23.5,1.6-23.5,3.6v0.4h47V218.6z"
      />
      <path
        style="fill: #141414"
        d="M18,206.5v-12.1h4.9v6.9h20.7v-5.7h4.9v5.7h21.5v-6.9h4.9v12.1H18z M13.6,203.7L5.5,198v-2.4h5.7
    l3.2,6.5v1.6H13.6z"
      />
      <path
        style="fill: #141414"
        d="M18,192.7v-5.3c0-4.9,4-8.9,17-8.9s17,4,17,8.9h22.7v5.3H18z M47.2,187.1c0-1.2-1.6-2.8-12.1-2.8
    s-12.1,1.6-12.1,2.8v0.4h24.3V187.1z"
      />
      <path
        style="fill: #141414"
        d="M18,176.1v-5.3h51.8V164h4.9v12.1H18z"
      />
      <path
        style="fill: #141414"
        d="M18,160.7v-8.9l56.7-3.6v5.3L62.2,154v4.5l12.6,0.6v5.3L18,160.7z M57.3,154.3l-32.8,1.6v0.8
    l32.8,1.6V154.3z"
      />
      <path
        style="fill: #141414"
        d="M52.1,132.8c0,0,3.2-1.2,9.3-1.2c10.9,0,14.2,3.2,14.2,6.9c0,4.9-3.6,8.5-29.2,8.5
    c-25.5,0-29.2-3.6-29.2-8.5c0-3.6,3.2-6.9,14.2-6.9c6.1,0,9.3,1.2,9.3,1.2v4.9c0,0-4.5-0.8-9.7-0.8c-8.5,0-9.3,0.8-9.3,1.6
    c0,1.2,1.6,2.8,24.7,2.8c23.1,0,24.7-1.6,24.7-2.8c0-0.8-0.8-1.6-9.3-1.6c-5.3,0-9.7,0.8-9.7,0.8V132.8z"
      />
      <path
        style="fill: #141414"
        d="M18,128.7v-12.1h4.9v6.9h20.7v-5.7h4.9v5.7h21.5v-6.9h4.9v12.1H18z M13.6,125.9l-8.1-5.7v-2.4h5.7
    l3.2,6.5v1.6H13.6z"
      />
      <path
        style="fill: #141414"
        d="M18,106.9v-7.3l22.3-2.8v-0.4L18,93.5v-7.3h56.7v5.7l-48.6-2v0.8l26.7,4v3.6l-26.7,4v0.8l48.6-2v5.7
    H18z"
      />
      <path
        style="fill: #141414"
        d="M18,81V72l56.7-3.6v5.3l-12.6,0.6v4.5l12.6,0.6v5.3L18,81z M57.3,74.5l-32.8,1.6v0.8l32.8,1.6V74.5z
    "
      />
      <path style="fill: #141414" d="M18,66.8v-5.3h56.7v5.3H18z" />
      <path
        style="fill: #141414"
        d="M55.3,53.4c0,0,3.2,0.4,6.5,0.4c8.1,0,9.3-1.2,9.3-2s-1.2-2-7.7-2c-13.4,0-19,9.3-33.2,9.3
    c-9.3,0-13-3.6-13-7.3s3.6-7.3,13-7.3c4,0,6.5,0.8,6.5,0.8v4.9c0,0-2.4-0.4-5.7-0.4c-8.1,0-9.3,1.2-9.3,2s1.2,2,7.7,2
    c13.4,0,19-9.3,33.2-9.3c9.3,0,13,3.6,13,7.3s-3.6,7.3-13,7.3c-4,0-7.3-0.8-7.3-0.8V53.4z"
      />
      <path
        style="fill: #141414"
        d="M46.4,42.9c-25.5,0-29.2-3.6-29.2-8.1c0-4.5,3.6-8.1,29.2-8.1c25.5,0,29.2,3.6,29.2,8.1
    C75.6,39.2,71.9,42.9,46.4,42.9z M46.4,32.4c-23.5,0-24.7,1.2-24.7,2.4s1.2,2.4,24.7,2.4c23.5,0,24.7-1.2,24.7-2.4
    S69.9,32.4,46.4,32.4z"
      />
      <path
        style="fill: #141414"
        d="M18,23.8v-6.5l48.6-5.7v-0.8L18,13.7V8.1h56.7v6.5l-48.6,5.7V21l48.6-2.8v5.7H18z"
      />
    </g>
  </svg>`;

  const logo = document.querySelectorAll("#nav-desktop .logo");

  logo.forEach((ele) => {
    ele.innerHTML = logo__content;
  });
}

function navBeforeClickHandle(nav__before__click, nav__after__click) {
  // function: nav before click  mobile animation
  // input: nav before click, nav after click
  // output: animation

  nav__before__click.addEventListener("click", (e) => {
    const hbg__top = document.getElementsByClassName("hbg-top")[0];
    const hbg__mid = document.getElementsByClassName("hbg-mid")[0];
    const hbg__bottom = document.getElementsByClassName("hbg-bottom")[0];

    // when it got clicked by user then rotate
    hbg__top.classList.add("hbg-top-rotate");
    hbg__mid.classList.add("hbg-mid-rotate");
    hbg__bottom.classList.add("hbg-bottom-rotate");

    // initial hambuger after click
    const hbg__top__after = document.getElementsByClassName("hbg-top")[1];
    const hbg__mid__after = document.getElementsByClassName("hbg-mid")[1];
    const hbg__bottom__after = document.getElementsByClassName("hbg-bottom")[1];

    hbg__top__after.classList.add("hbg-top-rotate");
    hbg__mid__after.classList.add("hbg-mid-rotate");
    hbg__bottom__after.classList.add("hbg-bottom-rotate");

    // pure css of nav after click
    const tabs = document.getElementsByClassName("tabs")[0];
    const tabs_after = document.getElementsByClassName("tabs-after")[0];
    const nav_main_nav_link = document.getElementsByClassName("nav-link");
    const nav_footer_link = document.getElementsByClassName("nav-footer-link");

    // base css
    tabs.classList.add("tabs-close");
    tabs_after.classList.add("tabs-after-close");
    for (let i = 0; i < nav_main_nav_link.length; i++) {
      nav_main_nav_link[i].classList.add("tabs-close");
    }
    for (let i = 0; i < nav_footer_link.length; i++) {
      nav_footer_link[i].classList.add("tabs-close");
    }

    // scroll down
    setTimeout(() => {
      // nav after click scroll down

      // nav after appear
      setTimeout(() => {
        nav__before__click.style.display = "none";
        nav__after__click.style.display = "flex";
      }, 490);

      // then container scrolling down
      setTimeout(() => {
        const nav_after_click = document.getElementById("nav-after-click");
        nav_after_click.classList.remove("scrolling-to-top");
        nav_after_click.classList.add("scrolling-to-bottom");
      }, 500);

      // then main and footer animation
      setTimeout(() => {
        // tab close

        setTimeout(() => {
          tabs.classList.remove("tabs-close");
        }, 300);
        // under tabs close before tab
        setTimeout(() => {
          tabs_after.classList.remove("tabs-after-close");
        }, 200);

        // then links close
        setTimeout(() => {
          for (let i = 0; i < nav_main_nav_link.length; i++) {
            nav_main_nav_link[i].classList.remove("tabs-close");
          }
        }, 500);

        // then footer link close
        setTimeout(() => {
          for (let i = 0; i < nav_footer_link.length; i++) {
            nav_footer_link[i].classList.remove("tabs-close");
          }
        }, 600);
      }, 600);
    }, 200);
  });
}
function navAfterClickHandle(nav__before__click, nav__after__click) {
  // function: nav after click  mobile animation
  // input: nav before click, nav after click
  // output: animation

  // initial defautl css
  const hbg__top__after = document.getElementsByClassName("hbg-top")[1];
  const hbg__mid__after = document.getElementsByClassName("hbg-mid")[1];
  const hbg__bottom__after = document.getElementsByClassName("hbg-bottom")[1];

  hbg__top__after.classList.add("hbg-top-rotate");
  hbg__mid__after.classList.add("hbg-mid-rotate");
  hbg__bottom__after.classList.add("hbg-bottom-rotate");

  nav__after__click.addEventListener("click", (e) => {
    // when it got clicked by user then rotate back to default
    hbg__top__after.classList.remove("hbg-top-rotate");
    hbg__mid__after.classList.remove("hbg-mid-rotate");
    hbg__bottom__after.classList.remove("hbg-bottom-rotate");

    // initial hambuger before click
    const hbg__top__before = document.getElementsByClassName("hbg-top")[0];
    const hbg__mid__before = document.getElementsByClassName("hbg-mid")[0];
    const hbg__bottom__before = document.getElementsByClassName(
      "hbg-bottom"
    )[0];

    hbg__top__before.classList.remove("hbg-top-rotate");
    hbg__mid__before.classList.remove("hbg-mid-rotate");
    hbg__bottom__before.classList.remove("hbg-bottom-rotate");

    setTimeout(() => {
      // nav after scroll up
      setTimeout(() => {
        const nav_after_click = document.getElementById("nav-after-click");
        nav_after_click.classList.remove("scrolling-to-bottom");
        nav_after_click.classList.add("scrolling-to-top");
      }, 1000);

      // tab is dissapearing
      // under tab is dissapearing
      // links are dissppearing
      setTimeout(() => {
        const tabs_after = document.getElementsByClassName("tabs-after")[0];
        const tabs = document.getElementsByClassName("tabs")[0];
        const nav_main_nav_link = document.getElementsByClassName("nav-link");
        const nav_footer_link = document.getElementsByClassName(
          "nav-footer-link"
        );
        // tab close
        setTimeout(() => {
          tabs.classList.add("tabs-close");
        }, 300);
        // under tabs close before tab
        setTimeout(() => {
          tabs_after.classList.add("tabs-after-close");
        }, 200);

        // then links close
        setTimeout(() => {
          for (let i = 0; i < nav_main_nav_link.length; i++) {
            nav_main_nav_link[i].classList.add("tabs-close");
          }
        }, 500);

        // then footer link close
        setTimeout(() => {
          for (let i = 0; i < nav_footer_link.length; i++) {
            nav_footer_link[i].classList.add("tabs-close");
          }
        }, 600);
      }, 100);

      setTimeout(() => {
        nav__after__click.style.display = "none";
        nav__before__click.style.display = "flex";
      }, 1700);
    }, 200);
  });
}

function nav() {
  const blackmode = document.getElementById("blackmode");

  // handle blackmode when user was scrolling the browser
  navTopHandleScroll(blackmode);

  const nav__before__click = document.getElementById("nav-before-click");
  const nav__after__click = document.getElementById("nav-after-click");

  nav__after__click.style.display = "none";
  nav__before__click.style.display = "flex";

  // create svg logo mobile
  createLogoSVGNavMobile();

  // create a logo for desktop nav
  createLogoSVGNavDesktop();

  // handle nav before click
  navBeforeClickHandle(nav__before__click, nav__after__click);

  // handle nav after click
  navAfterClickHandle(nav__before__click, nav__after__click);
}

nav();
