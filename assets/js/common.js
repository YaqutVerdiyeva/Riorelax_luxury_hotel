let BASE_URL_SUBSCRIBES = `http://localhost:3000/subscribes`;
let favrooms = JSON.parse(localStorage.getItem("favroom"));
let product = JSON.parse(localStorage.getItem("product"));
let menuicon = document.querySelector(".menuicon");
let menuicon1 = document.querySelector(".menuicon1");
let nav = document.querySelector(".nav-mobile");
let scrollUpBtn = document.querySelector(".scrollup");
let footerInput = document.querySelector(".email-input");
let subscribeBtn = document.querySelector(".subscribe-btn");
let basketCount = document.querySelector(".basket-count");
let wishlistCount = document.querySelector(".wishlist-count");


// wishlistCount.innerHTML = favrooms.length;
// basketCount.innerHTML = product.length;

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

//subscribe
subscribeBtn.addEventListener("click", function () {
  axios.post(`${BASE_URL_SUBSCRIBES}`, {
    email: footerInput.value,
  });
});
let userList = JSON.parse(localStorage.getItem("users"));
let outBtn = document.querySelector(".out-login");
if (userList == true) {
  {
    outBtn.style.display = "block";
  }
}
outBtn.addEventListener("click", function () {
  localStorage.clear();
  outBtn.style.display = "none";
});
