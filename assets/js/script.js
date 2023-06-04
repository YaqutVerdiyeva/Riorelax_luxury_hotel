let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let menuicon = document.querySelector(".menuicon");
let menuicon1 = document.querySelector(".menuicon1");
let nav = document.querySelector(".nav-mobile");

//Modal video
btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function () {
  modal1.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
span1.onclick = function () {
  modal1.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
};

//header scroll
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".top-header").style.display = "none";
    document.querySelector(".bottom-header").style.background = "#977a5e";
    document.querySelector(".bottom-header").style.transition = "0.2s";
  } else {
    document.querySelector(".top-header").style.display = "block";
    document.querySelector(".bottom-header").style.background =
      " rgba(9, 9, 9, 0.5)";
  }
}
window.addEventListener("scroll", function () {
  scrollFunction();
});

//menu
menuicon.addEventListener("click", function () {
  nav.classList.toggle("show");
  menuicon.style.display = "none";
  menuicon1.style.display = "block";
});
menuicon1.addEventListener("click", function () {
  nav.classList.toggle("show");
  menuicon.style.display = "block";
  menuicon1.style.display = "none";
});
document.querySelector(".plus1").addEventListener("click", function () {
  document.querySelector(".plus1").style.visibility = "hidden";
  document.querySelector(".minus1").style.visibility = "visible";
});
document.querySelector(".minus1").addEventListener("click", function () {
  document.querySelector(".plus1").style.visibility = "visible";
  document.querySelector(".minus1").style.visibility = "hidden";
});
document.querySelector(".plus2").addEventListener("click", function () {
  document.querySelector(".plus2").style.visibility = "hidden";
  document.querySelector(".minus2").style.visibility = "visible";
});
document.querySelector(".minus2").addEventListener("click", function () {
  document.querySelector(".plus2").style.visibility = "visible";
  document.querySelector(".minus2").style.visibility = "hidden";
});
document.querySelector(".plus3").addEventListener("click", function () {
  document.querySelector(".plus3").style.visibility = "hidden";
  document.querySelector(".minus3").style.visibility = "visible";
});
document.querySelector(".minus3").addEventListener("click", function () {
  document.querySelector(".plus3").style.visibility = "visible";
  document.querySelector(".minus3").style.visibility = "hidden";
});
document.querySelector(".plus4").addEventListener("click", function () {
  document.querySelector(".plus4").style.visibility = "hidden";
  document.querySelector(".minus4").style.visibility = "visible";
});
document.querySelector(".minus4").addEventListener("click", function () {
  document.querySelector(".plus4").style.visibility = "visible";
  document.querySelector(".minus4").style.visibility = "hidden";
});
