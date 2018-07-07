"use strict";

// Element selection
const collapElems = document.querySelectorAll(".collapsible");
const collapInstances = M.Collapsible.init(collapElems);

const toastHearts = document.querySelectorAll(".toastHeart");

// Element Actions
collapElems[0].addEventListener("mouseover", e => {
  collapElems[0].classList.add("z-depth-4");
});
collapElems[0].addEventListener("mouseout", e => {
  collapElems[0].classList.remove("z-depth-4");
});
toastHearts.forEach(elem =>
  elem.addEventListener("mouseover", _ => {
    M.toast({ html: "💖", classes: "rounded" });
  })
);
