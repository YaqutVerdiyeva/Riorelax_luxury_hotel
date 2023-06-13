let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let BASE_URL = `http://localhost:3000/rooms`;
let MOCK_API = `http://localhost:3000/reservRoom`;

let checkIn = document.querySelector("#checkin");
let adults = document.querySelector("#adults");
let room = document.querySelector("#room");
let checkOut = document.querySelector("#checkout");
let bookBtn = document.querySelector(".book-button");
let roomCard = document.querySelector(".rooms");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let loadMore = document.querySelector(".loadmore");
let maxlength = 3;
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllCards() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  roomCard.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.slice(0, maxlength).forEach((el) => {
    roomCard.innerHTML += `
    <div class="col-lg-4 col-md-6 room-card">
    <div class="room">
      <div class="card">
        <img src="${el.photo}" alt="" />
        <i onclick="addFavBtn(${el.id})" class="fa-solid fa-heart" style="color: #ffffff;"></i>
        <div class="card-content">
          <h2>${el.title}</h2>
          <p>${el.price}$</p>
          <a href="#book-room" class="button"> Book now$ </a>
        </div>
      </div>
    </div>
  </div>
        `;
  });
}
getAllCards();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllCards();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.price - b.price);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT Low to High";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.price - a.price);
    sorted = "def";
    sortBtn.innerHTML = "SORT High to Low";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllCards();
});

loadMore.addEventListener("click", function () {
  maxlength = maxlength + 3;
  getAllCards(filteredArr);
});

//addfav
let favorits = JSON.parse(localStorage.getItem("favroom")) || [];
async function addFavBtn(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  console.log(data);
  favorits.push(data);
  console.log(favorits);
  localStorage.setItem("favroom", JSON.stringify(favorits));
  console.log("Hello");
}

//post
bookBtn.addEventListener("click", function () {
  if (checkIn.value && adults.value && room.value && checkOut.value) {
    axios.post(`${MOCK_API}`, {
      checkin: checkIn.value,
      checkout: checkOut.value,
      adults: adults.value,
      room: room.value,
    });
  }
});
//Modal video
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
