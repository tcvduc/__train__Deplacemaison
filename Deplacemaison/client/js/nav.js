let log = console.log;

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

function navMobileHandle() {}

function nav() {
  const blackmode = document.getElementById("blackmode");

  // handle blackmode when user was scrolling the browser
  navTopHandleScroll(blackmode);

  const nav__before__click = document.getElementById("nav-before-click");
  const nav__after__click = document.getElementById("nav-after-click");

  log(nav__before__click);

  nav__before__click.style.display = "none";
  nav__after__click.style.display = "initial";

  // create svg logo
  createLogoSVGNavMobile();
}

nav();
