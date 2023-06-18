let BASE_URL_USERS = `http://localhost:3000/users`;
let BASE_URL_RESERV = `http://localhost:3000/reserv`;
let BASE_URL_RESERV_ROOM = `http://localhost:3000/reservRoom`;
let BASE_URL_ROOMS = `http://localhost:3000/rooms`;
let BASE_URL_SHOP = `http://localhost:3000/shop`;
let BASE_URL_SUBSCRIBES = `http://localhost:3000/subscribes`;
let BASE_URL_CONTACT = `http://localhost:3000/contact`;
let userCount = document.querySelector(".user-count");
let reservCount = document.querySelector(".reserv-count");
let roomReservCount = document.querySelector(".room-reserv-count");
let roomCount = document.querySelector(".room-count");
let shopCount = document.querySelector(".shop-count");
let subscribesCount = document.querySelector(".subscribes-count");
let contactCount = document.querySelector(".contact-count");

async function getUsers() {
  let res = await axios(BASE_URL_USERS);
  let data = await res.data;
  userCount.innerHTML = `Users count: ${data.length}`;
}
getUsers();

async function getReserv() {
  let res = await axios(BASE_URL_RESERV);
  let data = await res.data;
  reservCount.innerHTML = `Reservations count: ${data.length}`;
}
getReserv();
async function getReservRoom() {
  let res = await axios(BASE_URL_RESERV_ROOM);
  let data = await res.data;
  roomReservCount.innerHTML = `Room Reservations count: ${data.length}`;
}
getReservRoom();
async function getRoom() {
  let res = await axios(BASE_URL_ROOMS);
  let data = await res.data;
  roomCount.innerHTML = `Room count: ${data.length}`;
}
getRoom();
async function getShop() {
  let res = await axios(BASE_URL_SHOP);
  let data = await res.data;
  shopCount.innerHTML = `Shop count: ${data.length}`;
}
getShop();
async function getSubscribes() {
  let res = await axios(BASE_URL_SUBSCRIBES);
  let data = await res.data;
  subscribesCount.innerHTML = `Subscribes count: ${data.length}`;
}
getSubscribes();
async function getContact() {
  let res = await axios(BASE_URL_CONTACT);
  let data = await res.data;
  contactCount.innerHTML = `Contact count: ${data.length}`;
}
getContact();

const xValues = [
  "0",
  "Users",
  "Reservations",
  "Room Reservations",
  "Rooms",
  "Shop",
  "Subscribes",
  "Contact",
];
async function datas() {
  let res1 = await axios(BASE_URL_USERS);
  let data1 = await res1.data;
  let count1 = data1.length;
  let res2 = await axios(BASE_URL_RESERV);
  let data2 = await res2.data;
  let count2 = data2.length;
  let res3 = await axios(BASE_URL_RESERV_ROOM);
  let data3 = await res3.data;
  let count3 = data3.length;
  let res4 = await axios(BASE_URL_ROOMS);
  let data4 = await res4.data;
  let count4 = data4.length;
  let res5 = await axios(BASE_URL_SHOP);
  let data5 = await res5.data;
  let count5 = data5.length;
  let res6 = await axios(BASE_URL_SUBSCRIBES);
  let data6 = await res6.data;
  let count6 = data6.length;
  let res7 = await axios(BASE_URL_CONTACT);
  let data7 = await res7.data;
  let count7 = data7.length;
  const yValues = [0, count1, count2, count3, count4, count5, count6, count7];
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          pointRadius: 5,
          backgroundColor: "#977a5e",
          borderColor: "#977a5e",
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 1, max: 20 } }],
      },
    },
  });
}
datas();
var xxValues = [
  "CLASSIC BALCONY ROOM",
  "SUPERIOR DOUBLE ROOM",
  "SUPER BALCONY DOUBLE ROOM",
  "DELUX DOUBLE ROOM",
  "Super Balcony Room",
];

var barColors = ["#634b35", "#6e5740", "#8d745c", "#aa9580", "#d4c1ae"];

async function rooms() {
  let res = await axios(BASE_URL_RESERV_ROOM);
  let data = await res.data;
  let room1 = data.filter((el) => el.room == "Classic Balcony Room").length;
  let room2 = data.filter((el) => el.room == "Superior Double Room").length;
  let room3 = data.filter((el) => el.room == "Super Room").length;
  let room4 = data.filter((el) => el.room == "Delux Double Room").length;
  let room5 = data.filter((el) => el.room == "Super Balcony Room").length;
  var yyValues = [room1, room2, room3, room4, room5];
  new Chart("myChartt", {
    type: "pie",
    data: {
      labels: xxValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yyValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
      },
    },
  });
}
rooms();

let toggleBtn = document.querySelector(".toggle-btn");
let theme = document.querySelector("body");
let darkMode = localStorage.getItem("dark-mode");

let enableDarkMode = () => {
  theme.classList.add("dark-mode");
  toggleBtn.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
};

let disableDarkMode = () => {
  theme.classList.remove("dark-mode");
  toggleBtn.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); 
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
