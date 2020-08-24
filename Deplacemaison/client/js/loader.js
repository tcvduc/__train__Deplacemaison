//let log = console.log;

function goUpEffect(y__axis, element) {
  // function: create go up effect
  // input:  y axis, element
  // output: animation go up

  // create style
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `.go-up  {transform: translateY(-${y__axis}%);  }`;

  // add new style tag to header
  document.getElementsByTagName("head")[0].appendChild(style);
  element.classList.add("go-up");
}

function handleLoad(e, loading, y__axis) {
  // go up for it

  loading.forEach((ele) => {
    goUpEffect(y__axis, ele);
    y__axis += 100;
  });

  setTimeout(() => {
    let loader = document.querySelector("#loader");
    goUpEffect(100, loader);
  }, 1300);
}

function loader() {
  // nodelist give us permision to control like an array
  let loading = document.querySelectorAll(".loading");

  // dom on load
  window.addEventListener("load", (e) => {
    handleLoad(e, loading);

    // default y axis
    let y__axis = 100;

    // handle load
    handleLoad(e, loading, y__axis);

    // close the loader
  });
}

loader();
