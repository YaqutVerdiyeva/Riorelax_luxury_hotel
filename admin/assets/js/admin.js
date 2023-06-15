let BASE_URL_USERS = `http://localhost:3000/users`;
let BASE_URL_RESERV = `http://localhost:3000/reserv`;
let BASE_URL_RESERV_ROOM = `http://localhost:3000/reservRoom`;
let BASE_URL_ROOMS = `http://localhost:3000/rooms`;
let BASE_URL_SHOP = `http://localhost:3000/shop`;
let userCount = document.querySelector(".user-count");
let reservCount = document.querySelector(".reserv-count");
let roomReservCount = document.querySelector(".room-reserv-count");
let roomCount = document.querySelector(".room-count");
let shopCount = document.querySelector(".shop-count");

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

const xValues = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const yValues = [75, 54, 65, 87, 46, 90, 122, 110, 60, 95, 45, 50];

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
      yAxes: [{ ticks: { min: 10, max: 150 } }],
    },
  },
});

var xxValues = [
  "CLASSIC BALCONY ROOM",
  "SUPERIOR DOUBLE ROOM",
  "SUPER BALCONY DOUBLE ROOM",
  "DELUX DOUBLE ROOM",
];
var yyValues = [55, 49, 46, 37];
var barColors = ["#977a5e", "#755e48", "#a0866e", "#c5b09d"];

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
function darkLightMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}