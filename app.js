// selection of all classes

let btns = document.querySelectorAll(".btn1");
let close = document.querySelector(".close");
let overlay = document.querySelector(".overlay");

// show and hide functions for show and hide the dialogue box !!

let showfunction = function () {
  overlay.style.display = "flex";
};
let hidefunction = function () {
  overlay.style.display = "none";
};

// applying event handler to click event

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", showfunction);
}
close.addEventListener("click", hidefunction);
