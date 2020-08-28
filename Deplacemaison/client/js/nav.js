let log = console.log;

function navTopHandleScroll(blackmode) {
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

function nav() {
  const blackmode = document.getElementById("blackmode");

  // handle blackmode when user was scrolling the browser
  navTopHandleScroll(blackmode);
}

nav();
