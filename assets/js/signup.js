let BASE_URL = `http://localhost:3000/users`;
let menuicon = document.querySelector(".menuicon");
let menuicon1 = document.querySelector(".menuicon1");
let nav = document.querySelector(".nav-mobile");
let scrollUpBtn = document.querySelector(".scrollup");
let firstName = document.querySelector(".firstname");
let lastName = document.querySelector(".lastname");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let signUpBtn = document.querySelector(".get-submit");
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
//scrollUpBtn
scrollUpBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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

//post
signUpBtn.addEventListener("click", function () {
  axios.post(`${BASE_URL}`, {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    password: password.value,
  });
});
