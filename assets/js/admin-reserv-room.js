let BASE_URL = `http://localhost:3000/reservRoom`;
let reservations = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let checkIn = document.querySelector("#checkin");
let checkout = document.querySelector("#checkout");
let adults = document.querySelector("#adults");
let room = document.querySelector("#room");
let bookBtn = document.querySelector(".book-button");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllReservations() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  reservations.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    reservations.innerHTML += `
      <tr>
                    <td>${el.id}</td>
                    <td>${el.checkin}</td>
                    <td>${el.checkout}</td>
                    <td>${el.adults}</td>
                    <td>${el.room}</td>
                    <td>
                    <a onclick=deleteBtn(${el.id}) style="margin-right: 8px"><i class="fa-solid fa-trash" style="color: #c20000;"></i></a>
                    <a href="#form" onclick=editUser(${el.id})  ><i class="fa-solid fa-pen-to-square" style="color: #000;"></i></a>
                    </td>
                  </tr>
          `;
  });
}
getAllReservations();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    `${el.checkin} ${el.checkout}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getAllReservations();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.id - b.id);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT Low to High";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.id - a.id);
    sorted = "def";
    sortBtn.innerHTML = "SORT High to Low";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllReservations();
});
function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
let editStatus = false;
let editId;
bookBtn.addEventListener("click", function () {
  if (!editStatus) {
    axios.post(`${BASE_URL}`, {
      checkin: checkIn.value,
      checkout: checkout.value,
      adults: adults.value,
      room: room.value,
    });
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      checkin: checkIn.value,
      checkout: checkout.value,
      adults: adults.value,
      room: room.value,
    });
    editStatus = false;
  }
});

function editUser(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    checkIn.value = res.data.checkin;
    checkout.value = res.data.checkout;
    adults.value = res.data.adults;
    room.value = res.data.room;
  });
  document.querySelector(".title").innerHTML = "Edit Reservations";
  bookBtn.innerHTML = "EDIT RESERVATIONS";
}
