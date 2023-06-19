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

reservBtn.addEventListener("click", function () {
  if (
    checkIn.value &&
    adults.value &&
    room.value &&
    checkOut.value &&
    child.value
  ) {
    axios.post(`${BASE_URL}`, {
      checkin: checkIn.value,
      checkout: checkOut.value,
      adults: adults.value,
      room: room.value,
      child: child.value,
    });
  }
});

btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function () {
  modal1.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"stopVideo", "args":""}',
    "*"
  );
};
span1.onclick = function () {
  modal1.style.display = "none";
  let video1 = document.getElementById("videoId1");
  video1.contentWindow.postMessage(
    '{"event":"command", "func":"stopVideo", "args":""}',
    "*"
  );
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

let swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper(".mySwiperr", {
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

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".spinner").style.visibility = "visible";
  } else {
    document.querySelector("body").style.visibility = "visible";
    document.querySelector(".spinner").style.display = "none";
  }
};