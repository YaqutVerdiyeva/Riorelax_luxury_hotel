let BASE_URL = `http://localhost:3000/reserv`;
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];

let checkIn = document.querySelector("#checkin");
let adults = document.querySelector("#adults");
let room = document.querySelector("#room");
let checkOut = document.querySelector("#checkout");
let child = document.querySelector("#child");
let reservBtn = document.querySelector(".check-btn");
let discoverBtn = document.querySelector(".discover");

//post
reservBtn.addEventListener("click", function () {
  axios.post(`${BASE_URL}`, {
    checkin: checkIn.value,
    checkout: checkOut.value,
    adults: adults.value,
    room: room.value,
    child: child.value,
  });
});

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
//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//swiper2

var swiper = new Swiper(".mySwiperr", {
  effect: "coverflow",
  grabCursor: true,
  initialSlide: 2,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
discoverBtn.addEventListener("click", function () {
  window.location = "about.html";
});
