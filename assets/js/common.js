let menuicon = document.querySelector(".menuicon");
let menuicon1 = document.querySelector(".menuicon1");
let nav = document.querySelector(".nav-mobile");
let scrollUpBtn = document.querySelector(".scrollup");

//header scroll
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".top-header").style.display = "none";
    document.querySelector(".bottom-header").style.background = "#977a5e";
    document.querySelector(".bottom-header").style.transition = "0.2s";
    scrollUpBtn.style.display = "block";
  } else {
    document.querySelector(".top-header").style.display = "block";
    document.querySelector(".bottom-header").style.background =
      " rgba(9, 9, 9, 0.5)";
    scrollUpBtn.style.display = "none";
  }
}
window.addEventListener("scroll", function () {
  scrollFunction();
});
//side page
function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementsByClassName("reservation-btn").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementsByClassName("reservation-btn").style.marginLeft = "0";
}

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

document.querySelector(".plus3").addEventListener("click", function () {
  document.querySelector(".plus3").style.visibility = "hidden";
  document.querySelector(".minus3").style.visibility = "visible";
});
document.querySelector(".minus3").addEventListener("click", function () {
  document.querySelector(".plus3").style.visibility = "visible";
  document.querySelector(".minus3").style.visibility = "hidden";
});

//scrollUpBtn
scrollUpBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
