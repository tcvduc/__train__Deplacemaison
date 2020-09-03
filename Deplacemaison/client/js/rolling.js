let log = console.log;

function rotateLeftArray(a) {
  // function: rotate left array algorithm
  // input: array that you want to rotate left
  // output: its rotate left
  let temp = a[0];

  for (let i = 0; i < a.length; i++) {
    a[i] = a[i + 1];
  }
  a[a.length - 1] = temp;

  return a;
}

var toNodeList = function (arrayOfNodes) {
  var fragment = document.createDocumentFragment();
  arrayOfNodes.forEach(function (item) {
    fragment.appendChild(item.cloneNode());
  });
  return fragment.childNodes;
};

function handleBtnNextClick() {
  let next = document.getElementsByClassName("btn-next")[0];
  let rolls = document.querySelectorAll(".roll");
  // let a = [1, 2, 3, 4, 5];

  let roll_wrap = document.getElementsByClassName("roll-wrap")[0];

  let a = [...rolls];
  next.addEventListener("click", (e) => {
    a = rotateLeftArray(a);
    log(a);
    var node = toNodeList(a);
    log(node);

    // remove old child
    for (let i = 0; i < rolls.length; i++) {
      roll_wrap.removeChild(rolls[i]);
    }
    // then add new child
    for (let i = 0; i < node.length; i++) {
      roll_wrap.appendChild(node[i]);
    }

    // roll_wrap.append(node);

    a.forEach((e) => {
      log(e);
    });
  });
}

function rolling() {
  // function: everything about rolling would be created in here
  handleBtnNextClick();

  // handle rotate left array
}

rolling();
