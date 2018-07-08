"use strict";

// Element selection
// All collapsible items
const collapElems = document.querySelectorAll(".collapsible");
const toastHearts = document.querySelectorAll(".toastHeart");
const collapHeaders = document.querySelectorAll('.collapsible-header')

// Initialization
const collapInstances = M.Collapsible.init(collapElems);

// Element Actions

// Collapibles
// Add dropshadow on mouseover (hover)
collapElems[0].addEventListener("mouseover", e => {
  collapElems[0].classList.add("z-depth-4");
});
// Remove dropshadow on mouseout 
collapElems[0].addEventListener("mouseout", e => {
  collapElems[0].classList.remove("z-depth-4");
});

// Add eventlistener to all toastHeart elements 
// -> On hover create a toast 
toastHearts.forEach(elem =>
  elem.addEventListener("mouseover", _ => {
    M.toast({ html: "💖", classes: "rounded" });
  })
);

// Add a click me sign to collabsible headers
collapHeaders.forEach(header => {
  header.addEventListener('mouseover', e => {
      header.querySelector('.badge').classList.remove('hidden')
  })
  header.addEventListener('mouseout', e => {
    header.querySelector('.badge').classList.add('hidden')
  })
})