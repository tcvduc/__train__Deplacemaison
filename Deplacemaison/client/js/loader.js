let log = console.log;

// handle cookie

function setCookie(ck__name, ck__value, expire__days) {
  // function: set cookie when browser was loading
  // input: cookies name, cookies value, expire days
  // output: set a cookie for browser

  var d = new Date();
  d.setTime(d.getTime() + expire__days * 24 * 60 * 60 * 1000);
  var expries = "expries=" + d.toUTCString();
  document.cookie = ck__name + "=" + ck__value + ";" + expries + ";path=/";
}

function getCookie(ck__name) {
  // function: get the cookie
  // input: cookie name
  // output: cookies

  var cookie__name = ck__name + "=";
  var decoded__cookie = decodeURIComponent(document.cookie);
  var cookie__after__decode = decoded__cookie.split(";");

  for (let i = 0; i < cookie__after__decode.length; i++) {
    var c = cookie__after__decode[i];
    while (c.charAt[0] == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookie__name) == 0) {
      return c.substring(cookie__name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  // function: set the cookie to browser when user admitted
  // input:
  // output: cookies were setted or not

  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}

// handle animation

function goUpEffect(y__axis, element, style) {
  // function: create go up effect
  // input:  y axis, element, base style (has been created)
  // output: animation go up

  // create style

  style.innerHTML = `.go-up  {transform: translateY(-${y__axis}%)!important;  }`;

  // add new style tag to header
  element.classList.add("go-up");
}

function goUpForLoader(y__axis, loader, style) {
  // function: animation close the element loader
  // input: y axis, element loader, base style
  // output: animation close it

  style.textContent += `.go-up-loader  {transform: translateY(-${y__axis}%)!important;  }`;

  loader.classList.add("go-up-loader");
}

function handleLoad(e, loading, y__axis, style) {
  // function: handle animation loading when browser loading
  // input: event, array loading, y axis, base style
  // output: animation loading - go up for it

  // first child
  goUpEffect(0, loading[0], style);

  setTimeout(() => {
    goUpEffect(y__axis, loading[1], style);
    goUpEffect(y__axis, loading[2], style);
    goUpEffect(y__axis, loading[3], style);
  }, 500);

  setTimeout(() => {
    goUpEffect(200, loading[1], style);
    goUpEffect(200, loading[2], style);
    goUpEffect(200, loading[3], style);
  }, 900);

  setTimeout(() => {
    goUpEffect(300, loading[3], style);
  }, 1300);

  setTimeout(() => {
    goUpEffect(400, loading[3], style);
  }, 1700);

  // close  85% the loader
  setTimeout(() => {
    let loader = document.querySelector("#loader");
    goUpForLoader(85, loader, style);
  }, 2100);

  // close the 15 percent remain
  setTimeout(() => {
    let loader = document.querySelector("#loader");
    goUpForLoader(100, loader, style);
  }, 2700);
}

// loader main
function loader() {
  // nodelist give us permision to control like an array
  let loading = document.querySelectorAll(".loading");

  // base style
  var style = document.createElement("style");
  style.type = "text/css";

  // add it to head tag
  document.getElementsByTagName("head")[0].appendChild(style);

  // handle cookie
  var user = getCookie("username");
  if (user != "") {
    const loader = document.querySelector("#loader");
    loader.style.display = "none";
  } else {
    // dom on load
    window.addEventListener("load", (e) => {
      // default y axis
      let y__axis = 100;

      // handle load
      handleLoad(e, loading, y__axis, style);

      // check cookie
      setTimeout(() => {
        checkCookie();
      }, 4000);
    });
  }
}

// active it
loader();
