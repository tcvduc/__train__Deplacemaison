let log = console.log;

let cookies_loader = document.cookie;
cookies_loader =
  "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

log(cookies_loader);

function setCookie(ck__name, ck__value, expire__days) {
  // function: set cookie when browser was loading
  // input: cookies name, cookies value, expire days
  // output: set a cookie for browser

  var d = new Date();
  d.setTime(d.getTime() + expire__days * 24 * 60 * 60 * 1000);
  var expries = "expries=" + d.toUTCString();
  document.cookie = ck__name += "" + ck__value + ";" + expries + ";path=/";
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

  var username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 10);
    }
  }
}

function goUpEffect(y__axis, element) {
  // function: create go up effect
  // input:  y axis, element
  // output: animation go up

  // create style
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `.go-up  {transform: translateY(-${y__axis}%)!important;  }`;

  // add new style tag to header
  document.getElementsByTagName("head")[0].appendChild(style);
  element.classList.add("go-up");
}

function handleLoad(e, loading, y__axis) {
  // go up for it

  goUpEffect(0, loading[0]);

  setTimeout(() => {
    goUpEffect(y__axis, loading[1]);
    goUpEffect(y__axis, loading[2]);
    goUpEffect(y__axis, loading[3]);
  }, 500);

  setTimeout(() => {
    goUpEffect(200, loading[1]);
    goUpEffect(200, loading[2]);
    goUpEffect(200, loading[3]);
  }, 900);

  setTimeout(() => {
    goUpEffect(300, loading[3]);
  }, 1300);

  // close the loader
  setTimeout(() => {
    let loader = document.querySelector("#loader");
    goUpEffect(300, loader);
  }, 2100);
}

function loader() {
  // nodelist give us permision to control like an array
  let loading = document.querySelectorAll(".loading");

  // dom on load

  window.addEventListener("load", (e) => {
    // default y axis
    let y__axis = 100;

    // handle load
    handleLoad(e, loading, y__axis);

    // check cookie
    // setTimeout(() => {
    //   checkCookie();
    // }, 2500);
  });
}

loader();
