function createDontScroll() {
  // function: create element dont scroll
  let dont_Scroll = document.createElement("div");
  dont_Scroll.classList.add("do-not");
  let content = document.createTextNode("do not scroll");
  dont_Scroll.appendChild(content);
  return dont_Scroll;
}

function rollingHandle() {
  // function: create rolling section
  const roll = document.getElementsByClassName("roll")[0];

  // responsive
  let sm_heigth = window.screen.height;
  let sm_width = window.screen.width;

  window.addEventListener("load", (e) => {
    if (sm_width <= 576) {
      // small device
      for (let i = 0; i < 150; i++) {
        let dont_Scroll_ele = createDontScroll();
        roll.appendChild(dont_Scroll_ele);
      }
    } else if (sm_width > 576 && sm_width <= 768) {
      // medium
      for (let i = 0; i < 100; i++) {
        let dont_Scroll_ele = createDontScroll();
        roll.appendChild(dont_Scroll_ele);
      }
    } else if (sm_width > 768 && sm_width <= 992) {
      // large
      for (let i = 0; i < 150; i++) {
        let dont_Scroll_ele = createDontScroll();
        roll.appendChild(dont_Scroll_ele);
      }
    } else if (sm_width > 992 && sm_width <= 1200) {
      // extra large
      for (let i = 0; i < 150; i++) {
        let dont_Scroll_ele = createDontScroll();
        roll.appendChild(dont_Scroll_ele);
      }
    } else {
      for (let i = 0; i < 300; i++) {
        let dont_Scroll_ele = createDontScroll();
        roll.appendChild(dont_Scroll_ele);
      }
    }
  });
}

function rolling() {
  // function: everything about rolling would be created in here
  // handle rotate left array

  rollingHandle();
}

rolling();
