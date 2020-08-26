let log = console.log;

function navLeftBottomHoverHandle(e) {
  this.children[0].classList.add("roll");
  this.children[1].classList.add("roll");
}

function nav() {
  const nav_left_bottom_wrapper = document.querySelectorAll(
    ".nav-left-bottom  .nav-link-wrapper"
  );

  nav_left_bottom_wrapper.forEach((ele) => {
    ele.addEventListener("mouseover", navLeftBottomHoverHandle);
  });
}

nav();
